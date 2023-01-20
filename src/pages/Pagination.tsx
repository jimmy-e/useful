import React from 'react';

interface Props {
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination: React.FC<Props> = ({ onNext, onPrevious }) => (
  <>
    <button onClick={onPrevious}>Previous</button>
    <button onClick={onNext}>Next</button>
  </>
);

export default Pagination;
