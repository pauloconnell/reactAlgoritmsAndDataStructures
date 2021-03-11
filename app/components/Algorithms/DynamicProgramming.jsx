const React = require("react");

const DynamicProgramming = function(props) {
  let code = "{ a - b}"; // curly brackets cause problems in JSX, so just use variable

  return (
    <div>
      <h2> Algorithm:</h2>
      <h1>Dynamic Programming</h1>
      <h2>finding least number of coins</h2>

      <br />
      <button onClick={e => props.handleDp(e)}>Click Me</button>
      {props.showDp ? (
        <div>
          <h3>Dynamic Programming:</h3>
          <h4>
            Mixture of Mathematics and Computer Science
            <br />
          </h4>
          <h3>
            Minimum number of Coins
            <br />
            Given coins of values coins[] find smallest amount of coins to make
            AMOUNT
          </h3>
          <div>
            dp holds the solutions of the min number of coins needed to make the
            number i which i is also the index <br />
            make Dp array as big as the amount <br />
            initiallize each position with XL number of amount+1(used below)
            <br />
            dp at 0 is 0 Must be defined
            <br />
            and any spots where i is not solvable for coins, will have XL number
            in it
            <br />
            basicly double traversal through dp array and coins array
            <br />
            iterate from zero i to the amount <br />
            iterate from zero y to the coins.length <br />
            check if(coins[y] Less than i) Means we can use one of these coins
            <br />
            dp[i]=Math.min(dp[i], 1+dp[i-coins[y]]); this location is the
            smaller of dp[i] or 1 more than the result at one coin ago <br />
            remaining =remaining-coins[y]; <br />
            <br />
            <br />
            We set the empty locations to XL number (to not interfere with our
            Math.min compare) so now return these as -1
            <br />
            return dp[amount] GreaterThan amount?-1:dp[amount]; <br />
          </div>

        <a href="https://www.tutorialspoint.com/data_structures_algorithms/dynamic_programming.htm" >This is a great resource for DP</a>
          <br />
        </div>
      ) : (
        `Click button to show details`
      )}
    </div>
  );
};
module.exports = DynamicProgramming;
