import routes from './routes'
import './styles.css'
import { Routes, Route } from 'react-router-dom'
import {
  MantineProvider,
  ColorSchemeProvider,
  AppShell,
  Header,
  MediaQuery,
  Burger,
  Text,
  Navbar,
  ColorScheme,
  ScrollArea,
} from '@mantine/core'
import PrivateRoute from './routes/PrivateRoute'
import Sidebar from './components/Sidebar/Sidebar'
import { Heading } from './components/Heading'
import { useCallback, useState } from 'react'
import { NotificationsProvider } from '@mantine/notifications'
import { SidebarProvider } from './hooks/context/Sidebar'
import { ModalsProvider } from '@mantine/modals'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'

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

  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

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
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
