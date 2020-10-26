import React from 'react'
import Header from '../components/header'
import layoutStyles from './layout.module.scss'

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.contentContainer}>
        <Header />
        {props.children}
      </div>
    </div>
  )
}
