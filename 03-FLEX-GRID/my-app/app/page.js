import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>FLEX-BOX</h1>
      <div className='flex flex-row gap-5 justify-center items-center mb-32 bg-white p-4'>
        <div className='space-y-4'>
          <div className='h-16 w-16 bg-red-500'/>
          <div className='h-16 w-16 bg-blue-500'/>
          <div className='h-16 w-16 bg-green-500'/>
          <div className='h-16 w-16 bg-yellow-500'/>
          <div className='h-16 w-16 bg-purple-500'/>
        </div>
        <div className='space-y-4'>
          <div className='h-16 w-16 bg-red-500'/>
          <div className='h-16 w-16 bg-blue-500'/>
          <div className='h-16 w-16 bg-green-500'/>
          <div className='h-16 w-16 bg-yellow-500'/>
          <div className='h-16 w-16 bg-purple-500'/>
        </div>
        <div className='space-y-4'>
          <div className='h-16 w-16 bg-red-500'/>
          <div className='h-16 w-16 bg-blue-500'/>
          <div className='h-16 w-16 bg-green-500'/>
          <div className='h-16 w-16 bg-yellow-500'/>
          <div className='h-16 w-16 bg-purple-500'/>
        </div>
      </div>

      <h1>GRID LAYOUT</h1>

      <div className='grid grid-cols-4 gap-2 p-2 bg-white'>
        <div className='h-16 w-16 bg-red-500'/>
        <div className='h-16 w-16 bg-blue-500'/>
        <div className='h-16 w-16 bg-green-500'/>
        <div className='h-16 w-16 bg-yellow-500'/>
        <div className='h-16 w-16 bg-purple-500'/>
        <div className='h-16 w-16 bg-red-500'/>
        <div className='h-16 w-16 bg-blue-500'/>
        <div className='h-16 w-16 bg-green-500'/>
        <div className='h-16 w-16 bg-yellow-500'/>
        <div className='h-16 w-16 bg-purple-500'/>
        <div className='h-16 w-16 bg-red-500'/>
        <div className='h-16 w-16 bg-blue-500'/>
        <div className='h-16 w-16 bg-green-500'/>
        <div className='h-16 w-16 bg-yellow-500'/>
        <div className='h-16 w-16 bg-purple-500'/>
        <div className='h-16 w-16 bg-red-500'/>
      </div>
    </main>
  )
}
