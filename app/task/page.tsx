"use client";

import React from 'react'
import DashboardNav from '@/components/Navbar/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/DashboardSidebar/DashboardSidebar'
import { getToken } from "@/services/api/token";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Task = () => {
    const router = useRouter();
    const token = getToken();

    useEffect(() => {
        if (!token) {
            router.push('/login');
        }
    }, [token]);
  return (
    <>
    <DashboardNav />
    <Sidebar />
    <div> Task</div>
    </>
  )
}

export default Task