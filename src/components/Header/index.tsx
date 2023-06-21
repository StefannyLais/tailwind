import {IoIosArrowBack,IoIosArrowDown} from 'react-icons/io'
import { LuCalendar } from 'react-icons/lu'
import {MdOutlineFilterList,MdAdd} from 'react-icons/md'

export function Header(){
  return (
    <header className="border-b-[1px] border-b-gray-200 flex items-center justify-between px-[15px] py-[13px]">
      <div className="flex items-center gap-[20px]">
        <button className="flex items-center border-[1px] rounded border-gray-300 px-[12px] py-[9px]">
          <IoIosArrowBack size={24} className='text-gray-400'/>
          <span className='font-semibold text-gray-600'>Back</span>
        </button>
        <ul className="flex items-center gap-[8px]">
          <li className='text-gray-400 font-semibold'>Project Name</li>
          <li className='text-gray-400 font-semibold'>/</li>
          <li className='font-semibold'>Recent workflows</li>
        </ul>
      </div>
      <div className="flex items-center gap-[12px]">
        <span className='text-gray-600 font-semibold'>Sort By</span>
        <ul className="flex items-center gap-[12px]">
          <li className="flex items-center gap-[6px] text-gray-600 font-semibold border border-gray-300 rounded px-[16px] py-[8px]">
            <span>Activity</span>
              <IoIosArrowDown size={20}/>
          </li>
          <li className="flex items-center gap-[6px] text-gray-600 font-semibold border border-gray-300 rounded px-[16px] py-[8px]">
            <LuCalendar size={20}/> 
            <span>All Time</span>
          </li>
          <li className="flex items-center gap-[6px] text-gray-600 font-semibold border border-gray-300 rounded px-[16px] py-[8px]">
            <LuCalendar size={20}/> 
            <span>All Time</span>
          </li>
          <li className="flex items-center gap-[6px] text-gray-600 font-semibold border border-gray-300 rounded px-[16px] py-[8px]">
            <MdOutlineFilterList size={20}/>
            <span>Filters</span>
          </li>
          <li >
            <button className="flex items-center gap-[6px] px-[12px] py-[6px] bg-blue-600 text-white rounded font-semibold">
              <MdAdd size={20}/>
              <span>New Workflow</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}