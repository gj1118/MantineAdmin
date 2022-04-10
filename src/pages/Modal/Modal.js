import {
  Button,
  Checkbox,
  Paper,
  ScrollArea,
  Space,
  Text,
  TextInput,
  Modal,
  Title,
  Group,
} from '@mantine/core'
import {useModals} from '@mantine/modals'
import { useForm } from '@mantine/form'
import { useState } from 'react'
import PaperWrapper from '../../wrappers/Paper'

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleOpenModal = () => setIsOpen(true)
  const handleCloseModal = () => setIsOpen(false)

   const modals = useModals()
   const form = useForm({
     initialValues: {
       email: '',
       termsOfService: false,
     },

     validate: {
       email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
     },
   })

   const openConfirmModal = () =>
     modals.openConfirmModal({
       title: 'Please confirm your action',
       children: (
         <Text size="sm">
           This action is so important that you are required to confirm it with
           a modal. Please click one of these buttons to proceed.
         </Text>
       ),
       labels: { confirm: 'Confirm', cancel: 'Cancel' },
       onCancel: () => console.log('Cancel'),
       onConfirm: () => console.log('Confirmed'),
     })

  return (
    <ScrollArea style={{ height: 500 }}>
      <PaperWrapper>
        <Title order={5}>Modals</Title>
        <Group>
          <Button
            size="xs"
            variant="filled"
            color="violet"
            onClick={handleOpenModal}>
            Open Modal
          </Button>
          <Button
            size="xs"
            variant="filled"
            color="violet"
            onClick={openConfirmModal}>
            Confirm Modal
          </Button>
        </Group>
        <Space my="xs" />
        <Modal opened={isOpen} onClose={handleCloseModal}>
         <Title order={3}> Modal Form is Opened </Title>
         <Text>Please see user tag for more information on how to use input Elements</Text>
        </Modal>
      </PaperWrapper>
    </ScrollArea>
  )
}
