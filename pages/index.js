import Head from 'next/head'
import Image from 'next/image'

import To_Do_Page from './To_Do_Page'

export default function Home() {
  return (
    <div className='flex h-screen justify-center items-center'>

      <To_Do_Page />
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>

      </div>

    </div>
  )
}
