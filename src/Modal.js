import './modas.css';
import Btn from './Btn'

function ModalWindow({modal, setModal}) {
    if(!modal) {
        return null
    } 

    return (
        <div className='overlay' onClick = {()=> setModal(null)}>
            <div className='modal'>
                <img src = {modal.url}/>
                <h2>{modal.desc}</h2>
                <Btn setModal = {setModal}/>
            </div>
        </div>
    )
}
export default ModalWindow