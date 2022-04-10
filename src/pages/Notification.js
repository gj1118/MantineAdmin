import { Button, Paper, Text } from '@mantine/core'
import {showNotification} from "@mantine/notifications"



export default function NotificationPage() {
  const handleShowToast = () => {
    showNotification({
      title: 'Hello',
      message: 'Hello World',
    })
  }

  return (
    <Paper radius={0} style={{backgroundColor:"transparent"}}>
      <Text component="h1" size="xl">
        Notification
      </Text>
      <Button onClick={handleShowToast}>Show Me</Button>
    </Paper>
  )
}
