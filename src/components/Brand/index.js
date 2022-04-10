import { useMantineColorScheme, useMantineTheme } from '@mantine/styles'
import {
  SquareIcon,
  ViewVerticalIcon,
} from '@modulz/radix-icons'
import { Group, ActionIcon, Text } from '@mantine/core'
import { BookmarkFillIcon, BookmarkIcon, SunIcon, MoonIcon } from '@primer/octicons-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSidebar } from '../../hooks/context/Sidebar'

export function Brand() {
  const theme = useMantineTheme()
  const { isOpen, setSidebar } = useSidebar()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const isDark = colorScheme === 'dark'

  return (
    <div
      style={{
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}>
      <Group position="apart">
        <ActionIcon variant="light" size={30} color="orange">
          {isDark ? <BookmarkIcon /> : <BookmarkFillIcon />}
        </ActionIcon>
        <Text component="h4">Stories</Text>
        <Group spacing="xs">
          <ActionIcon
            variant="default"
            onClick={() => setSidebar?.()}
            size={30}>
            {isOpen ? <ViewVerticalIcon /> : <SquareIcon />}
          </ActionIcon>
          <AnimatePresence exitBeforeEnter initial={false}>
            <ActionIcon
              key={isDark ? 'dark-icon' : 'light-icon'}
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </ActionIcon>
          </AnimatePresence>
        </Group>
      </Group>
    </div>
  )
}
