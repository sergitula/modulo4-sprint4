
import { PersonajesList } from './components/views/PersonajesList'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#0d1017] bg-grid text-[#e4e1ed] relative selection:bg-[#39ff14] selection:text-black overflow-x-hidden">
        <div className="pointer-events-none fixed top-20 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[300px] bg-[#39ff14]/10 blur-[130px] rounded-full -z-0" />
        <Navbar />
        <main className="flex-1 relative z-10">
          <PersonajesList />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
