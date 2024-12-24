import React from 'react'
import Footer from './Footer'

const Wrapper = (props) => {
  return (
    <>
    <Header/>
    {props.childern}
    <Footer/>
    </>
  )
}

export default Wrapper
