import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }
    const { user } = useAuthContext()
    return (
        <header>
            <div className="navbar">
                <Link to= "/">
                    <h1>To-Do List</h1>
                </Link>
                <nav>
                    {user && (<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    )}
                    {!user && (
                        <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        </div>
                    )}
                    
                </nav>
            </div>
        </header>
    )
}

export default Navbar