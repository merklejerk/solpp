pragma solidity ^0.6;
pragma experimental AbiEncoderV2;

contract Base1 { }
contract Base2 { }

// Some contract.
contract TestContract is Base1, Base2 {

	fallback() external payable {
		// #if EXT_SYMBOL_1
		// #def RANGE [0, 32]
		bytes memory slice = msg.data[$$(RANGE[0]):$$(RANGE[1])];
		// #endif
		// #if !(1 - 1)
		// #def RANGE [32, 64]
		bytes memory slice2 = msg.data[$$(RANGE[0]):$$(RANGE[1])];
		// #endif
	}

	function foo() external payable returns (uint256 r) {
		assembly {
			mstore(0, $$(hex(EXT_SYMBOL_5,32)))
			revert(0, $$(hex(32)))
		}
		this.foo{value: $$(uint256(123e18))}();
	}
}
