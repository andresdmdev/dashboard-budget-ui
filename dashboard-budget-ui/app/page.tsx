import { Suspense } from "react";
import SectionCards from "./ui/home/sectionCards";
import SelectPeriod from "./ui/home/selectPeriod";
import { PERIOD_TIME } from "./lib/utils";
import { Metadata } from 'next';
import SumaryGraph from "./ui/home/areachart";
import RiskStatusBar  from "./ui/home/warningrangebar";
import ProgressGoalBar from "./ui/home/bargoal";
import LastInvoices from "./ui/home/lastInvoices";
import ExpensesDonutChart from "./ui/home/donutchart";

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
    <main className="px-7 pt-10 ml-72 flex flex-col gap-6 w-full text-slate-100 bg-slate-900">
      <SelectPeriod periods={PERIOD_TIME} />
      <section className="grid grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 border-gray-400 border-solid">
        <Suspense fallback={"Loading..."}>
          <SectionCards period={periodTime} />
        </Suspense>
      </section>
      <section className="grid grid-cols-5 gap-5">
        <div className='col-span-4'>
          <Suspense fallback={"Loading..."}>
            <SumaryGraph period={periodTime} />
          </Suspense>
          <Suspense fallback={"Loading Last Invoices..."}>
            <LastInvoices period={periodTime} />
          </Suspense>
        </div>
        <div className="flex flex-col gap-10">
          <Suspense fallback={"Loading DonutChart..."}>
            <ExpensesDonutChart period={periodTime} />
          </Suspense>
          <Suspense fallback={"Loading BarGoal..."}>
            <ProgressGoalBar period={periodTime} />
          </Suspense>
          <Suspense fallback={"Loading RiskBar..."}>
            <RiskStatusBar period={periodTime} />
          </Suspense>
        </div>
      </section>
    </main>
  )
}