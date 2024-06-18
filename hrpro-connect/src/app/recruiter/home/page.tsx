"use client";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Your code that uses window
    }
  }, []);
  return <div>Recruiter's home</div>;
};

export default page;
