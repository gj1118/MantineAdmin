import { Pagination, Space, Text } from '@mantine/core'
import { useEffect, useState } from 'react'

export default function TablePage() {
  const [activePage, setPage] = useState(12)

  useEffect(() => {
    // Init fetching api here
  }, [activePage])

  return (
    <>
      <Text>Current page: {activePage}</Text>
      <Space h="sm" />
      <Pagination
        total={20}
        color="orange"
        size="md"
        radius="md"
        siblings={1} // default to 1
        boundaries={2} // default to 1
        page={activePage}
        onChange={setPage}
      />
    </>
  )
}
