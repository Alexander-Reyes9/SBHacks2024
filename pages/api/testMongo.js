import mongoclient from '../../lib/mongodb';

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async function handler(req, res) {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');

    const data = req.body;
    db.collection('users').createIndex(data);   
    
    res.status(200).send("if you're seeing this its working yipee");
}