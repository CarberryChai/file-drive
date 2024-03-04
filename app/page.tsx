'use client'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'

export default function Home() {
  const createFile = useMutation(api.files.createFile)
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button
        onClick={() => {
          createFile({ name: 'hello form chai' })
        }}
      >
        create new file
      </Button>
    </main>
  )
}
