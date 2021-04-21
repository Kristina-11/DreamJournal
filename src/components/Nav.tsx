import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className="nav-list">
        <NavLink to='/' className="nav-list-item">Home</NavLink>
        <NavLink to='/dreams' className="nav-list-item">All Dreams</NavLink>
        <NavLink to='/add-dream' className="nav-list-item">Add A Dream</NavLink>
      </ul>
    </nav>
  )
}

export default Nav
