import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate("/posts");
    }
  }, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    let email = e.target.email?.value;
    let password = e.target.password?.value;
    if (!email || !password) return;
    loginService(email, password);
  };
  return (
    <Container size={420} my={40} Width={620}>
      <form onSubmit={onLogin}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput 
          type="email" 
          label="Email" 
          name="email"
          placeholder="you@mantine.dev" 
          required />
        <PasswordInput 
          name="password"
          type="password"
          label="Password" 
          placeholder="Your password" 
          required mt="md" />
        <Button type="Submit" fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
          {authLoading ? <h2>Loading...</h2> : null}
      </form>
    </Container>
  );
};

export default LoginPage;
