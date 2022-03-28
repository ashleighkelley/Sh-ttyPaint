//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract ShittyPaint is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    string public baseTokenURI;

    uint public constant MAX_SUPPLY = 25;
    uint public constant PRICE = 0.005 ether;
    uint public constant MAX_PER_MINT = 1;

    //constructor passes smart contract name and its symbol
    constructor(string memory baseURI) ERC721("ShittyPaint", "SPNFT") {
        setBaseURI(baseURI);
     }
    
    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory _baseTokenURI) public {
        baseTokenURI = _baseTokenURI;
    }

    //passes address to receive NFT and JSON describing NFT metadata
    function mintNFT() public payable
        returns (uint256)
    {
        require(msg.value >=  PRICE, "Not enough ETH sent; check price!"); 
        require(_tokenIdCounter.current() <= 25, "All available NFTs have been allocated");
        //require(balanceOf(msg.sender) == 0, 'Each address may only claim one');

        /*setBaseURI(baseURI);

        _tokenIdCounter.increment();
        //require(tokenID == _tokenIdCounter.current(), "All available NFTs have been allocated");

        _safeMint(recipient, _tokenIdCounter.current());*/

        _mintSingleNFT();

        //returns numeric ID of newly minted NFT
        return _tokenIdCounter.current();
    }

    function _mintSingleNFT() private {
        uint newTokenID = _tokenIdCounter.current();
        _safeMint(msg.sender, newTokenID);
        _tokenIdCounter.increment();
    }

    function withdraw() public payable onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");
        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }
}
