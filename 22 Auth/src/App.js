import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/auth-contex";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const authCtx = useContext(AuthContext);

  const isloggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isloggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {isloggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path='*'>
            <Redirect to='/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
