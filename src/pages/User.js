import {
  Button,
  Checkbox,
  Code,
  Loader,
  PasswordInput,
  ScrollArea,
  Switch,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core'
import { useForm } from 'react-hook-form'
import {
  InfoCircledIcon,
  ArrowRightIcon,
  LockClosedIcon,
  EnvelopeClosedIcon,
  PersonIcon,
  FaceIcon,
} from '@modulz/radix-icons'
import { useEffect, useState } from 'react'
import PaperWrapper from '../wrappers/Paper'

const Users = []

export default function UserPage() {
  const { register, handleSubmit, reset } = useForm()
  const [users, setUsers] = useState({})

  useEffect(() => {
    let isCurrent = true
    async function getUsers() {
      const users = await Users.getAll()
      // console.log(users)
      if (isCurrent) {
        setUsers(users)
      }
    }

    getUsers()
    return () => {
      isCurrent = false
    }
  }, [])

  const onSubmit = async data => {
    console.log({ data })
    // const { id } = await Users.create(user)
    // setUsers(prev => ({ ...prev, [id]: user }))
    reset()
  }

  const rightSection = (
    <Tooltip label="Don't forget your last name too!">
      <InfoCircledIcon />
    </Tooltip>
  )

  return (
    <PaperWrapper>
      <ScrollArea
        style={{ width: '100%', height: 'calc(100vh - 75px)' }}
        ml={-10}
        mr={-10}
        sx={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text component="h5" mb={5} align="center">
          Create User
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            icon={<FaceIcon />}
            label="First Name"
            description="Please enter your great first name"
            placeholder="Input your first name"
            {...register('firstName')}
            mb={5}
          />
          <TextInput
            icon={<PersonIcon />}
            label="Last Name"
            placeholder="Input your last name"
            rightSection={rightSection}
            {...register('lastName')}
            mb={5}
          />
          <TextInput
            icon={<EnvelopeClosedIcon />}
            label="Email"
            placeholder="Your email"
            rightSection={<Loader size="xs" />}
            required
            {...register('email')}
            mb={5}
          />
          <PasswordInput
            icon={<LockClosedIcon />}
            placeholder="Input Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            required
            error="Invalid password"
            {...register('password')}
            mb={5}
          />
          <Switch
            size="lg"
            color="green"
            onLabel="Yes"
            offLabel="No"
            mb={10}
            label="Turn on dark theme?"
            value="1"
            {...register('isDarkTheme')}
          />
          <Checkbox
            label="I agree to sell my privacy"
            mb={5}
            {...register('isTermsAccept')}
          />
          <Button
            variant="gradient"
            gradient={{ from: 'grape', to: 'pink', deg: 35 }}
            leftIcon={<ArrowRightIcon />}
            type="submit"
            loading={false}
            my="1rem">
            {false ? 'Creating' : 'Create'}
          </Button>
        </form>
        <Code block>{JSON.stringify(users, null, 2)}</Code>
      </ScrollArea>
    </PaperWrapper>
  )
}
