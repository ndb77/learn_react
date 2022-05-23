// the backdrop for the modal
// run whatever code comes through props.onCancel when the div is clicked
function Backdrop(props){
    return<div className="backdrop" onClick={props.onCancel}/>;
}
export default Backdrop