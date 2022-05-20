import React from 'react';
import './css/client.css';

function Client() {
  return (
    <form className='form'>
        <h2 className='client-h2'>CLIENT</h2>
        <div className='row'>
        <label className="name client-labels">Client name</label>
        <input type="text" className="client" value="" placeholder="Client name"/>
        </div>
        <div className='row'>
        <label className="gname client-labels">Category</label>
        <input type="text" className="Category" value="" placeholder="Choose Category"/>
        </div>
        <div className='row'>
        <label className="aname client-labels">Representative</label>
        < input type="text" className="Representative"  placeholder="names"/>
        </div>
        <div className='row'>
        <label className="bname client-labels">Date of Creation</label>
        <input type="text" className="Date"  placeholder="month and year"/>
        </div>
        <div className='row'>
        <label className="cname client-labels">Address</label>
        <input type="text" className="address"  placeholder="province, district, sector,cell"/>
        </div>
        <div className='row'>
        <label className="dname client-labels">Email</label>
        < input type="email" className="email"  placeholder="email" />
        </div>
        <div className='row'>
        <label className="ename client-labels">Phone</label>
        <input type="number" className="telephone"  placeholder="phone number" />
        </div>
        <div className='row'>
        <label className="fname client-labels">Bank Account</label>
        <input type="number" className="bank"  placeholder="phone" />
        </div>
        <button  className='submit'>Add Client</button>

    </form>
  )
}

export default Client;