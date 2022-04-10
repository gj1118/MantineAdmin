import {
  Box,
  Button,
  Center,
  Paper,
  SimpleGrid,
  Text,
  ScrollArea,
  Title
} from '@mantine/core'
import { ArrowRightIcon, ArrowLeftIcon } from '@primer/octicons-react'
import { Link } from 'react-router-dom'
import NavButton from '../components/NavButton'


export default function HomePage() {
  return (
    <Paper
      radius={0}
      p="xs"
      component={ScrollArea}
      style={{ height: 'calc(100vh - 110px)', backgroundColor: 'transparent' }}>
      <Box style={{ width: '100%', height: 200 }}>
        <Center component={Box} mb={10}>
          <Title order={2}>Welcome &mdash; (username) </Title>
        </Center>
        <Center>
          <Button color="teal">What would you like to do today?</Button>
        </Center>
      </Box>
      <SimpleGrid cols={3} spacing="sm" mt={10}>
        <Paper p={5}>
          <Center>Last Test Run</Center>
        </Paper>
        <Paper p={5}>
          <Center>Your Last test</Center>
        </Paper>
        <Paper p={5}>
          <Center>Most Tests run on</Center>
        </Paper>
        <Paper p={5}>
          <Center>Yor total tests</Center>
        </Paper>
        <Paper p={5}>
          <Center>Total tests in the suite</Center>
        </Paper>
        <Paper p={5}>
          <Center>Most run test suite</Center>
        </Paper>
        <Paper p={5}>
          <Center>Most tests run by</Center>
        </Paper>
      </SimpleGrid>
      <Text component="span">- Nav with Button</Text>
      <SimpleGrid mt={10} mb={10} cols={2}>
        <Button
          component={Link}
          to="/user"
          leftIcon={<ArrowLeftIcon />}
          variant="default"
          loading={false}
          fullWidth>
          <span>Go to Notification</span>
        </Button>
        <Button
          component={Link}
          to="/user"
          rightIcon={<ArrowRightIcon />}
          variant="default"
          loading={false}
          fullWidth>
          <span>Go to User</span>
        </Button>
      </SimpleGrid>
      <Text component="span">- Nav with Custom Style</Text>
      <SimpleGrid mt={10} cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
        <NavButton
          type="prev"
          data={{
            title: 'notification-section',
            group: 'core',
            slug: '/',
            package: 'core',
          }}
        />
        <NavButton
          type="next"
          data={{
            title: 'user-section',
            group: 'core',
            slug: '/',
            package: 'core',
          }}
        />
      </SimpleGrid>
    </Paper>
  )
}
