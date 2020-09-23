import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const menuList = [
  { path: '/teacher', name: 'teacher' },
  { path: '/student', name: 'student' }
]

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__logo">logo</div>
      <div className="menu__list">
        {
          menuList.map(({ path, name }) => (
            <NavLink to={path} key={path} activeClassName="active">
              <div className="menu__item">{name}</div>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default Menu
