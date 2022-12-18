import ThemeProvider from "styled-components"
import { useEffect,useState } from "react";
import {useAuth} from "./services/useAuth"
import theme from "./config/theme"
import GlobalStyles from "./config/GlobalStyles"
import MainPage from "./Views/MainPage";
import {  Route,BrowserRouter, Routes} from "react-router-dom";
import SelectionMenu from "./Components/SelecitonMenu"
import {auth} from "./config/firebase"
import Protected from "./Components/Protected";
import LoginForm from "./Components/LoginForm";

function App() {
  const [currentUser, setcurrentUser] = useState("")

  const {isAuthenticated} = useAuth()

  useEffect( () =>{
    auth.onAuthStateChanged(user =>{
      if(user){
        console.log(user)
        setcurrentUser({currentUser: user})
      }else{
        setcurrentUser(null)
      }
    })
  },[])

  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyles/>
      <div className="App" theme={theme}>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={
                    <Protected authenticated={isAuthenticated}/>
              }>
                  <Route path="/" element={<MainPage user = {currentUser}/>}/>
                </Route>
                <Route path="/selection" element={
                    <Protected authenticated={isAuthenticated}/>
              }>
                  <Route path="/selection" element={<SelectionMenu currentUser={currentUser}/>}/>
                </Route>
                <Route path="/login" element={<LoginForm/>}/>
              </Routes>
            </BrowserRouter>
      </div>
  </ThemeProvider>
  );
}

export default App;
