import React from 'react';
import { useNavigate } from 'react-router-dom';
//  import Accounts so we can remove the hashedToken with Accounts.logout()
import { Accounts } from 'meteor/accounts-base';

export const Logout = () => {

  // let navigate = useNavigate();

  function onLogout() {
    Accounts.logout();
//  test that it works
//        login > go to localhost:3000/links
//          require('meteor/meteor').Meteor.userId()  - they have a user ID
//            localStorage   - will show loginToken, loginTokenExpires, userId

    //  not going to redirect user to login. We will handle that elsewhere to keep logout simple
    //      remove the navigate
    // navigate("/");
  }
  return (
      <>
        <button onClick={onLogout}> Logout</button>  
      </>
    )
  
  }