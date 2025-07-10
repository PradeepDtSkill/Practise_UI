import "../styles/layout.scss"

import Sidebar from "../components/sidebar.js";
import Navbar from "../components/navbar.js";

export const metadata={
  title: "Next.js",
};

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className="layout">
        <Sidebar/>
        <div className="main-content">
          <Navbar/>
          <main>{children}</main>
        </div>

      </body>
    </html>
  )
}