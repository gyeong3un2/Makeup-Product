import { Container, Divider } from "@mui/material";
import Header from "./_component/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-12">
      <Container className=" max-w-screen-2xl">
        <Header/>

        <Divider className="border-black"/>

        {/* Body */}
      </Container>
    </main>
  );
}
