import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from '@mantine/core'

type Props = {
  toggle: () => void
}

export default function CardExample({ toggle }: Props) {
  const theme = useMantineTheme()

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  return (
    <div style={{ width: 365, margin: 'auto' }}>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        style={{
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}>
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button
          variant="default"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={toggle}>
          Continue
        </Button>
      </Card>
    </div>
  )
}
