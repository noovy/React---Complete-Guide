import MeetupDetail from "../../components/meetups/MeetupDetails";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image="https://www.werandaweekend.pl/data/articles/krakow-rynek.jpg"
      title="Fist0"
      address="blablabla"
      description="ohohoh"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://www.werandaweekend.pl/data/articles/krakow-rynek.jpg",
        id: meetupId,
        title: "Fist0",
        address: "blablabla",
        description: "ohohoh",
      },
    },
  };
}

export default MeetupDetails;
