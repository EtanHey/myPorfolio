import React from "react";

const LabeledTextArea = ({
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
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        className="h-0 min-h-full w-full"
      />
    </>
  );
};

export default LabeledTextArea;
