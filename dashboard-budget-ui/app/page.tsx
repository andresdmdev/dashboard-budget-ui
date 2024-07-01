import { Suspense } from "react";
import SectionCards from "./ui/home/sectionCards";
import SelectPeriod from "./ui/home/selectPeriod";
import { PERIOD_TIME } from "./lib/utils";
import { Metadata } from 'next';
import Example from "./ui/home/areachart";
import { DonutChartHero } from "./ui/home/donutchart";
import { CategoryBarUsageExample } from "./ui/home/warningrangebar";
import { ProgressBarUsageExample } from "./ui/home/bargoal";

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
    <main className="px-7 pt-2 mt-[100px] ml-72 flex flex-col gap-6 w-full text-slate-100 bg-slate-900">
      <SelectPeriod periods={PERIOD_TIME} />
      <section className="grid grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 border-gray-400 border-solid">
        <Suspense fallback={"Loading..."}>
          <SectionCards period={periodTime} />
        </Suspense>
      </section>
      <section className="grid grid-cols-5 gap-5">
        <Suspense fallback={"Loading..."}>
          <div className="col-span-4">
            <Example />
          </div>
        </Suspense>
        <div className="flex flex-col gap-10">
          <DonutChartHero />
          <ProgressBarUsageExample />
          <CategoryBarUsageExample />
        </div>
      </section>
    </main>
  )
}