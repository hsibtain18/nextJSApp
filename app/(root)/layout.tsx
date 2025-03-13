import React, { ReactNode } from "react";

import NavBar from "@/components/navbar";


const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main>
    <NavBar/>
    {children}
  </main>;
};

export default RootLayout;
