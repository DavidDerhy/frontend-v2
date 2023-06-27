import { Config } from '../types';
import contracts from './contracts';
import keys from './keys';
import tokenlists from './tokenlists';
import tokens from './tokens';
import pools from './pools';
import rateProviders from './rateProviders';

const config: Config = {
  key: '11155111',
  chainId: 11155111,
  chainName: 'Sepolia',
  name: 'Ethereum Testnet Sepolia',
  shortName: 'Sepolia',
  monorepoName: 'sepolia',
  slug: 'sepolia',
  network: 'sepolia',
  trustWalletNetwork: 'ethereum',
  unknown: false,
  visibleInUI: true,
  testNetwork: true,
  rpc: `https://sepolia.infura.io/v3/${keys.infura}`,
  ws: `wss://sepolia.infura.io/ws/v3/${keys.infura}`,
  explorer: 'https://sepolia.etherscan.io',
  explorerName: 'Etherscan',
  subgraph: '',
  poolsUrlV2: '',
  subgraphs: {
    main: [''],
    aave: '',
    gauge: '',
    blocks: '',
  },
  bridgeUrl: '',
  supportsEIP1559: true,
  supportsElementPools: true,
  blockTime: 12,
  nativeAsset: {
    name: 'Ether',
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    symbol: 'ETH',
    decimals: 18,
    deeplinkId: 'ether',
    logoURI: 'tokens/eth.png',
    minTransactionBuffer: '0.05',
  },
  thirdParty: {
    coingecko: {
      nativeAssetId: 'ethereum',
      platformId: 'ethereum',
    },
  },
  addresses: {
    ...contracts,
  },
  pools,
  tokens,
  keys,
  gauges: {
    type: 2,
    weight: 100,
  },
  tokenlists,
  rateProviders,
};

export default config;
