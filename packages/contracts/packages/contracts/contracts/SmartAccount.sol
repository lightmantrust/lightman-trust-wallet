// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@account-abstraction/contracts/core/BaseAccount.sol";

/**
 * @title LightmanSmartAccount
 * A basic smart contract account for the Light-man Trust Wallet.
 * It's owned by a single owner and can execute transactions.
 */
contract LightmanSmartAccount is BaseAccount {
    address public owner;

    constructor(address _entryPoint, address _owner) BaseAccount(_entryPoint) {
        owner = _owner;
    }

    /**
     * @dev Validates that the signature on the UserOperation is from the owner.
     */
    function _validateSignature(
        UserOperation calldata userOp,
        bytes32 userOpHash
    ) internal view override returns (uint256) {
        bytes32 hash = getMessageHash(userOpHash);
        if (owner != ECDSA.recover(hash, userOp.signature)) {
            return 1; // SIG_VALIDATION_FAILED
        }
        return 0; // Signature validation successful
    }

    /**
     * @dev Returns the hash that should be signed by the owner.
     */
    function getMessageHash(bytes32 userOpHash) public view returns (bytes32) {
        return keccak256(abi.encode(block.chainid, address(this), userOpHash));
    }
}```

---

#### **3. Frontend Package (`packages/frontend`)**

**File: `packages/frontend/package.json`**

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/node": "20.5.0",
    "@types/react": "18.2.20",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "ethers": "^6.7.1",
    "next": "13.4.18",
    "postcss": "8.4.28",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "socket.io-client": "^4.7.2",
    "tailwindcss": "3.3.3",
    "typescript": "5.1.6"
  }
}
