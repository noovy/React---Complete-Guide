import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meet up",
    image: "https://www.werandaweekend.pl/data/articles/krakow-rynek.jpg",
    address: "Some Adress 5, 5546454",
    description: "this is first meetup",
  },
  {
    id: "m2",
    title: "2 meet up",
    image: "https://www.werandaweekend.pl/data/articles/krakow-rynek.jpg",
    address: "Some Adress 5, 5546454",
    description: "this is 2 meetup",
  },
  {
    id: "m3",
    title: "3 meet up",
    image: "https://www.werandaweekend.pl/data/articles/krakow-rynek.jpg",
    address: "Some Adress 5, 5546454",
    description: "this is 3 meetup",
  },
];

const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};


export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };

};

export default Homepage;
