export default async function handler(request, response) {
    const res = await fetch(process.env.URL + '/matches?completedLimit=3&upcomingLimit=3&format=json')
    const data = await res.json()
    let matchData = await Promise.all(data.matchList.matches.map(async ({ id, series }) => {
        const res = await fetch(process.env.URL + 'matches/' + series.id + '/' + id + '?IncludeFeatures=1&format=json')
        const data = await res.json()
        //console.log(data);
        return data.match
        //console.log(matchData.length);
    }))
    //console.log(matchData[0]);
    response.status(200).json(matchData)
}