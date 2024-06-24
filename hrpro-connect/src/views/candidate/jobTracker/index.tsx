"use client"
import { useState, useEffect } from 'react';
import MainContainer from '@/components/common/MainContainer';
import StagesContainer from '@/components/common/jobTracker/StagesContainer';
import user1 from "@/assets/user/user1.png";
import user2 from "@/assets/user/user2.png";
import user3 from "@/assets/user/user3.png";
import user4 from "@/assets/user/user4.png";
import user5 from "@/assets/user/user5.png";
import user6 from "@/assets/user/user6.png";
import user7 from "@/assets/user/user7.png";
import user8 from "@/assets/user/user8.png";
import user9 from "@/assets/user/user9.png";
import user10 from "@/assets/user/user10.png";
import filter from "@/assets/utils/image.png";
import Image from 'next/image'



interface User {
  id: string;
  name: string;
  time: string;
  avatarUrl: string;
  status: number;
}

interface Stage {
  title: string;
  users: User[];
}

const sampleUserData: Stage[] = [
  {
    title: 'APPLIED',
    users: [
      { id: '1', name: 'Kyle Maybury', time: '1h ago', avatarUrl: user1.src, status: 4 },
      { id: '2', name: 'Clara Lopez', time: '3h ago', avatarUrl: user2.src, status: 3 },
      { id: '9', name: 'John Clark', time: '5h ago', avatarUrl: user3.src, status: 2 },
      { id: '10', name: 'Brian Harris', time: 'Dec 5', avatarUrl: user4.src, status: 3 },
      { id: '11', name: 'Maria Thompson', time: 'Dec 4', avatarUrl: user5.src, status: 4 },
    ],
  },
  {
    title: 'CV REVIEW',
    users: [
      { id: '3', name: 'Alvaro Garcia', time: '1h ago', avatarUrl: user6.src, status: 5 },
      { id: '4', name: 'Luis Martinez', time: '5h ago', avatarUrl: user7.src, status: 2 },
      { id: '15', name: 'Jessica Gonzalez', time: 'Dec 5', avatarUrl: user8.src, status: 4 },
      { id: '16', name: 'Javier Ortiz', time: 'Dec 3', avatarUrl: user9.src, status: 3 },
    ],
  },
  {
    title: 'ACCEPTANCE',
    users: [
      { id: '5', name: 'Joseph Adams', time: '1h ago', avatarUrl: user3.src, status: 4 },
      { id: '6', name: 'Brian Martinez', time: '5h ago', avatarUrl: user7.src, status: 3 },
      { id: '21', name: 'Sarah Johnson', time: 'Nov 30', avatarUrl: user10.src, status: 5 },
      { id: '22', name: 'Sarah Davis', time: 'Nov 29', avatarUrl: user9.src, status: 3 },
      { id: '23', name: 'Matthew Walker', time: 'Nov 28', avatarUrl: user5.src, status: 4 },
    ],
  },
  {
    title: 'REJECTION',
    users: [
      { id: '7', name: 'Daniel Moore', time: '1h ago', avatarUrl: user6.src, status: 5 },
      { id: '8', name: 'Alexander Anderson', time: '5h ago', avatarUrl: user2.src, status: 4 },
      { id: '27', name: 'Jennifer Martinez', time: 'Nov 28', avatarUrl: user1.src, status: 3 },
      { id: '28', name: 'Olivia Robinson', time: 'Nov 27', avatarUrl: user6.src, status: 4 },
    ],
  },
];

// const jobTrackerStages = [
//   {
//     id: "applied",
//     label: "APPLIED",
//   },
//   {
//     id: "cvreview",
//     label: "CV REVIEW",
//   },
//   {
//     id: "accepted",
//     label: "ACCEPTANCE",
//   },
//   {
//     id: "rejected",
//     label: "REJECTION",
//   },
// ];

const JobTracker: React.FC = () => {
  const [stages, setStages] = useState<Stage[]>([]);

  useEffect(() => {
    setStages(sampleUserData);
  }, []);
 
  return (
    <MainContainer>
      <div className='flex flex-col w-full space-y-8'>
        <div className='flex flex-row justify-between'>
          hello
          <div className='flex '>
              <Image src={filter} alt="filter" width={80} height={80}/>
          </div>
        </div>
        <div className=' flex justify-between'>
        {stages.map((stage) => (
        <StagesContainer key={stage.title} id={stage.title} label={stage.title} users={stage.users} />
         ))}
        </div>
      </div>
 
      
      
    </MainContainer>
  );
};

export default JobTracker;
