import React from 'react'
import Header from './header'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
    </div>
  )
}
