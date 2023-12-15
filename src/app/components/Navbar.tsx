import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <nav>
            <h1>Pörssisähköstä...</h1>
            <Link href={'/'}>Koti</Link>
            <Link href={'sartti'}>Hintaa</Link>
        </nav>
    </div>
  )
}
