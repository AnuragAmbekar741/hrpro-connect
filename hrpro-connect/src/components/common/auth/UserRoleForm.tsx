"use client";
import React from "react";
import UserAuthCard from "./UserAuthCard";
import candidateImg from "../../../assets/candidate.png";
import recruiterImg from "../../../assets/recruiter.png";

interface UserRoleFormProps {
  selectedRole: "Candidate" | "Recruiter";
  setSelectedRole: React.Dispatch<
    React.SetStateAction<"Candidate" | "Recruiter">
  >;
  setFormStep: React.Dispatch<React.SetStateAction<"role" | "auth">>;
}

const UserRoleForm: React.FC<UserRoleFormProps> = ({
  selectedRole,
  setSelectedRole,
  setFormStep,
}) => {
  const handleClick = () => {};
  return (
    <div className="w-full grid gap-8 px-3 py-5 bg-gray-50 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-100 rounded-lg">
      <h3 className="text-3xl text-left ml-3 font-normal">Who are you? 🤔</h3>
      <div className="flex justify-between">
        <UserAuthCard
          role="Candidate"
          image={candidateImg}
          alt=""
          onClick={handleClick}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
        <UserAuthCard
          role="Recruiter"
          image={recruiterImg}
          alt=""
          onClick={handleClick}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
      </div>
      <button
        onClick={() => setFormStep("auth")}
        className="custom-button-outlined mx-2"
      >
        Continue
      </button>
    </div>
  );
};

export default UserRoleForm;
