import React from "react";
import { Header } from "./components/publicFacing/navigation/Header";
import { Footer } from "./components/publicFacing/navigation/Footer";
import { SideBar } from "./components/AdminDashboard/SideBar";

export const AdminLayout = ({ children }) => (
  <>
    <Header />
    <div>
      <SideBar />
      {children}
    </div>
    <Footer />
  </>
);
