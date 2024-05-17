'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  // similar to react router, going to a dynamic page, the only issue we have it the type, but adding e=> to onSubmit, you are able to see what the type is for the function below
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }

  return (
    <form
      className='w-50 flex justify-center md:justify-between'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='bg-white p-2 w-80 text-xl rounded-xl text-black'
        placeholder='Search'
      />
      <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>
        🚀
      </button>
    </form>
  )
}
