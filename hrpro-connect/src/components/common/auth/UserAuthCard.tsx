"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface UserAuthCardProps {
  role: "candidate" | "recruiter";
  selectedRole: "candidate" | "recruiter";
  setSelectedRole: React.Dispatch<
    React.SetStateAction<"candidate" | "recruiter">
  >;
  image: string | StaticImageData;
  alt: string;
  onClick: () => void;
}

const UserAuthCard: React.FC<UserAuthCardProps> = ({
  role,
  selectedRole,
  setSelectedRole,
  image,
  alt,
}) => {
  const title = role.toUpperCase();
  return (
    <div
      onClick={(e) => setSelectedRole(role)}
      className={`w-40 px-2 py-4 flex flex-col items-center gap-5  mx-2 rounded-lg hover:shadow-sm border ${
        selectedRole === role ? "border-primary" : ""
      }`}
    >
      <Image src={image} width={100} height={100} alt={alt} />
      <h3
        className={`text-lg font-medium ${
          selectedRole === role ? "text-primary" : "text-textLight"
        } `}
      >
        {title}
      </h3>
    </div>
  );
};

export default UserAuthCard;
