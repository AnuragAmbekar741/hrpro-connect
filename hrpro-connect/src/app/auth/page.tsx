"use client";
import React, { useEffect } from "react";
import UserAuthView from "@/views/common/auth";
import AppBar from "@/components/common/AppBar";

const Auth: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Your code that uses window
    }
  }, []);
  return (
    <main>
      <AppBar />
      <UserAuthView />
    </main>
  );
};

export default Auth;
