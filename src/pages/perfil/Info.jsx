import { Outlet } from 'react-router-dom'

export default function Info() {
  return (
    <>
      <div className="flex  flex-grow  ">
        <div className="mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}
