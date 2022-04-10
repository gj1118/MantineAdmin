import { Code, Input, Paper, ScrollArea, Text } from '@mantine/core'
import { useState } from 'react'
import * as utils from './utils'

export default function Excel() {
  const [items, setItems] = useState<unknown[]>([])

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let [file] = e.target.files || []

    try {
      let validFile = utils.validate(file)
      let data = (await utils.readExcel(validFile)).slice(0, 5)
      setItems(data)
    } catch (error) {
      console.error('Error reading excel', (error as Error)?.message)
    }
  }

  return (
    <ScrollArea style={{ height: 250 }}>
      <Text>Open Excel File</Text>
      <Input onChange={handleInputChange} type="file" />

      {items.length > 0 && <Code block>{JSON.stringify(items, null, 2)}</Code>}
    </ScrollArea>
  )
}
