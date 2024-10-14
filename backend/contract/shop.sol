// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleShop {
    event OrderPlaced(address indexed buyer, uint256 amount, string product);

    function placeOrder(string memory product) public payable {
        require(msg.value > 0, "Payment required");
        emit OrderPlaced(msg.sender, msg.value, product);
    }
}
›