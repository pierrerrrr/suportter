export function index({ req, res, database }) {
    const tickets = database.select("tickets");

    const { status } = req.query;
    console.log(status);

    return res.end(JSON.stringify(tickets))
}