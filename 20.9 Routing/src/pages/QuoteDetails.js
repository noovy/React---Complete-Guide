import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const params = useParams();

  console.log(params);

  return (
    <section>
      <h1>Details</h1>
      <p>{params.quoteID}</p>
      <Route path={`/quotes/${params.quoteID}/comments`}>
          <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetails;
