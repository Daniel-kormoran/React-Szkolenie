import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css';
import CountryPage from './pages/CountryPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/country/:names" element={<CountryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App