'use client'
import qs from 'query-string';

import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useCallback, useState } from 'react';


import Calendar from "@/app/components/inputs/Calendar";
import Item from './FilterItem';
import CarSelect, { CarSelectValue } from '@/app/components/inputs/selects/CarSelect'
import Select, {SelectValue} from '@/app/components/inputs/selects/Select'
import { categories } from '@/app/components/navigation/Categories';
import PriceInput, { PriceValue } from '../inputs/PriceInput';
import Button from '../buttons/Button';

const Filter = () => {

    const params = useSearchParams();
    const router = useRouter();


    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const [car, setCar] = useState<CarSelectValue>();
    const [category, setCategory] = useState<SelectValue>();

    const [isFilterOpen, setFilterOpen] = useState<boolean>(false);



    const [isDateSelected, setDateSelected] = useState<boolean>(false);

    const [isPriceSelected, setPriceSelected] = useState<boolean>(false);
    const setPrice = () => { setPriceSelected }

    const [priceValue, setPriceValue] = useState<PriceValue>([0, 9999]);

    const startDate = formatISO(dateRange.startDate as Date);
    const endDate = formatISO(dateRange.endDate as Date);

    const startDateWithotTime = startDate ? startDate.substring(0, 10) : '';
    const endDateWithotTime = startDate ? endDate.substring(0, 10) : '';


    const onReset = () => {
        router.push('/cars')
    }

    const onSubmit = useCallback(async () => {


        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            carValue: car?.value
        };

        if (priceValue) {
            updatedQuery.lowPrice = priceValue[0];
            updatedQuery.highPrice = priceValue[1];
        }
        if (category?.label) {
            updatedQuery.category = category.label;
        }
        if (dateRange.startDate) {
            updatedQuery.startDate = formatISO(dateRange.startDate);
        }

        if (dateRange.endDate) {
            updatedQuery.endDate = formatISO(dateRange.endDate);
        }

        const url = qs.stringifyUrl({
            url: '/cars',
            query: updatedQuery,
        }, { skipNull: true });


        router.push(url);
    },
        [
            car,
            category,
            router,
            dateRange,
            params
        ]);

    return (
        <>
            <div className="mt-8 mb-5 block lg:hidden"

            >
                <button
                    onClick={() => setFilterOpen(!isFilterOpen)}
                    className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                >
                    <span className="text-sm font-medium"> Filters</span>

                    {isFilterOpen ? <FaAngleRight className="h-4 w-4" /> : <FaAngleLeft className="h-4 w-4" />}

                </button>
            </div>

            <div className={`${isFilterOpen ? '' : 'hidden'} space-y-4 lg:block mb-5`}>
                <div>
                    <div className="mt-1 space-y-2">
                        <Item title="Categories">
                            <Select 
                                placeholder='Select category'
                                options={categories}
                                value={category}
                                onChange={(value) => { setCategory(value as SelectValue) }}
                            />
                        </Item>
                        <Item title="Cars">
                            <CarSelect
                                value={car}
                                onChange={(value) => { setCar(value as CarSelectValue) }}
                            />
                        </Item>
                        <div onClick={setPrice}>
                            <Item title="Dates">
                                <Calendar
                                    onChange={(value) => setDateRange(value.selection)}
                                    value={dateRange}
                                />
                            </Item>
                        </div>

                        <div onClick={setPrice}>
                            <Item title="Price">
                                <PriceInput
                                    onChange={(value) => setPriceValue(value)}
                                    value={priceValue} />
                            </Item>
                        </div>

                    </div>
                </div >
                <div className="flex ">
                    <div className="cursor-pointer mr-2 w-4/12 ">
                        <Button
                            type='primary'
                            label='Filter'
                            onClick={onSubmit}
                        />
                    </div>
                    <div className="cursor-pointer w-4/12">
                        <Button
                        type='secondary'
                            label='Reset'
                            onClick={onReset}
                            outline
                        />
                    </div>
                </div>
            </div >
        </>
    )
};

export default Filter;