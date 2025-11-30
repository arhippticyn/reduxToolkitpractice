import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/LanguageSlice';


const Language = () => {
    const lang = useSelector(state => state.lang.lang)
    const dispatch = useDispatch()
    const SwitchLanguage = () => dispatch(setLanguage())
  return (
    <div>
        <button onClick={SwitchLanguage}>Switch lang</button>
        <p>{lang}</p>
    </div>
  )
}

export default Language;