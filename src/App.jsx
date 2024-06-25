import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import Login from "./pages/Login.jsx";
import Operations from "./pages/Operations.jsx";
import Marketing from "./pages/Marketing.jsx";
import Sales from "./pages/Sales.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/sales" element={<Sales />} />
        <Route 
          path="/" 
          element={
            <SharedLayout>
              <Index />
            </SharedLayout>
          } 
        />
      </Routes>
    </Router>
  );
}
export default App;