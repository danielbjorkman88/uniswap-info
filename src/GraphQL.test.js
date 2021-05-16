import React from 'react';
import ReactDOM from 'react-dom';
import * as clients from './apollo/client';
import * as queries from './apollo/queries';

import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;


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

function getLiquidityPositions(address) {
  const result = clients.client
      .query({query: UNI_LIQ_POS3
      })
      .then((response) => {
      console.log(response.data)
      return response.data
      })
      .catch((error) => console.error(error))
  return result
}

const UNI_LIQ_POS2 = gql`
        query client {
            user(id: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"){
                liquidityPositions {
                    pair {
                        createdAtBlockNumber
                        token0{
                            symbol
                        }
                        token1{
                            symbol
                        }
                    }
                }
            }
        }
    `
 
const UNI_LIQ_POS3 = gql`
        query client {
            user(id: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"){
                id
            }
        }
        `

it('GQL queries', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));


  var mypairs = queries.ALL_PAIRS
  var rates = EXCHANGE_RATES
  var owen = clients.owenClient

  var query = queries.ALL_PAIRS


  var uniswap_liq = UNI_LIQ_POS2
  var data = getLiquidityPositions("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984")
  console.log("hello world")
  console.log(data)
  data.then()

});
