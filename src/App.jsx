import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <div>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );
}

export default App;
