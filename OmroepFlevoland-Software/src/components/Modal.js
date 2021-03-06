import '../styles/modal.css'

function Modal({open, modalLable, children, custom_modal, onClick}) {

  const handleClose = (e) => {
    if(e.target.className === 'modalContainer'){
      onClick()
    }
    return null
  }

  if(open) {
    return (
      <div className='modalContainer' onClick={handleClose}>
        <div className= {`modal ${custom_modal}`}>
         {/* <div className='modal__head'>
            <h2>{modalLable}</h2>
            <p> test</p>
            <span className='modal__close' onClick={onClick}>x</span>
          </div>*/}
          {children}
        </div>
    </div>
    )
  }
  return null
}

export default Modal
