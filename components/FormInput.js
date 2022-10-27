import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";

export default function FormInput() {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const headerSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, lastName, email, username, password };
      await fetch(`/api/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const headerName = (e) => {
    setName(e.target.value);
  };

  const headerLastName = (e) => {
    setLastName(e.target.value);
  };

  const headerEmail = (e) => {
    setEmail(e.target.value);
  };

  const headerUsername = (e) => {
    setUsername(e.target.value);
  };

  const headerPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Spacer y={2} />
      <Card variant="bordered">
        <form onSubmit={headerSubmit}>
          <Grid.Container gap={3} justify="center">
            <Grid>
              <Input
                bordered
                label="Name"
                placeholder="Name"
                onChange={headerName}
              />
            </Grid>

            <Grid>
              <Input
                bordered
                label="LastName"
                placeholder="LastName"
                onChange={headerLastName}
              />
            </Grid>

            <Grid.Container gap={3} justify="center">
              <Grid>
                <Input
                  bordered
                  label="Email"
                  placeholder="Email"
                  onChange={headerEmail}
                />
              </Grid>

              <Grid>
                <Input
                  bordered
                  label="Username"
                  placeholder="Username"
                  onChange={headerUsername}
                />
              </Grid>
            </Grid.Container>

            <Grid.Container gap={3} justify="center">
              <Grid>
                <Input.Password
                  bordered
                  label="Password"
                  placeholder="Password"
                  onChange={headerPassword}
                />
              </Grid>
              {/* <Grid>
                <Input.Password
                  bordered
                  label="Confirm-Password"
                  placeholder="Confirm-Password"
                  //   onChange={headerName}
                />
              </Grid> */}
            </Grid.Container>
          </Grid.Container>
        </form>

        <Button>Submit</Button>
        <Spacer y={0.3} />
        <Button color={"error"}>Cancle</Button>
      </Card>
    </Container>
  );
}
