import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    const addMeetupHandle = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    };

    return <NewMeetupForm onAddMeetup={addMeetupHandle} />
};

export default NewMeetupPage;