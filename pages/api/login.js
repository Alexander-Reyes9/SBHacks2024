import mongoclient from '../../lib/mongodb';

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');

    const data = JSON.parse(req.body);
    const dbres = await db.collection('users').find({ email: data.email, password: data.password }).toArray();
    
    if(dbres.length > 0) res.status(200).send(dbres[0]._id.toString());
    else res.status(400).send("Error: invalid credential");
}