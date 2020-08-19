import React from "react";
import { NavBar } from "./components/navigation/NavBar";
import { Footer } from "./components/Footer";

export const Layout = (props) => {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
