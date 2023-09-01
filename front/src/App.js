import MainForm from "./component/MainForm";
import ChatRoom from "./component/ChatRoom";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid bg-light d-flex justify-content-center align-items-center vh-100">

      <Router>
        <Routes>
          <Route index element={<MainForm />} ></Route>
          <Route path="/chat/:roomName" element={<ChatRoom />} ></Route>
          <Route path="*" element={<h1>404 not found</h1>} ></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
