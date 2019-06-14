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
  const {
    billable,
    serviceType,
    serviceLocation,
    serviceDate,
    resources,
    technician,
    customerName,
    newCustomer,
    customerNumber,
    customerRep,
    customerDescription,
    additionalNotes,
    onboardDate,
    callbackReceived,
    accountDescription,
    accountNumber,
    accountStatus,
    accountDate
  } = state;
  const { dispatch } = useContext(GlobalContext);
  const handleInputChange = field => e => {
    const value = e.target.value;
    setState(state => ({ ...state, [field]: value }));
  };
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
          <input
            value={billable}
            onChange={handleInputChange('billable')}
            className={classes.checkBox}
            type="checkbox"
          />
        </div>
        <div className={classes.formItem}>
          <label>Service Type</label>
          <input value={serviceType} onChange={handleInputChange('serviceType')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Service Location</label>
          <input value={serviceLocation} onChange={handleInputChange('serviceLocation')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Resources Requested</label>
          <input value={resources} onChange={handleInputChange('resources')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Technician</label>
          <select value={technician} onChange={handleInputChange('technician')}>
            <option value="Andy">Andy Weiss</option>
            <option value="Don">Don Moorhouse</option>
            <option value="Angel">Angel Vanegas</option>
            <option value="Bria">Bria Mitchell</option>
            <option value="Tommy">Tommy Suwunrut</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Service Date</label>
          <input value={serviceDate} onChange={handleInputChange('serviceDate')} type="date" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Name</label>
          <input value={customerName} onChange={handleInputChange('customerName')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>New Customer?</label>
          <input
            value={newCustomer}
            onChange={handleInputChange('newCustomer')}
            className={classes.checkBox}
            type="checkbox"
          />
        </div>
        <div className={classes.formItem}>
          <label>Customer Number</label>
          <input value={customerNumber} onChange={handleInputChange('customerNumber')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Customer Rep</label>
          <select value={customerRep} onChange={handleInputChange('customerRep')}>
            <option value="Andy">Andy Weiss</option>
            <option value="Don">Don Moorhouse</option>
            <option value="Angel">Angel Vanegas</option>
            <option value="Bria">Bria Mitchell</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Customer Description</label>
          <input value={customerDescription} onChange={handleInputChange('customerDescription')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Additional Notes</label>
          <input value={additionalNotes} onChange={handleInputChange('additionalNotes')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>On-board Date</label>
          <input value={onboardDate} onChange={handleInputChange('onboardDate')} type="date" />
        </div>
        <div className={classes.formItem}>
          <label>Callback Received?</label>
          <input
            value={callbackReceived}
            onChange={handleInputChange('callbackReceived')}
            className={classes.checkBox}
            type="checkbox"
          />
        </div>
        <div className={classes.formItem}>
          <label>Account Description</label>
          <input value={accountDescription} onChange={handleInputChange('accountDescription')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Account Number</label>
          <input value={accountNumber} onChange={handleInputChange('accountNumber')} type="text" />
        </div>
        <div className={classes.formItem}>
          <label>Account Status</label>
          <select value={accountStatus} onChange={handleInputChange('accountStatus')}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="probation">Probation</option>
            <option value="new">New</option>
          </select>
        </div>
        <div className={classes.formItem}>
          <label>Account Date</label>
          <input value={accountDate} onChange={handleInputChange('accountDate')} type="date" />
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
