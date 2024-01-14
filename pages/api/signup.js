import mongoclient from '../../lib/mongodb';

/**
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */
export default async (req, res) => {
    let client = await mongoclient.connect();
    let db = client.db('SBHacks2024');


    let data = JSON.parse(req.body);
    data.year = null;
    data.major = null;
    data.screenName = data.email.split("@")[0];
    let schoolname = data.email.match(/@.*\./gi)[0];
    data.school = schoolname.substring(1, schoolname.length-1);
    
    const insertedData = await db.collection('users').insertOne(data);   
    const id = insertedData.insertedId.toString();
    
    res.status(200).send(id);
}