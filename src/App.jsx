import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header>
        <Header/>
      </header>
      <main className="flex-grow">
        <Hero/>
      </main>
      <footer>
        © 2025 YourSite. All rights reserved.
      </footer>
    </div>
  )
}

export default App
