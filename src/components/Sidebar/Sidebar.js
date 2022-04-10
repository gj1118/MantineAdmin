import { Navbar, ScrollArea, Button } from '@mantine/core'
import { useSidebar } from '../../hooks/context/Sidebar'
import MainLinks from './MainLinks'
import User from './User'
import Manage from './Manage'

const Admin = () => {
  return (
    <Button>Admin section</Button>
  )
}

export default function Sidebar() {
  const { isOpen } = useSidebar()

  return (
    <Navbar width={{ base: isOpen ? 250 : 57 }} height="calc(100vh - 60px)">
      <Navbar.Section
        grow
        component={ScrollArea}
        ml={-5}
        mr={-5}
        sx={{ paddingLeft: 5, paddingRight: 5 }}>
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <Manage/>
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  )
}
