import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <h2>TodoList</h2>
      <div className='link'>
        <Link to='/'>Home</Link>
        <Link to='/todos'>TodoList</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>
  )
}

export default Header
