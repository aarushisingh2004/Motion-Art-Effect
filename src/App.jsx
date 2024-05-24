
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import GlitterFollow from './components/GlitterFollow';
import { gsap } from "gsap";
function App() {
 return (
    <>
      <div  className="bg-customColor min-h-screen"  style={{ position: 'relative', minHeight: '100vh'}}>
       < Header/>
       < Body/>
       < Footer/>
       <GlitterFollow />
      </div>
      
    </>
  )
}

export default App
