import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import FacebookLogin, { FacebookLoginResponse } from "rc-facebook-login";

function App() {
  const [facebookResponse, setFacebookResponse] = useState(null);
 
 
  useEffect(() => {


    const responseFacebook = (response) => {
      setFacebookResponse(response);
    };


    // Make sure to replace 'FB_APP_ID' with your actual Facebook App ID
    const appId = 'FB_APP_ID';

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div className="App">

<FacebookLogin
        appId={"175064075348898"}
        fields="name,email,picture"
        callback={facebookResponse}
        className="facebook-login-button"
     
      />
      {facebookResponse && (
        <div>
          <p>Name: {facebookResponse.name}</p>
          <p>Email: {facebookResponse.email}</p>
          <p>Picture: {facebookResponse.picture?.data.url}</p>
        </div>
      )}


      <GoogleOAuthProvider clientId="720816757980-4bhq9da0376p2aqmpf4cij3ss1j7pqkt.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
