"use client";

import { DateRangePicker, DateRangePickerValue } from "@tremor/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DateRangePeriod(){
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const { replace } = useRouter()
  const minDate = new Date("2024-01-01T00:00:01");

  const selectPeriodTime = (date: DateRangePickerValue): void => {
    if(date.to !== undefined && date.from !== undefined){
      const to = Date.parse(date.to.toDateString()) - Date.parse(date.from.toDateString())
      const toInDays = Math.ceil(to / (1000 * 60 * 60 * 24)) + 1
      params.set("period", toInDays.toString());
    }
    
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <>
      <DateRangePicker className="max-w-md" minDate={minDate} onValueChange={selectPeriodTime} />
    </>
  )
}