"use client";

import React from "react";
import DashboardNav from "@/components/Navbar/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/DashboardSidebar/DashboardSidebar";
import { useRouter } from "next/navigation";
import { getToken } from "@/services/api/token";
import { useEffect } from "react";

const Team = () => {
    const router = useRouter();
    const token = getToken();

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, [token]);
    return (
        <>
            <DashboardNav />
            <Sidebar />
            <div> Team</div>
        </>
    );
};

export default Team;
