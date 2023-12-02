import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label,  Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList( {submitting, activities, selectActivity, deleteActivity }: Props) {
    const [target, setTarget] = useState('')

    function handleActivityDelete(event:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(event.currentTarget.name)
        deleteActivity(id);
    }
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity: Activity) => (
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
                  onClick={() => {
                    selectActivity(activity.id);
                  }}
                  floated="right"
                  content="View"
                  color="blue"
                  loading={submitting && target === activity.id}
                />
                  <Button
                  name={activity.id}
                  onClick={(e) => {
                    handleActivityDelete(e, activity.id)
                  }}
                  loading={submitting && target === activity.id}
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
