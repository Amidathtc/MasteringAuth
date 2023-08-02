import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRouter:React.FC<PropsWithChildren> = ({children}) => {
  const user = useSelector((state:any) => state.appUser )
    return (
    <div>
      {
        user ? 
        <>
        {children}
        </> :
      <  Navigate to = '/sign-in'/ >
      }
    </div>
  )
}

export default PrivateRouter
