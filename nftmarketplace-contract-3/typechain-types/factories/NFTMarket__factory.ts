/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTMarket, NFTMarketInterface } from "../NFTMarket";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    name: "MarketItemCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "createMarketItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "createMarketSale",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMyItemsCreated",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMyPurchasedNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchMyUnsoldNFTs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchRemainingMarketItems",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getListingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "inputPrice",
        type: "uint256",
      },
    ],
    name: "setListingPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526608e1bc9bf0400060045534801561001b57600080fd5b50600160008190555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611d18806100746000396000f3fe60806040526004361061007b5760003560e01c806358eb2df51161004e57806358eb2df51461012c5780637c726b6914610148578063c23b139e14610185578063d66a0fa4146101a15761007b565b806312e85585146100805780632924a3a8146100ab5780633782985c146100d65780633bec7b8414610101575b600080fd5b34801561008c57600080fd5b506100956101cc565b6040516100a29190611a7f565b60405180910390f35b3480156100b757600080fd5b506100c06101d6565b6040516100cd91906119dd565b60405180910390f35b3480156100e257600080fd5b506100eb61059d565b6040516100f891906119dd565b60405180910390f35b34801561010d57600080fd5b5061011661084e565b60405161012391906119dd565b60405180910390f35b610146600480360381019061014191906116f0565b610bbb565b005b34801561015457600080fd5b5061016f600480360381019061016a919061173f565b610f1f565b60405161017c9190611a7f565b60405180910390f35b61019f600480360381019061019a91906116b4565b610fbf565b005b3480156101ad57600080fd5b506101b6611278565b6040516101c391906119dd565b60405180910390f35b6000600454905090565b606060006101e460016115e5565b9050600080600190505b8281116102ae573373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614801561028757506005600082815260200190815260200160002060060160009054906101000a900460ff16155b1561029b57818061029790611b72565b9250505b80806102a690611b72565b9150506101ee565b5060008167ffffffffffffffff8111156102f1577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561032a57816020015b610317611609565b81526020019060019003908161030f5790505b509050600080600190505b848111610592573373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480156103ce57506005600082815260200190815260200160002060060160009054906101000a900460ff16155b1561057f57600560008281526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481526020016006820160009054906101000a900460ff161515151581525050838381518110610565577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250818061057b90611b72565b9250505b808061058a90611b72565b915050610335565b508194505050505090565b606060006105ab60016115e5565b905060006105b960026115e5565b6105c360016115e5565b6105cd9190611ae4565b905060008167ffffffffffffffff811115610611577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561064a57816020015b610637611609565b81526020019060019003908161062f5790505b509050600080600190505b848111610843576005600082815260200190815260200160002060060160009054906101000a900460ff1661083057600560008281526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481526020016006820160009054906101000a900460ff161515151581525050838381518110610816577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250818061082c90611b72565b9250505b808061083b90611b72565b915050610655565b508194505050505090565b6060600061085c60016115e5565b9050600080600190505b8281116108f9573373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156108e65781806108e290611b72565b9250505b80806108f190611b72565b915050610866565b5060008167ffffffffffffffff81111561093c577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561097557816020015b610962611609565b81526020019060019003908161095a5790505b509050600080600190505b848111610bb0573373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b9d57600560008281526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481526020016006820160009054906101000a900460ff161515151581525050838381518110610b83577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508180610b9990611b72565b9250505b8080610ba890611b72565b915050610980565b508194505050505090565b60026000541415610c01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf890611a5f565b60405180910390fd5b600260008190555060008111610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c43906119ff565b60405180910390fd5b6004543414610c90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8790611a3f565b60405180910390fd5b610c9a60016115f3565b6000610ca660016115e5565b90506040518060e001604052808281526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200183815260200160001515815250600560008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c08201518160060160006101000a81548160ff0219169083151502179055509050508373ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401610e8793929190611961565b600060405180830381600087803b158015610ea157600080fd5b505af1158015610eb5573d6000803e3d6000fd5b50505050828473ffffffffffffffffffffffffffffffffffffffff16827f045dfa01dcba2b36aba1d3dc4a874f4b0c5d2fbeb8d2c4b34a7d88c8d8f929d1336000876000604051610f099493929190611998565b60405180910390a4506001600081905550505050565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610fa85750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15610fb557816004819055505b6004549050919050565b60026000541415611005576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffc90611a5f565b60405180910390fd5b6002600081905550600060056000838152602001908152602001600020600501549050600060056000848152602001908152602001600020600201549050813414611085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107c90611a1f565b60405180910390fd5b336005600085815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016005600085815260200190815260200160002060060160006101000a81548160ff02191690831515021790555061111360026115f3565b6005600084815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561118f573d6000803e3d6000fd5b508373ffffffffffffffffffffffffffffffffffffffff166323b872dd3033846040518463ffffffff1660e01b81526004016111cd93929190611961565b600060405180830381600087803b1580156111e757600080fd5b505af11580156111fb573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050158015611269573d6000803e3d6000fd5b50505060016000819055505050565b6060600061128660016115e5565b9050600080600190505b828111611323573373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561131057818061130c90611b72565b9250505b808061131b90611b72565b915050611290565b5060008167ffffffffffffffff811115611366577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561139f57816020015b61138c611609565b8152602001906001900390816113845790505b509050600080600190505b8481116115da573373ffffffffffffffffffffffffffffffffffffffff166005600083815260200190815260200160002060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156115c757600560008281526020019081526020016000206040518060e0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481526020016006820160009054906101000a900460ff1615151515815250508383815181106115ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525081806115c390611b72565b9250505b80806115d290611b72565b9150506113aa565b508194505050505090565b600081600001549050919050565b6001816000016000828254019250508190555050565b6040518060e0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000151581525090565b60008135905061169981611cb4565b92915050565b6000813590506116ae81611ccb565b92915050565b600080604083850312156116c757600080fd5b60006116d58582860161168a565b92505060206116e68582860161169f565b9150509250929050565b60008060006060848603121561170557600080fd5b60006117138682870161168a565b93505060206117248682870161169f565b92505060406117358682870161169f565b9150509250925092565b60006020828403121561175157600080fd5b600061175f8482850161169f565b91505092915050565b600061177483836118b5565b60e08301905092915050565b61178981611b2a565b82525050565b61179881611b18565b82525050565b6117a781611b18565b82525050565b60006117b882611aaa565b6117c28185611ac2565b93506117cd83611a9a565b8060005b838110156117fe5781516117e58882611768565b97506117f083611ab5565b9250506001810190506117d1565b5085935050505092915050565b61181481611b3c565b82525050565b61182381611b3c565b82525050565b6000611836601583611ad3565b915061184182611bea565b602082019050919050565b6000611859601583611ad3565b915061186482611c13565b602082019050919050565b600061187c602483611ad3565b915061188782611c3c565b604082019050919050565b600061189f601f83611ad3565b91506118aa82611c8b565b602082019050919050565b60e0820160008201516118cb6000850182611943565b5060208201516118de602085018261178f565b5060408201516118f16040850182611943565b5060608201516119046060850182611780565b5060808201516119176080850182611780565b5060a082015161192a60a0850182611943565b5060c082015161193d60c085018261180b565b50505050565b61194c81611b68565b82525050565b61195b81611b68565b82525050565b6000606082019050611976600083018661179e565b611983602083018561179e565b6119906040830184611952565b949350505050565b60006080820190506119ad600083018761179e565b6119ba602083018661179e565b6119c76040830185611952565b6119d4606083018461181a565b95945050505050565b600060208201905081810360008301526119f781846117ad565b905092915050565b60006020820190508181036000830152611a1881611829565b9050919050565b60006020820190508181036000830152611a388161184c565b9050919050565b60006020820190508181036000830152611a588161186f565b9050919050565b60006020820190508181036000830152611a7881611892565b9050919050565b6000602082019050611a946000830184611952565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611aef82611b68565b9150611afa83611b68565b925082821015611b0d57611b0c611bbb565b5b828203905092915050565b6000611b2382611b48565b9050919050565b6000611b3582611b48565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611b7d82611b68565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611bb057611baf611bbb565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f5072696365206d7573742062652061626f766520300000000000000000000000600082015250565b7f53656e64207468652072696768742070726963652e0000000000000000000000600082015250565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b611cbd81611b18565b8114611cc857600080fd5b50565b611cd481611b68565b8114611cdf57600080fd5b5056fea26469706673582212209099172b28ce7bacb9c6fd2aef9b317180dfc3f22b36d8f95427e148fa96b1ce64736f6c63430008040033";

type NFTMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarket__factory extends ContractFactory {
  constructor(...args: NFTMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTMarket> {
    return super.deploy(overrides || {}) as Promise<NFTMarket>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTMarket {
    return super.attach(address) as NFTMarket;
  }
  connect(signer: Signer): NFTMarket__factory {
    return super.connect(signer) as NFTMarket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketInterface {
    return new utils.Interface(_abi) as NFTMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTMarket;
  }
}
