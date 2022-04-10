import type { Icon } from '@primer/octicons-react'
import HomePage from '../pages/Home'
import NotificationPage from '../pages/Notification'
import UploadManagerPage from '../pages/UploadManager'
import AnimationsPage from '../pages/Animations'
import UserPage from '../pages/User'
import { RenderingPage } from '../pages/Rendering'
import FormPage from '../pages/Form'
import TablePage from '../pages/Table'
import { EventsPage } from '../pages/Events'
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
import type { RouteObject } from 'react-router-dom'

export type Route = {
  name: string
  path: string
  element: React.FC | (() => JSX.Element)
  icon: Icon | (() => JSX.Element)
  color: string
  private?: boolean
}

const routes: Route[] = [
  { name: 'Home', path: '/', element: HomePage, icon: HomeIcon, color: 'pink' },
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
    name: 'Animations',
    path: '/animations',
    element: AnimationsPage,
    icon: StarIcon,
    color: 'yellow',
  },
  {
    name: 'Rendering',
    path: '/rendering',
    element: RenderingPage,
    icon: VersionsIcon,
    color: 'cyan',
  },
  {
    name: 'Native Form',
    path: '/form',
    element: FormPage,
    icon: NoteIcon,
    color: 'red',
  },
  {
    name: 'Table',
    path: '/table',
    element: TablePage,
    icon: TableIcon,
    color: 'orange',
  },
  {
    name: 'Events',
    path: '/events',
    element: EventsPage,
    icon: PulseIcon,
    color: 'teal',
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

const routesObject: RouteObject[] = [
  {
    element: 'Home',
    path: '/',
    children: [
      {
        path: 'rendering',
        element: <NoMatch />,
      },
      { path: '*', element: <NoMatch /> },
    ],
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
