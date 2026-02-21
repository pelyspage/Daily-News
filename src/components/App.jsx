import Navbar from './Navbar'
import Home from './Home'
import Entertainment from './Entertainment'
import Business from './Business'
import Health from './Health'
import Sport from './Sport'
import Science from './Science'
import Technology from './Technology'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../CSS/App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
