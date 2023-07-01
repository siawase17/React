import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let prev = index > 0;
  let next = index < sculptureList.length - 1;

  function handleNextClick() {
    if (next) {
      setIndex(index + 1);
    }
  }

  function handlePrevClick() {
    if (prev) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick} disabled={!next}>
        {/* next가 False인 경우, Next 버튼 비활성화 */}
        Next
      </button>
      <button onClick={handlePrevClick} disabled={!prev}>
        {/* prev가 False인 경우, Previous 버튼 비활성화 */}
        Previous
      </button>  
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
