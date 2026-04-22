// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleStorage {
    uint256 public value;
    uint256 public counter;
    string public message;
    address public owner;

    event ValueUpdated(uint256 newValue);
    event CounterIncremented(uint256 newCounter);
    event MessageUpdated(string newMessage);

    constructor() {
        owner = msg.sender;
        message = "Hello, Blockchain Lab";
    }

    function setValue(uint256 _value) external {
        value = _value;
        emit ValueUpdated(_value);
    }

    function incrementCounter() external {
        counter += 1;
        emit CounterIncremented(counter);
    }

    function setMessage(string memory _message) external {
        message = _message;
        emit MessageUpdated(_message);
    }

    function getSummary()
        external
        view
        returns (uint256 storedValue, uint256 currentCounter, string memory storedMessage)
    {
        return (value, counter, message);
    }
}
