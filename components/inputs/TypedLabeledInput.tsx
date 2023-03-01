import React, { HTMLInputTypeAttribute } from "react";

const TypedLabeledInput = ({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
}) => {
  return (
    <div
      data-te-input-wrapper-init
      className="relative  mb-3 w-full min-w-fit "
    >
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={label} />
    </div>
  );
};

export default TypedLabeledInput;
