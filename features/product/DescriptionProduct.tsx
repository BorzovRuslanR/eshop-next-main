import { Button } from '@/components/ui/button';
import { BarChartHorizontal } from 'lucide-react';
import React from 'react'

export default function DescriptionProduct() {
  return (
    <>
        <Button className='dark:hover:bg-cyan-300 hover:bg-cyan-300' variant="outline" size={'icon'}><BarChartHorizontal /></Button>
    </>
  )
}
