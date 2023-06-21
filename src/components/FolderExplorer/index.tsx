import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiFolderPlus } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { BiFolder } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";

export function FolderExplorer() {
  return (
    <div className="border-r-[1px] border-r-gray-300 h-full p-[15px]">
      <nav>
        <div className="flex items-center justify-between bg-white border border-gray-300 rounded px-[12px] py-[8px]">
          <span>Porject Name</span>
          <MdOutlineKeyboardArrowDown size={24} className="text-gray-400" />
        </div>
        <ul className="flex flex-col py-[8px]">
          <li className="bg-blue-100 flex items-center justify-between px-[20px] py-[10px] rounded text-blue-700 font-semibold">
            <span>View All</span>
            <span>172</span>
          </li>
          <li className="flex items-center justify-between px-[20px] py-[10px] rounded text-gray-400 font-semibold">
            <div className="flex items-center gap-[4px]">
              <BiFolderPlus size={20} />
              <span className="gray-600">Active</span>
            </div>
            <span>34</span>
          </li>
          <li className="flex items-center justify-between px-[20px] py-[10px] rounded text-gray-400 font-semibold">
            <div className="flex items-center gap-[4px]">
              <RiFileList3Line size={20} />
              <span>Drafts</span>
            </div>
            <span>34</span>
          </li>
          <li className="flex items-center justify-between px-[20px] py-[10px] rounded text-gray-400 font-semibold">
            <div className="flex items-center gap-[4px]">
              <FiTrash2 size={20} />
              <span>Trash</span>
            </div>
            <span>34</span>
          </li>
        </ul>
        <div className="w-full h-[1px] bg-gray-300 mt-[8px]" />
        <ul className="flex flex-col py-[8px]">
          <li className="flex items-center justify-between px-[20px] py-[10px] rounded text-gray-400 font-semibold">
            <div className="flex items-center gap-[4px]">
              <BiFolder size={20} />
              <span>Orders</span>
            </div>
            <span>32</span>
          </li>
          <li className="flex items-center justify-between px-[20px] py-[10px] rounded text-gray-400 font-semibold">
            <div className="flex items-center gap-[4px]">
              <BiFolder size={20} />
              <span>Product List 1</span>
            </div>
            <span>32</span>
          </li>
          <li className="flex items-center justify-between px-[20px] py-[10px] rounded text-gray-400 font-semibold">
            <div className="flex items-center gap-[4px]">
              <BiFolder size={20} />
              <span>Product List 2</span>
            </div>
            <span>32</span>
          </li>
          <li className="flex items-center justify-between px-[20px] py-[10px] rounded text-gray-400 font-semibold">
            <div className="flex items-center gap-[4px]">
              <BiFolder size={20} />
              <span>Product List 3</span>
            </div>
            <span>32</span>
          </li>
        </ul>
        <div className="w-full h-[1px] bg-gray-300 mt-[8px]" />
        <button className="flex items-center gap-[6px]  px-[20px] py-[16px] text-gray-400 font-semibold">
          <FiPlusCircle size={20} />
          <span>New Folder</span>
        </button>
      </nav>
    </div>
  );
}
