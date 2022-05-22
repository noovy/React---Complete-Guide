import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Its fun" },
  { id: "q2", author: "Max", text: "Its fun2" },
  { id: "q3", author: "Max", text: "Its fun3" },
];

const QuoteDetails = () => {
  const params = useParams();

  console.log(params);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteID);

  if (!quote) {
    return <p>No quote found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteID}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteID}/comments`}>
            Load Comments
          </Link>
        </div>
        </Route>
        <Route path={`/quotes/${params.quoteID}/comments`}>
          <Comments />

        </Route>
    </Fragment>
  );
};

export default QuoteDetails;
