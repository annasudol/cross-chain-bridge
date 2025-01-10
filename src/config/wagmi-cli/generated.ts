import {
  createReadContract,
  createSimulateContract,
  createWatchContractEvent,
  createWriteContract,
} from '@wagmi/core/codegen';
import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TT
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tx_hash',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'RedeemInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SwapInitialized',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'tx_hash', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'signatures',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const;

/**
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttAddress = {
  97: '0x67408729BFD8192673ADc073D4Ca33A56c55811d',
  11155111: '0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF',
} as const;

/**
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttConfig = { address: ttAddress, abi: ttAbi } as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TToken
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tTokenAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tx_hash',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'RedeemInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SwapInitialized',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'tx_hash', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'signatures',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTt = /* #__PURE__ */ createReadContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"signatures"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTtSignatures = /* #__PURE__ */ createReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'signatures',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"token"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTtToken = /* #__PURE__ */ createReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'token',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTt = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtFacet = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtRedeem = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtSwap = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTt = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtFacet = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtRedeem = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtSwap = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtEvent = /* #__PURE__ */ createWatchContractEvent({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"RedeemInitialized"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtRedeemInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"SwapInitialized"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtSwapInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'SwapInitialized',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tTokenAbi}__
 */
export const readTToken = /* #__PURE__ */ createReadContract({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"signatures"`
 */
export const readTTokenSignatures = /* #__PURE__ */ createReadContract({
  abi: tTokenAbi,
  functionName: 'signatures',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"token"`
 */
export const readTTokenToken = /* #__PURE__ */ createReadContract({
  abi: tTokenAbi,
  functionName: 'token',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tTokenAbi}__
 */
export const writeTToken = /* #__PURE__ */ createWriteContract({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"facet"`
 */
export const writeTTokenFacet = /* #__PURE__ */ createWriteContract({
  abi: tTokenAbi,
  functionName: 'facet',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"redeem"`
 */
export const writeTTokenRedeem = /* #__PURE__ */ createWriteContract({
  abi: tTokenAbi,
  functionName: 'redeem',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"swap"`
 */
export const writeTTokenSwap = /* #__PURE__ */ createWriteContract({
  abi: tTokenAbi,
  functionName: 'swap',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tTokenAbi}__
 */
export const simulateTToken = /* #__PURE__ */ createSimulateContract({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"facet"`
 */
export const simulateTTokenFacet = /* #__PURE__ */ createSimulateContract({
  abi: tTokenAbi,
  functionName: 'facet',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateTTokenRedeem = /* #__PURE__ */ createSimulateContract({
  abi: tTokenAbi,
  functionName: 'redeem',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"swap"`
 */
export const simulateTTokenSwap = /* #__PURE__ */ createSimulateContract({
  abi: tTokenAbi,
  functionName: 'swap',
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tTokenAbi}__
 */
export const watchTTokenEvent = /* #__PURE__ */ createWatchContractEvent({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tTokenAbi}__ and `eventName` set to `"RedeemInitialized"`
 */
export const watchTTokenRedeemInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: tTokenAbi,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tTokenAbi}__ and `eventName` set to `"SwapInitialized"`
 */
export const watchTTokenSwapInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: tTokenAbi,
    eventName: 'SwapInitialized',
  });

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTt = /* #__PURE__ */ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"signatures"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTtSignatures = /* #__PURE__ */ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'signatures',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"token"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTtToken = /* #__PURE__ */ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'token',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTt = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtFacet = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtRedeem = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtSwap = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTt = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtFacet = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtRedeem = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtSwap = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtEvent = /* #__PURE__ */ createUseWatchContractEvent({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"RedeemInitialized"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtRedeemInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"SwapInitialized"`
 *
 * - [__View Contract on Binance Smart Chain Testnet Bsc Scan__](https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtSwapInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'SwapInitialized',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tTokenAbi}__
 */
export const useReadTToken = /* #__PURE__ */ createUseReadContract({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"signatures"`
 */
export const useReadTTokenSignatures = /* #__PURE__ */ createUseReadContract({
  abi: tTokenAbi,
  functionName: 'signatures',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"token"`
 */
export const useReadTTokenToken = /* #__PURE__ */ createUseReadContract({
  abi: tTokenAbi,
  functionName: 'token',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tTokenAbi}__
 */
export const useWriteTToken = /* #__PURE__ */ createUseWriteContract({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"facet"`
 */
export const useWriteTTokenFacet = /* #__PURE__ */ createUseWriteContract({
  abi: tTokenAbi,
  functionName: 'facet',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteTTokenRedeem = /* #__PURE__ */ createUseWriteContract({
  abi: tTokenAbi,
  functionName: 'redeem',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"swap"`
 */
export const useWriteTTokenSwap = /* #__PURE__ */ createUseWriteContract({
  abi: tTokenAbi,
  functionName: 'swap',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tTokenAbi}__
 */
export const useSimulateTToken = /* #__PURE__ */ createUseSimulateContract({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"facet"`
 */
export const useSimulateTTokenFacet = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: tTokenAbi,
    functionName: 'facet',
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateTTokenRedeem =
  /* #__PURE__ */ createUseSimulateContract({
    abi: tTokenAbi,
    functionName: 'redeem',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tTokenAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulateTTokenSwap = /* #__PURE__ */ createUseSimulateContract({
  abi: tTokenAbi,
  functionName: 'swap',
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tTokenAbi}__
 */
export const useWatchTTokenEvent = /* #__PURE__ */ createUseWatchContractEvent({
  abi: tTokenAbi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tTokenAbi}__ and `eventName` set to `"RedeemInitialized"`
 */
export const useWatchTTokenRedeemInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: tTokenAbi,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tTokenAbi}__ and `eventName` set to `"SwapInitialized"`
 */
export const useWatchTTokenSwapInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: tTokenAbi,
    eventName: 'SwapInitialized',
  });
