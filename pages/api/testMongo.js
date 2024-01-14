import mongoclient from '../../lib/mongodb';

/**
 * @param req {import('next').NextApiRequest}
 * @param res {import('next'.NextApiResponse)}s
 */
export default async (req, res) => {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');
    await db.createCollection("MyReallyCoolCollection");

    res.send("if you're seeing this its working yipee")
}