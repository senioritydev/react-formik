import { withRouter, Switch, Route } from "react-router-dom";
import LoginForm from "../Login/index";
import Home from '../Home';
import { UseLogin } from '../../hooks/index';

const Layout = () => {
  const { handleLogin } = UseLogin();
  return (
    <div>
      <h1>Welcome</h1>
      <Switch>
        <Route exact path="/">
            <LoginForm handleSubmit={handleLogin}/>
        </Route>
        <Route exact path="/home">
            <Home />
        </Route>
        </Switch>
    </div>
  );
};

export default withRouter(Layout);