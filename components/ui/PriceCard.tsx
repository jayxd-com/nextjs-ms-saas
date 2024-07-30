import { CircleCheckBig } from 'lucide-react';
import React from 'react';

interface PriceCardProps {
  name: string;
  features: string[];
  price: number;
  period: string;
  discount?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ name, features, price, period, discount }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-80 flex flex-col justify-between py-1 border-primary mx-auto sm:mx-0">
      <div>
        <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-4">
          <div className="flex justify-between">
            <h3 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 text-xl">{name}</h3>
            {discount && (
              <div className="px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white">{discount}</div>
            )}
          </div>
          <div className="flex gap-0.5">
            <h3 className="text-4xl font-bold text-primary">${price}</h3>
            <span className="flex flex-col justify-end  mb-1">/{period}</span>
          </div>
          <p className=" text-muted-foreground pt-1.5 h-12">Essential features you need to get started</p>
        </div>
        <div className="p-6 pt-0 flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <CircleCheckBig className='text-primary w-4 mt-0.5 flex-shrink-0' />
              <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 ">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center p-6 pt-0 mt-2">
        <button className="text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 py-2 relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur"></div>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
