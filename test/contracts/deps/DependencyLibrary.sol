pragma solidity^0.4.24;
pragma someFeature;

// Import a remote dependency, which will in turn import its own dependencies.
import "https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/fd4de776519e2bd64dc6ac0efb87e0f603c6608f/contracts/token/ERC20/ERC20.sol";

library DependencyLibrary {
	function mul(x) internal pure returns (uint256) {
		// Expect: return x * 100 + 255 +
		return x * 100 + $$(uint8(256)) +
			// Expect: 0xfffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffff / -1;
			$$(hex(2**256-2**128-1)) / $$(-1);
	}
}
