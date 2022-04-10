import { Button, Text } from '@mantine/core'
import {showNotification} from "@mantine/notifications"
import PaperWrapper from '../wrappers/Paper'


export default function NotificationPage() {
  const handleShowToast = () => {
    showNotification({
      title: 'Hello',
      message: 'Hello World',
      color:'red'
    })
  }

  return (
    <PaperWrapper>
      <Text component="h1" size="xl">
        Notification
      </Text>
      <Button onClick={handleShowToast}>Show Me</Button>
    </PaperWrapper>
  )
}
