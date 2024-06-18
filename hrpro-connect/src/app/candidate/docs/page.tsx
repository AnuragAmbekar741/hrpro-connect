"use client";
import React, { useEffect } from "react";
import DocsView from "../../../views/candidate/docs/index";

const Docs = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Your code that uses window
    }
  }, []);
  return <DocsView />;
};

export default Docs;
