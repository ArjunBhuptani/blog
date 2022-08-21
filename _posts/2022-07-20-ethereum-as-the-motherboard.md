---
toc: false
layout: post
hide: true
description: Building the Web3 World Computer
categories: [markdown]
title: Ethereum as the Motherboard
---

# Ethereum as the Motherboard

## Outline

Intro
1. In 2016-2017, many of us were trying to figure out a simple question: what exactly *is* Ethereum?
2. World computer
3. What are the requirements of a world computer?
4. Why did this narrative not pan out? We were missing: xyz

What has changed now?
5. Fragmentation + parallelization of EVM compute resources via L2s
6. Early growth of decentralized resource networks for memory (graph), storage (filecoin, arweave), gpus (golem, render) and more
7. Trust-minimized + generalized + extensible bridge constructions like Nomad

Accessing Resources from within Smart Contracts
8. Bridge constructions now make it possible to link EVM compute resources
9. But they can do more: imagine writing an implementation of Nomad+Connext as a Filecoin actor or on Arweave
10. The result: **contract-owned storage**. Contracts can autonomously store + fetch data from these networks.
11. Aside: how is this different from attaching an IPFS hash to an NFT contract? --> Ownership + trust model

A New Vision for the World Computer
12. Ethereum on its own is not the whole solution. We've known this is the case - this is why rollups exist!
13. However, Ethereum is the substrate that provides base layer security + language for rollups to exist
14. By extending this model to other types of resources beyond compute, we can build *full stack* decentralized applications.
15. Imagine writing a smart contract that runs a game engine. The contract is deployed to ZkSync, using Ethereum for economic security. That contract
    also stores assets on Arweave. The game state is accessible in real-time via the Graph. 