import {BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Courses from './pages/Courses';
import FormUpload from './pages/FormUpload';
import VideoPlayer from './pages/VideoPlayer';
import VideoPlayerPlugin from './pages/VideoPlayerPlugin';

function App() {
  return (
  <Router>
     <Routes>
     <Route path={'/'} element={<VideoPlayerPlugin />} />
     {/* <Route path={'/'} element={<FormUpload />} /> */}
      {/* <Route path={'/'} element={<Welcome />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/courses'} element={<Courses />} /> */}
   </Routes>
  </Router>

  );
}

export default App;
