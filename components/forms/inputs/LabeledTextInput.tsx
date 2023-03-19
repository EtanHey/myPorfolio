import React from "react";

const LabeledTextInput = ({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full"
      />
    </>
  );
};

export default LabeledTextInput;
