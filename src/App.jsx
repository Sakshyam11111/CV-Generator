import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import CreateBlank from './component/CreateBlank';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createblank" element={<CreateBlank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;