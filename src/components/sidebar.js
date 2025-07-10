"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/sidebar.scss";
import { usePathname } from "next/navigation";
import icon from "../../public/images/icon/dashboard.svg";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", Icons: icon },
    { href: "/dashboard", label: "Dashboard", Icons: icon },
    { href: "/settings", label: "Settings", Icons: icon },
  ];
  return (
    <div className="sidebar">
      <h3>MY SIDEBAR</h3>
      <nav className="nav-list">
        {links.map(({ href, label, Icons }) => (
          <>
            <Link key={href} href={href} className={`list ${pathname === href ? "active" : ""}`}>
              <Image src={Icons} width={24} height={24} alt={`${label}icon`} />
            </Link>
            <span>{label}</span>
          </>
        ))}
      </nav>
    </div>
  );
}
