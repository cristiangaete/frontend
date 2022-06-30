
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navigations from './components/Navigations';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
    
      <Navigations />

      <div className="container p-4">
        <Routes>
          <Route path="/" exact element={<NotesList />} />
        </Routes>

        <Routes>
          <Route path="/edit/:id" element={<CreateNote />} />
        </Routes>

        <Routes>
          <Route path="/create" element={<CreateNote />} />
        </Routes>

        <Routes>
          <Route path="/user" element={<CreateUser />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
