"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CandidatePage = () => {
  const router = useRouter();
  useEffect(() => router.push("/candidate/home"), []);
  return <div></div>;
};

export default CandidatePage;
