import React, { ReactNode } from "react";

interface InputProps {
  name: string;
  type:
    | "button"
    | "checkbox"
    | "date"
    | "email"
    | "file"
    | "image"
    | "month"
    | "number"
    | "password"
    | "tel"
    | "text"
    | "time"
    | "url";
  placeholder: string;
  title: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <div className="flex flex-col space-y-1 w-full">
      <label className="text-sm text-gray-800 font-medium">{props.title}</label>
      <input
        {...props}
        ref={ref}
        className="w-full border-b-2 border-gray-200 focus:border-green-500 p-2 focus:outline-none"
      />
    </div>
  )
);

export default FormInput;
