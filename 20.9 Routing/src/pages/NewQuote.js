import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const addQuoteHandle = quoteData => {
        console.log(quoteData);
    };
    return (
        <QuoteForm onAddQuote={addQuoteHandle} />
    );
};

export default NewQuote;