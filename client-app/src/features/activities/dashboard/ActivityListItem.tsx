import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Item, Button, Segment, Icon } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import { Activity } from "../../../models/activity";
import { format } from 'date-fns'

interface Props{
    activity: Activity
}

function ActivityListItem({activity}: Props) {

    const [target, setTarget] = useState('')
    const { activityStore } = useStore();
    const { loading , deleteActivity} = activityStore;
    function handleActivityDelete(event:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(event.currentTarget.name)
        deleteActivity(id);
    }
  return (
    <Segment.Group>
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size="tiny" circular src='/assets/user.png' />
                    <Item.Content>
                        <Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
                        <Item.Description> Host by xxx</Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
        <Segment>
            <span>
                <Icon name="clock" /> { format(activity.date!, 'dd MMM yyyy h:mm aa')}
                <Icon name="marker" /> { activity.venue}    
            </span>
        </Segment>
        <Segment secondary></Segment>
        <Segment clearing>
            <span>
                {activity.description}
            </span>
            <Button as={Link} 
                to={`/activities/${activity.id}`}
                color="teal"
                floated="right"
                content="View"
            />
        </Segment>
    </Segment.Group>
  );
}

export default ActivityListItem;
