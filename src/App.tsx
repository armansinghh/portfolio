function App() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="w-full max-w-6xl text-center">
        <p className="text-sm text-gray-500 mb-2">Hello, I am</p>

        <h1 className="m-0 font-extrabold text-gray-900 leading-tight" style={{fontSize: 'clamp(2.6rem, 9.5vw, 7rem)'}}>Arman</h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg">I build <strong className="font-semibold text-gray-900">AI Systems</strong>, <strong className="font-semibold text-gray-900">Simulations</strong> &amp; <strong className="font-semibold text-gray-900">Applications</strong></p>

        <div className="w-14 h-px bg-black/5 rounded mx-auto my-8" aria-hidden />

        <a href="#" className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-black/6 shadow-sm mx-auto" onClick={(e) => e.preventDefault()}>
          <span className="w-2.5 h-2.5 bg-black rounded-full ring-4 ring-black/6" aria-hidden></span>
          <span className="text-sm font-semibold tracking-wider text-gray-900">SITE TO BE UP SOON</span>
        </a>

        <p className="mt-4 text-xs text-gray-400 tracking-widest">THANK YOU</p>
      </div>
    </main>
  )
}

export default App
