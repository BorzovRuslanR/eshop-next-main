'use client';

import { Button } from '@/components/ui/button';
import React from 'react'


export default function AppBarAuth() {
  return (
    <div className='flex gap-4'>
        <Button>Login</Button>
        <Button>Sing Up</Button>
    </div>
  )
}
