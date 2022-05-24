import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
// {/* Converts the items in the meetups array into components  */}

// {/* Lists are read in properly when put as elements of a list */}
// {/* This puts every item of the DUMMY DATA list into an <li>meetup.title</li>  */}
// {/* So each item of the array is an <li> element </li> */}
// {/* {DUMMY_DATA.map(function(meetup){ 
//     return <li key={meetup.id}>{meetup.title}</li>
// })} */}
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(function (meetup) {
        return (
          <MeetupItem
            key={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.description}
            //   meetup = {meetup}
            //   {key,image,title,address} = {meetup}
          />
          //* {[<li>item1</li>,<li>item2</li>]}
        );
      })}
    </ul>
  );
}

export default MeetupList;
