import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (error) => {
    error.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Signed up successfully! Now you can log in.');
      setEmail('');
      setPassword('');
    } catch (error) {
    
      if (error.code === 'auth/email-already-in-use') {
        setError('Email already registered. Please log in or sign up with a new email.');
      } else if (error.code === 'auth/weak-password') {
        setError('Your password must contain at least 6 characters.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <>
    <div style={{backgroundImage:"url(src/assets/movie.svg)", backgroundSize:"contain", backgroundPosition: "center center", backgroundRepeat:"no-repeat", height: "200px", padding: "3%"}}></div>
    
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '5px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Register
        </button>
        <div className='text-center'>
          <span>Already have an account?</span>
          <br />
          <button className='btn btn-warning' onClick={() => navigate('/log-in')}>login</button>
        </div>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}
    </div>
  </>)
}

export default SignUp