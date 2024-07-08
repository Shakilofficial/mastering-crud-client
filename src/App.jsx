import { Outlet } from "react-router-dom";
import Container from "./components/ui/Container";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <div>
      <MainLayout>
        <Container>
          <Outlet />
        </Container>
      </MainLayout>
    </div>
  );
}

export default App;
