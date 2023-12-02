import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { ChangeEvent, useState } from "react";

interface Props{
    activity: Activity | undefined;
    closeForm: ()=> void;
    
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({ activity: selectedActivity, createOrEdit,closeForm}:Props){

    const initialState:Activity = selectedActivity ?? {
        id:'',
        title:'',
        category:'',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [ activity, setActivity ] = useState<Activity>(initialState)

    function handleSubmit(){
        createOrEdit(activity)
    }

    function handleInputChange(event:ChangeEvent<HTMLInputElement| HTMLTextAreaElement>){
        const { name, value } = event.target;
        console.log(value)
        setActivity({...activity, [name]:value});
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input placeholder="Title" value={activity.title} name="title" onChange={handleInputChange}/>
                <Form.TextArea placeholder="Description"  value={activity.description} name="description" onChange={handleInputChange} />
                <Form.Input placeholder="Category"  value={activity.category} name="category" onChange={handleInputChange} />
                <Form.Input placeholder="Date"  value={activity.date} name="date" onChange={handleInputChange}  />
                <Form.Input placeholder="City" value={activity.city} name="city" onChange={handleInputChange}  />
                <Form.Input placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange} />
                <Button floated="right" onClick={handleSubmit} positive type="submit" content="Submit" />
                <Button floated="right" onClick={closeForm} type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}