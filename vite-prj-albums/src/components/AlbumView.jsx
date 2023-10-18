import albums from "./data.jsx";
import icon from "../assets/play-flat.svg";

function AlbumView ({currentId}) {
    const icon = <img src="src/assets/play-flat.svg" width="20" height="20"/>
    return (
        <>
            <div className="listOfTracks">  
                <img src={albums[currentId].coverImg} />
                <div>
                    <h3>{albums[currentId].name}</h3>
                    <ol className="tracks">
                        {albums[currentId].tracks.map((track, index) => {
                            return (
                                <li key={index}>{track}{icon}</li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default AlbumView