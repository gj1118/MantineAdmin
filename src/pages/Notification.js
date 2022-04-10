import { Text } from '@mantine/core'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useNotification } from '../hooks/context/Notification'

function ModalBody({ title, subtitle }) {
  return (
    <>
      {typeof title === 'string' && <h5>{title}</h5>}
      {typeof subtitle === 'string' && <p>{subtitle}</p>}
    </>
  )
}

export default function NotificationPage() {
  const { isOpen } = useNotification()

  const handleShowToast = () => {
    toast.success(
      <ModalBody title="Success" subtitle="😀 Account has been verified" />
    )
  }

  return (
    <div>
      <h1>Notification</h1>
      {isOpen && <Text component="h5">I'm from Provider</Text>}
      <button onClick={handleShowToast}>Show Me</button>
      <ToastContainer hideProgressBar pauseOnFocusLoss={false} limit={3} />
    </div>
  )
}
