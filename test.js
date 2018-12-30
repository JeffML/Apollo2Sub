/* eslint-env mocha */
import chai from 'chai';
import fetch, { subscribe } from './fetch';

chai.should();

describe('subscribe, then go', function() {
    this.timeout(5000);

    const handlers = {
      next: (data) => {
        console.log(`received data:`, data);
        if (data.data.info === 'info3') {
            console.log('exiting...')
            process.exit(0);
        }
      },
      error: error => console.error(`received error ${error}`),
    };

    // get the subscriber ready...
    it('subscribe', async () => {
        const query = `subscription {
          info
        }`;
        subscribe(query, handlers);
      });
    
      it('go', async () => {
        const query = `query {
            go
        }`;

        const res = (await fetch(query)).data;
        res.should.have.property('go')
        res.go.should.equal('going')
    })
    
})