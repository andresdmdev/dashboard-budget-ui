"use client"

import { getIconByName } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuButton({ name, href } : {name: string, href: string }){

  const NextIcon = getIconByName(name);
  const pathName = usePathname();
  const matchPathName = (name.toLowerCase() == "home" && pathName == "/") ? true : pathName.includes(name.toLowerCase());
  
  return (
      <Link
        href={href}
        className={`flex flex-row gap-3 align-middle px-3 py-2 transition-colors rounded-md font-semibold text-secondary-100 cursor-pointer hover:bg-slate-700 hover:text-primary-100 target:bg-orange-600 
          ${matchPathName ? "bg-slate-700 font-bold" : ""}`}
      >
        <NextIcon className="w-6" />
        {name}
      </Link>
  )
}