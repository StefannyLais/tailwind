import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

interface ILayoutProps {
  children: ReactNode
}

export function Layout(props:ILayoutProps){
  const {children} = props

  return (
    <div className="w-full h-full grid grid-cols-[70px,_1fr]">
      <Sidebar />
      <main>
        {children}
      </main>
    </div>
  )
}