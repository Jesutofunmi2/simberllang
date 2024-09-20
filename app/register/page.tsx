"use client";

import React, { useEffect } from "react";
import RegisterForm from "@/components/Form/Forms/Register/RegisterForm";
import { getToken, removeToken } from "@/services/api/token";

const MyRegister = () => {
    const token = getToken();

    useEffect(() => {
        if (token) {
            removeToken();
        }
    }, [token]);
    return (
        <>
            <RegisterForm />
        </>
    );
};

export default MyRegister;
