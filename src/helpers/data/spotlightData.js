import {
  HomeIcon,
  BellIcon,
  NoteIcon,
} from '@primer/octicons-react'

const SpotLightActions = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <HomeIcon size={18} />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <BellIcon size={18} />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <NoteIcon size={18} />,
  },
]

export default SpotLightActions
