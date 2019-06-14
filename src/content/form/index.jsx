import React, { useState, useContext } from 'react';
import classes from './Form.module.scss';
import { GlobalContext } from '../../context';

const initialState = {
  billable: false,
  serviceType: String(),
  serviceLocation: String(),
  serviceDate: String(),
  resources: String(),
  technician: String(),
  customerName: String(),
  newCustomer: false,
  customerNumber: String(),
  customerRep: String(),
  customerDescription: String(),
  additionalNotes: String(),
  onboardDate: String(),
  callbackReceived: false,
  accountDescription: String(),
  accountNumber: String(),
  accountStatus: String(),
  accountDate: String()
};

export const Form = _ => {
  const [state, setState] = useState(initialState);
  const { dispatch } = useContext(GlobalContext);
  const handleInputChange = field => e => setState(state => ({ ...state, [field]: e.target.value }));
  const handleSubmit = e => {
    dispatch.snackBar.setMessage({ message: e.target.value });
    dispatch.order.setOrder(state);
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>Form</div>
      <div className={classes.divider} />
      <div className={classes.contentArea}>
        <div className={classes.formName}>Service Request Form</div>
        <div className={classes.formItem}>
          <label>Bill For Service?</label>
          <input onChange={handleInputChange('billable')} className={classes.checkBox} type="checkbox" />
        </div>
        <div className={classes.formItem}>
          <label>Service Type</label>
          <input onChange={handleInputChange('serviceType')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Service Location</label>
          <input onChange={handleInputChange('serviceLocation')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Resources Requested</label>
          <input onChange={handleInputChange('resources')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Technician</label>
          <select onChange={handleInputChange('technician')}>
            <option value="Andy">Andy Weiss</option>
            <option value="Don">Don Moorhouse</option>
            <option value="Angel">Angel Vanegas</option>
            <option value="Bria">Bria Mitchell</option>
            <option value="Tommy">Tommy Suwunrut</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Service Date</label>
          <input onChange={handleInputChange('serviceDate')} type="date" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Name</label>
          <input onChange={handleInputChange('customerName')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>New Customer?</label>
          <input onChange={handleInputChange('newCustomer')} className={classes.checkBox} type="checkbox" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Number</label>
          <input onChange={handleInputChange('customerNumber')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Rep</label>
          <select onChange={handleInputChange('customerRep')}>
            <option value="Andy">Andy Weiss</option>
            <option value="Don">Don Moorhouse</option>
            <option value="Angel">Angel Vanegas</option>
            <option value="Bria">Bria Mitchell</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Customer Description</label>
          <input onChange={handleInputChange('customerDescription')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Additional Notes</label>
          <input onChange={handleInputChange('additionalNotes')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>On-board Date</label>
          <input onChange={handleInputChange('onboardDate')} type="date" />
        </div>
        <div className={classes.formItem}>
          <label>Callback Received?</label>
          <input onChange={handleInputChange('callbackReceived')} className={classes.checkBox} type="checkbox" />
        </div>
        <div className={classes.formItem}>
          <label>Account Description</label>
          <input onChange={handleInputChange('accountDescription')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Account Number</label>
          <input onChange={handleInputChange('accountNumber')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Account Status</label>
          <select onChange={handleInputChange('accountStatus')}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="probation">Probation</option>
            <option value="new">New</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Account Date</label>
          <input onChange={handleInputChange('accountDate')} type="date" />
        </div>
        <div className={classes.button}>
          <button onClick={handleSubmit} value="Submission Success">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
