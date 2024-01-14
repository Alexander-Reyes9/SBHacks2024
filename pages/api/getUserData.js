import mongoclient from '../../lib/mongodb';

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');

    const response = await db.collection('users').findOne({_id: new mongoclient.ObjectId(req.body)});

    res.status(200).send(response);
}