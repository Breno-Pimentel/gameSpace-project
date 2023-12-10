  import { BrowserRouter as Routes, Route } from "react-router-dom";

  import { index } from "./pages/index";
  import { loginPage } from "./pages/loginPage";
import dashboard from "./pages/dashboard";
  //import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

  const App = () => {
    return (
  
      <Routes>
          <Route path="/" exact component={index} />
          <Route path="/login" component={loginPage} />
          <Route path="/dashboard" component={dashboard} />
          {/* Adicione mais rotas conforme necessário */}
      </Routes>
      
    );
  };
//Teste 

export default App;
