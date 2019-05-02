import React, { useContext } from "react";
import classes from "./Content.module.scss";
import { SideNav } from "./side-nav";
import { Form } from "./form";
import { Settings } from "./settings";
import { GlobalContext } from "../context";

export const Content = _ => {
  const { state } = useContext(GlobalContext);
  const Component = {
    dashboard: <div>Dashboard</div>,
    financials: <div>Financials</div>,
    profile: <div>Profile</div>,
    settings: <Settings />,
    form: <Form />
  }[state.route.active];
  return (
    <div className={classes.content}>
      <div className={classes.sideNavWrapper}>
        <SideNav />
      </div>
      <div className={classes.formWrapper}>{Component}</div>
    </div>
  );
};
