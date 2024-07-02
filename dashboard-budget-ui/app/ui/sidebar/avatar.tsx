import { Select, SelectItem } from "@tremor/react";

export default function Avatar(){
  return (
    <section className="mt-7 p-2 flex gap-3 items-center">
      <div className="w-10 h-10 rounded-full border-black bg-slate-50"></div>
      <div className="flex flex-col gap-0">
        <h4 className="text-lg">Andres Marquez</h4>
        <h6 className="text-xs">Software Ingennier</h6>
      </div>
    </section>
  )
}