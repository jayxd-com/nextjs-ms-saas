"use client";
import { useState, useEffect } from 'react';
import { Switch } from "@/components/ui/Switch";
import PriceCard from './ui/PriceCard';
import { plans } from '@/lib/data/pricing';
import { motion, AnimatePresence } from 'framer-motion';

export const Pricing: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [selectedPlans, setSelectedPlans] = useState(plans.find(p => p.paymentType === 'Credit Card'));

  useEffect(() => {
    const paymentType = checked ? 'Credit Card' : 'ACH';
    const newPlans = plans.find(p => p.paymentType === paymentType);
    setSelectedPlans(newPlans);
  }, [checked]);

  return (
    <div className='w-full py-20'>
      <div className='flex justify-center'>
        {/* Switch Component */}
        <Switch id='pricing-switch' checked={checked} setChecked={setChecked}
          labelLeft='Credit Card'
          labelRight='ACH'
        />
      </div>

      {/* Display the value of 'checked' */}
      <p className='sr-only'>The switch is {checked ? 'Credit Card' : 'ACH'}</p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-12 mb-20">
          <AnimatePresence mode="wait">
            {selectedPlans?.plans.map((plan,index) => (
              <motion.div
                key={`${plan.name}-${checked}`}  // Ensure unique key based on the switch state
                initial={{ opacity: 0, y: 20+index*10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20+index*10 }}
                transition={{ duration: 0.2 }}
              >
                <PriceCard
                  name={plan.name}
                  features={plan.features}
                  price={plan.price}
                  period={plan.period}
                  discount={plan.discount}
                />
              </motion.div>
            ))}
          </AnimatePresence>
      </div>
    </div>
  );
};
