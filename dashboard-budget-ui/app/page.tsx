import { Suspense } from "react";
import SectionCards from "./ui/sidebar/home/sectionCards";
import SelectPeriod from "./ui/sidebar/home/selectPeriod";
import { PERIOD_TIME } from "./lib/utils";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
    period?: string;
  };
}) {

  let periodTime = searchParams?.period || 'Week';

  return (
    <main className="px-7 pt-10 mt-[100px] flex flex-col gap-6 w-full">
      <SelectPeriod periods={PERIOD_TIME} />
      <section className="grid grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 border-gray-400 border-solid">
        <Suspense fallback={"Loading..."}>
          <SectionCards period={periodTime} />
        </Suspense>
      </section>
      <section>
        Graficas
      </section>
    </main>
  )
}