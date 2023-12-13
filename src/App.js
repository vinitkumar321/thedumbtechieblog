import logo from './static/logo.svg';
import './styles/App.css';
import { Stack, ChakraProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import EverythingTech from './components/EverythingTech';
import InterestingReads from './components/InterestingReads';
import ErrorPage from './static/ErrorPage';
import Fitness from './components/Fitness';
import MyWritings from './components/MyWritings';
import MyPhotography from './components/MyPhotography';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/everything-tech" element={<EverythingTech />} />
            <Route path="/interesting-reads" element={<InterestingReads />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/my-writings" element={<MyWritings />} />
            <Route path="/my-photography" element={<MyPhotography />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>


  );
}

export default App;
