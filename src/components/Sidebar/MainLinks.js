import React from 'react'
import { createStyles } from '@mantine/styles'
import { ThemeIcon, UnstyledButton, Group, Text, Anchor, ActionIcon, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import routes, { Route } from '../../routes'
import { useSidebar } from '../../hooks/context/Sidebar'

const useStyles = createStyles(theme => ({
  button: {
    display: 'block',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      textDecoration: 'none',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}))

function MainLink({ icon: Icon, color, name, path }) {
  const { classes } = useStyles()
  const { isOpen } = useSidebar()

  return (
    <>
      <Anchor component={Link} to={path} className={classes.button}>
        {/* <UnstyledButton className={classes.button}> */}
        <Group>
          <ActionIcon title={name}>
            <Icon />
          </ActionIcon>

          {isOpen && <Title order={6}>{name}</Title>}
        </Group>
        {/* </UnstyledButton> */}
      </Anchor>
    </>
  )
}

/**
 * @see https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/components/AppShell/demos/_mainLinks.tsx
 */
export default function MainLinks() {
  const links = routes.map(link => <MainLink {...link} key={link.name} />)
  return <div>{links}</div>
}
