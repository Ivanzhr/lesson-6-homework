import './filter.css';
import { useState } from 'react';

function Filter({ onFilterClick }) {
  const [activeButtons, setActiveButtons] = useState([]);

  const arr = ['пейзаж', 'осінь', 'натюрморт', 'плоди', 'квіти', 'небо'];

  const handleClick = (category) => {
    if (activeButtons.includes(category)) {
      setActiveButtons(activeButtons.filter((item) => item !== category));
    } else {
      setActiveButtons([...activeButtons, category]);
    }
    onFilterClick(category);
  };

  return (
    <div className="filter">
      {arr.map((category, index) => (
        <button
          onClick={() => handleClick(category)}
          key={index}
          className={activeButtons.includes(category) ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
