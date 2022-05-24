import classes from "./Card.module.css"

function Card(props){
    // props.children stores the value of the JSX between the two <Card> tags
    // essentially, this function just turns each item consumed into a classes.card styled component
    return <div className={classes.card}>{props.children}</div>
}

export default Card;
