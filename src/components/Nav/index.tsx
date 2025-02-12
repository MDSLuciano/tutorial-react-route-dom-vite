import './style.css'
import { Link } from 'react-router-dom'
export const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link state={'This is the state from ABOUT'} to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/posts/10">Post 10</Link></li>
                <li><Link to="/redirect">Redirect</Link></li>
            </ul>
        </nav>
    )
}