import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col justify-center items-center'>
      <div className='p-40 text-white bg-slate-500 sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-purple-600'>
        Essa div muda de cor 
      </div>
    </main>
  )
}
