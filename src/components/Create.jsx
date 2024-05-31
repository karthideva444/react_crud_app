import React, { useState } from 'react';

const Create = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    number: '',
    addresses: [{ address: '', pincode: '' }]
  });
  const [submittedCustomers, setSubmittedCustomers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
  };

  const handleAddressChange = (index, e) => {
    const { name, value } = e.target;
    const newAddresses = customer.addresses.map((addr, i) =>
      i === index ? { ...addr, [name]: value } : addr
    );
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      addresses: newAddresses
    }));
  };

  const addAddress = () => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      addresses: [...prevCustomer.addresses, { address: '', pincode: '' }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCustomers([...submittedCustomers, customer]);
    setCustomer({
      name: '',
      email: '',
      number: '',
      addresses: [{ address: '', pincode: '' }]
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={customer.name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={customer.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="tel" name="number" value={customer.number} onChange={handleChange} required />
          </label>
        </div>
        {customer.addresses.map((addr, index) => (
          <div key={index}>
            <label>
              Address:
              <input type="text" name="address" value={addr.address} onChange={(e) => handleAddressChange(index, e)} required />
            </label>
            <label>
              Pincode:
              <input type="text" name="pincode" value={addr.pincode} onChange={(e) => handleAddressChange(index, e)} required />
            </label>
          </div>
        ))}
        <button type="button" onClick={addAddress}>Add Address</button>
        <button type="submit">Submit</button>
      </form>

      {submittedCustomers.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Addresses</th>
            </tr>
          </thead>
          <tbody>
            {submittedCustomers.map((cust, index) => (
              <tr key={index}>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.number}</td>
                <td>
                  <ul>
                    {cust.addresses.map((addr, i) => (
                      <li key={i}>{addr.address}, {addr.pincode}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Create;
