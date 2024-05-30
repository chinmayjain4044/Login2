import React, { useState } from 'react';
import './Login.css';
import userImage from './assets/img1.png'; // Replace this with the actual path to your image

function Login() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="recent-logins">
          <div className="recent-logins-header">
            <div className="header-text">
              <h2>Recent logins</h2>
              <p>Click your picture or add an account</p>
            </div>
          </div>
          <div className="login-accounts">
            <div className="login-account">
              <img src={userImage} alt="User" />
              <p>Mika Lee</p>
            </div>
            <div className="add-account">
              {uploadedImage ? (
                <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
              ) : (
                <>
                  <label htmlFor="file-upload" className="custom-file-upload">
                    +
                  </label>
                  <input id="file-upload" type="file" onChange={handleImageUpload} />
                  <p>Add an account</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="login-form">
          <div className="input-container">
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" placeholder="Your email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Your password</label>
            <div className="password-input-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Your password"
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {passwordVisible ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>
          <button className="login-button">Log in</button>
          <a href="Login.js" className="forgot-password">Forgot your password?</a>
          <button className="create-account-button">Create an account</button>
        </div>
      </div>
      <footer>
        <div className="footer-left">
          <a href="Login.js">Sign up</a>
          <a href="Login.js">Log in</a>
          <a href="Login.js">Help Center</a>
          <a href="Login.js">Terms of Service</a>
          <a href="Login.js">Privacy Policy</a>
          <a href="Login.js">About</a>
          <a href="Login.js">Settings</a>
        </div>
        <div className="footer-right">
          <select>
            <option>English (United States)</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </footer>
    </div>
  );
}

export default Login;
