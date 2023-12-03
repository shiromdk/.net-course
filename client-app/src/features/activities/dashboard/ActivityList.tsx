import React, { Fragment, SyntheticEvent, useState } from "react";
import { Button, Header, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import ActivityListItem from "./ActivityListItem";

function ActivityList() {
  const [target, setTarget] = useState("");
  const { activityStore } = useStore();
  const { activitiesByDate, groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>

              {activities.map((activity: Activity) => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}
    
        </Fragment>
      ))}
    </>
  );
}

export default observer(ActivityList);
