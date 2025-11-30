import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNotifications } from '../../redux/settingsSlice';

const Notification = () => {
    const notification = useSelector(state => state.notification.notificationsEnabled)
    const dispatch = useDispatch()

    const toggleNotification = () => dispatch(toggleNotifications())
  return (
    <div>
        <button onClick={toggleNotification}>{notification ? 'turn off' : 'turn on'}</button>
        {notification ? 'on' : 'off'}
    </div>
  )
}

export default Notification;