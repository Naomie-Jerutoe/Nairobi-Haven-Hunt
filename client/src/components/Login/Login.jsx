import { useEffect, useState } from 'react';
import './Register.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rightPanelActive, setRightPanelActive] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);

      alert('User registered successfully');
      
      navigate('/Login');
    } catch (error) {
      console.error('This is the error:', error);
    }
  };

  return (
    <div className={`container ${rightPanelActive ? "right-panel-active" : ""}`}>
        <div className="container__form container--signup">
            <form action="#" className="form" id="form1" onSubmit={(e) => e.preventDefault()}>
                <h2 className="form__title">Sign Up</h2>
                <input type="text" placeholder="User" className="input" />
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <button className="btn">Sign Up</button>
            </form>
        </div>
    
        <div className="container__form container--signin">
            <form action="#" className="form" id="form2" onSubmit={(e) => e.preventDefault()}>
                <h2 className="form__title">Sign In</h2>
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <a href="#" className="link">Forgot your password?</a>
                <button className="btn">Sign In</button>
            </form>
        </div>
    
        <div className="container__overlay">
            <div className="overlay">
                <div className="overlay__panel overlay--left">
                    <button className="btn" id="signIn" onClick={() => setRightPanelActive(false)}>Sign In</button>
                </div>
                <div className="overlay__panel overlay--right">
                    <button className="btn" id="signUp" onClick={() => setRightPanelActive(true)}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
