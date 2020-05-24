import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />,
  document.getElementById("googleButton")
);
