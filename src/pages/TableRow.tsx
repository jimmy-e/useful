import React from 'react';

interface Props {
  coin: any;
  favorites: Array<string>;
  onFavorite: (coinName: string) => void;
}

const TableRow: React.FC<Props> = ({ coin, favorites, onFavorite }) => (
  <tr>
    <td>
      <button onClick={() => onFavorite(coin.name)}>
        {favorites.includes(coin.name) ? 'Unfavorite' : 'Favorite'}
      </button>
    </td>
    <td>{coin.name}</td>
    <td>{coin.symbol}</td>
    <td>
      ${(Math.round(coin.priceUsd * 100) / 100).toFixed(2)}
    </td>
  </tr>
);

export default TableRow;
