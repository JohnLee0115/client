import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import ViewOne from './views/ViewOne';
import Update from './views/Update';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/products/:id' element={<ViewOne/>} />
        <Route path='/products/:id/edit' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
