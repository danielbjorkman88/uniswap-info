import React from 'react';
import ReactDOM from 'react-dom';
import * as clients from './apollo/client';
import * as queries from './apollo/queries';
//import gql from 'graphql-tag'

import { gql, useQuery } from '@apollo/client';

async function getLiquidityPositions(address, blockNumber) {
    let result = await clients.client.query({
        query: UNI_LIQ_POS,
        variables: {
            address: address,
            blockNumber: blockNumber,
        },
        fetchPolicy: "no-cache",
    });
    return result?.data?.user?.liquidityPositions?.[0]?.pair?.token0?.symbol + result?.data?.user?.liquidityPositions?.[0]?.pair?.token1?.symbol;
}

const UNI_LIQ_POS = gql`
    query liquidityPositions($address: ID!, $blockNumber: Int!) {
        user(id: $address, block: {number: $blockNumber}) {
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


it('Fetches data', async () => {
    const data = await getLiquidityPositions("0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", 10900000)
    console.log(data)
    expect(data).toBe('SAKEUSDT');
});
