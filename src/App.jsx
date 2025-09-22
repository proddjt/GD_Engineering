import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './Layout.jsx'
import Homepage from './pages/Homepage.jsx'
import About from './pages/About.jsx'
import Works from './pages/Works.jsx'
import Contact from './pages/Contact.jsx'
import './translations/i18n.js'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="*" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
