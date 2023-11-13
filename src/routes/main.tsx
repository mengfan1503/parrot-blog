import { Component } from "react";
import { Route, Routes, RouteProps, Navigate } from "react-router-dom";
import { Layout } from "../components/layout";
class MainRoute extends Component<RouteProps> {
    render() {
        return (
            <Routes>
                <Route path="/center/:id" element={<Layout></Layout>}></Route>
                <Route path="/center" element={<Navigate to={'/center/321'}></Navigate>}></Route>
            </Routes>
        );
    }
}

export default MainRoute;
