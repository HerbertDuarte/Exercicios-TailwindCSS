export default function Home() {
  return (
    <div className="flex min-w-full min-h-screen flex-row flex-wrap items-center justify-between p-24">
      <div>
        <h1>Background image</h1>
        <div className="w-64 h-36 bg-center bg-cover" style={{backgroundImage : 'url(image.jpg)'}}/>
      </div>
      {/* a opacidade pode ser inserida com o comando opacity ou com o /NUM onde num é a opacidade */}
      <div>
        <h1>Background color</h1>
        <div className="w-64 h-36  bg-green-500"/>
      </div>
      <div>
        <h1>Background opacity</h1>
        <div className="w-64 h-36  bg-green-500 opacity-50"/>
      </div>
      <div>
        <h1>Background opacity method 2</h1>
        <div className="w-64 h-36  bg-green-500/20"/>
      </div>
      <div>
        <h1>Background opacity gradient</h1>
        <div className="w-64 h-36 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"/>
      </div>
    </div>
  )
}
