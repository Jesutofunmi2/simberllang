"use client";

import React from "react";
import DashboardNav from "@/components/Navbar/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/DashboardSidebar/DashboardSidebar";
import AddProjectForm from "@/components/Form/Forms/Project/Project";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getToken } from "@/services/api/token";
import { addProject } from "@/services/api/project";

const Project = () => {
    const router = useRouter();
    const token = getToken();

    const handlerAddProject = async (formValues: any, reset: () => void) => {
        let formdata = new FormData();
        formdata.append("name", formValues.name);
        formdata.append("status", formValues.status);
        formdata.append("description", formValues.description);
        formdata.append("files", formValues.files[0]);
        await addProject(formdata);
        //mutate()
        reset();
    };

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, [token]);
    return (
        <>
            <DashboardNav />

            <div className="flex h-screen">
                <Sidebar />
                <div className="bg-blue-400 p-10 w-full">
                    <div className="flex justify-center">
                        <div className="bg-blue-400 p-10 w-fit text-center">
                            <AddProjectForm
                                handleAddFileAssignment={handlerAddProject}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
