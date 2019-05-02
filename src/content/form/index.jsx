import React, { useContext } from 'react';
import classes from './Form.module.scss';
import { GlobalContext } from '../../context';

export const Form = _ => {
  const { dispatch } = useContext(GlobalContext);
  const onClick = e => dispatch.snackBar.setMessage({ message: e.target.value });
  return (
    <div className={classes.root}>
      <div className={classes.header}>Form</div>
      <div className={classes.divider} />
      <div className={classes.contentArea}>
        <div className={classes.formName}>Service Request Form</div>
        <div className={classes.formItem}>
          <label>Bill For Service?</label>
          <input className={classes.checkBox} type="checkbox" />
        </div>
        <div className={classes.formItem}>
          <label>Service Type</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Service Location</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Resources Requested</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Technician</label>
          <select>
            <option value="Andy">Andy Weiss</option>
            <option value="Don">Don Moorhouse</option>
            <option value="Angel">Angel Vanegas</option>
            <option value="Bria">Bria Mitchell</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Service Date</label>
          <input type="date" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Name</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>New Customer?</label>
          <input className={classes.checkBox} type="checkbox" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Number</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Rep</label>
          <select>
            <option value="Andy">Andy Weiss</option>
            <option value="Don">Don Moorhouse</option>
            <option value="Angel">Angel Vanegas</option>
            <option value="Bria">Bria Mitchell</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Customer Description</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Service Type</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>On-board Date</label>
          <input type="date" />
        </div>
        <div className={classes.formItem}>
          <label>Callback Received?</label>
          <input className={classes.checkBox} type="checkbox" />
        </div>
        <div className={classes.formItem}>
          <label>Account Description</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Account Number</label>
          <input type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Account Status</label>
          <select>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="probation">Probation</option>
            <option value="new">New</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Account Date</label>
          <input type="date" />
        </div>
        <div className={classes.button}>
          <button onClick={onClick} value="Submission Success">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
