// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IGelatoShop {
    function mint(address) external;
    function transferOwnership(address) external;
    function totalSupply() external view returns (uint256);
}

interface ICredits {
    function claim(address) external;
    function claimable(address) external view returns (uint256);
}

contract GelatoTutorial is Ownable {

    IGelatoShop public immutable gelatoShop;
    ICredits public immutable gelatoCredits;

    event ClaimTutorial(address claimer, uint256 index, uint256 creditsAdded);

    constructor(IGelatoShop _gelatoShop, ICredits _gelatoCredits) {
        gelatoShop = _gelatoShop;
        gelatoCredits = _gelatoCredits;
    }

    function claimTutorial() external {
        // @note: onlyOwner can mint - GelatoTutorial must be passed ownership of GelatoShop
        gelatoShop.mint(msg.sender);
        uint256 index = gelatoShop.totalSupply();
        uint256 amount = gelatoCredits.claimable(msg.sender);
        if (amount > 0) {
            gelatoCredits.claim(msg.sender);
        }
        emit ClaimTutorial(msg.sender, index, amount);
    }

    function transferShopOwnership(address _newOwner) external onlyOwner {
        gelatoShop.transferOwnership(_newOwner);
    }
}