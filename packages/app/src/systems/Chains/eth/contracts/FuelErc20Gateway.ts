export type FuelERC20GatewayArgs = {
  Deposit: {
    amount: bigint;
    sender: `0x${string}`;
    tokenId: `0x${string}`;
    fuelTokenId: `0x${string}`;
  };
};

export const FUEL_ERC_20_GATEWAY = {
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'previousAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'AdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beacon',
          type: 'address',
        },
      ],
      name: 'BeaconUpgraded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'sender',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'tokenId',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'fuelTokenId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Deposit',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Paused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Unpaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'recipient',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'tokenId',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'fuelTokenId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Withdrawal',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
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
    {
      inputs: [],
      name: 'DEPOSIT_TO_CONTRACT',
      outputs: [
        {
          internalType: 'bytes1',
          name: '',
          type: 'bytes1',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PAUSER_ROLE',
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
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'to',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'tokenId',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'fuelTokenId',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'deposit',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'to',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'tokenId',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'fuelTokenId',
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
      name: 'depositWithData',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tokenId',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'finalizeWithdrawal',
      outputs: [],
      stateMutability: 'payable',
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
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
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
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract FuelMessagePortal',
          name: 'fuelMessagePortal',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
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
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'fuelTokenId',
          type: 'bytes32',
        },
      ],
      name: 'tokensDeposited',
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
      name: 'unpause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'upgradeTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'upgradeToAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ],
  hashcode:
    '0x60a0604052306080523480156200001557600080fd5b506200002062000026565b620000e8565b600054610100900460ff1615620000935760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e6576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b60805161270b62000120600039600081816105f50152818161068b0152818161080101528181610897015261098e015261270b6000f3fe60806040526004361061016a5760003560e01c806352d1902d116100cb57806391d148541161007f578063c4d66de811610059578063c4d66de814610422578063d547741f14610442578063e63ab1e91461046257600080fd5b806391d1485414610383578063a217fddf146103c9578063ae04ec40146103de57600080fd5b80635c975abb116100b05780635c975abb1461034357806382afb5e11461035b5780638456cb591461036e57600080fd5b806352d1902d1461031b57806353ef14611461033057600080fd5b80633ab09beb1161012257806347aaa5091161010757806347aaa5091461026c5780634f1ef286146102d15780635176a43d146102e457600080fd5b80633ab09beb146102445780633f4ba83a1461025757600080fd5b80632f2ff15d116101535780632f2ff15d146101e257806336568abe146102045780633659cfe61461022457600080fd5b806301ffc9a71461016f578063248a9ca3146101a4575b600080fd5b34801561017b57600080fd5b5061018f61018a3660046120cc565b610496565b60405190151581526020015b60405180910390f35b3480156101b057600080fd5b506101d46101bf36600461210e565b600090815260c8602052604090206001015490565b60405190815260200161019b565b3480156101ee57600080fd5b506102026101fd36600461213c565b61052f565b005b34801561021057600080fd5b5061020261021f36600461213c565b610559565b34801561023057600080fd5b5061020261023f36600461216c565b6105ea565b610202610252366004612189565b610788565b34801561026357600080fd5b506102026107e3565b34801561027857600080fd5b506102a07f9de96e965c10cc5335684b75df5a9ba1dd4ff5d07baf3989affd5e9a8efb85ad81565b6040517fff00000000000000000000000000000000000000000000000000000000000000909116815260200161019b565b6102026102df3660046122a0565b6107f6565b3480156102f057600080fd5b506000546201000090046001600160a01b03166040516001600160a01b03909116815260200161019b565b34801561032757600080fd5b506101d4610981565b61020261033e3660046122f0565b610a46565b34801561034f57600080fd5b5060645460ff1661018f565b610202610369366004612331565b610bbe565b34801561037a57600080fd5b50610202610cb1565b34801561038f57600080fd5b5061018f61039e36600461213c565b600091825260c8602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156103d557600080fd5b506101d4600081565b3480156103ea57600080fd5b506101d46103f936600461239e565b6001600160a01b0391909116600090815261015e60209081526040808320938352929052205490565b34801561042e57600080fd5b5061020261043d36600461216c565b610ce3565b34801561044e57600080fd5b5061020261045d36600461213c565b610e8b565b34801561046e57600080fd5b506101d47f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061052957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b600082815260c8602052604090206001015461054a81610eb0565b6105548383610eba565b505050565b6001600160a01b03811633146105dc5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6105e68282610f5c565b5050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106895760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016105d3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106e47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146107605760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016105d3565b61076981610fdf565b6040805160008082526020820190925261078591839190610fea565b50565b6107906111b7565b60408051602081018490526001600160a01b038516818301523360608201526080810186905260a08082018490528251808303909101815260c09091019091526107dc8484848461120c565b5050505050565b60006107ee81610eb0565b610785611333565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108955760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016105d3565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108f07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b03161461096c5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016105d3565b61097582610fdf565b6105e682826001610fea565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a215760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016105d3565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610a4e6111b7565b6000546201000090046001600160a01b03163314610aae5760405162461bcd60e51b815260206004820152601860248201527f43616c6c6572206973206e6f742074686520706f7274616c000000000000000060448201526064016105d3565b60008111610afe5760405162461bcd60e51b815260206004820152601460248201527f43616e6e6f74207769746864726177207a65726f00000000000000000000000060448201526064016105d3565b6000610b08611385565b6001600160a01b038416600090815261015e60209081526040808320848452909152902054909150610b3b9083906123f9565b6001600160a01b038416600081815261015e60209081526040808320868452909152902091909155610b6e908584611411565b60408051828152602081018490526001600160a01b0380861692908716917f7b1dbb7a94949c5c35d1508d41067bc208c0cbd120653b73c8ebd979c63e16b291015b60405180910390a350505050565b610bc66111b7565b8051610c435760408051602081018590526001600160a01b038616818301523360608201526080810187905260a081018490527f9d0000000000000000000000000000000000000000000000000000000000000060c0820152815160a181830301815260c1909101909152610c3d8585858461120c565b506107dc565b604051600090610c8c9085906001600160a01b0388169033908a9088907f9de96e965c10cc5335684b75df5a9ba1dd4ff5d07baf3989affd5e9a8efb85ad90899060200161243c565b6040516020818303038152906040529050610ca98585858461120c565b505050505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610cdb81610eb0565b6107856114d8565b600054610100900460ff1615808015610d035750600054600160ff909116105b80610d1d5750303b158015610d1d575060005460ff166001145b610d8f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016105d3565b6000805460ff191660011790558015610dcf57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610dd882611515565b610de061159b565b610de8611620565b610df0611620565b610dfb600033610eba565b610e257f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610eba565b80156105e657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b600082815260c86020526040902060010154610ea681610eb0565b6105548383610f5c565b610785813361169d565b600082815260c8602090815260408083206001600160a01b038516845290915290205460ff166105e657600082815260c8602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610f183390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260c8602090815260408083206001600160a01b038516845290915290205460ff16156105e657600082815260c8602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006105e681610eb0565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561101d5761055483611730565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561105657600080fd5b505afa9250505080156110a4575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526110a1918101906124a7565b60015b6111165760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016105d3565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146111ab5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016105d3565b50610554838383611806565b60645460ff161561120a5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016105d3565b565b6000821161125c5760405162461bcd60e51b815260206004820152601360248201527f43616e6e6f74206465706f736974207a65726f0000000000000000000000000060448201526064016105d3565b6112716001600160a01b038516333085611831565b6001600160a01b038416600090815261015e602090815260408083208684529091529020546112a19083906124c0565b6001600160a01b038516600090815261015e602090815260408083208784529091529020556112f07f809f80a984a60d641d4a6d284e3969ff380eb478e587bcba0ed1a3f0ef271ede82611882565b60408051848152602081018490526001600160a01b0386169133917f7b8033c50ae5dba139b35a4f92bf1257c21954d40291216edcfc992920ef84b49101610bb0565b61133b611900565b6064805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60008060029054906101000a90046001600160a01b03166001600160a01b031663d67bdd256040518163ffffffff1660e01b815260040160206040518083038186803b1580156113d457600080fd5b505afa1580156113e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061140c91906124a7565b905090565b6040516001600160a01b0383166024820152604481018290526105549084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611952565b6114e06111b7565b6064805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113683390565b600054610100900460ff166115925760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105d3565b61078581611a37565b600054610100900460ff166116185760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105d3565b61120a611af4565b600054610100900460ff1661120a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105d3565b600082815260c8602090815260408083206001600160a01b038516845290915290205460ff166105e6576116d081611b7d565b6116db836020611b8f565b6040516020016116ec9291906124d8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905262461bcd60e51b82526105d3916004016125a3565b6001600160a01b0381163b6117ad5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016105d3565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b61180f83611dbf565b60008251118061181c5750805b156105545761182b8383611dff565b50505050565b6040516001600160a01b038085166024830152831660448201526064810182905261182b9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611456565b6000546040517f23c640e7000000000000000000000000000000000000000000000000000000008152620100009091046001600160a01b0316906323c640e7906118d290859085906004016125b6565b600060405180830381600087803b1580156118ec57600080fd5b505af1158015610ca9573d6000803e3d6000fd5b60645460ff1661120a5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016105d3565b60006119a7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611f0a9092919063ffffffff16565b80519091501561055457808060200190518101906119c591906125cf565b6105545760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105d3565b600054610100900460ff16611ab45760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105d3565b600080546001600160a01b0390921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b600054610100900460ff16611b715760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016105d3565b6064805460ff19169055565b60606105296001600160a01b03831660145b60606000611b9e8360026125f1565b611ba99060026124c0565b67ffffffffffffffff811115611bc157611bc16121c6565b6040519080825280601f01601f191660200182016040528015611beb576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611c2257611c2261262e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611c8557611c8561262e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611cc18460026125f1565b611ccc9060016124c0565b90505b6001811115611d69577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611d0d57611d0d61262e565b1a60f81b828281518110611d2357611d2361262e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611d628161265d565b9050611ccf565b508315611db85760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016105d3565b9392505050565b611dc881611730565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b611e7e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016105d3565b600080846001600160a01b031684604051611e999190612692565b600060405180830381855af49150503d8060008114611ed4576040519150601f19603f3d011682016040523d82523d6000602084013e611ed9565b606091505b5091509150611f0182826040518060600160405280602781526020016126af60279139611f21565b95945050505050565b6060611f198484600085611f3a565b949350505050565b60608315611f30575081611db8565b611db8838361202c565b606082471015611fb25760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105d3565b600080866001600160a01b03168587604051611fce9190612692565b60006040518083038185875af1925050503d806000811461200b576040519150601f19603f3d011682016040523d82523d6000602084013e612010565b606091505b509150915061202187838387612056565b979650505050505050565b81511561203c5781518083602001fd5b8060405162461bcd60e51b81526004016105d391906125a3565b606083156120c25782516120bb576001600160a01b0385163b6120bb5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105d3565b5081611f19565b611f19838361202c565b6000602082840312156120de57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611db857600080fd5b60006020828403121561212057600080fd5b5035919050565b6001600160a01b038116811461078557600080fd5b6000806040838503121561214f57600080fd5b82359150602083013561216181612127565b809150509250929050565b60006020828403121561217e57600080fd5b8135611db881612127565b6000806000806080858703121561219f57600080fd5b8435935060208501356121b181612127565b93969395505050506040820135916060013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261220657600080fd5b813567ffffffffffffffff80821115612221576122216121c6565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715612267576122676121c6565b8160405283815286602085880101111561228057600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156122b357600080fd5b82356122be81612127565b9150602083013567ffffffffffffffff8111156122da57600080fd5b6122e6858286016121f5565b9150509250929050565b60008060006060848603121561230557600080fd5b833561231081612127565b9250602084013561232081612127565b929592945050506040919091013590565b600080600080600060a0868803121561234957600080fd5b85359450602086013561235b81612127565b93506040860135925060608601359150608086013567ffffffffffffffff81111561238557600080fd5b612391888289016121f5565b9150509295509295909350565b600080604083850312156123b157600080fd5b82356123bc81612127565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561240b5761240b6123ca565b500390565b60005b8381101561242b578181015183820152602001612413565b8381111561182b5750506000910152565b8781528660208201528560408201528460608201528360808201527fff00000000000000000000000000000000000000000000000000000000000000831660a0820152600082516124948160a1850160208701612410565b9190910160a10198975050505050505050565b6000602082840312156124b957600080fd5b5051919050565b600082198211156124d3576124d36123ca565b500190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612510816017850160208801612410565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161254d816028840160208801612410565b01602801949350505050565b60008151808452612571816020860160208601612410565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611db86020830184612559565b828152604060208201526000611f196040830184612559565b6000602082840312156125e157600080fd5b81518015158114611db857600080fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612629576126296123ca565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008161266c5761266c6123ca565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600082516126a4818460208701612410565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220261f31160e6feab0f11476c51c14b089382fa8848d78ba42ab4707402beed37e64736f6c63430008090033',
};
