import React from 'react';
import ReactDOM from 'react-dom';
import * as client from './apollo/client';
import * as queries from './apollo/queries';



it('GQL queries', () => {
  global.fetch = jest.fn().mockReturnValue(Promise.resolve({
    ok: true,
    json: () => Promise.resolve({'user': 'test'})
  }));


  var mypairs = queries.ALL_PAIRS


});
