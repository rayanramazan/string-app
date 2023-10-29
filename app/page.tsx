import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full">
        <div className="flex flex-col justify-center items-center text-center w-full">
            <div className="flex flex-col gap-2 bg-slate-500 w-60 p-10 rounded-md">
                <h1 className='text-xl text-white font-bold'>String</h1>
                <Link href="/signin" className=' bg-slate-900 text-white px-4 py-1 rounded hover:bg-slate-950 transition-all mt-10'>Sign in</Link>
                <Link href="/signup" className=' bg-slate-900 text-white px-4 py-1 rounded hover:bg-slate-950 transition-all'>Sign up</Link>
            </div>
        </div>
    </main>
  )
}
