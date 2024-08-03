import Staff from "./Routes/Staff/Staff";
import Superadmin from "./Routes/Superadmin/Superadmin";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Superadmin />
      <Staff />
    </BrowserRouter>
  );
}

export default App;
