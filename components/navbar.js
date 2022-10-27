import { Button, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "../public/AcmeLogo";

export default function NavbarSide() {
  return (
    <Navbar isBordered variant={"sticky"}>
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle nav" />
        <AcmeLogo />
        <Text b color="inherit" hideIn={"xs"}>
          ACME
        </Text>
      </Navbar.Brand>

      <Navbar.Content enableCursorHighlight hideIn={"xs"} variant="underline">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Link color={"inherit"} href="#">
          Login
        </Navbar.Link>
        <Navbar.Item href="#">
          <Button auto flat as={Link} href="#">
            Login
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
