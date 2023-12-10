import { BrowserRouter as Routes, Route } from "react-router-dom";

import { index } from "./pages/index";
import { loginPage } from "./pages/loginPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact component={index} />
        <Route path="/login" component={loginPage} />
        {/* Adicione mais rotas conforme necessário */}
        </Routes>
     </BrowserRouter>
  );
};
//Teste 

export default App;
