"use client";
import React, { useState } from "react";
import { CrossChainIcon, OOLogo, PredictionIcon, RWAIcon } from "./ui/icons";
import { FaBalanceScale } from "react-icons/fa";
import { InsuranceIcon } from "./ui/icons";

export default function Builder() {
  const [activeTab, setActiveTab] = useState("governance");

  const tabs = [
    {
      id: "governance",
      name: "Governance",
      icon: (
        <FaBalanceScale
          className="text-[30px] text-[#color: #AFAEB2;
text-align: center;
font-family: Inter;
font-size: 15.328px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 182.671% */]"
        />
      ),
    },
    {
      id: "prediction",
      name: "Prediction Markets",
      icon: <PredictionIcon />,
    },
    {
      id: "insurance",
      name: "Insurance",
      icon: <InsuranceIcon />,
    },
    {
      id: "crosschain",
      name: "Cross-Chain Communication",
      icon: <CrossChainIcon />,
    },
    {
      id: "rwa",
      name: "Real World Assets",
      icon: <RWAIcon />,
    },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case "governance":
        return {
          title: "Governance",
          description:
            "The OO can be used to enable more trustless forms of DAO governance. The first product using this is oSnap, which is a trustless method to execute the results of a Snapshot vote on chain.",
          question:
            "Does this on-chain transaction match an approved Snapshot vote?",
          code: `pragma solidity ^0.8.14;

/**
 * @title Optimistic Governor
 * @notice A contract that allows optimistic governance of a set of transactions. The contract can be used to propose transactions that can be challenged by anyone. If the challenge is not resolved within a certain liveness period, the transactions can be executed.
 */
contract OptimisticGovernor {
  struct Transaction {
    address to;
    uint256 value;
    bytes data;
  }
  
  uint256 public constant livenessPeriod = 7 days;
  uint256 public constant bondAmount = 1000 ether;
  
  mapping(bytes32 => bool) public executedTransactions;
  mapping(bytes32 => uint256) public proposalTimestamps;
  
  event TransactionProposed(bytes32 indexed proposalId, Transaction[] transactions, string explanation);
  event TransactionExecuted(bytes32 indexed proposalId);
  event TransactionChallenged(bytes32 indexed proposalId, address challenger);
  
  function proposeTransactions(Transaction[] memory _transactions, bytes memory _explanation) external nonReentrant {
    require(_transactions.length > 0, "No transactions provided");
    
    bytes32 proposalId = keccak256(abi.encode(_transactions, _explanation, block.timestamp));
    require(proposalTimestamps[proposalId] == 0, "Proposal already exists");
    
    proposalTimestamps[proposalId] = block.timestamp;
    
    emit TransactionProposed(proposalId, _transactions, string(_explanation));
  }
  
  function executeTransactions(bytes32 _proposalId, Transaction[] memory _transactions) external {
    require(!executedTransactions[_proposalId], "Already executed");
    require(proposalTimestamps[_proposalId] > 0, "Proposal does not exist");
    require(block.timestamp >= proposalTimestamps[_proposalId] + livenessPeriod, "Liveness period not met");
    
    executedTransactions[_proposalId] = true;
    
    for (uint256 i = 0; i < _transactions.length; i++) {
      (bool success, ) = _transactions[i].to.call{value: _transactions[i].value}(_transactions[i].data);
      require(success, "Transaction execution failed");
    }
    
    emit TransactionExecuted(_proposalId);
  }
  
  function challengeTransaction(bytes32 _proposalId) external payable {
    require(!executedTransactions[_proposalId], "Already executed");
    require(proposalTimestamps[_proposalId] > 0, "Proposal does not exist");
    require(block.timestamp < proposalTimestamps[_proposalId] + livenessPeriod, "Liveness period expired");
    require(msg.value >= bondAmount, "Insufficient bond");
    
    emit TransactionChallenged(_proposalId, msg.sender);
  }
  
  function getProposalStatus(bytes32 _proposalId) external view returns (bool executed, uint256 timestamp) {
    return (executedTransactions[_proposalId], proposalTimestamps[_proposalId]);
  }
}`,
        };
      case "prediction":
        return {
          title: "Prediction Markets",
          description:
            "Create and participate in prediction markets using UMA's optimistic oracle. These markets can predict real-world events and provide valuable price discovery mechanisms.",
          question:
            "Will the price of ETH be above $3000 on December 31st, 2024?",
          code: `pragma solidity ^0.8.14;

/**
 * @title Prediction Market
 * @notice A contract that enables prediction markets for real-world events.
 */
contract PredictionMarket {
  function createMarket(string memory _question, uint256 _endTime) external {
    // Create a new prediction market
  }
  
  function placeBet(uint256 _marketId, bool _outcome) external payable {
    // Place a bet on market outcome
  }
}`,
        };
      case "insurance":
        return {
          title: "Insurance",
          description:
            "Build decentralized insurance products using UMA's oracle system. Create parametric insurance that automatically pays out based on verifiable data.",
          question: "Did the temperature exceed 100°F for 3 consecutive days?",
          code: `pragma solidity ^0.8.14;

/**
 * @title Parametric Insurance
 * @notice Insurance that pays out based on verifiable data.
 */
contract ParametricInsurance {
  function createPolicy(uint256 _coverage, uint256 _premium) external {
    // Create insurance policy
  }
  
  function checkClaim(uint256 _policyId) external {
    // Check if claim conditions are met
  }
}`,
        };
      case "crosschain":
        return {
          title: "Cross-Chain Communication",
          description:
            "Enable secure cross-chain communication and data verification using UMA's optimistic oracle. Bridge data between different blockchain networks.",
          question: "Is the transaction hash valid on Ethereum mainnet?",
          code: `pragma solidity ^0.8.14;

/**
 * @title Cross-Chain Bridge
 * @notice Enables secure cross-chain data verification.
 */
contract CrossChainBridge {
  function verifyTransaction(bytes32 _txHash, uint256 _chainId) external {
    // Verify transaction on another chain
  }
  
  function bridgeData(bytes memory _data, uint256 _targetChain) external {
    // Bridge data to target chain
  }
}`,
        };
      case "rwa":
        return {
          title: "Real World Assets",
          description:
            "Tokenize and manage real-world assets using UMA's oracle system. Create verifiable representations of physical assets on-chain.",
          question: "Is the gold bar stored in vault #1234 still present?",
          code: `pragma solidity ^0.8.14;

/**
 * @title Real World Asset Token
 * @notice Tokenizes real-world assets with oracle verification.
 */
contract RWAToken {
  function mintAsset(uint256 _assetId, uint256 _value) external {
    // Mint token representing real asset
  }
  
  function verifyAsset(uint256 _assetId) external {
    // Verify asset still exists and is valid
  }
}`,
        };
      default:
        return {
          title: "Governance",
          description:
            "The OO can be used to enable more trustless forms of DAO governance.",
          question:
            "Does this on-chain transaction match an approved Snapshot vote?",
          code: `pragma solidity ^0.8.14;`,
        };
    }
  };

  const content = getTabContent();

  return (
    <div className=" pt-[92px]">
      <div className="max-w-[1148px] mx-auto">
        {/* Original Content */}
        <h2 className="border-b border-[#E0E0E0] pb-3 text-lg md:pb-4 md:text-4xl [&>strong]:font-normal [&>strong]:text-red">
          Participate as a <span className="text-[#FF4D4D]">UMA</span> Voter
        </h2>
        <div className="mt-12 mb-[128px] w-full text-sm-fluid md:mb-16 md:w-[720px]  lg:mb-[96px] leading-[7rem] lg:mt-12 lg:w-[1020px] lg:text-[6rem] xl:mb-[128px] xl:mt-12">
          <h2>Launch products with the</h2>
          <div className="flex items-center gap-4 -mt-5">
            <div className="[&_svg_path]:fill-[#FF4D4D] mt-10">
              <OOLogo />
            </div>
            <h2>as your backbone</h2>
          </div>
        </div>

        {/* New Tab Section */}
        <div className=" bg-white mt-[127px]">
          {/* Top Navigation Bar */}
          <nav className=" ">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex items-center justify-between   border-b  border-[#E0E0E0]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex flex-col items-center space-y-5 cursor-pointer hover:opacity-80 transition-opacity w-full"
                  >
                    <div
                      className={`w-full mb-[14px] ${
                        activeTab === tab.id ? "w-full" : ""
                      } flex items-center justify-center ${
                        activeTab === tab.id
                          ? "text-[#FF4D4D]"
                          : "text-gray-500"
                      }`}
                    >
                      {tab.icon}
                    </div>
                    <span
                      className={`text-[18px] ${
                        activeTab === tab.id
                          ? "text-[#FF4D4D]"
                          : "text-[#afaeab]"
                      }`}
                    >
                      {tab.name}
                    </span>
                    {activeTab === tab.id ? (
                      <div className="w-full h-[1px] bg-[#FF4D4D]"></div>
                    ) : (
                      <div className="w-full h-[1px]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="px-0 pt-[58px]">
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="">
                  <h1 className="text-[60px] text-[#272528]">
                    {content.title}
                  </h1>

                  <div className="text-[#272528] text-[20px] mt-3 w-[544px]">
                    <p>{content.description}</p>
                  </div>
                  <div className="line-bg w-full h-[1px] mt-[49px]" />
                  <div className="mt-7">
                    <h3 className="text-[18px] text-[#838183]">
                      Real question used by{" "}
                      {activeTab === "governance" ? "oSnap" : "UMA Oracle"}
                    </h3>
                    <p className="text-[#FF4D4D] text-lg  mt-2.5">
                      &quot;{content.question}&quot;
                    </p>
                  </div>
                </div>

                {/* Right Column - Code Snippet */}
                <div>
                  <div className="bg-white border border-b-0 border-[#24292E] rounded-t-lg p-6  text-base max-h-[400px] overflow-y-auto relative">
                    <div className="flex">
                      <div className="text-[#d1d4d8] mr-4 select-none">
                        {content.code.split("\n").map((_, index) => (
                          <div key={index} className="leading-6">
                            {index + 1}
                          </div>
                        ))}
                      </div>
                      <pre className="whitespace-pre-wrap text-sm flex-1">
                        <code className="text-[#24292E]">{content.code}</code>
                      </pre>
                    </div>
                  </div>
                  <div className="w-full flex  bg-[#F3F3F3] border border-[#838183] rounded-b-[8px]"></div>
                  <div className="flex justify-center items-center gap-4 mt-7">
                    {" "}
                    <span className="text-[#FF4D4D] text-xl ">
                      Build your first smart contract with UMA
                    </span>
                    <div className="w-8 h-8 border border-[#FF4D4D] rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="px-0 pb-16 pt-20">
            <div className="max-w-[1440px] mx-auto text-center">
              <div className="flex items-center justify-center space-x-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
