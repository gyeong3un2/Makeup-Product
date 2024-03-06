'use client';

import { useState } from 'react';
import { Box, Chip, Container, Divider } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Header from '../components/home/Header';
import DisplayProducts from '../components/home/DisplayProducts';
import GlobalNavigationBar from '../components/home/GlobalNavigationBar';
import SideNavigationBar from '../components/home/SideNavigationBar';
import FilterChip from '../components/FilterChip';

function Home() {
  const [selectProductTypeName, setSelectProductTypeName] =
    useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('');
  const [selectTag, setSelectTag] = useState<string>('');

  const handleTypeDelete = () => {
    setSelectProductTypeName('');
  };
  const handleCategoryDelete = () => {
    setSelectCategory('');
  };
  const handleTagDelete = () => {
    setSelectTag('');
  };
  const handleReset = () => {
    handleTypeDelete();
    handleCategoryDelete();
    handleTagDelete();
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
          selectType={selectProductTypeName}
          onSelectType={handleSelectType}
        />

        <Divider className="border-gray-400 mb-3" />

        <Box className="h-10 space-x-2">
          {(selectProductTypeName || selectCategory || selectTag) && (
            <Chip
              icon={<RestartAltIcon className=" fill-white" />}
              label="reset"
              onClick={handleReset}
              className="text-white bg-main hover:bg-[#5b3e40]"
            />
          )}
          {selectProductTypeName && (
            <FilterChip
              labelType="Type"
              selectFilterName={selectProductTypeName}
              onDeleteChip={handleTypeDelete}
            />
          )}
          {selectCategory && (
            <FilterChip
              labelType="Category"
              selectFilterName={selectCategory}
              onDeleteChip={handleCategoryDelete}
            />
          )}
          {selectTag && (
            <FilterChip
              labelType="Tag"
              selectFilterName={selectTag}
              onDeleteChip={handleTagDelete}
            />
          )}
        </Box>
        <DisplayProducts />
      </Container>
    </main>
  );
}

export default Home;
