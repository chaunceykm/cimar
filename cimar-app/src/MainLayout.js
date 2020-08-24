import React from "react";
import { NavBar } from "./components/publicFacing/navigation/NavBar";
import { Footer } from "./components/publicFacing/navigation/Footer";

export const MainLayout = (props) => {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
