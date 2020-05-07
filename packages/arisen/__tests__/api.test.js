'use strict';
const {assert} = require('chai');

require('isomorphic-fetch');
const LightAPI = require('../lib/api').default;
const Account = require('../../core/lib/models/Account').default;
const Network = require('../../core/lib/models/Network').default;

const network = Network.fromJson({
	blockchain:'arisen',
	name:'ARISEN Mainnet',
	host:'https://greatchains.arisennodes.io',
	port:443,
	protocol:'https',
	chainId:'136ce1b8190928711b8bb50fcae6c22fb620fd2c340d760873cf8f7ec3aba2b3',
});

const account = Account.fromJson({
	name:'ramdeathtest',
	authority:'active',
	publicKey:'',
	keypairUnique:'abcd',
	networkUnique:network.unique(),
});

describe('arisen', () => {

    it('should be able to fetch balances', done => {
        new Promise(async () => {

            done();
        })
    });
});
