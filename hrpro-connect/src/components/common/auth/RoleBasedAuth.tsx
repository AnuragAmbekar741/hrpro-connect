"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { auth } from "../../../firebase/index";

const RoleBasedAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isUser = auth.currentUser;
  const userRole = useSelector(
    (state: RootState) => state.userLogin.User?.role
  );
  const isRoleTrue = userRole === pathname.substring(1) ? true : false;
  useEffect(() => {
    if (isUser && isRoleTrue) router.push("/" + userRole + "/home");
    else router.push("/auth");
  }, []);
  return <div></div>;
};

export default RoleBasedAuth;
