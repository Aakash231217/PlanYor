import React from "react";

import { About, Footer, Banner, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => ( <
    div className = "app" >

    <
    Navbar / >
    <Banner />
    <
    Work / >
    <
    About / >

    <
    Skills / >
    <
    Testimonial / >
    <
    Footer / >
    <
    /div>
);

export default App;