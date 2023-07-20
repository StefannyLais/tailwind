import {RiHome3Line} from 'react-icons/ri'
import {MdOutlineAssessment} from 'react-icons/md'
import { LuUsers,LuLifeBuoy } from "react-icons/lu";
import { ImStack } from "react-icons/im";
import { FiSettings } from "react-icons/fi";

export function Sidebar(){
  return (
    <nav className='flex flex-col h-full border border-r-[1px] border-b-gray-200'>
      <header className='py-[22px] border-b-[1px] border-b-gray-200 flex items-center justify-center'>
        <img src="/assets/union.svg" alt="Logo" className='h-[25px] w-[25px]'/>
      </header>
      <ul className='flex-1 w-full px-[10px] py-[20px]'>
        <li className='flex items-center p-[13px]'>
          <RiHome3Line size={24} className="text-blue-500"/>
        </li>
        <li className='flex items-center p-[13px]'>
          <MdOutlineAssessment size={24} className="text-gray-500"/>
        </li>
        <li className='flex items-center p-[13px]'>
          <ImStack size={24} className="text-gray-500"/>
        </li>
        <li className='flex items-center p-[13px]'>
          <LuUsers size={24} className="text-gray-500"/>
        </li>
      </ul>
      <ul className='flex flex-col gap-5 items-center py-5'>
     
       
      </ul>
    </nav>
  )
}