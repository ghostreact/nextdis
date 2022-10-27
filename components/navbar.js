import { Button, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "../public/AcmeLogo";
import NextLink from "next/link";

export default function NavbarSide({ children }) {
  return (
    <>
      <Navbar isBordered variant={"floating"}>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle nav" showIn={"xs"} />
          <AcmeLogo />

          <Navbar.Content>
            <Navbar.Link href="/">
              <Text b color="inherit" hideIn={"xs"}>
                ACME
              </Text>
            </Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>

        <Navbar.Content  hideIn={"xs"} variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>

          <Navbar.Link href="/aboutme">About ME</Navbar.Link>
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
      {children}
    </>
  );
}
