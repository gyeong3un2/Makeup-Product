"use client"

import { Container, Divider, Grid } from "@mui/material";
import Header from "./_component/Header";
import DisplayProducts from "./_component/DisplayProducts";
import GlobalNavigation from "./_component/GlobalNavigation";
import SideNavigation from "./_component/SideNavigation";
import ProductFilter from "./_component/ProductFilter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container className="max-w-6xl">
        <Header />

        <GlobalNavigation />

        <Divider className="border-gray-400 mb-10" />

        <ProductFilter />

        <DisplayProducts />
      </Container>

      <SideNavigation />
    </main>
  );
}
