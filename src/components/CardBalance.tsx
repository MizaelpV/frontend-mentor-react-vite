import logo from '../assets/logo.svg';
import { CardBalanceType } from '../types/CardBalance';

export function CardBalance({ average }: CardBalanceType) {
  return (
    <section className="bg-[#EC755D] w-1/4 rounded-[20px]  flex justify-between px-6 py-8">
      <div>
        <h3 className="text-sm mb-2">My balance</h3>
        <span className=" font-bold text-2xl">{average}</span>
      </div>

      <div>
        <img src={logo} alt="logo" />
      </div>
    </section>
  );
}
