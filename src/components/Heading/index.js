import { useMantineColorScheme, useMantineTheme } from '@mantine/styles'
import { Group, ActionIcon, Tooltip, Input, Kbd } from '@mantine/core'
import {
  BookmarkFillIcon,
  BookmarkIcon,
  SunIcon,
  MoonIcon,
  SignInIcon, 
  SignOutIcon
} from '@primer/octicons-react'
import { AnimatePresence } from 'framer-motion'
import { useSidebar } from '../../hooks/context/Sidebar'
import PaperWrapper from '../../wrappers/Paper'
import { SearchIcon } from '@primer/octicons-react'
import { useSpotlight } from '@mantine/spotlight'
import { useHotkeys } from '@mantine/hooks'



export function Heading() {
  const theme = useMantineTheme()
  const { isOpen, setSidebar } = useSidebar()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const spotLight = useSpotlight()
  const isDark = colorScheme === 'dark'

  const rightSection = (
    <div style={{ display: 'flex', alignItems: 'center', fontSize:"12px" }}>
      <Kbd style={{fontSize:"12px"}}>Ctrl/CMD</Kbd>
      <span style={{ margin: '0 5px' }}>+</span>
      <Kbd>K</Kbd>
    </div>
  )

  useHotkeys([['mod+k', () => spotLight.openSpotlight()]])

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
        <PaperWrapper>
          <Input
            icon={<SearchIcon size={16} />}
            placeholder="Search Anything"
            width="600px"
            rightSectionWidth={70}
            styles={{ rightSection: { pointerEvents: 'none', width:"116px" } }}
            rightSection={rightSection }
            onClick={spotLight.openSpotlight}
            onChange={spotLight.openSpotlight}
          />
        </PaperWrapper>
        <Group spacing="xs">
          <ActionIcon
            variant="default"
            onClick={() => setSidebar?.()}
            size={30}>
            {isOpen ? <SignInIcon /> : <SignOutIcon />}
          </ActionIcon>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Tooltip
              wrapLines
              width={60}
              withArrow
              transition="fade"
              transitionDuration={200}
              label="CMD/CTRL + J">
              <ActionIcon
                key={isDark ? 'dark-icon' : 'light-icon'}
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}>
                {isDark ? <SunIcon /> : <MoonIcon />}
              </ActionIcon>
            </Tooltip>
          </AnimatePresence>
        </Group>
      </Group>
    </div>
  )
}
