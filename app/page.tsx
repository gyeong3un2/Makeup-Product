import { Container, Divider } from "@mui/material";
import Header from "./_component/Header";
import DisplayProducts from "./_component/DisplayProducts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-12">
      <Container className="max-w-6xl">
        <Header/>

        <Divider className="border-black mb-10"/>

        <DisplayProducts/>
      </Container>
    </main>
  );
}
