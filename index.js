import React from 'react'
import ReactDom from 'react-dom/client'
import { Header } from './header'

const root = ReactDom.createRoot(document.getElementById('root'))

class Menu extends React.Component{
  // render is present in the react package. render is a method that must have return type
  render(){
    let menu1 = [
    'Home','About us','Contact us '
  ]
    return (
    
       <Header></Header>
      
    )
  }
}

root.render(<Menu/>)

