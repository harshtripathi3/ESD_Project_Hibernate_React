import { useState, useEffect } from 'react'
import loginService from './services/login'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Home from './services/Home'
import AddUser from './services/AddUser';
import EditUser from './services/EditUSer';
import ViewUser from './services/ViewUser';
import ViewOrg from './services/ViewOrg';
import CompHR from './services/CompHR';
import Addorg from './services/Addorg';

const App = () => {
  // user state will store the logged in user object, if no login has been done yet then it will be null
  const [ user, setUser ] = useState(null)

  // Will store the bills of the logged in user
  const [ bills, setBills ] = useState([])

  // These states are used to control the notifications that show up at the top of the screen for events like 
  // login, signup, watchlist creation, etc.
  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  // Create a notification at the top of the screen with given message for 10 seconds 
  // Notifications are of two types, "error" and "success"
  // The appearance of these two notifications can be adjusted via the index.css file
  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 3000)
  }

  // Function that handles login of users
  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      notificationHandler(`Logged in successfully as ${userObject.firstName}`, 'success')    
      setBills([])
      
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }
  


  // Effect Hook that parses the local storage for 'loggedInUser' and sets the "user" state if a valid match is found
  // This enables user to login automatically without having to type in the credentials. Caching the login if you will.
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])

  return (
    <div>
      {/* Header of the page */}
      {/* <div className='text-left page-header p-2 regular-shadow '>
          <div className='font-weight-bold'>
            <h2>IIIT Bengluru Academic Portal </h2>
          </div>
      </div> */}
      
      {/* Notification component that will render only when the notification state is not null */}
      <Notification notification={notification} type={notificationType} />

      {
        /* Show Login form when no login has happened */
        user === null && 
        <LoginForm startLogin={handleLogin}/>
      }

      {
        /* Show NavBar when login has happened */
        user !== null && 
        <NavBar user={user} setUser={setUser}/>
      } 
      
    {
      user!==null && 
        <Router>
          <Routes>
          <Route exact path="/" element={<Home/>} /> 
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="addorg" element={<Addorg/>}/>
          <Route exact path="/vieworg" element={<ViewOrg />} />
          <Route exact path="/orghr/:id" element={<CompHR />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          </Routes>
        </Router>
      }

    </div>
  )
}

export default App;
