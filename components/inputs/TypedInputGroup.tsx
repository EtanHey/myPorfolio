import React, { HTMLInputTypeAttribute } from "react";
import TypedLabeledInput from "./TypedLabeledInput";

const TypedInputGroup = ({
  id1,
  id2,
  label1,
  label2,
  type = "text",
}: {
  id1: string;
  id2: string;
  label1: string;
  label2: string;
  type?: HTMLInputTypeAttribute;
}) => {
  return (
    <div className="flex w-full gap-2 md:gap-4 lg:gap8">
      <TypedLabeledInput id={id1} label={label1} type={type} />
      <TypedLabeledInput id={id2} label={label2} type={type} />
    </div>
  );
};

export default TypedInputGroup;
