import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
interface User {
  id: string;
  name: string;
  time: string;
  avatarUrl: string;
  status: number;
}

interface StagesContainerProps {
  id: string;
  label: string;
  users: User[];
}

const StagesContainer: React.FC<StagesContainerProps> = ({ id, label, users }) => {
  return (
    <div className="w-[23%] p-4 flex flex-col justify-start text-slate-700  my-3 border border-slate-100 shadow-md rounded-md ">
      <h2 className="text-md font-bold mb-4 ">{label}</h2>
      <div>
        {/* make a components */}
        {users.map((user) => (
          <div key={user.id} className="cursor-pointer flex items-center mb-4 p-2  bg-[#f2f6fa] rounded-md shadow-lg shadow-[#f8f9fa]">
            <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
            <div className="flex flex-col text-sm">
              <span className="font-extralight text-xs  text-[#171A1FFF]">{user.name}</span>
              <div className='flex '>
              < AccessTimeIcon fontSize="small"/>
              <span className="text-xxs my-auto text-[#171A1FFF]">{user.time}</span>
              </div>
            </div>
            <div className="ml-auto flex flex-col items-end">
             <MoreHorizIcon fontSize='small'/>
            <Rating name="disabled" value={user.status} disabled size="small" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StagesContainer;
