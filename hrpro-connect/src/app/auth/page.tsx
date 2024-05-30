"use client";
import React from "react";
import UserAuthView from "@/views/common/auth";
import AppBar from "@/components/common/AppBar";

const Auth = () => {
  return (
    <main>
      <AppBar />
      <UserAuthView />
    </main>
  );
};

export default Auth;
