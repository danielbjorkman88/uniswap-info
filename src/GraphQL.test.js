import React from 'react';
import ReactDOM from 'react-dom';
import * as client from './apollo/client';
import * as queries from './apollo/queries';

import { useQuery, gql } from '@apollo/client';


function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}



it('GQL queries', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));

  var mypairs = queries.ALL_PAIRS
  var rates = EXCHANGE_RATES
  var owen = client.owenClient

});
