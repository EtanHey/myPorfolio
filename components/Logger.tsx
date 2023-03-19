"use client";
import React, { useEffect } from "react";

const Logger = ({ log }: { log: any }) => {
  useEffect(() => {
    console.log(log);
  }, [log]);
  return <div></div>;
};

export default Logger;
