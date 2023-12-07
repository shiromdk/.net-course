import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

function Homepage() {
  const { userStore , modalStore} = useStore();
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as="h2">Welcome to Reactivities</Header>
            <Button as={Link} to="/activities" size="huge" inverted>
              Go To Activities
            </Button>
          </>
        ) : (
            <>
          <Button onClick={()=> modalStore.openModal(<LoginForm/>)} to="/login" size="huge" inverted>
            Login
          </Button>
          <Button onClick={()=> modalStore.openModal(<RegisterForm/>)} to="/login" size="huge" inverted>
            Register
          </Button>
          </>
          
        )}
      </Container>
    </Segment>
  );
}

export default observer(Homepage);
