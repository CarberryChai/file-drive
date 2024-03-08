import UploadForm from '@/components/Upload'
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useOrganization } from '@clerk/clerk-react'
import { useMutation, useQuery } from 'convex/react'

export default function Home() {
  // const { organization } = useOrganization()
  // const createFile = useMutation(api.files.createFile)
  // const files = useQuery(api.files.getFiles, { orgId: organization?.id ?? '' })
  return (
    <main className='min-h-screen container pt-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-bold'>Your files</h1>
        <UploadForm />
      </div>
    </main>
  )
}
