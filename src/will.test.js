import React from 'react';
import ReactDOM from 'react-dom';
import * as clients from './apollo/client';
import * as queries from './apollo/queries';

import { useQuery, gql } from '@apollo/client';


function getLiquidityPositions(address) {
    const result = clients.client.query({
      query: UNI_LIQ_POS(address),
      fetchPolicy: 'cache-first',
    })
    return result;
}

const UNI_LIQ_POS = (address) => {
    const queryString = `
        query user {
            user(id: ${address}){
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
    return gql(queryString)
}

it('GQL queries', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));

  var uniswap_liq = UNI_LIQ_POS
  var owen = clients.owenClient
  var data = getLiquidityPositions("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984")
  console.log("hello world")
  console.log(data)

});
