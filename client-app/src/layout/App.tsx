import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid} from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  const [ editMode, setEditMode] = useState(false);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((el) => el.id == id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleOpenForm(id?:string){
    console.log(id)
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleCloseForm(){
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id ? setActivities([...activities.filter(x=>x.id != activity.id), activity]) : 
    setActivities([...activities, {...activity, id: uuid()}])
    setEditMode(false)
    setSelectedActivity(activity)
  }

  function handleDeleteActivity(id?:string){
    setActivities([...activities.filter(x=>x.id !==id)])
  }

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);
  return (
    <>
      <Navbar openForm={handleOpenForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          selectedActivity={selectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode = { editMode }
          openForm = { handleOpenForm }
          closeForm = { handleCloseForm }
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity = { handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;
