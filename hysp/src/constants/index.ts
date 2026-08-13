/**
 * Copyright (c) 2025, Everstake.
 * Licensed under the BSD-3-Clause License. See LICENSE file for details.
 */

import type { NetworksMap } from '../types';

export const NETWORKS: NetworksMap = {
  eth_mainnet: {
    issuanceVaultAddress: '0xc21511EDd1E6eCdc36e8aD4c82117033e50D5921',
    redemptionVaultAddress: '0x5aeA6D35ED7B3B7aE78694B7da2Ee880756Af5C0',
    oracleAddress: '0x84303e5568C7B167fa4fEBc6253CDdfe12b7Ee4B',
    tokenAddress: '0x7CF9DEC92ca9FD46f8d86e7798B72624Bc116C05',
    lpAddress: '0x0461bD693caE49bE9d030E5c212e080F9c78B846',
    usdcAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    tBillAddress: '0xDD629E5241CbC5919847783e6C96B2De4754e438',
    tBillDataFeed: '0xfCEE9754E8C375e145303b7cE7BEca3201734A2B',

    rpcUrl: 'https://mainnet.infura.io/v3/f583d4f04d384b9e8c59a7ff1c9f68f1',
  },
};

export const ZeroReferrer =
  '0x0000000000000000000000000000000000000000000000000000000000000000';

export const SECONDS_IN_DAY = 86400;
export const DAYS_IN_YEAR = 365;

export const MULTICALL3_ADDRESS = '0xcA11bde05977b3631167028862bE2a173976CA11';
