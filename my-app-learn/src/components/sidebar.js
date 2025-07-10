"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/sidebar.scss";
import { usePathname } from "next/navigation";
import Side from "@/utils/side.json";

export default function Sidebar() {
    
    const pathname=usePathname();


    const links=[
        {href:"/",label:"Home"},
        {href:"/dashboard",label:"Dashboard"},
        {href:"/settings",label:"Settings"}
    ];
    return(
        <div className="sidebar">
            <h3>MY SIDEBAR</h3>
            <nav>
               {links.map(({href,label,Icons})=>
                <Link
                    key={href}
                    href={href}
                    className={pathname ===href ? "active":""}
                >
                <Image
                  src={Icons}
                    width={24}
                    height={24}
                    alt={`${label}icon`}
                    />
                    <span>{label}</span>
                </Link>            
            )}
            </nav>
        </div>
    )
}
