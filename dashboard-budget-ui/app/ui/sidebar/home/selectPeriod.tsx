"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import * as React from "react"

export default function SelectPeriod({ periods }: { periods: string[] }){

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter()

  const selectPeriodTime = (name: string) => {
    const params = new URLSearchParams(searchParams);

    if(name){
      params.set("period", name);
    }
    
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <form>
      <Select defaultValue="Week" onValueChange={(e) => selectPeriodTime(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Period" />
        </SelectTrigger>
        <SelectContent>
          {
            periods.map(p => (
              <SelectItem value={p} key={p}>{p}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </form>
  )
}