# Light-man Trust Wallet
![alt text](https://img.shields.io/badge/License-MIT-blue.svg)
![alt text](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![alt text](https://img.shields.io/badge/Status-Active%20Development-green)
The future of digital asset management. A supremely secure, user-friendly, and intelligent Web3 wallet built for 2025 and beyond.
✨ Vision
The Light-man Trust Wallet redefines the user experience in Web3 by eliminating the core pain points of security and complexity. Our mission is to provide users with absolute trust and effortless control over their digital assets through a combination of institutional-grade security, a real-time reactive interface, and a future-proof architecture that bridges the gap between decentralized and traditional finance.
Core Pillars & Features
This wallet is built on four foundational pillars that make it unique:
🛡️ Invisible Security (The MPC Layer)
No Seed Phrases: Onboarding is done through familiar social/email logins. Private keys are sharded and secured using Multi-Party Computation (MPC), eliminating the single point of failure of a user-managed seed phrase.
AI Threat Shield: Proactively simulates every transaction, warning users of potential phishing scams, malicious contracts, and other threats before they sign.
🧠 The Smart Wallet Engine (The ERC-4337 Layer)
Account Abstraction: Every user gets their own smart contract account, enabling functionality impossible with traditional wallets.
Gasless Transactions: The wallet sponsors initial transaction fees, allowing new users to get started without needing native tokens.
Pay Fees with Any Token: Pay transaction fees with stablecoins like USDC instead of the chain's native asset.
"Fortress" Protocols: Users can set their own on-chain security rules, like daily spending limits and address whitelisting.
⚡ The Living Interface (The Real-Time Layer)
Instantaneous Updates: Using WebSockets, the UI updates in real-time. Incoming transactions appear instantly, balances change without refreshing, and notifications are pushed live.
Human-Readable: All actions are translated from complex blockchain jargon into simple, understandable language.
🌉 The Future-Proof Bridge (The Interoperability Layer)
Multi-Chain by Design: Seamlessly manage assets across Ethereum, Polygon, Arbitrum, and other EVM chains from a single interface.
ISO 20022 Ready: The backend is architected to structure transaction data in a way that aligns with the ISO 20022 financial messaging standard, preparing it for a future of integrated finance.
💻 Technology Stack
This project is a full-stack monorepo containing three core packages.
Category	Technology	Purpose
Blockchain	Solidity, Hardhat, Ethers.js	Smart Contracts (ERC-4337), testing, and deployment.
Frontend	Next.js, React, Tailwind CSS	Modern, fast, and responsive user interface.
Backend	Node.js, NestJS, WebSocket (Socket.IO)	Real-time data streams, API logic, and blockchain listeners.
Database	PostgreSQL	Robust and structured data storage.
Infrastructure	Vercel, AWS/GCP, Docker	Deployment, hosting, and scalability.
🚀 Getting Started
Follow these instructions to set up and run the project locally for development.
Prerequisites
Node.js (v18 or later)
npm or Yarn
An Alchemy API Key for connecting to the blockchain.
1. Clone the Repository
Clone this repository to your local machine:
Generated bash
git clone https://github.com/lightmantrust/lightman-trust-wallet.git
cd lightman-trust-wallet
Use code with caution.
Bash
2. Install Dependencies
This is a monorepo using npm workspaces. Install all dependencies from the root directory.
Generated bash
npm install
Use code with caution.
Bash
3. Set Up Environment Variables
You need to create a .env file in the packages/contracts directory for your blockchain credentials. You can copy the example file:
Generated bash
cp packages/contracts/.env.example packages/contracts/.env
Use code with caution.
Bash
Now, edit packages/contracts/.env and add your Alchemy API key and the private key of a development wallet.
Generated dotenv
# .env file for Hardhat
ALCHEMY_API_KEY="YOUR_ALCHEMY_API_KEY"
PRIVATE_KEY="YOUR_DEVELOPMENT_WALLET_PRIVATE_KEY"
Use code with caution.
Dotenv
4. Run the Application
You can run each part of the application from the root directory.
Compile Smart Contracts:
Generated bash
npm run contracts
Use code with caution.
Bash
Run the Frontend:
(This will start the Next.js development server at http://localhost:3000)
Generated bash
npm run frontend```

**Run the Backend:**
(This will start the NestJS WebSocket server at `http://localhost:3001`)
```bash
npm run backend
Use code with caution.
Bash
🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'feat: Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📜 License
Distributed under the MIT License. See LICENSE file for more information.
