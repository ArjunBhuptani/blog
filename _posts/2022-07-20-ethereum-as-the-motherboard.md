---
toc: false
layout: post
hide: false
description: Building the Web3 World Computer
categories: [markdown]
title: Ethereum as the Motherboard
---

# Ethereum as the Motherboard

Back in 2016, one of the biggest questions members of the Ethereum community were asking themselves was "what exactly *is* Ethereum?"

What drew many of us into the space initially was the prospect of building non-sovereign, non-corporate public goods - infrastructure for money, finance, governance, provenance, computing, and other forms of human coordination that could have the same impact and accessibility as the internet. Historically, the challenge of building these kinds of goods had always been figuring out how to actually achieve global scale with them, without having to introduce a limited set of trusted administrators.

The Ethereum blockchain represented a potential solution to this problem. By building public goods as smart contracts, projects could leverage Ethereum's global accessibility and untamperability from day 1, rather than having to bootstrap those properties themselves. This idea of a global programmable public infrastructure layer that could run any kind of application led to Ethereum's early vision as the **world computer**.

**Narrative Violation**

Unfortunately, as user adoption began to grow in 2017-2018, it became apparent that Ethereum couldn't support cheap enough execution, storage, or intensive compute to run full stack applications. Efforts shifted towards decentralizing the underlying primitives or means of production - for instance: ERC20 tokens, NFTs, and DeFi - with centralized, offchain infrastructure for the rest of the stack. The key goal here was to minimize onchain surface area and interactions.

A great example of this trend is the evolution of the DEX market - starting with onchain orderbook DEXs in the earliest days, to the EtherDelta model of an offchain orderbook->onchain settlement, and culminating in the AMM model with purely onchain logic (but with a centrally hosted frontend!)

Ethereum's narrative also shifted, away from that of a world computer and instead towards being the world's best platform for programmable finance.

Ethereum's growth in the past few years has been incredible, especially for those who hava been theorizing about what mass adoption could look like for years. However, the simplification of what constitutes a decentralized application or public good to only mean some minimal onchain logic brought with it problems that became apparent as part of this last bull run:
1. Inability for dApps to compete toe to toe with centralized counterparts without trading off decentralization. E.g. Uniswap simple/decentralized, but poorer pricing. DYDX centralized order book because no alternative. Tough to compete with Coinbase UX.
2. Censorship of the centralized dependencies of applications. E.g. DeFi frontend censorship, TC
3. "Decentralization laundering" - where hybrid models become so opaque/complex that they are the worst of both worlds and leave door open for bad actors who appear to provide equal or better offerings to dapps but are in fact completely trusted. This is a form of centralized capture.
4. Growing amount of custom work on hybrid onchain/offchain systems - in many cases, this happens by *new* devs who may not yet understand the intricacies of trust-minimized mechanism design. This leads to a far greater risk of hacks.

In order for Ethereum and the web3 movement to succeed, we need to increase the resilience of this ecosystem to centralized capture. That starts by making it possible for decentralized applications to actually be decentralized.

**Why Now?**

Over the past 5 years, there has been ongoing work on the underlying infrastructure of this ecosystem to improve scalability. I believe we are not getting close to the point where the idea of a world computer can become viable once more.

First and foremost, there is now a credible path towards scaling Ethereum that is being executed on by many well-funded teams around the world. Through rollups, the cost of running todays applications are on path to shrink by >1000x, and it's likely that we'll (for the first time), begin to experience a world where there is a *surplus* of available block space that can push application designs away from onchain-minimalism.

Second, we are seeing the early growth of decentralized resource networks for storage (e.g. Filecoin, Arweave), caching (the Graph), compute, and more. As blockspace commoditizes, I strongly suspect that we will begin to see specialization resulting in compute rollups, storage rollups, and other specialized systems that optimize for specific pricing requirements. In fact, specialized rollup implementations for custom usecases *are already happening*! [link to optimism minecraft]

Lastly, and perhaps most importantly, fully trustless intracluster communication (between rollups and L1), and mostly trustless intercluster communication (via IBC) are both heading towards implementation maturity. Using protocols like Connext, this means that developers building applications in a given execution environment can now asynchronously access state and resources *in any other execution environment* similar to how web applications are built today.

**Full-Stack Decentralized Applications**

Putting these things together creates a new development pattern that we are only just now scratching the surface of.

Accessing Resources from within Smart Contracts
8. Bridge constructions now make it possible to link EVM compute resources
9. But they can do more: imagine writing an implementation of Nomad+Connext as a Filecoin actor or on Arweave
10. The result: **contract-owned storage**. Contracts can autonomously store + fetch data from these networks.
11. Aside: how is this different from attaching an IPFS hash to an NFT contract? --> Ownership + trust model

**A New Vision for the World Computer**

12. Ethereum on its own is not the whole solution. We've known this is the case - this is why rollups exist!
13. However, Ethereum is the substrate that provides base layer security + language for rollups to exist
14. By extending this model to other types of resources beyond compute, we can build *full stack* decentralized applications.

Usecases:
- DAO-owned, onchain frontends served directly from chain/IPFS.
- Full-stack centralized exchanges but onchain. -> onchain orderbook, onchain market-making (protocols), onchain frontends, etc.
- Decentralized Google: => publicly stored/indexed data, "crawl-mining" => miners earn tokens for mapping internet, open marketplace for ranking algos
- Decentralized Wikipedia: => editing/moderation logic stored on rollup, content stored on filecoin, adjudication creates updates of stored content everywhere
- Decentralized OpenAI: => neural net weights stored on rollup, anyone can "feed" algorithm with dataset, net is modified via verifiable returns from compute rollup