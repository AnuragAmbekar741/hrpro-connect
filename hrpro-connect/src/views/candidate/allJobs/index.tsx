"use client";

import React from "react";
import MainContainer from "@/components/common/MainContainer";
import RightContainer from "@/components/common/RightContainer";
import LeftContainer from "@/components/common/LeftContainer";

import { useForm } from "react-hook-form";

import company1 from "../../../assets/company1.png";
import company2 from "../../../assets/company2.png";
import company3 from "../../../assets/company3.png";
import company4 from "../../../assets/company4.png";
import company5 from "../../../assets/company5.png";
import company6 from "../../../assets/company6.png";
import JobsCard from "@/components/common/cards/JobsCard";
import CompanyProfile from "@/components/common/profile/CompanyProfile";
import Dropdown from "@/components/common/base/Dropdown";
import TextField from "@/components/common/base/TextField";

const jobCards = [
  {
    id: 1,
    title: "Software Engineer",
    companyName: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    salaryRange: "$100,000 - $120,000",
    workType: "Onsite",
    companyIcon: company1,
  },
  {
    id: 2,
    title: "Marketing Manager",
    companyName: "Creative Solutions Ltd.",
    location: "New York, NY",
    salaryRange: "$70,000 - $90,000",
    workType: "Onsite",
    companyIcon: company2,
  },
  {
    id: 3,
    title: "Graphic Designer",
    companyName: "DesignPro Agency",
    location: "Remote",
    salaryRange: "$50,000 - $60,000",
    workType: "Remote",
    companyIcon: company3,
  },
  {
    id: 4,
    title: "Data Analyst",
    companyName: "Data Insights Corp.",
    location: "Chicago, IL",
    salaryRange: "$80,000 - $95,000",
    workType: "Onsite",
    companyIcon: company4,
  },
  {
    id: 5,
    title: "Project Manager",
    companyName: "Enterprise Solutions Inc.",
    location: "Remote",
    salaryRange: "$90,000 - $110,000",
    workType: "Remote",
    companyIcon: company5,
  },
  {
    id: 6,
    title: "UX/UI Designer",
    companyName: "Creative Minds Studio",
    location: "Austin, TX",
    salaryRange: "$65,000 - $85,000",
    workType: "Onsite",
    companyIcon: company6,
  },
];

interface AllJobsFormValues {
  location: string;
  jobType: string;
  expLvl: string;
  salary: string;
}

const AllJobs: React.FC = () => {
  const getOptionLabel = (option: any): string => option.label;

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<AllJobsFormValues>();

  const onSubmit = (data: AllJobsFormValues) => console.log(data);

  return (
    <MainContainer>
      <LeftContainer>
        <div className="py-1">
          <TextField label="Search" placeholder="Search" />
        </div>
        {jobCards.map((ele) => (
          <JobsCard key={ele.id} {...ele} />
        ))}
      </LeftContainer>
      <RightContainer>
        <div className="w-full flex py-1">
          <form className="w-full flex" onSubmit={handleSubmit(onSubmit)}>
            <Dropdown
              options={[]}
              getOptionLabel={getOptionLabel}
              label="Location"
              placeholder="Location"
              register={register("location")}
              setValue={setValue}
              name="location"
            />
            <Dropdown
              options={[]}
              getOptionLabel={getOptionLabel}
              label="Job type"
              placeholder="Job type"
              register={register("jobType")}
              setValue={setValue}
              name="jobType"
              className="mx-2"
            />
            <Dropdown
              options={[]}
              getOptionLabel={getOptionLabel}
              label="Experience Level"
              placeholder="Experience Level"
              register={register("expLvl")}
              setValue={setValue}
              name="expLvl"
              className="mx-2"
            />
            <Dropdown
              options={[]}
              getOptionLabel={getOptionLabel}
              label="Salary"
              placeholder="Salary"
              register={register("salary")}
              setValue={setValue}
              name="salary"
            />
          </form>
        </div>
        <CompanyProfile />
      </RightContainer>
    </MainContainer>
  );
};

export default AllJobs;
