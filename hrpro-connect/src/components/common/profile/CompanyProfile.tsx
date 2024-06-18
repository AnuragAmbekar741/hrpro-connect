import Image from "next/image";
import React from "react";
import companyBg from "../../../assets/companybg.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import avatar4 from "../../../assets/recruiter.png";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import company1 from "../../../assets/company1.png";

const CompanyProfile: React.FC = () => {
  return (
    <div className="h-full text-[#6F7787] overflow-y-auto rounded-md bg-slate-100">
      {/* <Image
        className="object-contain"
        src={companyBg}
        width={1000}
        height={300}
        alt="company image"
      /> */}
      <div className="flex">
        <div className="flex flex-col gap-2 w-1/2 m-5">
          <h2 className="text-2xl text-slate-800">UI / UX Designer</h2>
          <h2 className="text-xl text-primeRed">$95K - $120K</h2>
          <div className="flex justify-between w-full text-sm pr-40 my-2">
            <div className="flex">
              <LocationOnIcon className="text-lg mr-1" />
              <h5>Laborum</h5>
            </div>
            <div className="flex">
              <BusinessIcon className="text-lg mr-1" />
              <h5>Tucson, AZ</h5>
            </div>
          </div>
          <div className="flex justify-between w-full text-sm text-[#565D6D] pr-9">
            <div className="py-1 px-3 bg-slate-100 mr-3 rounded-lg">
              <h4>Mid-Senior level</h4>
            </div>
            <div className="py-1 px-3 bg-slate-100 mr-3 rounded-lg">
              <h4>Full-time</h4>
            </div>
            <div className="py-1 px-3 bg-slate-100 mr-3 rounded-lg">
              <h4>Remote</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col items-start w-1/2 m-5">
          <div className="w-full flex">
            <div className="w-1/3  flex justify-end items-start pl-3">
              <MoreHorizIcon className="text-2xl" />
            </div>
            <div className="w-1/3  flex justify-end pl-3">
              <button className="text-sm font-light px-3 py-2 bg-red-50 hover:border hover:border-primeRed text-primary w-full rounded-md">
                <BookmarkIcon className="text-lg -ml-2" />
                Save
              </button>
            </div>
            <div className="w-1/3  flex justify-end pl-3">
              <button className="text-sm font-light px-3 py-2 bg-primary text-white w-full rounded-md">
                Apply
              </button>
            </div>
          </div>
          <div className="my-2 w-full flex justify-end mb-20 pr-1">
            <h4 className="text-[#6F7787] text-sm">Posted 1hr ago</h4>
          </div>
        </div>
      </div>
      <div className="flex m-5">
        <div className="flex w-full p-5 border justify-between border-slate-100 rounded-lg shadow-md bg-slate-50">
          <div className="flex flex-col justify-between items-start">
            <h3 className="text-lg text-slate-700 mt-1 mb-5">
              Contact Recruiter
            </h3>
            <div className="flex pb-1 text-slate-600">
              <Image src={avatar4} width={75} height={80} alt="" />
              <div className="py-1 px-3">
                <h3 className="text-md font-light">Romy Murray</h3>
                <h5 className="text-sm font-light">Hiring Manager</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end p-1">
            <div className="flex justify-end">
              <ChatBubbleOutlineIcon className="text-primeRed text-lg mt-[2px] mr-1" />
              <h5 className="text-sm text-primeRed">Message</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col m-5 p-3">
        <h3 className="text-lg text-slate-700 my-1">Description</h3>
        <p className="text-sm font-light mx-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem
          aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque
          sit quis ac, sit ipsum. Sit rhoncus velit in sed massa arcu sit eu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem
          aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque
          sit quis ac, sit ipsum. Sit rhoncus velit in sed massa arcu sit eu.
        </p>
      </div>
      <div className="flex flex-col m-5 p-3">
        <h3 className="text-lg text-slate-700 my-1">Responsibilities</h3>
        <div className="flex justify-start m-1">
          <CheckCircleOutlineIcon className="text-primeRed text-lg" />
          <p className="text-sm font-light ml-1">
            Consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis.
          </p>
        </div>
        <div className="flex justify-start m-1">
          <CheckCircleOutlineIcon className="text-primeRed text-lg" />
          <p className="text-sm font-light ml-1">
            Consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis.
          </p>
        </div>
        <div className="flex justify-start m-1">
          <CheckCircleOutlineIcon className="text-primeRed text-lg" />
          <p className="text-sm font-light ml-1">
            Consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis.
          </p>
        </div>
      </div>
      <div className="flex flex-col m-5 py-5 px-3 bg-slate-50">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg text-slate-700">About company</h3>
          <h3 className="text-sm text-primeRed">View company profile</h3>
        </div>
        <div className="flex justify-start items-center">
          <Image src={company1} width={60} height={70} alt="" />
          <h3 className="text-lg text-slate-700 mx-3 font-medium">
            LABORUM COMPANY
          </h3>
        </div>
        <div className="flex justify-start items-center m-2">
          <p className="text-sm">
            Incididunt velit consequat eu esse cillum ut elit ad ut irure dolore
            sunt Lorem tempor consectetur esse culpa dolor. Ut non minim dolor
            irure tempor esse aute culpa eu enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
