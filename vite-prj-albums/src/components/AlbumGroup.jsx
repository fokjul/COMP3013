import AlbumItem from "./AlbumItem.jsx";


function AlbumGroup ({currentId, setID}) {
    return (
    <div className="albumGroup">
        <h3>Select an Album</h3>
        <AlbumItem 
            currentId={currentId}
            setID={setID}
        />  
    </div> 
       
    );
}

export default AlbumGroup

