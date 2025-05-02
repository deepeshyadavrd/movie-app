import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import CategoryList from '../components/CategoryList';
import SearchPage from '../components/SearchPage';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
    {/* <Navbar /> */}
    <ImageSlider />
    {/* <SearchBar /> */}
    <CategoryList />
  <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery.trim() !== '' && <SearchPage query={searchQuery} />}
    </div>
    </>
    
  );
}
