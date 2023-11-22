'use client';

import qs from 'query-string';
import { useCallback, useState, useMemo } from "react";
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams  } from 'next/navigation';

import useSearchModal from "@/app/hooks/useDateSelectModal";

import Modal from "./Modal";
import Calendar from "../inputs/Calendar";
import Heading from '../Heading';


const SearchModal = () => {  
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();


  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });

  const onSubmit = useCallback(async () => {

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });
    searchModal.onClose();
    router.push(url);
  }, 
  [
    searchModal, 
    router, 
    dateRange,
    params
  ]);

  const onReset =() => {
    searchModal.onClose();
    router.push('/')
  }
  

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to book?"
          subtitle="Select date range"
        />
        <Calendar
          onChange={(value) => setDateRange(value.selection)}
          value={dateRange}
        />
      </div>
      
    </div>
  )

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Select dates"
      actionLabel="Select"
      onSubmit={onSubmit}
      secondaryActionLabel={undefined}
      secondaryAction={onReset}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
}

export default SearchModal;
