import {Layout} from '../layout'

import {Header} from '../components/Header'
import { FolderExplorer } from '../components/FolderExplorer'

export default function Page(){
  return (
    <Layout>
      <div className='flex flex-col w-full h-full'>
        <Header />
        <div className='grid grid-cols-[253px,_1fr] w-full h-full bg-gray-50'>
          <FolderExplorer /> 
        </div>
      </div>
    </Layout>
  )
}