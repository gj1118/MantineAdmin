import {
  Box,
  Button,
  Center,
  Paper,
  SimpleGrid,
  Text,
  ScrollArea,
} from '@mantine/core'
import { ArrowRightIcon, ArrowLeftIcon } from '@modulz/radix-icons'
import { Link } from 'react-router-dom'
import NavButton from '../components/NavButton'

export default function HomePage() {
  return (
    <Paper
      radius= {0}
      p="xs"
      component={ScrollArea}
      style={{ height: 'calc(100vh - 110px)' , backgroundColor:"transparent"}}>
      <Center
        component={Box}
        style={{ width: '100%', height: 200 }}>
        <Text component="h1" size="xl">
          Home Page - I'm centered
        </Text>
      </Center>
      <Text align="center" mt={10}>
        SimpleGrid for flexbox container
      </Text>
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
