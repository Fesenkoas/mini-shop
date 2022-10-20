import React from 'react'
import { Link } from 'react-router-dom'
import s from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.sNav}>
      <span>Mini Shop</span>
      <span>
        <Link to="/" style={{marginRight:'8px'}}>Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}

export default Navigation
