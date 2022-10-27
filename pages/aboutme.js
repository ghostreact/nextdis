import { Button, Container, Text } from "@nextui-org/react";
import RootLayout from "./layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import wave from "../public/wave.svg";

export default function Aboutme() {
  return (
    <RootLayout>
      <Container>
        <Button>ok</Button>
        <Text>this is about Me Page</Text>
      </Container>

    
    </RootLayout>
  );
}
