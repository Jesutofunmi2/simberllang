"use client";

import React, { useEffect } from "react";
import LoginForm from "@/components/Form/Forms/Login/LoginForm";
import { getToken, removeToken } from "@/services/api/token";

const MyLogin = () => {
    const token = getToken();

    useEffect(() => {
        if (token) {
            removeToken();
        }
    }, [token]);
    return (
        <>
            <LoginForm />
        </>
    );
};

export default MyLogin;
