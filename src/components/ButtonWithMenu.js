import { forwardRef } from 'react'
import { ChevronRightIcon } from '@primer/octicons-react'
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core'

const ButtonWithMenu = forwardRef(
  ({ image, heading, subtitle, icon, ...others }, ref) => (
    <UnstyledButton
      ref={ref}
      sx={theme => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.md,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...others}>
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {heading}
          </Text>

          <Text color="dimmed" size="xs">
            {subtitle}
          </Text>
        </div>

        {icon || <ChevronRightIcon size={16} />}
      </Group>
    </UnstyledButton>
  )
)

export default ButtonWithMenu
