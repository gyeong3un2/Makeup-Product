'use client';

import { useState } from 'react';
import { Box, Chip, Container, Divider } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Header from './_components/Header';
import DisplayProducts from './_components/DisplayProducts';
import GlobalNavigationBar from './_components/GlobalNavigationBar';
import SideNavigationBar from './_components/SideNavigationBar';
import FilterChip from '../components/ui/FilterChip';

function Home() {
  const [selectProductType, setSelectProductType] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [selectTag, setSelectTag] = useState<string>('');

  const handleSelectType = (name: typeof selectProductType) => {
    setSelectProductType(name);
  };

  const handleFilterDelete = (name: string) => {
    switch (name) {
      case 'type':
        setSelectProductType('');
        break;
      case 'category':
        setSelectCategory('');
        break;
      case 'tag':
        setSelectTag('');
        break;
      case 'reset':
        setSelectProductType('');
        setSelectCategory('');
        setSelectTag('');
        break;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SideNavigationBar
        selectTag={selectTag}
        selectCategory={selectCategory}
        setSelectTag={setSelectTag}
        setSelectCategory={setSelectCategory}
      />

      <Container className="max-w-6xl">
        <Header />

        <GlobalNavigationBar
          selectProductType={selectProductType}
          onSelectType={handleSelectType}
        />

        <Divider className="border-gray-400 mb-3" />

        <Box className="h-10 space-x-2">
          {(selectProductType || selectCategory || selectTag) && (
            <Chip
              icon={<RestartAltIcon className=" fill-white" />}
              label="reset"
              onClick={() => handleFilterDelete('reset')}
              className="text-white bg-main hover:bg-[#5b3e40]"
            />
          )}
          {selectProductType && (
            <FilterChip
              labelType="Type"
              selectFilterName={selectProductType}
              onDeleteChip={() => handleFilterDelete('type')}
            />
          )}
          {selectCategory && (
            <FilterChip
              labelType="Category"
              selectFilterName={selectCategory}
              onDeleteChip={() => handleFilterDelete('category')}
            />
          )}
          {selectTag && (
            <FilterChip
              labelType="Tag"
              selectFilterName={selectTag}
              onDeleteChip={() => handleFilterDelete('tag')}
            />
          )}
        </Box>
        <DisplayProducts />
      </Container>
    </main>
  );
}

export default Home;
