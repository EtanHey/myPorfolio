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
      className="relative mb-3 flex w-full min-w-0  flex-col "
    >
      <label htmlFor={id}>{label}:</label>
      <input className="rounded-md py-2 px-4 focus:outline-none" type={type} id={id} placeholder={label} />
    </div>
  );
};

export default TypedLabeledInput;
