import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "./ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  deleteActivity: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean

}

export default function ActivityDashboard({
  activities,
  editMode,
  selectActivity,
  selectedActivity,
  openForm,
  closeForm,
  cancelSelectActivity,
  createOrEdit,
  deleteActivity,
  submitting
}: Props) {
  return (
    <Grid>
      <Grid.Column width={"10"}>
        <ActivityList submitting={submitting} deleteActivity={deleteActivity} activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width="6">
      {selectedActivity && !editMode && (
    
          <ActivityDetails
            openForm={openForm}
            closeForm={closeForm}
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
          />
      
     
      )}
          {editMode && (
            <ActivityForm submitting={submitting} closeForm={closeForm} activity={selectedActivity}  createOrEdit={createOrEdit}/>
          )}
         </Grid.Column>
    </Grid>
  );
}
