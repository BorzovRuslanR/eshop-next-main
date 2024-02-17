'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '@prisma/client';
import React from 'react'


interface ProfileProps {
    userId: string;
  }
  
  export default function ProfilePage({ userId }: ProfileProps) {
    const { data: user, isLoading } = useQuery<User>({
      queryKey: ['user', userId],
      queryFn: () => {
        return fetch(`/api/user/${userId}`).then((res) => res.json());
      },
    });
  
    if (isLoading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }