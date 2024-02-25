'use client';

import { Button } from '@/components/ui/button'
import { Product } from '@prisma/client';
import React from 'react'
import addToCartAction from './addToCartAction';
import { BarChartHorizontal, Heart } from 'lucide-react';

type Props = {
    product: Product
}

export default function AddToCart({product}: Props) {


  return (
    <>
        <div className='flex gap-8 justify-between'>
          <div className='flex gap-2'>
            <Button className='dark:hover:bg-cyan-300 hover:bg-cyan-300' variant="outline" size={'icon'}><Heart /></Button>
            <Button className='dark:hover:bg-cyan-300 hover:bg-cyan-300' variant="outline" size={'icon'}><BarChartHorizontal /></Button>
          </div>
        
        <Button variant={'submit'} size={'lg'} onClick={async () => {
          await addToCartAction();
        }}>Buy</Button>
        </div>
        
    </>
  )
}