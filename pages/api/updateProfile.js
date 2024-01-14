import mongoclient from '../../lib/mongodb';

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');

    let data = JSON.parse(req.body);
    let id = data['id'];
    delete data['id'];
    await db.collection('users').updateOne({
        _id: new mongoclient.ObjectId(id)
    }, {
        $set: data
    });
    
    res.status(200).send('Success!');
}