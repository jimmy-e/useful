import React from 'react';
import Table from './Table';
import Pagination from './Pagination';

interface Props {
  data: any;
  onNext: () => void;
  onPrevious: () => void;
  favorites: Array<string>;
  onFavorite: (coinName: string) => void;
}

const TableContainer: React.FC<Props> = ({ data, onNext, onPrevious, favorites, onFavorite }) => (
  <>
    <Pagination onNext={onNext} onPrevious={onPrevious} />
    <Table data={data} favorites={favorites} onFavorite={onFavorite} />
  </>
);

export default TableContainer;
