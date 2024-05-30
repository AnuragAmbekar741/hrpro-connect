"use client";
import React, { useState } from "react";
import MainContainer from "@/components/common/MainContainer";
import SideNavigationBar from "@/components/common/SideNavigationBar";
import { CandidateProfileMenu } from "@/constants";
import RightContainer from "@/components/common/RightContainer";
import PersonalInfo from "@/components/candidate/profile/PersonalInfo";
import Skills from "@/components/candidate/profile/Skills";

const Profile: React.FC = () => {
  const [active, setActive] = useState(CandidateProfileMenu[0].id);

  return (
    <MainContainer>
      <SideNavigationBar
        active={active}
        setActive={setActive}
        menuItems={CandidateProfileMenu}
      />
      <RightContainer>
        <PersonalInfo
          isOpen={active}
          title="Personal Information"
          id="personalInfo"
        />
        <Skills isOpen={active} title="Skills" id="skills" />
      </RightContainer>
    </MainContainer>
  );
};

export default Profile;
