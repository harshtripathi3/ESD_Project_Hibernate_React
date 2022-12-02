import React, { useState } from 'react'

/*
  This component renders the Login Form with all its functionalities
  startLogin is the method that uses the axios service to submit login credentials to the backend
*/
const LoginForm = ({ startLogin }) => {
  // States for tracking form input which are the email address and password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // onSubmit event handler of this form
  const handleLogin = (event) => {
    // Preventing default submission of the form to the action attribute URL
    event.preventDefault()

    const credentials = {
      email, password
    }

    // Calling startLogin with the provided credentials that will make a call to the backend
    startLogin(credentials)

    // Reset the form state, i.e. the text that's on the username and password text boxes to empty strings
    setEmail('')
    setPassword('')
  }

  // Typically keep id attributes on your HTML elements so that they can be styled using CSS
  return (

    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-primary.bg-gradient'>
          <h2 className='text-center m-4'>Login</h2>
          <form onSubmit={handleLogin} id='login-form'>
            <div className='mb-3'>
              <label htmlFor='ID' className='form-label'>
                Email iD
              </label>
              <input
                type="email"
                className="form-control"
                placeholder='Enter your Email'
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className="form-control"
                placeholder='Password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                id='password'
                required
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
          </form>
        </div>

      </div>
      <div className="footer">
                <p>Made with ❤️ and 🧑‍💻 by <i>Harsh Tripathi</i></p>
            </div>
    </div>

  )
}

export default LoginForm