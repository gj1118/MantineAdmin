import routes from './routes'
import './styles.css'
import { Routes, Route } from 'react-router-dom'
import {
  MantineProvider,
  ColorSchemeProvider,
  AppShell,
  Header,
  Breadcrumbs,
  Anchor,
  Paper
} from '@mantine/core'
import { SearchIcon as Search } from '@primer/octicons-react'
import PrivateRoute from './routes/PrivateRoute'
import Sidebar from './components/Sidebar/Sidebar'
import { Heading } from './components/Heading'
import { useState } from 'react'
import { NotificationsProvider } from '@mantine/notifications'
import { SidebarProvider } from './hooks/context/Sidebar'
import { ModalsProvider } from '@mantine/modals'
import { useHotkeys, useLocalStorage, useDocumentTitle } from '@mantine/hooks'
import { SpotlightProvider } from '@mantine/spotlight'
import SpotLightActions from './helpers/data/spotlightData'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import PaperWrapper from './wrappers/Paper'

/**
 * Implement private route in react-router v6
 * There are different approach to do this
 * @see https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
 */
export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })
  useDocumentTitle("Test Case management")
  const breadcrumbs = useBreadcrumbs(routes)

  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleColorScheme = value => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  return (
    <ColorSchemeProvider
      toggleColorScheme={toggleColorScheme}
      colorScheme={colorScheme}>
      <MantineProvider
        theme={{
          // Override any other properties from default theme
          fontFamily: 'Open Sans , sans serif',
          headings: {
            fontFamily: 'Poppins , sans serif',
            fontWeight: 500,
          },
          colorScheme: colorScheme,
        }}>
        <SpotlightProvider
          actions={SpotLightActions}
          searchIcon={<Search size={18} />}
          searchPlaceholder="Search..."
          shortcut="mod + shift + 1"
          highlightQuery
          nothingFoundMessage="Nothing found...">
          <ModalsProvider>
            <NotificationsProvider position="top-right">
              <SidebarProvider>
                <AppShell
                  // Add fixed prop if don't want sidebar to shrink
                  // But it will make main content to be tear off into right side
                  // fixed
                  padding="xs"
                  navbar={<Sidebar />}
                  header={
                    <Header height={60} p="xs">
                      <Heading />
                    </Header>
                  }
                  styles={theme => ({
                    main: {
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[8]
                          : theme.colors.gray[0],
                    },
                  })}>
                  <Paper p="xs" mb={10}>
                    <Breadcrumbs>
                      {breadcrumbs.map(({ match, breadcrumb }) => (
                        <Anchor size="sm" href={match.pathname} key={match.pathname}>
                          {breadcrumb}
                        </Anchor>
                      ))}
                    </Breadcrumbs>
                  </Paper>
                  <Routes>
                    {routes.map(route => {
                      const Element = route.element
                      return (
                        <Route
                          key={route.path}
                          path={route.path}
                          element={
                            route?.private ? (
                              <PrivateRoute>
                                <Element />
                              </PrivateRoute>
                            ) : (
                              <Element />
                            )
                          }
                        />
                      )
                    })}
                  </Routes>
                </AppShell>
              </SidebarProvider>
            </NotificationsProvider>
          </ModalsProvider>
        </SpotlightProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
