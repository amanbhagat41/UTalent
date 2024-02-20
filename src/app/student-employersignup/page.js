import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function studentemployersignup() {
  return (
    <>
    <div>studentemployersignup</div>
    <Link href="/signup" legacyBehavior passHref>
    <Button>HI</Button>
    </Link>
    </>
  )
}
