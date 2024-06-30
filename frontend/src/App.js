import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import TodoList from './pages/TodoList.js'
import Navbar from './components/Navbar.jsx'
import { useAuthContext } from './hooks/useAuthContext.js'
function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path = "/" element = {user ?<TodoList /> : <Navigate to="/login" />}/>
            <Route path = "signup" element = {!user ? <Signup /> : <Navigate to="/"/>} />
            <Route path = "login" element = {!user ? <Login /> : <Navigate to="/"/>} />
            
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
