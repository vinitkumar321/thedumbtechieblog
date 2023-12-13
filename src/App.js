import logo from './static/logo.svg';
import './styles/App.css';
import { Stack, ChakraProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import ProblemSolving from './components/ProblemSolving';
import ReadAndWatch from './components/ReadAndWatch';
import ErrorPage from './static/ErrorPage';
import Fitness from './components/Fitness';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/problem-solving" element={<ProblemSolving />} />
            <Route path="/read-and-watch" element={<ReadAndWatch />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>


  );
}

export default App;
