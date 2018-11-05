pragma solidity^0.4.24;

import "./DependencyLibrary.sol";

contract OtherContract {
	// Expect: uint256 _foo = 1024;
	uint256 _foo = ${EXT_SYMBOL_5};
	// Expect: uint256 _bar = 501;
	uint256 _bar = $${int(1001/2) + 1};

	function bar() public view returns (uint256) {
		return _foo;
	}
}

// #def OTHER_CONTRACT_SYM_1 true
