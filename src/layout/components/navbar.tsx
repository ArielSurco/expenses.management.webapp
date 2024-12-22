import { SidebarTrigger } from '@/shared/components/sidebar'

export function Navbar() {
  return (
    <div className='bg-sidebar flex h-fit w-full items-center gap-2 p-3 shadow'>
      <SidebarTrigger />
      <p className='flex items-center gap-2'>
        <span className='grid h-6 w-6 place-items-center rounded-full bg-primary'>P</span> Welcome
        back, John Doe
      </p>
    </div>
  )
}
