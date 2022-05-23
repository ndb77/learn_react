// responsible for rendering the modal overlay

function Modal(props) {
  function cancelHandler(){
    // runs whatever code comes through the onCancel or onConfirm prop
    props.onCancel();
  }
  function confirmHandler(){
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={{confirmHandler}}>Confirm</button>
    </div>
  );
}

export default Modal;
