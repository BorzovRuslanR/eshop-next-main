'use client';

import { Product } from '@prisma/client';
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function CartPage() {

    const { data: products, isLoading } = useQuery<Product[]>({
        queryKey: ['product'],
        queryFn: () => {
            return fetch('/api/product').then(res => res.json());
        }
    })
    if (isLoading) return <div>Loading...</div>
    if (!products) return <div>Load error</div>
  return (
    <div>
        <h2>Cart</h2>
    </div>
  )
}
