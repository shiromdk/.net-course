import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";

import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../layout/LoadingComponent";

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities ,activityRegistry } = activityStore


  useEffect(() => {
    if(activityRegistry.size === 0 ){
      activityStore.loadActivities();
    }

  }, [activityRegistry.size, activityStore, loadActivities]);
  
  if (activityStore.loadingInitial)
    return <LoadingComponent content={"Loading App"} inverted={false} />;
  return (
    <Grid>
      <Grid.Column width={"10"}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
export default observer(ActivityDashboard);
