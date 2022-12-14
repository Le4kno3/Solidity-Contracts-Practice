pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C07 {

    address[] public whitelisted;

    function whitelist(address addr) public {
        if(addr == msg.sender){
            //we can add multiple addresses to whitelist
            whitelisted.push(addr);
        }
    }

    function check() public view returns (bool){
        for(uint i = 0; i < whitelisted.length; i++){
            if(whitelisted[i] == msg.sender)
                return true;
        }
        return false;
    }
}
