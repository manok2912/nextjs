export default function HomeMatchCard({ match }) {
    return (
        <div>
            <span>{match.name} <span><img src={match.series.shieldImageUrl} alt={match.series.name} width="25" height="25" style={{ display: 'inline-block' }} /></span> {match.series.name} <span><img src={match.series.shieldImageUrl} alt={match.series.name} width="25" height="25" style={{ display: 'inline-block' }} /></span> {match.status}</span>
            <table>
                <tr>
                    <th>Home</th>
                    <th>Away</th>
                </tr>
                <tr>
                    <th><span>{match.homeTeam.name}</span></th>
                    <th><span>{match.awayTeam.name}</span></th>
                </tr>
                <tr>
                    <td><div>
                        <img src={match.homeTeam.logoUrl} alt={match.homeTeam.name} width="50" height="50" />
                        <p>{match.homeTeam.shortName}</p>
                        {match.currentMatchState != 'UPCOMING' && <span>{match.scores?.homeScore} ({match.scores?.homeOvers})</span>}
                    </div></td>
                    <td><div>
                        <img src={match.awayTeam.logoUrl} alt={match.awayTeam.name} width="50" height="50" />
                        <p>{match.awayTeam.shortName}</p>
                        {match.currentMatchState != 'UPCOMING' && <span>{match.scores?.awayScore} ({match.scores?.awayScore})</span>}
                    </div></td>
                </tr>
                {match.currentMatchState != 'UPCOMING' &&  <tr><td colSpan="2">{match.matchSummaryText}</td></tr>}
                <tr>
                    <td colSpan="2" style={{color: 'blue'}}><a href='#'>Match</a> • <a href='#'>Points</a> • <a href='#'>Series</a></td>
                </tr>
            </table>
            <span>{match.cmsMatchAssociatedType} • {match.venue.name} • {match.currentMatchState}</span>
            <hr/>
        </div>
    )
}