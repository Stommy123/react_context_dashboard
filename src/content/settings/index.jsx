import React, { useContext } from "react";
import classes from "./Settings.module.scss";
import { GlobalContext } from "../../context";

export const Settings = _ => {
  const {
    state: {
      profile: { lastName, firstName }
    },
    dispatch: {
      profile: { setProfile }
    }
  } = useContext(GlobalContext);
  return (
    <div className={classes.root}>
      <div className={classes.header}>Settings</div>
      <div className={classes.divider} />
      <div className={classes.contentArea}>
        <div className={classes.settingHeader}>Settings</div>
        <div className={classes.formItem}>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setProfile({ firstName: e.target.value, lastName })}
          />
        </div>
        <div className={classes.formItem}>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setProfile({ lastName: e.target.value, firstName })}
          />
        </div>
      </div>
    </div>
  );
};
