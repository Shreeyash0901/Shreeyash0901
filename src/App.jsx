import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-300'>

    <div className='fixed top-0 -z-10 h-full w-full'>        
      <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
        {/* Left radial gradient */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-pink-500/15 to-transparent pointer-events-none" />
        {/* Right radial gradient */}
        <div className="absolute bottom-0 right-[-20%] top-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-pink-500/15 to-transparent pointer-events-none" />     
      </div>
    </div>

 {/* Content */}
        <div className=" container mx-auto px-8">
          <Navbar />
          <Hero/>
        </div>
    </div>
    </>
  );
}

export default App;
