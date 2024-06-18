import React from "react";
import Image, { StaticImageData } from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BusinessIcon from "@mui/icons-material/Business";

interface JobsCardProps {
  id: number;
  companyIcon: StaticImageData;
  title: string;
  salaryRange: string;
  companyName: string;
  location: string;
  workType: string;
  width?: string;
}

const JobsCard: React.FC<JobsCardProps> = ({
  id,
  title,
  location,
  companyName,
  workType,
  salaryRange,
  companyIcon,
  width = "w-full",
}) => {
  return (
    <div
      className={`${width} p-4  flex flex-col justify-start text-slate-700 font-medium my-3 border border-slate-100 shadow-md rounded-md group hover:scale-105 transition delay-150`}
    >
      <div className="flex w-full justify-between p-2">
        <div className="w-1/6 group-hover:scale-110">
          <Image
            className="w-16 h-16group-hover:scale-110 transition delay-200"
            src={companyIcon}
            width={30}
            height={30}
            alt="Company icon"
          />
        </div>

        <div className="w-5/6 flex flex-col justify-start px-4">
          <h3 className="text-lg group-hover:scale-105 transition delay-300">
            {title}
          </h3>
          <h4 className="text-md group-hover:scale-105 transition delay-300">
            {salaryRange}
          </h4>
        </div>
      </div>
      <div className="px-3 my-1 text-[12px] font-semibold">
        <div className="flex justify-start my-1">
          <BusinessIcon className="mr-3 text-lg" />
          <h5 className="text-sm font-light">{companyName}</h5>
        </div>
        <div className="flex justify-start my-1">
          <LocationOnIcon className="mr-3 text-lg" />
          <h5 className="text-sm font-light">{location}</h5>
        </div>
        <div className="flex justify-start my-1">
          <HomeWorkIcon className="mr-3 text-lg" />
          <h5 className="text-sm font-light">{workType}</h5>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
