/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OtherNFTToken, OtherNFTTokenInterface } from "../OtherNFTToken";

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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "createToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sayHi",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCount",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f456c7365747920546f6b656e73000000000000000000000000000000000000008152506040518060400160405280600381526020017f4554590000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612bab80620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636352211e11610097578063a22cb46511610066578063a22cb465146102ad578063b88d4fde146102c9578063c87b56dd146102e5578063e985e9c51461031557610100565b80636352211e1461021157806370a082311461024157806395d89b41146102715780639f181b5e1461028f57610100565b80630c49c36c116100d35780630c49c36c1461019f57806323b872dd146101bd57806342842e0e146101d957806345576f94146101f557610100565b806301ffc9a71461010557806306fdde0314610135578063081812fc14610153578063095ea7b314610183575b600080fd5b61011f600480360381019061011a9190611c17565b610345565b60405161012c919061205e565b60405180910390f35b61013d610427565b60405161014a9190612079565b60405180910390f35b61016d60048036038101906101689190611caa565b6104b9565b60405161017a9190611ff7565b60405180910390f35b61019d60048036038101906101989190611bdb565b61053e565b005b6101a7610656565b6040516101b4919061229b565b60405180910390f35b6101d760048036038101906101d29190611ad5565b61065f565b005b6101f360048036038101906101ee9190611ad5565b6106bf565b005b61020f600480360381019061020a9190611c69565b6106df565b005b61022b60048036038101906102269190611caa565b61070f565b6040516102389190611ff7565b60405180910390f35b61025b60048036038101906102569190611a70565b6107c1565b604051610268919061229b565b60405180910390f35b610279610879565b6040516102869190612079565b60405180910390f35b61029761090b565b6040516102a4919061229b565b60405180910390f35b6102c760048036038101906102c29190611b9f565b61091c565b005b6102e360048036038101906102de9190611b24565b610932565b005b6102ff60048036038101906102fa9190611caa565b610994565b60405161030c9190612079565b60405180910390f35b61032f600480360381019061032a9190611a99565b610ae6565b60405161033c919061205e565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061041057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610420575061041f82610b7a565b5b9050919050565b606060008054610436906124f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610462906124f1565b80156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b5050505050905090565b60006104c482610be4565b610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa906121fb565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105498261070f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b19061225b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105d9610c50565b73ffffffffffffffffffffffffffffffffffffffff161480610608575061060781610602610c50565b610ae6565b5b610647576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063e9061213b565b60405180910390fd5b6106518383610c58565b505050565b60006001905090565b61067061066a610c50565b82610d11565b6106af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a69061227b565b60405180910390fd5b6106ba838383610def565b505050565b6106da83838360405180602001604052806000815250610932565b505050565b6106e9600761104b565b60006106f56007611061565b9050610701338261106f565b61070b818361123d565b5050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107af9061217b565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610832576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108299061215b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610888906124f1565b80601f01602080910402602001604051908101604052809291908181526020018280546108b4906124f1565b80156109015780601f106108d657610100808354040283529160200191610901565b820191906000526020600020905b8154815290600101906020018083116108e457829003601f168201915b5050505050905090565b60006109176007611061565b905090565b61092e610927610c50565b83836112b1565b5050565b61094361093d610c50565b83610d11565b610982576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109799061227b565b60405180910390fd5b61098e8484848461141e565b50505050565b606061099f82610be4565b6109de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d5906121db565b60405180910390fd5b60006006600084815260200190815260200160002080546109fe906124f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2a906124f1565b8015610a775780601f10610a4c57610100808354040283529160200191610a77565b820191906000526020600020905b815481529060010190602001808311610a5a57829003601f168201915b505050505090506000610a8861147a565b9050600081511415610a9e578192505050610ae1565b600082511115610ad3578082604051602001610abb929190611fd3565b60405160208183030381529060405292505050610ae1565b610adc84611491565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610ccb8361070f565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d1c82610be4565b610d5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d529061211b565b60405180910390fd5b6000610d668361070f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dd557508373ffffffffffffffffffffffffffffffffffffffff16610dbd846104b9565b73ffffffffffffffffffffffffffffffffffffffff16145b80610de65750610de58185610ae6565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e0f8261070f565b73ffffffffffffffffffffffffffffffffffffffff1614610e65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5c9061221b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ed5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecc906120db565b60405180910390fd5b610ee0838383611538565b610eeb600082610c58565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f3b9190612407565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f929190612380565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d6906121bb565b60405180910390fd5b6110e881610be4565b15611128576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161111f906120bb565b60405180910390fd5b61113460008383611538565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111849190612380565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61124682610be4565b611285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127c9061219b565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906112ac929190611894565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611320576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611317906120fb565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611411919061205e565b60405180910390a3505050565b611429848484610def565b6114358484848461153d565b611474576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146b9061209b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061149c82610be4565b6114db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d29061223b565b60405180910390fd5b60006114e561147a565b905060008151116115055760405180602001604052806000815250611530565b8061150f846116d4565b604051602001611520929190611fd3565b6040516020818303038152906040525b915050919050565b505050565b600061155e8473ffffffffffffffffffffffffffffffffffffffff16611881565b156116c7578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611587610c50565b8786866040518563ffffffff1660e01b81526004016115a99493929190612012565b602060405180830381600087803b1580156115c357600080fd5b505af19250505080156115f457506040513d601f19601f820116820180604052508101906115f19190611c40565b60015b611677573d8060008114611624576040519150601f19603f3d011682016040523d82523d6000602084013e611629565b606091505b5060008151141561166f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116669061209b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116cc565b600190505b949350505050565b6060600082141561171c576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061187c565b600082905060005b6000821461174e57808061173790612554565b915050600a8261174791906123d6565b9150611724565b60008167ffffffffffffffff811115611790577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156117c25781602001600182028036833780820191505090505b5090505b60008514611875576001826117db9190612407565b9150600a856117ea919061259d565b60306117f69190612380565b60f81b818381518110611832577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561186e91906123d6565b94506117c6565b8093505050505b919050565b600080823b905060008111915050919050565b8280546118a0906124f1565b90600052602060002090601f0160209004810192826118c25760008555611909565b82601f106118db57805160ff1916838001178555611909565b82800160010185558215611909579182015b828111156119085782518255916020019190600101906118ed565b5b509050611916919061191a565b5090565b5b8082111561193357600081600090555060010161191b565b5090565b600061194a611945846122db565b6122b6565b90508281526020810184848401111561196257600080fd5b61196d8482856124af565b509392505050565b60006119886119838461230c565b6122b6565b9050828152602081018484840111156119a057600080fd5b6119ab8482856124af565b509392505050565b6000813590506119c281612b19565b92915050565b6000813590506119d781612b30565b92915050565b6000813590506119ec81612b47565b92915050565b600081519050611a0181612b47565b92915050565b600082601f830112611a1857600080fd5b8135611a28848260208601611937565b91505092915050565b600082601f830112611a4257600080fd5b8135611a52848260208601611975565b91505092915050565b600081359050611a6a81612b5e565b92915050565b600060208284031215611a8257600080fd5b6000611a90848285016119b3565b91505092915050565b60008060408385031215611aac57600080fd5b6000611aba858286016119b3565b9250506020611acb858286016119b3565b9150509250929050565b600080600060608486031215611aea57600080fd5b6000611af8868287016119b3565b9350506020611b09868287016119b3565b9250506040611b1a86828701611a5b565b9150509250925092565b60008060008060808587031215611b3a57600080fd5b6000611b48878288016119b3565b9450506020611b59878288016119b3565b9350506040611b6a87828801611a5b565b925050606085013567ffffffffffffffff811115611b8757600080fd5b611b9387828801611a07565b91505092959194509250565b60008060408385031215611bb257600080fd5b6000611bc0858286016119b3565b9250506020611bd1858286016119c8565b9150509250929050565b60008060408385031215611bee57600080fd5b6000611bfc858286016119b3565b9250506020611c0d85828601611a5b565b9150509250929050565b600060208284031215611c2957600080fd5b6000611c37848285016119dd565b91505092915050565b600060208284031215611c5257600080fd5b6000611c60848285016119f2565b91505092915050565b600060208284031215611c7b57600080fd5b600082013567ffffffffffffffff811115611c9557600080fd5b611ca184828501611a31565b91505092915050565b600060208284031215611cbc57600080fd5b6000611cca84828501611a5b565b91505092915050565b611cdc8161243b565b82525050565b611ceb8161244d565b82525050565b6000611cfc8261233d565b611d068185612353565b9350611d168185602086016124be565b611d1f8161268a565b840191505092915050565b6000611d3582612348565b611d3f8185612364565b9350611d4f8185602086016124be565b611d588161268a565b840191505092915050565b6000611d6e82612348565b611d788185612375565b9350611d888185602086016124be565b80840191505092915050565b6000611da1603283612364565b9150611dac8261269b565b604082019050919050565b6000611dc4601c83612364565b9150611dcf826126ea565b602082019050919050565b6000611de7602483612364565b9150611df282612713565b604082019050919050565b6000611e0a601983612364565b9150611e1582612762565b602082019050919050565b6000611e2d602c83612364565b9150611e388261278b565b604082019050919050565b6000611e50603883612364565b9150611e5b826127da565b604082019050919050565b6000611e73602a83612364565b9150611e7e82612829565b604082019050919050565b6000611e96602983612364565b9150611ea182612878565b604082019050919050565b6000611eb9602e83612364565b9150611ec4826128c7565b604082019050919050565b6000611edc602083612364565b9150611ee782612916565b602082019050919050565b6000611eff603183612364565b9150611f0a8261293f565b604082019050919050565b6000611f22602c83612364565b9150611f2d8261298e565b604082019050919050565b6000611f45602983612364565b9150611f50826129dd565b604082019050919050565b6000611f68602f83612364565b9150611f7382612a2c565b604082019050919050565b6000611f8b602183612364565b9150611f9682612a7b565b604082019050919050565b6000611fae603183612364565b9150611fb982612aca565b604082019050919050565b611fcd816124a5565b82525050565b6000611fdf8285611d63565b9150611feb8284611d63565b91508190509392505050565b600060208201905061200c6000830184611cd3565b92915050565b60006080820190506120276000830187611cd3565b6120346020830186611cd3565b6120416040830185611fc4565b81810360608301526120538184611cf1565b905095945050505050565b60006020820190506120736000830184611ce2565b92915050565b600060208201905081810360008301526120938184611d2a565b905092915050565b600060208201905081810360008301526120b481611d94565b9050919050565b600060208201905081810360008301526120d481611db7565b9050919050565b600060208201905081810360008301526120f481611dda565b9050919050565b6000602082019050818103600083015261211481611dfd565b9050919050565b6000602082019050818103600083015261213481611e20565b9050919050565b6000602082019050818103600083015261215481611e43565b9050919050565b6000602082019050818103600083015261217481611e66565b9050919050565b6000602082019050818103600083015261219481611e89565b9050919050565b600060208201905081810360008301526121b481611eac565b9050919050565b600060208201905081810360008301526121d481611ecf565b9050919050565b600060208201905081810360008301526121f481611ef2565b9050919050565b6000602082019050818103600083015261221481611f15565b9050919050565b6000602082019050818103600083015261223481611f38565b9050919050565b6000602082019050818103600083015261225481611f5b565b9050919050565b6000602082019050818103600083015261227481611f7e565b9050919050565b6000602082019050818103600083015261229481611fa1565b9050919050565b60006020820190506122b06000830184611fc4565b92915050565b60006122c06122d1565b90506122cc8282612523565b919050565b6000604051905090565b600067ffffffffffffffff8211156122f6576122f561265b565b5b6122ff8261268a565b9050602081019050919050565b600067ffffffffffffffff8211156123275761232661265b565b5b6123308261268a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061238b826124a5565b9150612396836124a5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156123cb576123ca6125ce565b5b828201905092915050565b60006123e1826124a5565b91506123ec836124a5565b9250826123fc576123fb6125fd565b5b828204905092915050565b6000612412826124a5565b915061241d836124a5565b9250828210156124305761242f6125ce565b5b828203905092915050565b600061244682612485565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156124dc5780820151818401526020810190506124c1565b838111156124eb576000848401525b50505050565b6000600282049050600182168061250957607f821691505b6020821081141561251d5761251c61262c565b5b50919050565b61252c8261268a565b810181811067ffffffffffffffff8211171561254b5761254a61265b565b5b80604052505050565b600061255f826124a5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612592576125916125ce565b5b600182019050919050565b60006125a8826124a5565b91506125b3836124a5565b9250826125c3576125c26125fd565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612b228161243b565b8114612b2d57600080fd5b50565b612b398161244d565b8114612b4457600080fd5b50565b612b5081612459565b8114612b5b57600080fd5b50565b612b67816124a5565b8114612b7257600080fd5b5056fea26469706673582212207a9f1043a4ed864d14db8bac327819ab2f188c1c11b181356427838e3a200c8364736f6c63430008040033";

type OtherNFTTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OtherNFTTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OtherNFTToken__factory extends ContractFactory {
  constructor(...args: OtherNFTTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OtherNFTToken> {
    return super.deploy(overrides || {}) as Promise<OtherNFTToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OtherNFTToken {
    return super.attach(address) as OtherNFTToken;
  }
  connect(signer: Signer): OtherNFTToken__factory {
    return super.connect(signer) as OtherNFTToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OtherNFTTokenInterface {
    return new utils.Interface(_abi) as OtherNFTTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OtherNFTToken {
    return new Contract(address, _abi, signerOrProvider) as OtherNFTToken;
  }
}