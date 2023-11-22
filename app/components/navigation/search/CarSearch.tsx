'use client'

import { AiOutlineSearch } from "react-icons/ai"
import qs from 'query-string';

import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';


import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useCallback, useState } from 'react';

import CarSelect, { CarSelectValue } from '@/app/components/inputs/selects/CarSelect'
import Calendar from "@/app/components/inputs/Calendar";
import Dropdown from "./CalendarDropdown";

const Search = () => {
    const params = useSearchParams();
    const router = useRouter();

    const [isDateSelected, setDateSelected] = useState(false);

    const [dateRange, setDateRange] = useState<Range>({

        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const [car, setCar] = useState<CarSelectValue>();



    const startDate = formatISO(dateRange.startDate as Date);
    const endDate = formatISO(dateRange.endDate as Date);

    const startDateWithotTime = startDate ? startDate.substring(0, 10) : '';
    const endDateWithotTime = startDate ? endDate.substring(0, 10) : '';

    const onSubmit = useCallback(async () => {


        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString())
        }

        const updatedQuery: any = {
            ...currentQuery,
            carValue: car?.value
        };

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
            router,
            dateRange,
            params
        ]);


    return (

        <div className="w-full">
            <div className="relative">
                <div className="container mx-auto">
                    <div className=" lg:flex mx-auto bg-white divide-y rounded-t sm:divide-y-0 sm:divide-x w-full ">

                        <div className="inline-block p-8 w-full lg:w-2/5 ">
                            <CarSelect
                                value={car}
                                onChange={(value) => { setCar(value as CarSelectValue) }}
                            />
                        </div>

                        <div className="inline-block p-8 w-full lg:w-2/5">
                            <Dropdown title={`Select Date`} altTitle={`${startDateWithotTime} - ${endDateWithotTime}`}>
                                <Calendar
                                    onChange={(value) => { setDateRange(value.selection), setDateSelected }}
                                    value={dateRange}
                                />
                            </Dropdown>
                        </div>

                        <div className="inline-block lg:p-0 p-8 w-full lg:w-1/5 ">
                            <button
                                className="flex cursor-pointer w-full h-full inline-flex items-center justify-center gap-2 rounded-tr  bg-blue-500 px-8 py-3 text-white  hover:bg-blue-600 focus:outline-none focus:ring active:text-black"
                                onClick={onSubmit}
                            >

                                <span className="text-lg uppercase transition-all">
                                    Search
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Search;