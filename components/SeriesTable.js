export default function SeriesTable({ series }) {
    return (
        <div>
            <table>
            <tr>
                <th>Logo</th>
                <th>Name</th>
                <th>Status</th>
                <th>Start</th>
                <th>Ends</th>
            </tr>
                {
                    series.map(function(data, key){
                        return <tr key={key}>
                            <td><img src={data.shieldImageUrl} alt='logo' width='100px' height='100px'/></td>
                            <td><a href='#'>{data.name}</a></td>
                            <td>{data.status}</td>
                            <td>{data.startDateTime}</td>
                            <td>{data.endDateTime}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}