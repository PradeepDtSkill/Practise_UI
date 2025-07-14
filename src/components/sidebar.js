"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/sidebar.scss";
import { usePathname } from "next/navigation";
import icon from "../../public/images/icon/dashboard.svg";
import fi from "../../public/images/icon/article.svg";
import fd from "../../public/images/icon/scenario.svg";
import fg from "../../public/images/icon/logout.svg"

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", Icons: fi },
    { href: "/dashboard", label: "Dashboard", Icons: icon },
    { href: "/settings", label: "Settings", Icons: fd },
  ];
  return (
    <div className="sidebar">
      <h1>openreach</h1>
      <nav className="nav-list">
        {links.map(({ href, label, Icons }) => (
          <>
            <Link key={href} href={href} className={`list ${pathname === href ? "active" : ""}`}>
              <Image src={Icons} width={20} height={20} alt={`${label}icon`} />
            <span>{label}</span>
            </Link>
          </>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Admin
        your@email.com</p>
        <Image src={fg} width={14} height={14} alt="logout-icon"/>
      </div>
    </div>
  );
}
