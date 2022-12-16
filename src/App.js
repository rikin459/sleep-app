import ThemeProvider from "styled-components"
import theme from "./config/theme"
import GlobalStyles from "./config/GlobalStyles"
import MainPage from "./Views/MainPage";
import {  Route,BrowserRouter, Routes} from "react-router-dom";
import SelectionMenu from "./Components/SelecitonMenu"

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyles/>
      <div className="App" theme={theme}>
        <BrowserRouter>
          <Routes>
           
                <Route path="/" element={<MainPage/>}/>
      
                <Route path="/selection" element={<SelectionMenu />}/>
            
              
          </Routes>
        </BrowserRouter>
      </div>
  </ThemeProvider>
  );
}

export default App;
