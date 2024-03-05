"use client"

import { useState } from "react";
import { Box, Chip, Container, Divider } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Header from "./_component/Header";
import DisplayProducts from "./_component/DisplayProducts";
import GlobalNavigationBar from "./_component/GlobalNavigationBar";
import SideNavigationBar from "./_component/SideNavigationBar";

function Home() {
  const [selectType, setSelectType] = useState<string>('');
  const [selectFilter, setSelectFilter] = useState<string>('');

  const handleReset = () => {
    setSelectType('');
    setSelectFilter('');
  }
  const handleFilterDelete = () => {
    setSelectFilter('');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      { selectType && <SideNavigationBar selectFilter={selectFilter} setSelectFilter={setSelectFilter}/>}

      <Container className="max-w-6xl">
        <Header />

        <GlobalNavigationBar selectType={selectType} setSelectType={setSelectType} onClick={handleFilterDelete}/>

        <Divider className="border-gray-400 mb-3" />
        
        <Box className="h-10 space-x-2">
          { selectType && <Chip icon={<RestartAltIcon className=" fill-white"/>} label='reset' onClick={handleReset} className="text-white bg-main hover:bg-[#5b3e40]" />}
          { selectFilter && <Chip label={`Filter: ${selectFilter}`} variant="outlined" onDelete={handleFilterDelete} className="text-main border-main" />}
        </Box>
        <DisplayProducts />
      </Container>
    </main>
  );
}

export default Home;