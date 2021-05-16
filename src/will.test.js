import React from 'react';
import ReactDOM from 'react-dom';
import * as clients from './apollo/client';
import * as queries from './apollo/queries';
import gql from 'graphql-tag'

import { useQuery } from '@apollo/client';


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

const getLiqPos = async (address) => {
    let data = {}

    try {
        let result = await clients.client.query({
            query: UNI_LIQ_POS3
        })
        data = result?
    } catch(e) {
        console.log(e)
    }
    return data
}

export const UNI_LIQ_POS1 = (address) => {
    gql`
        query client {
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
}

const UNI_LIQ_POS2 =
    gql`
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

    const UNI_LIQ_POS3 =
        gql`
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

  var uniswap_liq = UNI_LIQ_POS2
  var owen = clients.owenClient
  var data = getLiquidityPositions("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984")
  console.log("hello world")
  console.log(data)
  data.then()

});
