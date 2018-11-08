pragma solidity^0.4.24;

// Import a remote dependency, which will in turn import its own dependencies.

/**
 * @title ERC20 interface
 * @dev see https://github.com/ethereum/EIPs/issues/20
 */
interface IERC20 {
  function totalSupply() external view returns (uint256);

  function balanceOf(address who) external view returns (uint256);

  function allowance(address owner, address spender)
    external view returns (uint256);

  function transfer(address to, uint256 value) external returns (bool);

  function approve(address spender, uint256 value)
    external returns (bool);

  function transferFrom(address from, address to, uint256 value)
    external returns (bool);

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );

  event Approval(
    address indexed owner,
    address indexed spender,
    uint256 value
  );
}

/**
 * @title SafeMath
 * @dev Math operations with safety checks that revert on error
 */
library SafeMath {

  /**
  * @dev Multiplies two numbers, reverts on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256) {
    // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (a == 0) {
      return 0;
    }

    uint256 c = a * b;
    require(c / a == b);

    return c;
  }

  /**
  * @dev Integer division of two numbers truncating the quotient, reverts on division by zero.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b > 0); // Solidity only automatically asserts when dividing by 0
    uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold

    return c;
  }

  /**
  * @dev Subtracts two numbers, reverts on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b <= a);
    uint256 c = a - b;

    return c;
  }

  /**
  * @dev Adds two numbers, reverts on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    require(c >= a);

    return c;
  }

  /**
  * @dev Divides two numbers and returns the remainder (unsigned integer modulo),
  * reverts when dividing by zero.
  */
  function mod(uint256 a, uint256 b) internal pure returns (uint256) {
    require(b != 0);
    return a % b;
  }
}

/**
 * @title Standard ERC20 token
 *
 * @dev Implementation of the basic standard token.
 * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
 * Originally based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol
 */
contract ERC20 is IERC20 {
  using SafeMath for uint256;

  mapping (address => uint256) private _balances;

  mapping (address => mapping (address => uint256)) private _allowed;

  uint256 private _totalSupply;

  /**
  * @dev Total number of tokens in existence
  */
  function totalSupply() public view returns (uint256) {
    return _totalSupply;
  }

  /**
  * @dev Gets the balance of the specified address.
  * @param owner The address to query the balance of.
  * @return An uint256 representing the amount owned by the passed address.
  */
  function balanceOf(address owner) public view returns (uint256) {
    return _balances[owner];
  }

  /**
   * @dev Function to check the amount of tokens that an owner allowed to a spender.
   * @param owner address The address which owns the funds.
   * @param spender address The address which will spend the funds.
   * @return A uint256 specifying the amount of tokens still available for the spender.
   */
  function allowance(
    address owner,
    address spender
   )
    public
    view
    returns (uint256)
  {
    return _allowed[owner][spender];
  }

  /**
  * @dev Transfer token for a specified address
  * @param to The address to transfer to.
  * @param value The amount to be transferred.
  */
  function transfer(address to, uint256 value) public returns (bool) {
    _transfer(msg.sender, to, value);
    return true;
  }

  /**
   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
   * Beware that changing an allowance with this method brings the risk that someone may use both the old
   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this
   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:
   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
   * @param spender The address which will spend the funds.
   * @param value The amount of tokens to be spent.
   */
  function approve(address spender, uint256 value) public returns (bool) {
    require(spender != address(0));

    _allowed[msg.sender][spender] = value;
    emit Approval(msg.sender, spender, value);
    return true;
  }

  /**
   * @dev Transfer tokens from one address to another
   * @param from address The address which you want to send tokens from
   * @param to address The address which you want to transfer to
   * @param value uint256 the amount of tokens to be transferred
   */
  function transferFrom(
    address from,
    address to,
    uint256 value
  )
    public
    returns (bool)
  {
    require(value <= _allowed[from][msg.sender]);

    _allowed[from][msg.sender] = _allowed[from][msg.sender].sub(value);
    _transfer(from, to, value);
    return true;
  }

  /**
   * @dev Increase the amount of tokens that an owner allowed to a spender.
   * approve should be called when allowed_[_spender] == 0. To increment
   * allowed value is better to use this function to avoid 2 calls (and wait until
   * the first transaction is mined)
   * From MonolithDAO Token.sol
   * @param spender The address which will spend the funds.
   * @param addedValue The amount of tokens to increase the allowance by.
   */
  function increaseAllowance(
    address spender,
    uint256 addedValue
  )
    public
    returns (bool)
  {
    require(spender != address(0));

    _allowed[msg.sender][spender] = (
      _allowed[msg.sender][spender].add(addedValue));
    emit Approval(msg.sender, spender, _allowed[msg.sender][spender]);
    return true;
  }

  /**
   * @dev Decrease the amount of tokens that an owner allowed to a spender.
   * approve should be called when allowed_[_spender] == 0. To decrement
   * allowed value is better to use this function to avoid 2 calls (and wait until
   * the first transaction is mined)
   * From MonolithDAO Token.sol
   * @param spender The address which will spend the funds.
   * @param subtractedValue The amount of tokens to decrease the allowance by.
   */
  function decreaseAllowance(
    address spender,
    uint256 subtractedValue
  )
    public
    returns (bool)
  {
    require(spender != address(0));

    _allowed[msg.sender][spender] = (
      _allowed[msg.sender][spender].sub(subtractedValue));
    emit Approval(msg.sender, spender, _allowed[msg.sender][spender]);
    return true;
  }

  /**
  * @dev Transfer token for a specified addresses
  * @param from The address to transfer from.
  * @param to The address to transfer to.
  * @param value The amount to be transferred.
  */
  function _transfer(address from, address to, uint256 value) internal {
    require(value <= _balances[from]);
    require(to != address(0));

    _balances[from] = _balances[from].sub(value);
    _balances[to] = _balances[to].add(value);
    emit Transfer(from, to, value);
  }

  /**
   * @dev Internal function that mints an amount of the token and assigns it to
   * an account. This encapsulates the modification of balances such that the
   * proper events are emitted.
   * @param account The account that will receive the created tokens.
   * @param value The amount that will be created.
   */
  function _mint(address account, uint256 value) internal {
    require(account != 0);
    _totalSupply = _totalSupply.add(value);
    _balances[account] = _balances[account].add(value);
    emit Transfer(address(0), account, value);
  }

  /**
   * @dev Internal function that burns an amount of the token of a given
   * account.
   * @param account The account whose tokens will be burnt.
   * @param value The amount that will be burnt.
   */
  function _burn(address account, uint256 value) internal {
    require(account != 0);
    require(value <= _balances[account]);

    _totalSupply = _totalSupply.sub(value);
    _balances[account] = _balances[account].sub(value);
    emit Transfer(account, address(0), value);
  }

  /**
   * @dev Internal function that burns an amount of the token of a given
   * account, deducting from the sender's allowance for said account. Uses the
   * internal burn function.
   * @param account The account whose tokens will be burnt.
   * @param value The amount that will be burnt.
   */
  function _burnFrom(address account, uint256 value) internal {
    require(value <= _allowed[account][msg.sender]);

    // Should https://github.com/OpenZeppelin/zeppelin-solidity/issues/707 be accepted,
    // this function needs to emit an event with the updated approval.
    _allowed[account][msg.sender] = _allowed[account][msg.sender].sub(
      value);
    _burn(account, value);
  }
}

library DependencyLibrary {
	function mul(x) internal pure returns (uint256) {
		// Expect: return x * 100 + 255 +
		return x * 100 + 0 +
			// Expect: 0xfffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffff / -1;
			0xfffffffffffffffffffffffffffffffeffffffffffffffffffffffffffffffff / -1;
	}
}

contract OtherContract {
	// Expect: uint256 _foo = 1024;
	uint256 _foo = 1024;
	// Expect: uint256 _bar = 501;
	uint256 _bar = 501;

	function bar() public view returns (uint256) {
		return _foo;
	}
}

// This import does not exist. It will be ignored with the 'tolerant' option
import './deps/NonExistant.sol';
// This import should be ignored because it's not a naked import.
import {Poop} from './PoopContract.sol';

// Some contract.
contract TestContract {
	uint256 _var1;
	uint256 _var2 = 4;
	address _a2 = 0x2;
	// Expect: uint256 _var4 = 1008;
	uint256 _var4 = 1008;
	address _var5;
	uint256 _var6;
	bool _b;
	bool _d;
	bool _e;
	bool _f = true;
	// Expect: string _str0 = "9" + "256" + "booger";
	string _str0 = "9" + "256" + "booger";
	// Expect: string _str1 = "foo/bar";
	string _str1 = "foo/bar";
	// Expect: string _str2 = "1.414213562373095";
	string _str2 = "1.414213562373095";
	// Expect: string _str3 = "1.41421356";
	string _str3 = "1.41421356";
	// Expect: string _str4 = "Bob Smith";
	string _str4 = "Bob Smith";

	// Expect: bytes32 _bytes0 = 0x666f6f626172;
	bytes32 _bytes0 = 0x666f6f626172;
	// Expect: bytes32 _bytes1 = 0x0000666f6f626172;
	bytes32 _bytes1 = 0x0000666f6f626172;
	// Expect: bytes32 _bytes2 = 0x666f6f6261720000;
	bytes32 _bytes2 = 0x666f6f6261720000;
	// Expect: bytes32 _bytes3 = 0x666f6f;
	bytes32 _bytes3 = 0x666f6f;
	// Expect: bytes32 _bytes4 = 0x626172;
	bytes32 _bytes4 = 0x626172;
	// Expect: bytes32 _bytes5 = 0xd18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e00;
	bytes32 _bytes5 = 0xd18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e00;
	// Expect: bytes32 _bytes6 = 0x000032;
	bytes32 _bytes6 = 0x000032;
	// Expect: bytes32 _bytes7 = 0xabcdef;
	bytes32 _bytes7 = 0xabcdef;
	// Expect bytes32 _bytes8 = 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2;
	bytes32 _bytes8 = 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2;

	address _addrs[] = [
		0xfb44fa0865747558066266061786e69336B5f3a2,
		0x4a07A55B1dD6ededF07e9D367baF8B32A56C808D,
		0x97126E63033BCecc109c0F8cAC25EaE594E2A586
	];

	bytes32 _keys[] = [
		0x41b1a0649752af1b28b3dc29a1556eee781e4a4c3a1f7f53f90fa834de098c4d,
		0x435cd288e3694b535549c3af56ad805c149f92961bf84a1c647f7d86fc2431b4,
		0xbe99dfa90a4789d025fe7d447db0eb4102dc82ed9c0e27b2782a050b9b8a6c56
	];

	// Sometimes join is simpler than a for loop.
	bytes32 _keys2[] = [
		0x41b1a0649752af1b28b3dc29a1556eee781e4a4c3a1f7f53f90fa834de098c4d,
		0x435cd288e3694b535549c3af56ad805c149f92961bf84a1c647f7d86fc2431b4,
		0xbe99dfa90a4789d025fe7d447db0eb4102dc82ed9c0e27b2782a050b9b8a6c56
	];

	// Block comment directives.
	uint256 _sum = 0 + 100 + 200 + 300;
	uint256 _sum2 = 0 + 100 + 200 + 300;

	// Some function.
	function foo(uint256 i) public view returns (uint256) {
		// Expect: uint8 x = 0xde;
		uint8 x = 0xde;
		// Expect: uint8 y = -32277;
		int16 y = -32277;
		// Expect: address addr = 0x67606790E4395bd826644b1Bc4f770132C70e39b;
		address addr = 0x67606790E4395bd826644b1Bc4f770132C70e39b;
		return _var5 + // tail comment
			// Expected: i + /* inline block comment */ 100;
			i /* inline block comment */ + 100;
	}

	/* Another function */
	function bar(uint256 x) internal {
		_var4  = x *
			// Expect: 1024 + (10**18 + 2) - 10 /
			1024 * (10**18 + 2) - 10 /
			// Expect: 10**3 + 10**this.foo(2) + 10 / 32 +
			10**3 + 10**this.foo(2) + 10 / 32 +
			// Expect: 9000000000000000018 + 128 + 21220 +
			9000000000000000018 + 128 + 21220 +
			// Expect: 2500000000008 + (1 days + 2 hours);
			2500000000000008 + (1 days + 2 hours);
		// Expect: _var5 = 0x000000000000000000000000000003282b0d3000;
		_var5 = 0x000000000000000000000000000003282b0d3000;
		// Expect: _var2 = 6;
		_var2 = 6;
		// Expect: 66 * -256 * 72;
		_var1 = 66 * -256 * 72;
		// Expect: _b = true && false;
		_b = true && false;
		// Expect: _var7 = 9 / 23025850
		_var7 = 9 / 23025850;
		// Expect: 0xffff21524117
		_var1 = 0xffff21524117;
		// Expect: STRS[0] = x + _var4;
		_var2 = STRS[0] + _var4;
	}

	function bar2() pure internal returns (bool) {
		// Expect: t = "no";
		string s = "no";
		// Expect: s3 = "yes";
		string s2 = "yes";
		// Expect: s3 = "yes";
		string s3 = "yes";
		// Expect: s4 = "bye";
		string s4 = "bye";
		// Expect: return false || true ||
		return false || true ||
			// Expect: true || false || true ||
			true || false || true ||
			// Expect: false || true && false ||
			false || true &&  false ||
			// Expect: (1 != 2) || false && true &&
			(1 != 2) || false && true &&
			// Expect: true && true &&
			true && true &&
			// false && true && true;
			false && true && true;
	}

}
