import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const Homepage = (props) => {
  return(
  <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a hige list og highly active meetups"></meta>
    </Head>
    <MeetupList meetups={props.meetups} />
  </Fragment>);
};

export async function getStaticProps() {
  const API = process.env.REACT_APP_API;

  const client = await MongoClient.connect(`${process.env.REACT_APP_API}`);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Homepage;
