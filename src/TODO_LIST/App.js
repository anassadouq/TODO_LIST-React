import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import Liste from './Liste';

export default function App() {
  return (
    <div style={{paddingLeft:40}}>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Liste />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}