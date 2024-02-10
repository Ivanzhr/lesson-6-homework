import './App.css';
import React, { useState } from 'react';
import Gallery from './Gallery';
import Filter from './Filter';
import pic from './Allpic';
import Modal from './Modal';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [modal, setModal] = useState(null)

  const handleFilterClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredPic = selectedCategories.length === 0
    ? pic
    : pic.filter((item) => item.category.some((cat) => selectedCategories.includes(cat)));


  return (
    <>
      <h2>Фільтрувати</h2>
      <Filter onFilterClick={handleFilterClick} />
      <Gallery pic={filteredPic} setModal = {setModal}/>
      <Modal modal = {modal} setModal = {setModal}/>
    </>
  );
}

export default App;
