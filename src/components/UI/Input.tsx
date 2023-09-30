import { UseFormRegister } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  label?: string;
  className?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  type?: HTMLInputTypeAttribute;
};

export const Input = ({
  label,
  className,
  name,
  id,
  placeholder,
  type = "text",
  register,
  error,
}: InputProps) => {
  return (
    <div className={className}>
      {!!label && (
        <label className="text-white" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
        className="p-10 mt-8 w-full text-white rounded-6 bg-[#333]"
        {...register?.(name)}
      />
      {!!error && <p className="text-red-500 text-14">{error} </p>}
    </div>
  );
};
