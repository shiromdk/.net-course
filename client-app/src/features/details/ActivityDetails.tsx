import { Button, Card, Grid, Image } from "semantic-ui-react";

import { useStore } from "../../stores/store";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../layout/LoadingComponent";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSidebar from "./ActivityDetailSiderbar";

function ActivityDetails() {
  const { activityStore } = useStore();
  const { id } = useParams();
  const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;

  useEffect(()=>{
    if(id) loadActivity(id)
  },[id, loadActivity])

  if (loadingInitial || !activity) return <LoadingComponent inverted={false} content={"Loading"}/>;
  return (
    <Grid>
        <Grid.Column width={10}>
          <ActivityDetailHeader activity={activity} />
          <ActivityDetailInfo activity={activity}/>
          <ActivityDetailChat/>
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetailSidebar/>
        </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDetails);
