import UploadForm from '@/components/Upload'

export default function Home() {
  return (
    <main className='min-h-screen container pt-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-bold'>Your files</h1>
        <UploadForm />
      </div>
    </main>
  )
}
