import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import TryComp from './components/TryComp'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header/>
      <main className="flex-grow relative">
        <Hero/>
      </main>
      <div>
        <Footer/>
      </div>
      {/* <TryComp/> */}
    </div>
  )
}

export default App
