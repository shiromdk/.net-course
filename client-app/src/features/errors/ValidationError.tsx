import { Message } from "semantic-ui-react";

interface Props {
  errors: string[];
}

function ValidationError({ errors }: Props) {
  console.log(errors);
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err: string, i) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
}

export default ValidationError;
