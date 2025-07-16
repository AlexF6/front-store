import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header/>
      <main className="flex-grow">
        <Hero/>
      </main>
    </div>
  )
}

export default App
