import { BarChart } from './BarChart';
import dataJson from '../data/data.json';

export function CardChart({ highest }: any) {
  return (
    <section className="bg-white w-1/4 rounded-[20px] px-8 py-6 text-[#332314]">
      <h3 className="text-2xl font-bold">Spending - Last 7 days</h3>
      <BarChart highest={highest} dataJson={dataJson} />
      <div className="flex justify-between items-end mt-6 border-t py-4 border-[#EC755D] border-opacity-40">
        <div>
          <p className="text-[#BDB9B3] text-sm mb-[2px]">Total this month</p>
          <span className="text-3xl font-bold">${highest}</span>
        </div>

        <div className="flex flex-col items-end">
          <span className="font-bold"> +2.4%</span>
          <span className="text-[#BDB9B3] text-sm">from last month</span>
        </div>
      </div>
    </section>
  );
}
