import "../styles/layout.scss"

import Sidebar from "../components/sidebar.js";
import Navbar from "../components/navbar.js";
import { Poppins } from 'next/font/google'

const poppins=Poppins({
  weight:['200','600'],
  subsets:['latin'],
  display:'swap'
})
export const metadata={
  title: "Next.js",
};

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className={`${poppins.className} layout`}>
        <Sidebar/>
        <div className="main-content">
          <Navbar/>
          <main>{children}</main>
        </div>

      </body>
    </html>
  )
}