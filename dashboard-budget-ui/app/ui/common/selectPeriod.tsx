"use client";

import { Select, SelectItem } from "@tremor/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import * as React from "react"

export default function SelectPeriod({ periods }: { periods: string[] }){

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const { replace } = useRouter()
  const defaultValue = params.get("period") ?? "Week";

  const selectPeriodTime = (name: string) => {
    if(name){
      params.set("period", name);
    }
    
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <>
      <Select defaultValue={defaultValue} onValueChange={(e) => selectPeriodTime(e)} className="w-7">
        {
            periods.map(p => (
              <SelectItem value={p} key={p}>{p}</SelectItem>
            ))
          }
      </Select>
    </>
  )
}