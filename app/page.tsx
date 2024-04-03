import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src='/next.svg'
        alt='Next'
        width={180}
        height={37}
        priority
      />

      <a
        className='absolute right-28 bottom-28 pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        By{' '}
        <Image
          src='/vercel.svg'
          alt='Vercel Logo'
          className='dark:invert'
          width={100}
          height={24}
          priority
        />
      </a>
    </main>
  )
}
