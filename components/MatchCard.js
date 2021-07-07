


export default function MatchCard(props) {
    return (
        <div className="m-2 rounded shadow-lg bg-red-200">
            <div>  
                <span>status</span>
                <span className="text-xl"> • </span>
                <span>type</span>
                <span className="text-xl"> • </span>
                <span>held</span>
            </div>
            <div className="flex"> 
                <div className="flex flex-auto">
                    <div>
                        <img className="w-6 m-auto"src='/logo192.png'></img>
                        <div>home</div>
                    </div>
                    <div>
                        <div className="text-xs">129-10</div>
                        <div className="text-xs">19.6</div>
                    </div>
                </div>
                <div className="flex-auto text-center">
                        <img className="w-6 m-auto"src='/logo192.png'></img>
                        <div>vs</div>
                </div>
                <div className="flex flex-row-reverse flex-auto">
                    <div>
                        <img className="w-6 m-auto" src='/logo192.png'></img>
                        <div className="text-center">aaway</div>
                    </div>
                    <div>
                        <div className="text-xs">345-10</div>
                        <div className="text-xs">56.6</div>
                    </div>
                </div>
            </div>
            <div>
                <span>currentstatus</span>
            </div>
        </div>
    )
}