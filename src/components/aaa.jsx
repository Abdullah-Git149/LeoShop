import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeMenu from './HomeMenu';
import { fetchingInPending, fetchingSuccess, fetchingFailed } from './HomeSlice';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            dispatch(fetchingInPending());
            const response = await fetch("https://localhost:44316/api/auth/getuser", {
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            });

            if (response.status === 200) {
                const content = await response.json();
                dispatch(fetchingSuccess({ name: content.name, role: content.role }));
            }
            else {
                dispatch(fetchingFailed());
            }
        })();
    }, []);

    localStorage.setItem('user', JSON.stringify(useSelector(state => state.userDetails)));


    const user = localStorage.getItem('user');

    console.log(user);

    return (
        <React.Fragment>
            <h1>Home</h1>
        </React.Fragment>
    )
};