'use client'
import { Button } from '@/components/ui/button'
import {
  OrganizationSwitcher,
  SignInButton,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react'

export default function Header() {
  return (
    <div className='border-b bg-gray-50'>
      <div className='container flex justify-between items-center py-5'>
        <span className='text-xl font-bold'>File Drive</span>
        <div className='flex gap-2'>
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton mode='modal'>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}
