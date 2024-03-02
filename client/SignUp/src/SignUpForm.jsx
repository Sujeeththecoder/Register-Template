import React from 'react';

const SignUpForm = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', backgroundColor: '#f0f0f0' }}>
      <form style={{ maxWidth: '300px', margin: '50px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} action="/signup" method="POST">
        <label style={{ fontWeight: 'bold' }} htmlFor="email">Email:</label><br />
        <input style={{ width: '100%', padding: '10px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', fontSize: '16px' }} type="email" id="email" name="email" required /><br /><br />
        
        <label style={{ fontWeight: 'bold' }} htmlFor="password">Password:</label><br />
        <input style={{ width: '100%', padding: '10px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', fontSize: '16px' }} type="password" id="password" name="password" required /><br /><br />
        
        <input style={{ width: '100%', padding: '10px', marginTop: '5px', marginBottom: '15px', backgroundColor: '#4caf50', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s', border: 'none', borderRadius: '5px', fontSize: '16px' }} type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
