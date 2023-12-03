import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label,  Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";



function ActivityList() {
    const [target, setTarget] = useState('')
    const { activityStore } = useStore();
    const { activitiesByDate, loading , deleteActivity} = activityStore;
    function handleActivityDelete(event:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(event.currentTarget.name)
        deleteActivity(id);
    }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity: Activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}</div>
              </Item.Description>
              <Item.Extra>
            
                <Button

                  as={Link}
                  to={`/activities/${activity.id}`}
                  floated="right"
                  content="View"
                  color="blue"
                  loading={loading && target === activity.id}
                />
                  <Button
                  name={activity.id}
                  onClick={(e) => {
                    handleActivityDelete(e, activity.id)
                  }}
                  loading={loading && target === activity.id}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}

export default observer(ActivityList)