import { FaLanguage } from "react-icons/fa";

const id = Math.random();

export const sidebarMenus = [
    {
        icon: <FaLanguage size={30} />,
        title: "Project",
        route: "/project",
        id: Math.random(),
    },
    {
        icon: <FaLanguage size={30} />,
        title: "Task",
        route: "/task",
        id: Math.random(),
    },
    {
        icon: <FaLanguage size={30} />,
        title: "Team",
        route: "/team",
        id: Math.random(),
    },
];
