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
  const [selectProductTypeName, setSelectProductTypeName] =
    useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [selectTag, setSelectTag] = useState<string>('');

  const handleFilterDelete = (name: string) => {
    switch (name) {
      case 'type':
        setSelectProductTypeName('');
        break;
      case 'category':
        setSelectCategory('');
        break;
      case 'tag':
        setSelectTag('');
        break;
      case 'reset':
        setSelectProductTypeName('');
        setSelectCategory('');
        setSelectTag('');
        break;
    }
  };

  const handleSelectType = (name: string) => {
    setSelectProductTypeName(name);
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
          selectProductTypeName={selectProductTypeName}
          onSelectTypeName={handleSelectType}
        />

        <Divider className="border-gray-400 mb-3" />

        <Box className="h-10 space-x-2">
          {(selectProductTypeName || selectCategory || selectTag) && (
            <Chip
              icon={<RestartAltIcon className=" fill-white" />}
              label="reset"
              onClick={() => handleFilterDelete('reset')}
              className="text-white bg-main hover:bg-[#5b3e40]"
            />
          )}
          {selectProductTypeName && (
            <FilterChip
              labelType="Type"
              selectFilterName={selectProductTypeName}
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
