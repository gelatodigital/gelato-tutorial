// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IIceCreamNFT {
    function mint(address) external;
    function transferOwnership(address) external;
    function totalSupply() external view returns (uint256);
    function hasClaimed(address) external view returns (bool);
}

interface ICredits {
    function claim(address) external;
    function claimable(address) external view returns (uint256);
}

contract GelatoTutorial is Ownable {

    IIceCreamNFT public immutable iceCreamNFT;
    ICredits public immutable gelatoCredits;

    event ClaimTutorial(address claimer, uint256 index, uint256 creditsAdded);

    constructor(IIceCreamNFT _IceCreamNFT, ICredits _gelatoCredits) {
        iceCreamNFT = _IceCreamNFT;
        gelatoCredits = _gelatoCredits;
    }

    function claimTutorial() external {
        // @note: onlyOwner can mint - GelatoTutorial must be passed ownership of iceCreamNFT

        uint256 index;
        if (!iceCreamNFT.hasClaimed(msg.sender)) {
            iceCreamNFT.mint(msg.sender);
            index = iceCreamNFT.totalSupply();
        }
        uint256 amount = gelatoCredits.claimable(msg.sender);
        if (amount > 0) {
            gelatoCredits.claim(msg.sender);
        }
        emit ClaimTutorial(msg.sender, index, amount);
    }

    function transferShopOwnership(address _newOwner) external onlyOwner {
        iceCreamNFT.transferOwnership(_newOwner);
    }
}