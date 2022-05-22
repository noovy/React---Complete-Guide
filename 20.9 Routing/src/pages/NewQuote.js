import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);

    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history])

    const addQuoteHandle = quoteData => {
        sendRequest(quoteData)

        history.push('/quotes');
    };
    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandle} />
    );
};

export default NewQuote;