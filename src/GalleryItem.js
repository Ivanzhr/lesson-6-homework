import './gelleryItem.css'
function GelleryItem({url, desc, setModal}) {
    let currentPic = {
        url: url,
        desc: desc
    }
    return (
        <div className = "gallery_item" onClick = {()=>setModal(currentPic)}>
            <img src = {url} alt = {desc}/>
        </div>
    )
}

export default GelleryItem;