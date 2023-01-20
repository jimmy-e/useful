import React, { useEffect, useState } from 'react';
import { EuiLoadingSpinner } from '@elastic/eui';
import TableContainer from './TableContainer';
import axios from 'axios';

const Useful: React.FC =() => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageN, setPageN] = useState<number>(0);
  const [data, setData] = useState();
  const [favorites, setFavorites] = useState<Array<string>>([]);
  const url = 'https://api.coincap.io/v2/assets';

  // const ws = new WebSocket('wss://ws.coincap.io/trades/binance');
  // console.log('0000000000');
  // console.log(ws);
  // console.log(ws.onmessage);
  // console.log('0000000000');
  // // ws.onmessage = evt => {
  // //   // listen to data sent from the websocket server
  // //   const message = JSON.parse(evt.data)
  // //   this.setState({dataFromServer: message})
  // //   console.log(message)
  // // }

  const pageSize = 25;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const data = await axios.get(
        url,
        { params: { limit: pageSize, offset: pageN * pageSize }}
      );
      setIsLoading(false);

      return setData(data.data.data);
    };

    getData();
  }, [pageN])

  const handlePrevious = () => {
    if (pageN === 0) {
      console.log('I SHOULD BE DISABLED AHH!');
    } else {
      setPageN((previous) => previous - 1);
    }
  };

  const handleNext = () => {
    setPageN((previous) => previous + 1);
  };

  const handleFavorite = (coinName: string) => {
    if (favorites.includes(coinName)) {
      setFavorites((previous) => previous.filter((i) => i !== coinName));
    } else {
      setFavorites((previous) => previous.concat(coinName));
    }
  }

  if (isLoading) {
    return <EuiLoadingSpinner size="xl" />;
  }

  return (
    <TableContainer
      data={data}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onFavorite={handleFavorite}
      favorites={favorites}
    />
  );
};

export default Useful;
