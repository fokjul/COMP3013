import albums from "./data.jsx";

function AlbumItem ({currentId, setID}) {

    function handleClick(event) {
        setID(event.target.id);
    }

    return (
        <>
            {albums.map((album, index) => (
            <button id={album.id} className="albumItem" onClick={handleClick}>
                <img key={album.coverImg} src={album.coverImg} width="50" height="50"/>
                {album.name}
            </button>  
            ))}
        </>
    )
    
}

export default AlbumItem