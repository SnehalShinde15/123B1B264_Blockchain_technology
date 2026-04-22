// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleDAO {
    struct Proposal {
        string description;
        uint256 yesVotes;
        uint256 noVotes;
        bool executed;
    }

    Proposal[] private proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event ProposalCreated(uint256 indexed proposalId, string description);
    event Voted(uint256 indexed proposalId, address indexed voter, bool support);
    event ProposalExecuted(uint256 indexed proposalId, bool passed);

    function createProposal(string memory description) external {
        require(bytes(description).length > 0, "Description required");

        proposals.push(
            Proposal({
                description: description,
                yesVotes: 0,
                noVotes: 0,
                executed: false
            })
        );

        emit ProposalCreated(proposals.length - 1, description);
    }

    function vote(uint256 proposalId, bool support) external {
        require(proposalId < proposals.length, "Invalid proposal");
        require(!proposals[proposalId].executed, "Already executed");
        require(!hasVoted[proposalId][msg.sender], "Already voted");

        hasVoted[proposalId][msg.sender] = true;

        if (support) {
            proposals[proposalId].yesVotes += 1;
        } else {
            proposals[proposalId].noVotes += 1;
        }

        emit Voted(proposalId, msg.sender, support);
    }

    function executeProposal(uint256 proposalId) external {
        require(proposalId < proposals.length, "Invalid proposal");
        require(!proposals[proposalId].executed, "Already executed");

        proposals[proposalId].executed = true;
        bool passed = proposals[proposalId].yesVotes > proposals[proposalId].noVotes;

        emit ProposalExecuted(proposalId, passed);
    }

    function getProposal(uint256 proposalId)
        external
        view
        returns (string memory description, uint256 yesVotes, uint256 noVotes, bool executed)
    {
        require(proposalId < proposals.length, "Invalid proposal");
        Proposal memory proposal = proposals[proposalId];
        return (proposal.description, proposal.yesVotes, proposal.noVotes, proposal.executed);
    }

    function proposalCount() external view returns (uint256) {
        return proposals.length;
    }
}
