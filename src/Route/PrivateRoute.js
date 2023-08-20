import React from 'react'
import Detail from '../page/Detail'
import { Navigate } from 'react-router'

const PrivateRoute = ({userlogin}) => {
  return (userlogin==true?<Detail/>:<Navigate to="/login"/>
  )
}

export default PrivateRoute