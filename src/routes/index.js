import { Icon } from '@primer/octicons-react'
import HomePage from '../pages/Home'
import NotificationPage from '../pages/Notification'
import UploadManagerPage from '../pages/UploadManager'
import UserPage from '../pages/User'
import TablePage from '../pages/Table'
import { ModalPage } from '../pages/Modal'
import { NoMatch } from '../pages'
import {
  HomeIcon,
  BellIcon,
  UploadIcon,
  PersonIcon,
  StarIcon,
  PlusIcon,
  VersionsIcon,
  NoteIcon,
  TableIcon,
  PulseIcon,
  StackIcon,
} from '@primer/octicons-react'


const routes = [
  { name: 'Home', path: '/', element: HomePage, icon: HomeIcon },
  {
    name: 'Notification',
    path: '/notification',
    element: NotificationPage,
    icon: BellIcon,
    color: 'lime',
  },
  {
    name: 'Upload Manager',
    path: '/upload-manager',
    element: UploadManagerPage,
    icon: UploadIcon,
    color: 'grape',
  },
  {
    name: 'User',
    path: '/user',
    element: UserPage,
    icon: PersonIcon,
    color: 'blue',
  },
  {
    name: 'Table',
    path: '/table',
    element: TablePage,
    icon: TableIcon,
    color: 'orange',
  },
  {
    name: 'Modal',
    path: '/modal',
    element: ModalPage,
    icon: StackIcon,
    color: 'violet',
  },
  {
    name: 'Add New',
    path: '/user/add',
    element: UserPage,
    icon: PlusIcon,
    color: 'green',
    private: true,
  },
]

/**
 * We define routes in object, then we can use `useRoutes` hook from react-router
 * @see https://reactrouter.com/docs/en/v6/examples/route-objects
 * Instead of creating our own object, just pass it all as a props
 * @see https://github.com/remix-run/react-router/issues/8716
 * Find icons
 * @see https://primer.style/octicons/
 */

export default routes
