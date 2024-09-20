"use client";

import React, { useState } from "react";
import styles from "./dashboardNavbar.module.css";
import { RxSpeakerLoud } from "react-icons/rx";
import { LuBellPlus } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNavbarViewDash } from "../mobileViewMenu";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

const DashboardNav = () => {
    const [open, setOpen] = useState(false);
    const searchParams = useSearchParams();
    const language = searchParams.get("language");

    return (
        <>
            <section className={styles.dashNav}>
                <div className={styles.logoWrap}>
                    <span className={styles.hamburger}>
                        <GiHamburgerMenu onClick={() => setOpen(true)} />
                    </span>
                </div>

                <div className={styles.detailsAndSoundWrap}>
                    <RxSpeakerLoud color="#6D98FD" className={styles.icon} />
                    <LuBellPlus color="#FFC400" className={styles.icon} />
                    <div className={styles.user}>
                        <HiOutlineUserCircle size={35} />
                    </div>
                </div>

                <MobileNavbarViewDash open={open} setOpen={setOpen} />
            </section>
        </>
    );
};

export default DashboardNav;
