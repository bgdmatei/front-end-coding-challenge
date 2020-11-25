import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Loader from '../components/Loader';
import Chart from '../components/Chart';

const Graph = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);

  const dateFrom = '2018-08-25T12:30Z';
  const dateTo = '2018-08-25T13:30Z';
  const API = `https://api.carbonintensity.org.uk/intensity/${dateFrom}/${dateTo}`;

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setItems(res.data.data);
        setLoading(false);
      })
      .catch((error) => setHasError(error.message), setLoading(false));
  }, [API]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : hasError ? (
        <div className='error-message'>{hasError}</div>
      ) : (
        <>
          <div className='graph-info'>
            {items.map((item, i) => (
              <p key={i}>
                Carbon intensity from{' '}
                <strong>
                  {moment(item.from).format('MMMM Do YYYY - h:mm A')}
                </strong>{' '}
                to{' '}
                <strong>
                  {moment(item.to).format('MMMM Do YYYY - h:mm A')}
                </strong>{' '}
                is <span>{item.intensity.index}</span>
              </p>
            ))}
          </div>
          <Chart items={items} />
        </>
      )}
    </>
  );
};

export default Graph;
