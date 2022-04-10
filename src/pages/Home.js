import {
  Box,
  Button,
  Center,
  Paper,
  SimpleGrid,
  Text,
  ScrollArea,
  Title, Menu, Divider
} from '@mantine/core'
import { ArrowRightIcon, ArrowLeftIcon, ToolsIcon, CommentIcon, CodeOfConductIcon, SearchIcon, ArrowSwitchIcon, XCircleIcon } from '@primer/octicons-react'
import { Link } from 'react-router-dom'
import ButtonWithMenu from '../components/ButtonWithMenu'
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
          <Menu
            withArrow
            placement="center"
            control={
              <ButtonWithMenu
                heading="What would you like to do?"
                subtitle="Select an option from the dropdown"
              />
            }>
            <Menu.Label>Application</Menu.Label>
            <Menu.Item icon={<ToolsIcon size={14} />}>Settings</Menu.Item>
            <Menu.Item icon={<CommentIcon size={14} />}>Messages</Menu.Item>
            <Menu.Item icon={<CodeOfConductIcon size={14} />}>
              Gallery
            </Menu.Item>
            <Menu.Item
              icon={<SearchIcon size={14} />}
              rightSection={
                <Text size="xs" color="dimmed">
                  ⌘K
                </Text>
              }>
              Search
            </Menu.Item>
            <Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item icon={<ArrowSwitchIcon size={14} />}>
              Transfer my data
            </Menu.Item>
            <Menu.Item color="red" icon={<XCircleIcon size={14} />}>
              Delete my account
            </Menu.Item>
          </Menu>
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
