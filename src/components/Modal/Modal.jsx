import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../redux/ModalSlice';

const Modal = () => {
    const isOpen = useSelector(state => state.modal)
    const dispatch = useDispatch()

    
  return (
    <div>
        <button onClick={() => dispatch(openModal())}>Open</button>
        <button onClick={() => dispatch(closeModal())}>Close</button>

        <div style={{'display': isOpen ? 'flex' : 'none'}}>Modal</div>
    </div>
  )
}

export default Modal;