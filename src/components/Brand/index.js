import { useMantineColorScheme, useMantineTheme } from '@mantine/styles'
import {
  // SunIcon,
  // MoonIcon,
  SquareIcon,
  ViewVerticalIcon,
} from '@modulz/radix-icons'
import { Group, ActionIcon, Text } from '@mantine/core'
import { BookmarkFillIcon, BookmarkIcon } from '@primer/octicons-react'
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
          {/**
           * @see https://dev.to/jameswallis/animating-next-js-page-transitions-with-framer-motion-1g9j
           * @see https://github.com/james-wallis/wallis.dev/blob/master/components/DarkModeToggle.tsx
           */}
          <AnimatePresence exitBeforeEnter initial={false}>
            <ActionIcon
              key={isDark ? 'dark-icon' : 'light-icon'}
              component={motion.button}
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}>
              {/* {isDark ? <SunIcon /> : <MoonIcon />} */}
              {isDark ? '🌤️' : '🌙'}
            </ActionIcon>
          </AnimatePresence>
        </Group>
      </Group>
    </div>
  )
}
