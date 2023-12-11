import logo from './static/logo.svg';
import './styles/App.css';
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import ProblemSolving from './components/ProblemSolving';
import ReadAndWatch from './components/ReadAndWatch';
import ErrorPage from './static/ErrorPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/problem-solving" element={<ProblemSolving />} />
          <Route path="/text-reading" element={<ReadAndWatch />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;