import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleTheme } from '../redux/themeSlice';

const Theme = () => {
    const theme = useSelector(state => state.theme.theme)
    const dispatch = useDispatch()
    const themeToggle = () => dispatch(ToggleTheme())
  return (
    <div style={{background: theme === 'light' ? "#fff" : '#000', color: theme === 'light' ? '#000' : '#fff'}}>
        <button onClick={themeToggle}>{theme}</button>
        <div style={{width:'300px', height: '300px', }}>{theme === 'light' ? "Light Box" : "Dark Box"}</div>
    </div>
  )
}

export default Theme;