import { useContext } from 'react'
import NotificationContext from '../Context/NotificationContext';
import { calculateNewNotificationId } from '../utils';

function useNotification() {
    const { notifications, setNotifications } = useContext(NotificationContext)

    function closeNotification(notificationId) {
        setNotifications((prevNotifications) => prevNotifications.filter((noti) => noti.id !== notificationId));
    }

    function addNotification(notificationInformation) {
        const newNotificationId = calculateNewNotificationId(notifications);
        setNotifications((prevNotifications)=>[{ id: newNotificationId ,type:notificationInformation.type , message: notificationInformation.message },...prevNotifications])
        setTimeout(() => {
            setNotifications((prevNotifications) => prevNotifications.filter((noti) => noti.id !== newNotificationId));
        }, 4000);
    }

    return [notifications, closeNotification, addNotification]
}

export default useNotification