import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Store } from "./components/Store";
import { Navbar } from "./components/Navbar";

function App() {

  return (
    <>
    <Container className="mb-4">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Container>

    </>
  )
}

export default App
