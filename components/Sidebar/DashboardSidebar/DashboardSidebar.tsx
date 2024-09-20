"use client";

import React, { useState } from "react";
import styles from "./dashboardSidebar.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { sidebarMenus } from "../data";
import { BiLogOut } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "@/services/redux/features/userSlice";
import { TOKEN_KEY } from "@/utils/constants";

const Sidebar = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState<any>("");

    // Get url path
    const path = pathname.split("/")[2];

    // HANDLE LOGOUT REQUEST
    const handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        dispatch(logout(null));
        router.push("/login");
    };

    const handleToggle = (id: number) => {
        if (dropdownOpen === id) {
            setDropdownOpen(false);
        } else {
            setDropdownOpen(id);
        }
    };

    return (
        <>
            <div className={styles.sidebarContainer}>
                <ul>
                    {sidebarMenus.map((menu) => (
                        <div key={menu.id}>
                            <li
                                className={
                                    path == `${menu?.route?.split("/")[2]}`
                                        ? styles.active
                                        : styles.list
                                }
                                onClick={() =>
                                    dropdownOpen === "true"
                                        ? handleToggle(menu.id)
                                        : router.push(menu.route)
                                }
                            >
                                <span>{menu.icon}</span> <p>{menu.title}</p>
                                {dropdownOpen === "true" ? (
                                    <IoIosArrowDown
                                        className={styles.dropIcon}
                                    />
                                ) : null}
                            </li>
                        </div>
                    ))}
                    <li
                        className={styles.logout}
                        onClick={() => handleLogout()}
                    >
                        <span>
                            <BiLogOut size={25} />
                        </span>
                        <p>Logout</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
