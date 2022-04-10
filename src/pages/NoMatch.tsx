import { Button, Paper, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <Paper withBorder p="sm">
      <Text>It looks like you're lost...</Text>
      <Button component={Link} to="/" variant="subtle">
        Go to Home
      </Button>
    </Paper>
  )
}
