import ThemeProvider from "styled-components"
import theme from "./config/theme"
import GlobalStyles from "./config/GlobalStyles"
import MainPage from "./Views/MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyles/>
      <div className="App" theme={theme}>
        <MainPage/>
      </div>
  </ThemeProvider>
  );
}

export default App;
