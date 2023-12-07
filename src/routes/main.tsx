import { Component } from 'react'
import { Route, Routes, RouteProps, Navigate } from 'react-router-dom'
import LoginCom from '../components/login'
class MainRoute extends Component<RouteProps> {
  render() {
    return (
      <Routes>
        <Route path="/login" element={<LoginCom></LoginCom>}></Route>
        <Route path="/center" element={<Navigate to={'/login'}></Navigate>}></Route>
        <Route path="/" element={<Navigate to={'/login'}></Navigate>}></Route>
      </Routes>
    )
  }
}

export default MainRoute
