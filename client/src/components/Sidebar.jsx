import React, { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";
//import logo from "../assets/png-transparent-manipal-academy-of-higher-education-sikkim-manipal-university-sikkim-manipal-institute-of-technology-manipal-university-jaipur-student-text-people-logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return <ProSidebar></ProSidebar>;
};

export default Sidebar;
