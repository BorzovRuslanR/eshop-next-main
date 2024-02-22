'use client';

import { Button } from '@/components/ui/button'
import { Product } from '@prisma/client';
import { Heart } from 'lucide-react';
import React from 'react'
import addToCartAction from './addToCartAction';
import DescriptionProduct from './DescriptionProduct';

type Props = {
    product: Product
}

export default function AddToCart({product}: Props) {


  return (
    <>
        <div className='flex gap-2'>
          <Button className='dark:hover:bg-cyan-300 hover:bg-cyan-300' variant="outline" size={'icon'}><Heart /></Button>
          <DescriptionProduct/>
        </div>
        <Button variant={'submit'} size={'lg'} onClick={async () => {
          await addToCartAction();
        }}>Buy</Button>
    </>
  )
}