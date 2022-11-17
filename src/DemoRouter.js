import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate, useParams } from "react-router-dom";

const DemoRouter = () => {
    return(
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/person" element={<Person />} />
                    <Route path="/about" element={<About />} />
                    <Route path={"*"} element={<Navigate to={"/error"} state={
                        { message: "Path Not Available" }} />} />
                </Routes>
            </Router>
        </div>
    );
};

const Header = () => {
    return(
        <>
        <ul className="nav nav-pills nav-fill bg-dark text-white">
            <li className="nav-item">
                <Link className="nav-link" to="/">Welcome</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/person">Person</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>
    )
}