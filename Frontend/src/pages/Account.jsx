import React from 'react'
import style from '../pages/Account.module.css'

const Account = () => {
  return (
    <div className={style.account}>
        <div className={style.accountInfo}>
            <h3>Manage My Account</h3>
            <p>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
            <h3>My Orders</h3>
            <p>My Returns</p>
            <p>My Cancellations</p>
            <h3>My WishList</h3>
        </div>
        <div className={style.accountChanges}>
            <h2>Edit Your Profile</h2>
            <form action="">
                <div className={style.input}>
                    <div className={style.inputInfo}>
                        <label htmlFor="name">First Name</label>
                        <input type="text" name='name' placeholder='Ayo'/>
                    </div>
                    <div className={style.inputInfo}>
                        <label htmlFor="name">Last Name</label>
                        <input type="text" name='name' placeholder='Itunnu'/>
                    </div>
                    <div className={style.inputInfo}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='myemail@gmail.com'/>
                    </div>
                    <div className={style.inputInfo}>
                        <label htmlFor="address">Address</label>
                        <input type="address" name='address' placeholder='Mr A street LA'/>
                    </div>
                </div>
                <div className={style.password}>
                    <label htmlFor="password">Password Changes</label>
                    <input type="password" name="password" id="" placeholder='Current Password'/>
                    <input type="password" name="password" id="" placeholder='New Password'/>
                    <input type="password" name="password" id="" placeholder='Confirm New Password'/>
                </div>
                <div className={style.btns}>
                    <button className={style.cancelBtn}>Cancel</button>
                    <button className={style.saveBtn}>Save Changes</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Account
