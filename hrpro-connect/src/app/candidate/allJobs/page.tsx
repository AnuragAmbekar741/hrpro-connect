"use client";
import React, { useEffect } from "react";
import AllJobsView from "../../../views/candidate/allJobs/index";

const AllJobs: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Your code that uses window
    }
  }, []);
  return <AllJobsView />;
};

export default AllJobs;
