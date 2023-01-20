import React from 'react';
import TableRow from './TableRow';

interface Props {
  data: any;
  favorites: Array<string>;
  onFavorite: (coinName: string) => void;
}

const Table: React.FC<Props> = ({ data, favorites, onFavorite }) => (
  <table>
    <tr>
      <th>Favorite Button</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Price</th>
    </tr>
    {data.map((coin, id) => (<TableRow key={`${coin.name}-${id}`} favorites={favorites} coin={coin} onFavorite={onFavorite}/>))}
  </table>
);

export default Table;
