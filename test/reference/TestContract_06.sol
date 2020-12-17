pragma solidity ^0.6;
pragma experimental AbiEncoderV2;

contract Base1 { }
contract Base2 { }

// Some contract.
contract TestContract is Base1, Base2 {

	fallback() external payable {
		bytes memory slice = msg.data[0:32];
		bytes memory slice2 = msg.data[32:64];
	}

	function foo() external payable returns (uint256 r) {
		assembly {
			mstore(0, 0x0000000000000000000000000000000000000000000000000000000000000400)
			revert(0, 0x20)
		}
		this.foo{value: 123000000000000000000}();
	}
}
