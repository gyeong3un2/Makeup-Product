"use client"

import { useState } from "react";
import { Container, Divider } from "@mui/material";
import Header from "./_component/Header";
import DisplayProducts from "./_component/DisplayProducts";
import GlobalNavigationBar from "./_component/GlobalNavigationBar";
import SideNavigationBar from "./_component/SideNavigationBar";

function Home() {
  const [selectType, setSelectType] = useState<string>('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      { selectType && <SideNavigationBar/>}

      <Container className="max-w-6xl">
        <Header />

        <GlobalNavigationBar selectType={selectType} setSelectType={setSelectType}/>

        <Divider className="border-gray-400 mb-10" />

        <DisplayProducts />
      </Container>
    </main>
  );
}

export default Home;