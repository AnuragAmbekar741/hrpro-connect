"use client";
import React from "react";
import MainContainer from "@/components/common/MainContainer";
import company1 from "../../../assets/company1.png";
import company2 from "../../../assets/company2.png";
import company3 from "../../../assets/company3.png";
import company4 from "../../../assets/company4.png";
import company5 from "../../../assets/company5.png";
import company6 from "../../../assets/company6.png";
import JobsCard from "@/components/common/cards/JobsCard";

import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import TerminalIcon from "@mui/icons-material/Terminal";
import CategoryCard from "@/components/common/cards/CategoryCard";

import { useRouter } from "next/navigation";

const categories = [
  {
    id: 1,
    title: "Banking",
    icon: <AccountBalanceIcon />,
    bg: "bg-gray-100",
  },
  {
    id: 2,
    title: "Education",
    icon: <CastForEducationIcon />,
    bg: "bg-gray-100",
  },
  {
    id: 13,
    title: "Software",
    icon: <TerminalIcon />,
    bg: "bg-gray-100",
  },
  {
    id: 14,
    title: "Web3",
    icon: <CurrencyBitcoinIcon />,
    bg: "bg-gray-100",
  },
  {
    id: 15,
    title: "Banking",
    icon: <CastForEducationIcon />,
    bg: "bg-gray-100",
  },
];

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
];

const jobs2 = [
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

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <MainContainer>
      <div className="w-full grid gap-5">
        <div className="w-full flex px-1">
          <h1 className="text-3xl font-semibold text-primary">Top Jobs</h1>
        </div>
        <div className="w-full flex items-center justify-between">
          {categories.map((ele) => (
            <CategoryCard key={ele.id} {...ele} />
          ))}
        </div>
        <div className="w-full grid gap-2">
          <div className="w-full flex justify-between">
            {jobCards.map((job) => (
              <JobsCard key={job.id} {...job} width="w-[30%]" />
            ))}
          </div>
          <div className="w-full flex justify-between">
            {jobs2.map((job) => (
              <JobsCard key={job.id} {...job} width="w-[30%]" />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/candidate/allJobs")}
            className="custom-button hover-base mb-1"
          >
            Find More
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
