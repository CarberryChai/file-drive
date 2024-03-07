'use client'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useOrganization } from '@clerk/clerk-react'
import { useMutation, useQuery } from 'convex/react'

export default function Home() {
  // const { organization } = useOrganization()
  // const createFile = useMutation(api.files.createFile)
  // const files = useQuery(api.files.getFiles, { orgId: organization?.id ?? '' })
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
  )
}
