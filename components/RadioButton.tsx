import React, { ReactNode } from "react";

interface RadioProps {
  name: string;
  text: string;
  value: any;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => (
    <label className="inline-flex items-center mt-3">
      <input
        {...props}
        type="radio"
        className="form-radio h-5 w-5 text-gray-600"
        ref={ref}
      />
      <span className="ml-2 text-gray-800">{props.text}</span>
    </label>
  )
);

export default RadioButton;
