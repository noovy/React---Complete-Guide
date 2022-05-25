import { MongoClient } from 'mongodb';

const Handler = async (req, res) => {
    const API = process.env.REACT_APP_API;

    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect(`${process.env.REACT_APP_API}`)
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup added'});
    }
};

export default Handler;