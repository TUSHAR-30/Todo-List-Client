import React, { createContext , useState } from 'react'
const NotificationContext=createContext();

export function NotificationProvider({children}) {
    const [notifications,setNotifications]=useState([])
  return (
    <NotificationContext.Provider value={{notifications,setNotifications}}>
        {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext