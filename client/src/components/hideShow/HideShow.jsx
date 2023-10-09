import React, { useState } from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import './HideShow.scss'

const HideShow = ({ name, passText, handleChange,id }) => {

    const [isVisible, setVisible] = useState(false);

    const toggle = () => {
      setVisible(!isVisible);
    };

  return (
    <div className="form-group">
      <input type={!isVisible ? "password" : "text"} name={name} required placeholder={passText} onChange={handleChange} id={id} />
        <span className="icon" onClick={toggle}>
      {isVisible ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
    </span>
  </div>
  )
}

export default HideShow
