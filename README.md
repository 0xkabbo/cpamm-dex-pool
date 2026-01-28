# Constant Product AMM (DEX)

This repository contains a fully functional Automated Market Maker (AMM) based on the Constant Product Formula `x * y = k`. 

## Core Concepts
1. **Swapping**: Traders can exchange Token A for Token B. The price is determined automatically by the ratio of reserves.
2. **Liquidity Provision**: Users (LPs) deposit both tokens to facilitate trades.
3. **LP Shares**: LPs receive shares representing their portion of the pool. Fees (0.3%) are added to the pool, increasing the value of these shares.

## Functions
- `swap(address _tokenIn, uint _amountIn)`: Swap tokens.
- `addLiquidity(uint _amount0, uint _amount1)`: Add funds to pool.
- `removeLiquidity(uint _shares)`: Burn shares to withdraw funds.

## Prerequisites
- Node.js & NPM
- Hardhat

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
