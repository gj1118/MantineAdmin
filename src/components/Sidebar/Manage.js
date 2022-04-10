import { createStyles } from '@mantine/styles'
import {
  UnstyledButton,
  Group,
  Center,
  Text,
  BackgroundImage,
  Avatar,
  Image,
  ActionIcon
} from '@mantine/core'
import { useSidebar } from '../../hooks/context/Sidebar'
import BG from "../../assets/bg.svg"
import Settings from "../../assets/settings.svg"
import { ToolsIcon } from '@primer/octicons-react'


const useStyles = createStyles(theme => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}))

export default function Manage() {
  const { classes, theme } = useStyles()
  const { isOpen } = useSidebar()
  // console.log({ theme })
  return (
    <div
      style={{
        // paddingTop: isOpen ? theme.spacing.xs : undefined,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}>
      <UnstyledButton className={classes.user} px={!isOpen ? 10 : undefined}>
        {!isOpen && (
          <ActionIcon>
                <ToolsIcon size="lg"></ToolsIcon>
        </ActionIcon>
        )}
        <Group spacing={8}>
          {isOpen && (
            <BackgroundImage src={BG} radius={4}>
              <Center p="md">
                <Text color="#000" size="xs">
                  Click here to manage your account.You can manage your users,
                  your subscription.
                </Text>
              </Center>
            </BackgroundImage>
          )}
        </Group>
      </UnstyledButton>
    </div>
  )
}
