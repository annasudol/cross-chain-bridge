# Vault Interface

A simplify crypto Bridge betwen testnet networks: Sepolia and Binance. Built with Next.js 14, TypeScript, Tailwind CSS, and wagmi v2.

# Table of content

## 🌟 Features

- **Type-Safe Contract Interactions**: Fully typed smart contract interactions using wagmi v2
- **Modern Stack**: Built on Next.js 14 with App Router and Server Components
- **Responsive Design**: Mobile-first UI built with Tailwind CSS and NextUI
- **Wallet Integration**: Seamless wallet connection with RainbowKit
- **State Management**: React Query for server state and React Context for local state
- **Developer Experience**:
  - TypeScript for type safety
  - ESLint and Prettier for code quality
  - Husky for git hooks

## 🚀 Quick Start

1. Clone the repository:

```bash
git clone https://github.com/annasudol/cross-chain-bridge
cd cross-chain-bridge
```

2. Install dependencies:

```bash
pnpm install
```

This will install all the dependencies

3. Create a `.env` file and add your environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
pnpm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the application.

```


## 🌟 Smart Contract used in the app

/////------------------------TOKENS----------------------------------//////
## Token sETH on Sepolia Tesnet 
### 0xB2590B5e4Aa210f1536FA5707B79dD695E781809
[contract at sepolia.etherscan.io] (https://sepolia.etherscan.io/address/0xB2590B5e4Aa210f1536FA5707B79dD695E781809)

## Token_BSC on Binance Testnet 
### BSC 0x1C8cd559b58958679886F0Ab10c3455110A4aF2C
[contract at Bscscan] (https://testnet.bscscan.com/address/0x1C8cd559b58958679886F0Ab10c3455110A4aF2C)


/////------------------------BRIDGES----------------------------------//////
## Bridge Ethereum
### Sepolia 0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF
[contract at sepolia.etherscan.io] (https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)


## Bridge Bscscan 
### Bscscan 0x67408729BFD8192673ADc073D4Ca33A56c55811d
[contract at testnet bscscan] (https://testnet.bscscan.com/address/0x67408729BFD8192673ADc073D4Ca33A56c55811d#code)

## 📦 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build production bundle
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [wagmi](https://wagmi.sh) for the Ethereum development toolkit
- [RainbowKit](https://www.rainbowkit.com/) for the wallet connection UI
- [nextui](https://nextui.org/) for the component library
