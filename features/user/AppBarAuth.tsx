'use client';

import { Button } from '@/components/ui/button';
import { signIn, useSession } from 'next-auth/react';
import { ThemeToggler } from '@/components/ThemeToggler';
import React from 'react'


export default function AppBarAuth() {
  const session = useSession();
  console.log(session)
  return (
    <div className='flex gap-4'>
        <ThemeToggler />
        <Button onClick={() => signIn()}>Login</Button>
        <Button onClick={() => signIn()}>Sing Up</Button>
    </div>
  )
}
