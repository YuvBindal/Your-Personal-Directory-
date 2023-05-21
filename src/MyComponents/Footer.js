import React from 'react'

export const Footer = () => {
    let style = {
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%"
    };
  return (
    <div className = "bg-dark text-light py-2" style={style}>
      <p className ="text-center"><i>Copyright &copy; MyPersonalMap.com</i></p>
    </div>
  )
}
