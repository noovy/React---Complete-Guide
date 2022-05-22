import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes/" />
      </Route>
      <Route path="/quotes/" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/add-new" exact>
        <NewQuote />
      </Route>
      <Route path="/quotes/:quoteID/">
        <QuoteDetails />
      </Route>
    </Switch>
  );
}

export default App;
