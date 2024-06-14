import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Resgister from './components/Resgister'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main/>}></Route>
          <Route path='/Resgister' element={<Resgister/>}></Route>
          <Route path='/Main' element={<Main/>}></Route>
          
          
          
        </Routes>
      </BrowserRouter>
     


      <Footer/>

    </>
  )
}

export default App