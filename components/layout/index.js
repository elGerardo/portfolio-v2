import { Poppins } from "next/font/google";
import Header from "../header";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function RootLayout({ children }) {
  return (
    <>
      <main className={` ${poppins.className}`}>
        <Header />
        <div className="standar-width top-margin" style={{marginTop:"12rem"}}>
          {children}
        </div>
      </main>
    </>
  );
}
