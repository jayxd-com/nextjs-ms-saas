import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface SwitchProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  id: string;
  labelLeft: string;
  labelRight: string;
}

export const Switch = ({
  checked,
  setChecked,
  id,
  labelLeft,
  labelRight
}: SwitchProps) => {
  return (
    <div className="inline-block">
    <form className="flex space-x-4 antialiased items-center">
    <p className={twMerge("font-medium text-black text-xl transition-all", !checked && "font-bold text-primary")}>
          {labelLeft}
        </p>
      <label
        htmlFor={id}
        className={twMerge(
          "h-7 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200 outline-none focus-within:outline focus-within:outline-2 focus-within:outline-primary",
          checked ? "bg-primary" : "bg-slate-700 border-slate-500"
        )}
      >
        <motion.div
          initial={{
            width: "20px",
            x: checked ? 0 : 32,
          }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked ? 32 : 0,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className={twMerge(
            "h-[20px] block rounded-full bg-white shadow-md z-10"
          )}
        ></motion.div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="opacity-0"
          id={id}
        />
      </label>
      <p className={twMerge("font-medium text-black text-xl transition-all", checked && "font-bold text-primary")}>
          {labelRight}
        </p>
    </form>
    </div>
  );
};
