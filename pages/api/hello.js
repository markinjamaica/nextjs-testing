// Here you can write server-side code, it will not be sent to the client
// Use to handle form inputs and directly save to database
// Do not fetch an API route from 'getStaticProps' or 'getStaticPaths'

export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}
