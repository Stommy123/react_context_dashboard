import React, { useContext } from "react";
import classes from "./SnackBar.module.scss";
import { GlobalContext } from "../context";

export const SnackBar = _ => {
  const {
    state: {
      snackBar: { remove, message }
    },
    dispatch
  } = useContext(GlobalContext);
  if (!message) return null;
  setTimeout(
    _ => dispatch.snackBar.setRemove({ remove: !remove }),
    remove ? 600 : 5000
  );
  return (
    <div>
      <div className={`${classes.wrapper} ${remove && classes.remove}`}>
        <i className="far fa-check-circle" />
        <div>{message}</div>
      </div>
    </div>
  );
};
