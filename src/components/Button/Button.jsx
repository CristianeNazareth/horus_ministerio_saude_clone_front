import PropTypes from 'prop-types';
import React from "react"
import './Button.css'

export const Button = ({iconUrl, text}) => {
  return (
      <button className="btn">
        <img src={iconUrl} alt="text" /> <span>{text}</span>
      </button>
  )
}
Button.propTypes = {
  iconUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}








