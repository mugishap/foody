import React from 'react';
import './client.css';

function Client() {
  return (
    <form className='form'>
        <h2>CLIENT</h2>
        <div className='row'>
        <label className="name">Client name</label>
        <input type="text" className="client" value="" placeholder="Client name"/>
        </div>
        <div className='row'>
        <label className="gname">Category</label>
        <input type="text" className="Category" value="" placeholder="Choose Category"/>
        </div>
        <div className='row'>
        <label className="aname">Representative</label>
        < input type="text" className="Representative"  placeholder="names"/>
        </div>
        <div className='row'>
        <label className="bname">Date of Creation</label>
        <input type="text" className="Date"  placeholder="month and year"/>
        </div>
        <div className='row'>
        <label className="cname">Address</label>
        <input type="text" className="address"  placeholder="province, district, sector,cell"/>
        </div>
        <div className='row'>
        <label className="dname">Email</label>
        < input type="email" className="email"  placeholder="email" />
        </div>
        <div className='row'>
        <label className="ename">Phone</label>
        <input type="number" className="telephone"  placeholder="phone number" />
        </div>
        <div className='row'>
        <label className="fname">Bank Account</label>
        <input type="number" className="bank"  placeholder="phone" />
        </div>
        <button  className='submit'>Add Client</button>

    </form>
  )
}

export default Client;