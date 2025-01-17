/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IERC1822ProxiableUpgradeable } from '../IERC1822ProxiableUpgradeable';

export class IERC1822ProxiableUpgradeable__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1822ProxiableUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1822ProxiableUpgradeable;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
