import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/store";
import { Container, Header, Segment } from "semantic-ui-react";

 function ServerError(){
    const { commonStore} = useStore()

    return(
        <Container>
            <Header as="h1" content='Server Error' />
            <Header sub as='h5' content={commonStore.error?.message} />
            { commonStore.error?.details && (
                    <Segment>
                        <Header as='h4' content="Stack Trace" color="teal" />
                        <code style={{marginTop: '10px'}}>
                            {commonStore.error.details}
                        </code>
                    </Segment>
                )
            }
        </Container>
    )
}

export default observer(ServerError);