import mongoclient from '../../lib/mongodb';

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');

    res.send("if you're seeing this its working yipee")
}