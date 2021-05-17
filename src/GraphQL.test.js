import React from 'react';
import ReactDOM from 'react-dom';
import * as clients from './apollo/client';
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

Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function getLiquidityPositions(address) {
  const result = clients.client
      .query({query: UNI_LIQ_POS3
      })
      .then((response) => {
      console.log(response.data)
      return response.data
      })
      .catch((error) => console.error(error))
  return result
});

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
  var owen = clients.owenClient
  var query = queries.ALL_PAIRS

  var uniswap_liq = UNI_LIQ_POS2
  //var data = getLiquidityPositions("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984");
  var data = Promise.resolve("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984")


  //const data = await Promise.resolve({});

  console.log("Test log:")
  console.log(data)
  data.then()

});
