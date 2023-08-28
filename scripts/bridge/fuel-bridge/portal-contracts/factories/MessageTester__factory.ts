/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';

import type { MessageTester } from '../MessageTester';

export class MessageTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    fuelMessagePortal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MessageTester> {
    return super.deploy(
      fuelMessagePortal,
      overrides || {}
    ) as Promise<MessageTester>;
  }
  getDeployTransaction(
    fuelMessagePortal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(fuelMessagePortal, overrides || {});
  }
  attach(address: string): MessageTester {
    return super.attach(address) as MessageTester;
  }
  connect(signer: Signer): MessageTester__factory {
    return super.connect(signer) as MessageTester__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MessageTester {
    return new Contract(address, _abi, signerOrProvider) as MessageTester;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract FuelMessagePortal',
        name: 'fuelMessagePortal',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'recipient',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'attemptSendMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'recipient',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'attemptSendMessageWithAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'data1',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'data2',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fuelMessagePortal',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTrustedSender',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'd1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'd2',
        type: 'uint256',
      },
    ],
    name: 'receiveMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5060405161076238038061076283398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6106cf806100936000396000f3fe6080604052600436106100745760003560e01c80637f2f2e711161004e5780637f2f2e71146101195780638f2e78891461012c5780639ffd85c41461014c578063e3a7fd751461016257600080fd5b80635176a43d1461008057806355b010cc146100ba5780637c8c29f7146100dc57600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b5060005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c657600080fd5b506100da6100d536600461054c565b610178565b005b3480156100e857600080fd5b507ff40001353a6b162f0ff9d59cae46ed49355aa4c424e3f79f6d84352f857155765b6040519081526020016100b1565b6100da610127366004610593565b610186565b34801561013857600080fd5b506100da6101473660046105b5565b610343565b34801561015857600080fd5b5061010b60015481565b34801561016e57600080fd5b5061010b60025481565b6101828282610353565b5050565b6000547ff40001353a6b162f0ff9d59cae46ed49355aa4c424e3f79f6d84352f857155769073ffffffffffffffffffffffffffffffffffffffff16331461022e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f43616c6c6572206973206e6f742074686520706f7274616c000000000000000060448201526064015b60405180910390fd5b600054604080517fd67bdd250000000000000000000000000000000000000000000000000000000081529051839273ffffffffffffffffffffffffffffffffffffffff169163d67bdd25916004808301926020929190829003018186803b15801561029857600080fd5b505afa1580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d09190610605565b14610337576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e76616c6964206d6573736167652073656e646572000000000000000000006044820152606401610225565b50600191909155600255565b61034e8383836103e1565b505050565b6000546040517f23c640e700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116906323c640e7906103ab908590859060040161061e565b600060405180830381600087803b1580156103c557600080fd5b505af11580156103d9573d6000803e3d6000fd5b505050505050565b6000546040517f23c640e700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116906323c640e790849061043b908790869060040161061e565b6000604051808303818588803b15801561045457600080fd5b505af1158015610468573d6000803e3d6000fd5b5050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126104b257600080fd5b813567ffffffffffffffff808211156104cd576104cd610472565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561051357610513610472565b8160405283815286602085880101111561052c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561055f57600080fd5b82359150602083013567ffffffffffffffff81111561057d57600080fd5b610589858286016104a1565b9150509250929050565b600080604083850312156105a657600080fd5b50508035926020909101359150565b6000806000606084860312156105ca57600080fd5b8335925060208401359150604084013567ffffffffffffffff8111156105ef57600080fd5b6105fb868287016104a1565b9150509250925092565b60006020828403121561061757600080fd5b5051919050565b82815260006020604081840152835180604085015260005b8181101561065257858101830151858201606001528201610636565b81811115610664576000606083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160600194935050505056fea2646970667358221220018d29a05e2bcb933ea52ed2a7fdbb14156f589f0c48c26eb3c8839fc260fa5364736f6c63430008090033';