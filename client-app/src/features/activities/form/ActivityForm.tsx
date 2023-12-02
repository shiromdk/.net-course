import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";



function ActivityForm() {
  const { activityStore } = useStore();
  const { selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;
  const initialState: Activity = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState<Activity>(initialState);

  function handleSubmit() {
    activity.id? updateActivity(activity) : createActivity(activity)
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    console.log(value);
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          type="date"
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button
          floated="right"
          onClick={handleSubmit}
          positive
          type="submit"
          content="Submit"
          loading={loading}
        />
        <Button
          floated="right"
          onClick={closeForm}
          type="button"
          content="Cancel"
          loading={loading}
        />
      </Form>
    </Segment>
  );
}

export default observer(ActivityForm);