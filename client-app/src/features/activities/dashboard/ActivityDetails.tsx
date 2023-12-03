import { Button, Card, Image } from "semantic-ui-react";

import { useStore } from "../../../stores/store";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../layout/LoadingComponent";

function ActivityDetails() {
  const { activityStore } = useStore();
  const { id } = useParams();
  const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;

  useEffect(()=>{
    if(id) loadActivity(id)
  },[id, loadActivity])

  if (loadingInitial || !activity) return <LoadingComponent inverted={false} content={"Loading"}/>;
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={"2"}>
          <Button basic as={Link} to={`/manage/${activity.id}`} color="blue" content="Edit" />
          <Button basic as={Link} to={'/activities'} color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

export default observer(ActivityDetails);
