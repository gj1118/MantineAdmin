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
import { Brand } from './components/Brand'
import { useCallback, useState } from 'react'
import { NotificationProvider } from './hooks/context/Notification'
import { SidebarProvider } from './hooks/context/Sidebar'

/**
 * Implement private route in react-router v6
 * There are different approach to do this
 * @see https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
 */
export default function App() {
  const [color, setColor] = useState('light')
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleColorScheme = useCallback(() => {
    setColor(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ColorSchemeProvider
      toggleColorScheme={toggleColorScheme}
      colorScheme={color}>
      <MantineProvider
        theme={{
          // Override any other properties from default theme
          fontFamily: 'Open Sans, sans serif',
          colorScheme: color,
        }}>
        <SidebarProvider>
          <NotificationProvider>
            <AppShell
              // Add fixed prop if don't want sidebar to shrink
              // But it will make main content to be tear off into right side
              // fixed
              padding="xs"
              navbar={<Sidebar />}
              header={
                <Header height={60} p="xs">
                  <Brand />
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
          </NotificationProvider>
        </SidebarProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
