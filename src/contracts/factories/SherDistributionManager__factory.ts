/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides, BigNumberish } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import type { SherDistributionManager, SherDistributionManagerInterface } from "../SherDistributionManager"

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxRewardsEndTVL",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_zeroRewardsStartTVL",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxRewardsRate",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_sher",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidConditions",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSender",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroArgument",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRewardsEndTVL",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "zeroRewardsStartTVL",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxRewardRate",
        type: "uint256",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ISherlock",
        name: "sherlock",
        type: "address",
      },
    ],
    name: "SherlockCoreSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tvl",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
    ],
    name: "calcReward",
    outputs: [
      {
        internalType: "uint256",
        name: "_sher",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
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
    name: "owner",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "pullReward",
    outputs: [
      {
        internalType: "uint256",
        name: "_sher",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISherlock",
        name: "_sherlock",
        type: "address",
      },
    ],
    name: "setSherlockCoreAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sher",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "contract IERC20[]",
        name: "_extraTokens",
        type: "address[]",
      },
    ],
    name: "sweep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x6101006040523480156200001257600080fd5b50604051620019193803806200191983398101604081905262000035916200016c565b62000040336200011c565b6000805460ff60a01b191690558284106200006e5760405163a9cb9e0d60e01b815260040160405180910390fd5b816200008d5760405163b7852ebb60e01b815260040160405180910390fd5b6001600160a01b038116620000b55760405163b7852ebb60e01b815260040160405180910390fd5b608084905260a083905260c08290526001600160a01b03811660e05260408051858152602081018590529081018390527f7c8b2bb4ba88603ecaf8a835a16f5dc600d81cc928f239a94f1ab037549017ca9060600160405180910390a150505050620001bd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080608085870312156200018357600080fd5b845160208601516040870151606088015192965090945092506001600160a01b0381168114620001b257600080fd5b939692955090935050565b60805160a05160c05160e0516116e362000236600039600081816101ab0152610a7201526000818161042f01528181610493015261054b015260008181610397015281816103f201528181610524015261057101526000818161033b0152818161036c015281816103c7015261050301526116e36000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638a179be411610081578063ca70fb761161005b578063ca70fb76146101cd578063d353b94c146101e0578063f2fde38b146101f357600080fd5b80638a179be4146101545780638da5cb5b14610167578063937840b0146101a657600080fd5b80635c975abb116100b25780635c975abb14610121578063715018a6146101445780638456cb591461014c57600080fd5b806322f3e2d4146100d95780633f4ba83a146100f657806342b39a5e14610100575b600080fd5b6100e1610206565b60405190151581526020015b60405180910390f35b6100fe6102cc565b005b61011361010e366004611297565b610327565b6040519081526020016100ed565b60005474010000000000000000000000000000000000000000900460ff166100e1565b6100fe6105df565b6100fe61066f565b6100fe610162366004611324565b6106c8565b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ed565b6101817f000000000000000000000000000000000000000000000000000000000000000081565b6100fe6101db36600461141c565b6107e3565b6101136101ee366004611439565b610956565b6100fe61020136600461141c565b610aa1565b60003073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663abb812986040518163ffffffff1660e01b8152600401602060405180830381865afa15801561028c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b0919061147a565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b60015473ffffffffffffffffffffffffffffffffffffffff16331461031d576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610325610bd1565b565b600082610336575060006105d8565b6000847f000000000000000000000000000000000000000000000000000000000000000011610366576000610390565b610390857f00000000000000000000000000000000000000000000000000000000000000006114c6565b90506000857f0000000000000000000000000000000000000000000000000000000000000000116103c2576000610416565b6103ec7f000000000000000000000000000000000000000000000000000000000000000087610cca565b610416907f00000000000000000000000000000000000000000000000000000000000000006114c6565b905081156104cf5781851161047157620f4240846104547f0000000000000000000000000000000000000000000000000000000000000000886114dd565b61045e91906114dd565b610468919061151a565b925050506105d8565b61047b8287611555565b955061048782866114c6565b9450620f4240846104b87f0000000000000000000000000000000000000000000000000000000000000000856114dd565b6104c291906114dd565b6104cc919061151a565b92505b80156105d557808511156104e1578094505b60006104ee60028761151a565b6104f89088611555565b9050620f42406105487f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006114c6565b867f000000000000000000000000000000000000000000000000000000000000000089610595867f00000000000000000000000000000000000000000000000000000000000000006114c6565b61059f91906114dd565b6105a991906114dd565b6105b391906114dd565b6105bd919061151a565b6105c7919061151a565b6105d19085611555565b9350505b50505b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6103256000610ce1565b60015473ffffffffffffffffffffffffffffffffffffffff1633146106c0576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610325610d56565b60005473ffffffffffffffffffffffffffffffffffffffff163314610749576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161065c565b73ffffffffffffffffffffffffffffffffffffffff8216610796576040517fb7852ebb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61079e610206565b156107d5576040517f3af36e0a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107df8282610e42565b5050565b73ffffffffffffffffffffffffffffffffffffffff8116610830576040517fb7852ebb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b46617a691415801561085657503373adbb28c2fee078440b7088bbcd68dcfa63e5562514155b1561088d576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16156108dd576040517f3af36e0a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527ff200116515c6d70d53a45299bb7eba08ef985ec08bfe0baf31ad73907308a3189060200160405180910390a150565b60015460009073ffffffffffffffffffffffffffffffffffffffff1633146109aa576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5085600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631878fbf36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3f919061156d565b610a4991906114c6565b8686610327565b90508015610a9957610a9973ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383610fd6565b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161065c565b73ffffffffffffffffffffffffffffffffffffffff8116610bc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161065c565b610bce81610ce1565b50565b60005474010000000000000000000000000000000000000000900460ff16610c55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161065c565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b600081831015610cda57816105d8565b5090919050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005474010000000000000000000000000000000000000000900460ff1615610ddb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161065c565b600080547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ca03390565b60005b8151811015610f35576000828281518110610e6257610e62611586565b60209081029190910101516040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152909150610f2290859073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610ee0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f04919061156d565b73ffffffffffffffffffffffffffffffffffffffff84169190610fd6565b5080610f2d816115b5565b915050610e45565b5060008273ffffffffffffffffffffffffffffffffffffffff164760405160006040518083038185875af1925050503d8060008114610f90576040519150601f19603f3d011682016040523d82523d6000602084013e610f95565b606091505b509091505080610fd1576040517f3af36e0a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610fd1928692916000916110a191851690849061114b565b805190915015610fd157808060200190518101906110bf91906115ee565b610fd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161065c565b6060610a99848460008585843b6111be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161065c565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516111e79190611640565b60006040518083038185875af1925050503d8060008114611224576040519150601f19603f3d011682016040523d82523d6000602084013e611229565b606091505b5091509150611239828286611244565b979650505050505050565b606083156112535750816105d8565b8251156112635782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065c919061165c565b6000806000606084860312156112ac57600080fd5b505081359360208301359350604090920135919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bce57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803561131f816112c3565b919050565b6000806040838503121561133757600080fd5b8235611342816112c3565b915060208381013567ffffffffffffffff8082111561136057600080fd5b818601915086601f83011261137457600080fd5b813581811115611386576113866112e5565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156113c9576113c96112e5565b6040529182528482019250838101850191898311156113e757600080fd5b938501935b8285101561140c576113fd85611314565b845293850193928501926113ec565b8096505050505050509250929050565b60006020828403121561142e57600080fd5b81356105d8816112c3565b6000806000806080858703121561144f57600080fd5b843593506020850135925060408501359150606085013561146f816112c3565b939692955090935050565b60006020828403121561148c57600080fd5b81516105d8816112c3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156114d8576114d8611497565b500390565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561151557611515611497565b500290565b600082611550577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000821982111561156857611568611497565b500190565b60006020828403121561157f57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156115e7576115e7611497565b5060010190565b60006020828403121561160057600080fd5b815180151581146105d857600080fd5b60005b8381101561162b578181015183820152602001611613565b8381111561163a576000848401525b50505050565b60008251611652818460208701611610565b9190910192915050565b602081526000825180602084015261167b816040850160208701611610565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea26469706673582212206d370760cf52a709379118ae4fa920894e1c898de0b6fdce666b98ce11e667cf64736f6c634300080a0033"

type SherDistributionManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: SherDistributionManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class SherDistributionManager__factory extends ContractFactory {
  constructor(...args: SherDistributionManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
    this.contractName = "SherDistributionManager"
  }

  deploy(
    _maxRewardsEndTVL: BigNumberish,
    _zeroRewardsStartTVL: BigNumberish,
    _maxRewardsRate: BigNumberish,
    _sher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SherDistributionManager> {
    return super.deploy(
      _maxRewardsEndTVL,
      _zeroRewardsStartTVL,
      _maxRewardsRate,
      _sher,
      overrides || {}
    ) as Promise<SherDistributionManager>
  }
  getDeployTransaction(
    _maxRewardsEndTVL: BigNumberish,
    _zeroRewardsStartTVL: BigNumberish,
    _maxRewardsRate: BigNumberish,
    _sher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_maxRewardsEndTVL, _zeroRewardsStartTVL, _maxRewardsRate, _sher, overrides || {})
  }
  attach(address: string): SherDistributionManager {
    return super.attach(address) as SherDistributionManager
  }
  connect(signer: Signer): SherDistributionManager__factory {
    return super.connect(signer) as SherDistributionManager__factory
  }
  static readonly contractName: "SherDistributionManager"
  public readonly contractName: "SherDistributionManager"
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): SherDistributionManagerInterface {
    return new utils.Interface(_abi) as SherDistributionManagerInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SherDistributionManager {
    return new Contract(address, _abi, signerOrProvider) as SherDistributionManager
  }
}
