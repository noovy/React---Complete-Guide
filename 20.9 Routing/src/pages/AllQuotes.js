import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Its fun'},
    { id: 'q2', author: 'Max', text: 'Its fun2'},
    { id: 'q3', author: 'Max', text: 'Its fun3'}
]

const AllQuotes = () => {
    return (
        
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;