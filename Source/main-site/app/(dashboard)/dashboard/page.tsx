import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='flex flex-col border m-6 min-h-[95vh] rounded-md'>
        <span className='flex justify-between items-center px-6 border-b w-full max-h-[64px] min-h-[64px]'>
            <h1 className='text-2xl font-black'>Dashboard</h1>
            <SidebarTrigger className="top-8 left-8" />
        </span>
    </div>
  )
}

export default DashboardPage