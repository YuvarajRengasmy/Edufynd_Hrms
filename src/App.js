import Staff from "./Routes/Staff/Staff";
import Superadmin from "./Routes/Superadmin/Superadmin";
import { BrowserRouter } from "react-router-dom";
import Login from "./Routes/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Login/>
      <Superadmin />
      <Staff />
    </BrowserRouter>
  );
}

export default App;
