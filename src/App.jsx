import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <AppRouter />
      {/* Toast container */}
      <ToastContainer position="bottom-center" autoClose={2000} />
    </Router>
  );
}

export default App;
