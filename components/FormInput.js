import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function FormInput() {
  const [name, setName] = useState(null);

  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [description, setDescription] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name : "",
      email : "",
      username : "",
      password : "",
      description : "",
    },
  });

  const onSubmit = async (data) => {
    const body = {
      name,

      email,
      username,
      password,
      description,
    };
    reset()
    console.log(data);
    await axios.post(`/api/create`, { ...body });
     
  };

  return (
    <Container>
      <Spacer y={2} />
      <Card variant="bordered">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid.Container gap={3} justify="center">
            <Grid>
              <Input
                bordered
                label="Name"
                placeholder="Name"
                {...register("Name", {
                  required: "Required",
                })}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid.Container gap={3} justify="center">
              <Grid>
                <Input
                  bordered
                  label="Email"
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && errors.email.message}
              </Grid>

              <Grid>
                <Input
                  bordered
                  label="Username"
                  placeholder="Username"
                  type={"text"}
                  {...register("Username", {
                    required: "Required",
                  })}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.Username && errors.Username.message}
              </Grid>
            </Grid.Container>

            <Grid.Container gap={3} justify="center">
              <Grid>
                <Input.Password
                  bordered
                  label="Password"
                  placeholder="Password"
                  {...register("Password", {
                    required: "Required",
                  })}
                  onChange={(e) => setPassword(e.target.value)}
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

            <Grid.Container gap={3} justify="center">
              <Grid>
                <Input.Textarea
                  bordered
                  label="description"
                  placeholder="description"
                  {...register("Description", {
                    required: "Required",
                  })}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid.Container>
          </Grid.Container>

          <button type="submit">Submit</button>
          <Spacer y={0.3} />
          <Button color={"error"}>Cancel</Button>
        </form>
      </Card>
    </Container>
  );
}
