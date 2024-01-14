import mongoclient from '../../lib/mongodb';

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');


    const data = JSON.parse(req.body);
    const insertedData = await db.collection('users').insertOne(data);   
    const id = insertedData.insertedId.toString();
    
    res.status(200).send(insertedData);
}