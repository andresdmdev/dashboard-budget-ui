import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MenuButton({ name, href, icon } : {name: string, href: string, icon: typeof LinkIcon | string }){

  const NextIcon = icon;
  return (
      <Link
        href={href}
        className="flex flex-row gap-2 align-middle px-3 py-2 transition-colors rounded-md font-semibold text-secondary-100 cursor-pointer hover:bg-slate-700 hover:text-primary-100 target:bg-orange-600"
      >
        <NextIcon className="w-6" />
        {name}
      </Link>
  )
}