import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import NotFoundPage from "../notfound-page/NotFoundPage";
import Welcome from "../welcome-page/Welcome";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Welcome/>}/>
                <Route path={'/signIn'} element={<SignIn/>}/>
                <Route path={'/signUp'} element={<SignUp/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );


};


export default App;