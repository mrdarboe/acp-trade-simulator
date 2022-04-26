(this["webpackJsonpgame-zone-staking-frontend"] = this["webpackJsonpgame-zone-staking-frontend"] || []).push([
    [0],
    {
        125: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"address","name":"raiseToken","type":"address"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"openTimestamp","type":"uint256"},{"internalType":"uint256","name":"closeTimestamp","type":"uint256"},{"internalType":"uint256","name":"cap","type":"uint256"},{"internalType":"uint256","name":"fcfsDurationSeconds","type":"uint256"},{"internalType":"uint256","name":"fcfsFactor","type":"uint256"},{"internalType":"address","name":"releaseToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"destination","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Participated","type":"event"},{"inputs":[],"name":"_cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_closeTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_closed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fcfsDurationSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_fcfsFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_openTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_participationAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_participationAmountAllocRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_participationCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_qualifierCompetition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_qualifierTier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_qualifierTierCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_qualifierToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_raiseToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_releaseToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_releaseTokenPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_releases","outputs":[{"internalType":"uint256","name":"fromTimestamp","type":"uint256"},{"internalType":"uint256","name":"toTimestamp","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_roundCloseTimestamps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_roundNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_roundOpenTimestamps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierFCFSMultipliers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierFCFSOpenSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_tierWeights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buildRounds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierIndex","type":"uint256"}],"name":"calculateAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address[]","name":"addresses","type":"address[]"}],"name":"claimMulti","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tierIndex","type":"uint256"}],"name":"getFCFSMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoAllocations","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoRounds","outputs":[{"internalType":"string[]","name":"","type":"string[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoTiers","outputs":[{"internalType":"string[]","name":"","type":"string[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"infoWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"infoWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"participate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"qualifierTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raiseTokenBalance","outputs":[{"internalType":"uint256","name":"balanceRaising","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raiseTokenDecimals","outputs":[{"internalType":"uint256","name":"decimals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raiseTokenSymbol","outputs":[{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"releaseTokenDecimals","outputs":[{"internalType":"uint256","name":"decimals","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cap","type":"uint256"}],"name":"setCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"closed","type":"bool"}],"name":"setClosed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tierFCFSOpenSeconds","type":"uint256[]"},{"internalType":"uint256[]","name":"tierFCFSMultipliers","type":"uint256[]"},{"internalType":"uint256","name":"fcfsFactor","type":"uint256"}],"name":"setFCFS","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"setParticipation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"qualifierToken","type":"address"}],"name":"setQualifierToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"openTimestamp","type":"uint256"},{"internalType":"uint256","name":"closeTimestamp","type":"uint256"},{"internalType":"uint256","name":"fcfsDurationSeconds","type":"uint256"}],"name":"setTimestamps","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"qualifierAddresses","type":"address[]"},{"internalType":"uint256[]","name":"qualifierTiers","type":"uint256[]"},{"internalType":"bool[]","name":"qualifierCompetition","type":"bool[]"}],"name":"setup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"pair","type":"address"}],"name":"setupReleaseToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"fromTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"toTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"percents","type":"uint256[]"}],"name":"setupReleases","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"transferNativeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"transferToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        126: function (e) {
            e.exports = JSON.parse(
                '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardsStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardsWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"initiateDate","type":"uint256"}],"name":"Unstaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_INT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"apy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"endDate","type":"uint256"}],"name":"calculateFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentTotalStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_apy","type":"uint256"}],"name":"distributeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeBurnPcts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeDurations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRewardAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feeRewardPcts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardsDistributedLastDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakers","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"getStakersRange","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"getStakersRewards","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"info","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"infoWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"infoWalletFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"_rewardsAddress","type":"address"},{"internalType":"uint256","name":"_maxStakingAmount","type":"uint256"},{"internalType":"uint256","name":"_apy","type":"uint256"},{"internalType":"uint256","name":"_unstakingPeriod","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxStakingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsDistributedLastDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_apy","type":"uint256"}],"name":"setAPY","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_feeDurations","type":"uint256[]"},{"internalType":"uint256[]","name":"_feeBurnPcts","type":"uint256[]"},{"internalType":"uint256[]","name":"_feeRewardPcts","type":"uint256[]"},{"internalType":"address","name":"_feeRewardAddress","type":"address"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxStakingAmount","type":"uint256"}],"name":"setMaxStakingAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsAddress","type":"address"}],"name":"setRewardAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardsDistributedLastDate","type":"uint256"}],"name":"setRewardsDistributedLastDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_unstakingPeriod","type":"uint256"}],"name":"setUnstakingPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakerAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakerAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewardsDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"t","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"transferToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"unstakeAmount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        280: function (e) {
            e.exports = JSON.parse(
                '{"name":"game-zone-staking-frontend","version":"1.0.6","private":true,"dependencies":{"@binance-chain/bsc-connector":"^1.0.0","@ethersproject/providers":"^5.4.5","@fortawesome/fontawesome-svg-core":"^1.2.34","@fortawesome/react-fontawesome":"^0.1.14","@rumess/react-flip-countdown":"^1.1.2","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","@web3-react/core":"^6.1.9","@web3-react/injected-connector":"^6.0.7","@web3-react/walletconnect-connector":"^6.2.0","aos":"^2.3.4","axios":"^0.19.2","babel-polyfill":"^6.26.0","big-number":"^2.0.0","bignumber.js":"^9.0.1","bip39":"^3.0.2","connected-react-router":"^6.8.0","crypto":"^1.0.1","ethereumjs-wallet":"^0.6.0","exact-math":"^2.2.3","fraction.js":"^4.0.13","global":"^4.4.0","history":"^4.10.1","http-status-codes":"^1.4.0","i":"^0.3.6","i18next":"^20.3.2","jquery":"^3.5.1","js-sha3":"^0.8.0","keccak":"^3.0.1","lodash":"^4.17.20","md5":"^2.2.1","moment":"^2.24.0","npm":"^6.14.11","public-ip":"^4.0.0","qrcode.react":"^1.0.0","query-string":"^6.14.1","react":"^16.12.0","react-big-calendar":"^0.33.2","react-block-ui":"^1.3.3","react-bootstrap":"^1.4.3","react-copy-to-clipboard":"^5.0.2","react-device-detect":"^1.17.0","react-dom":"^16.12.0","react-flip-counter":"^0.4.0","react-hook-form":"^6.0.4","react-i18next":"^11.11.0","react-particles-js":"^3.4.1","react-redux":"^7.2.0","react-router-dom":"^5.1.2","react-scripts":"3.4.0","react-share":"^4.3.1","react-timeago":"^5.2.0","redux":"^4.0.5","redux-logger":"^3.0.6","redux-persist":"^6.0.0","redux-saga":"^1.1.3","scrypt-js":"^3.0.1","styled-components":"^5.0.1","tsparticles":"^1.33.2","uuid":"^8.3.1","validator":"^12.2.0","web3":"^1.3.3","web3modal":"^1.9.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'
            );
        },
        283: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        298: function (e, t, a) {
            e.exports = a(632);
        },
        339: function (e, t) {},
        341: function (e, t) {},
        343: function (e, t) {},
        347: function (e, t) {},
        348: function (e, t) {},
        373: function (e, t) {},
        375: function (e, t) {},
        385: function (e, t) {},
        387: function (e, t) {},
        398: function (e, t) {},
        400: function (e, t) {},
        416: function (e, t) {},
        449: function (e, t) {},
        450: function (e, t) {},
        518: function (e, t) {},
        520: function (e, t) {},
        525: function (e, t) {},
        527: function (e, t) {},
        534: function (e, t) {},
        546: function (e, t) {},
        549: function (e, t) {},
        554: function (e, t) {},
        627: function (e, t, a) {},
        628: function (e, t, a) {},
        632: function (e, t, a) {
            "use strict";
            a.r(t);
            var n,
                r = a(0),
                i = a.n(r),
                o = a(121),
                l = a.n(o),
                s = a(9),
                c = a(40),
                u = Object(c.a)(),
                m = a(38),
                d = a(14),
                p = a.n(d),
                b = { 56: "https://bscscan.com", 97: "https://testnet.bscscan.com" },
                h = { 56: "0xC5769c1e3bf4e6CaAA9f395b2F54695526Aa047b", 97: "0xe0b0C16038845BEd3fCf70304D3e167Df81ce225" },
                E = { 56: "0x5A726a26eDB0Df8Fd55f03cc30aF8A7cEa81e78D", 97: "0xe0d24e7695fd9dcc57a097388811fbaeece68ce7" },
                f = { 56: ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/"], 97: ["https://data-seed-prebsc-1-s2.binance.org:8545/"] },
                y = [56],
                v = "injected",
                g = "bsc",
                N = "WalletConnect",
                w = f[56],
                T = a(28),
                _ = "/projects",
                S = "/projects/:contract",
                O = "/staking",
                k = "/unstaking",
                A = "/privacy-policy",
                C = "/cookies-policy",
                I = "/terms-conditions",
                x = "APPROVED",
                P = "APPROVE_FAILS",
                j = "STAKING_DEPOSIT_FAIL",
                R = "STAKING_DEPOSIT_SUCCESS",
                L = "STAKING_EXECUTE_WITHDRAW_REWARDS_FAIL",
                W = "STAKING_EXECUTE_WITHDRAW_REWARDS_SUCCESS",
                M = "STAKING_REWARDS_FAIL",
                D = "STAKING_REWARDS_SUCCESS",
                B = "STAKING_INITIATE_WITHDRAWAL_SUCCESS",
                G = "STAKING_INITIATE_WITHDRAWAL_FAIL",
                U = a(21),
                F =
                    ((n = {
                        REQUEST_SUBMIT: "REQUEST_SUBMIT",
                        REQUEST_DONE: "REQUEST_DONE",
                        ALERT_SUCCESS: "ALERT_SUCCESS",
                        ALERT_FAILS: "ALERT_FAILS",
                        ALERT_WARNING: "ALERT_WARNING",
                        ALERT_CLEAR: "ALERT_CLEAR",
                        ALERT_LINK: "ALERT_LINK",
                        ALERT_LINK_CLEAR: "ALERT_LINK_CLEAR",
                        CONNECT_WALLET_SUCCESS: "CONNECT_WALLET_SUCCESS",
                        LOG_OUT_WALLET_SUCCESS: "LOG_OUT_WALLET_SUCCESS",
                        ENABLE_WALLET_SUCCESS: "ENABLE_WALLET_SUCCESS",
                        SET_SHOW_MODAL_HELP: "SET_SHOW_MODAL_HELP",
                        GET_PROJECTS_SUCCESS: "GET_PROJECTS_SUCCESS",
                        GET_LIST_CONTRACTS_INFO: "GET_LIST_CONTRACTS_INFO",
                        GET_PROJECT_SELECTED: "GET_PROJECT_SELECTED",
                        SUBMIT_GET_PROJECTS: "SUBMIT_GET_PROJECTS",
                        TAB_SELECTED_CHANGE: "TAB_SELECTED_CHANGE",
                        SUBMIT_PROJECT_SELECTED: "SUBMIT_PROJECT_SELECTED",
                        GET_PROJECT_SELECTED_SUCCESS: "GET_PROJECT_SELECTED_SUCCESS",
                        SET_CURRENT_CONTRACT_SELECTED: "SET_CURRENT_CONTRACT_SELECTED",
                        SET_LIST_CONTRACT_SELECTED: "SET_LIST_CONTRACT_SELECTED",
                        SET_JOB_PROJECT_SELECTED: "SET_JOB_PROJECT_SELECTED",
                        SET_JOB_GET_WALLET_INFO: "SET_JOB_GET_WALLET_INFO",
                        SET_JOB_COUNT_DOWN_OPEN: "SET_JOB_COUNT_DOWN_OPEN",
                        SET_JOB_COUNT_DOWN_CLOSE: "SET_JOB_COUNT_DOWN_CLOSE",
                        SET_JOB_COUNT_DOWN_ROUND: "SET_JOB_COUNT_DOWN_ROUND",
                        SET_JOB_COUNT_DOWN_FCFS_TIME: "SET_JOB_COUNT_DOWN_FCFS_TIME",
                        SET_JOB_GET_KYC: "SET_JOB_GET_KYC",
                        SET_JOB_GET_PROJECTS: "SET_JOB_GET_PROJECTS",
                        CLEAR_INTERVAL_PROJECTS_JOB: "CLEAR_INTERVAL_PROJECTS_JOB",
                        GET_INFO_WALLET: "GET_INFO_WALLET",
                        GET_KYC_INFO: "GET_KYC_INFO",
                        GET_KYC_3RD: "GET_KYC_3RD",
                        CLEAR_KYC_STATE: "CLEAR_KYC_STATE",
                        SET_JOB_GET_BALANCE: "SET_JOB_GET_BALANCE",
                        GET_STAKING_INFO: "GET_STAKING_INFO",
                        SET_JOB_GET_STAKING_INFO: "SET_GET_STAKING_INFO",
                        GET_STAKING_WALLET_INFO: "GET_STAKING_WALLET_INFO",
                        SET_JOB_GET_STAKING_WALLET_INFO: "SET_GET_STAKING_WALLET_INFO",
                        SET_JOB_COUNTDOWN_STAKE_TIME: "SET_JOB_COUNTDOWN_STAKE_TIME",
                        SUBMIT_GET_BALANCE: "SUBMIT_GET_BALANCE",
                        GET_GZONE_WALLET_BALANCE: "GET_GZONE_WALLET_BALANCE",
                        GET_BNB_BALANCE: "GET_BNB_BALANCE",
                    }),
                    Object(U.a)(n, "SET_JOB_GET_BALANCE", "SET_JOB_GET_BALANCE"),
                    Object(U.a)(n, "CLEAR_STAKING_JOB", "CLEAR_STAKING_JOB"),
                    Object(U.a)(n, "SET_STAKING_ENABLE", "SET_STAKING_ENABLE"),
                    Object(U.a)(n, "SET_JOB_GET_STAKING_STATUS", "SET_JOB_GET_STAKING_STATUS"),
                    Object(U.a)(n, "SET_LATEST_BLOCK", "SET_LATEST_BLOCK"),
                    n),
                Y = "APPROVING",
                K = "APPROVED",
                H = "APPROVE_FAILS",
                J = "CLAIM_FAIL",
                z = "CLAIM_SUCCESS",
                Z = "BUY_SUCCESS",
                q = "BUY_FAIL",
                V = "STAKING_DEPOSIT_FAIL",
                Q = "STAKING_DEPOSIT_SUBMIT",
                $ = "STAKING_DEPOSIT_SUCCESS",
                X = "STAKING_INITIATE_WITHDRAWAL_SUBMIT",
                ee = "STAKING_INITIATE_WITHDRAWAL_FAIL",
                te = "STAKING_INITIATE_WITHDRAWAL_SUCCESS",
                ae = "STAKING_EXECUTE_WITHDRAWAL_SUBMIT",
                ne = "STAKING_EXECUTE_WITHDRAWAL_FAIL",
                re = "STAKING_EXECUTE_WITHDRAWAL_SUCCESS",
                ie = "STAKING_EXECUTE_WITHDRAW_REWARDS_SUBMIT",
                oe = "STAKING_EXECUTE_WITHDRAW_REWARDS_FAIL",
                le = "STAKING_EXECUTE_WITHDRAW_REWARDS_SUCCESS",
                se = "STAKING_REWARDS_SUBMIT",
                ce = "STAKING_REWARDS_FAIL",
                ue = "STAKING_REWARDS_SUCCESS";
            function me() {
                return { type: F.ALERT_LINK_CLEAR };
            }
            var de = a(128),
                pe = a(277),
                be = a(29),
                he = a(163),
                Ee = a(90),
                fe = a.n(Ee),
                ye = a(37),
                ve = a.n(ye),
                ge = a(90),
                Ne = [
                    "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
                    "https://uploads.republic.co/p/users/avatars/small/000/495/921/495921-1603918306-631c3134317c6b89d945800117b7001813302445.JPG",
                    "https://assets.republic.co/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg",
                ],
                we = function (e, t) {
                    return ge.div(ge.floor(ge.mul(e, ge.pow(10, t))), ge.pow(10, t)).toFixed(t);
                };
            var Te,
                _e = {
                    convertTimeStampToDate: function (e) {
                        if (e) return new Date(e).toLocaleString();
                    },
                    validatePwd: function (e) {
                        return new RegExp(/^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/).test(e);
                    },
                    validateUrl: function (e) {
                        return new RegExp(/(^http[s]?:\/{2})|(^www)|(^\/{1,2})/gim).test(e);
                    },
                    validateConversionRatio: function (e) {
                        return new RegExp(/\d+:\d+/g).test(e);
                    },
                    convertPhone: function (e, t) {
                        var a = "object" === typeof e ? e[0] : e;
                        return "+".concat(a.concat(t.replace(/^0+/, "").trim()));
                    },
                    hidePhone: function (e) {
                        return e.length > 3 ? e.substring(0, e.length - 3) + "***" : "***";
                    },
                    convertTime: function (e) {
                        return ve()(e)
                            .format("LTS")
                            .concat(", " + ve()(e).format("L"));
                    },
                    phoneNumberValidate: function (e) {
                        return new RegExp(/((09|03|07|08|05)+([0-9]{8})\b)/g).test(e);
                    },
                    formatNumber: function (e) {
                        return e ? e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : e;
                    },
                    emailValidate: function (e) {
                        return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e);
                    },
                    capitalizeFirstLetter: function (e) {
                        return "string" !== typeof e ? "" : e.charAt(0).toUpperCase() + e.slice(1);
                    },
                    hideWalletAddress: function (e) {
                        return "string" !== typeof e ? "" : e.length < 20 ? e : e.substring(0, 5) + "..." + e.substring(e.length - 8, e.length);
                    },
                    roundUNWPrice: function (e, t) {
                        return "string" === typeof e ? e : e ? Math.round(e * Math.pow(10, t)) / Math.pow(10, t).toString() : e;
                    },
                    formatUnw: function (e) {
                        return Number(e) / Math.pow(10, 6);
                    },
                    formatNumberWithPrecision: function (e, t) {
                        return Number(e) / Math.pow(10, t);
                    },
                    getRatioUNW: function (e) {
                        if ("string" === typeof e) {
                            var t = (e = e.trim()).split(":");
                            return { tokenRatio: parseInt(t[0]), unxRatio: parseInt(t[1]) };
                        }
                        return null;
                    },
                    formatAmount: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            a = Number(e).toFixed(t);
                        return (
                            (a = Math.round(a * Math.pow(10, t)) / Math.pow(10, t)),
                            (a = String(a)).indexOf(".") < 0
                                ? ((a += "."),
                                  String(a)
                                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                                      .replace(".", ""))
                                : String(a).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                        );
                    },
                    formatTransactionHash: function (e, t, a) {
                        if (e) return e.substring(0, t) + "..." + e.substring(e.length, e.length - a);
                    },
                    getDateDiff: function (e) {
                        var t = new Date(),
                            a = new Date(t.getMonth() + 1 + "/" + t.getDay() + "/" + t.getFullYear()),
                            n = new Date(e),
                            r = Math.abs(n - a);
                        return Math.ceil(r / 864e5) + 1;
                    },
                    randomAvatar: function () {
                        var e = Math.floor(Math.random() * (Ne.length + 1));
                        return Ne[e];
                    },
                    formatNumberDownRound: function (e, t) {
                        if (null === e || void 0 === e) return 0;
                        "string" === typeof e && (e = Number(e));
                        var a = e.toString().split(".");
                        if (a.length >= 2) {
                            if (a[1].length > t) {
                                var n = a[1].substring(0, t);
                                return "".concat(a[0], ".").concat(n);
                            }
                            return e.toFixed(t);
                        }
                        return e.toFixed(t);
                    },
                    formatNumberDownRoundWithExtractMax: we,
                    isFloatFormatted: function (e, t) {
                        var a = e.toString().split(".");
                        return !(a.length >= 2 && a[1].length > t);
                    },
                    convertSecondsToReadableString: function (e) {
                        (e = e || 0), (e = Number(e)), (e = Math.abs(e));
                        var t = Math.floor(e / 86400),
                            a = Math.floor((e % 86400) / 3600),
                            n = Math.floor((e % 3600) / 60),
                            r = (Math.floor(e % 60), []);
                        return r.push(t + "d"), r.push(a + "h"), r.push(n + "m"), r.join(" ");
                    },
                },
                Se = function (e, t, a) {
                    if ("number" === typeof e) return "".concat(we(e / Math.pow(10, t), a));
                    if ("string" === typeof e) {
                        if (!e.includes("-")) return "".concat(we(e / Math.pow(10, t), a));
                        var n = e.split("-");
                        if (n.length >= 2) {
                            var r = we(n[0] / Math.pow(10, t) || 0, a),
                                i = we(n[1] / Math.pow(10, t) || 0, a);
                            return "".concat(r, " / ").concat(i);
                        }
                    }
                },
                Oe = function (e) {
                    if ("number" == typeof e)
                        return ve()(1e3 * e || 0)
                            .utc()
                            .format("YY-MM-DD HH:mm");
                    if ("string" == typeof e) {
                        if (!e.includes("-"))
                            return ve()(1e3 * e || 0)
                                .utc()
                                .format("YY-MM-DD HH:mm");
                        var t = e.split("-");
                        if (t.length >= 2) {
                            var a = ve()(1e3 * t[0] || 0)
                                    .utc()
                                    .format("YY-MM-DD HH:mm"),
                                n = ve()(1e3 * t[1] || 0)
                                    .utc()
                                    .format("YY-MM-DD HH:mm");
                            return "".concat(a, " <span class='mx-1 text-secondary'>to</span> ").concat(n);
                        }
                    }
                },
                ke = a(39),
                Ae = a.n(ke),
                Ce = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "utils.isConnectWallet", !1);
                    });
                },
                Ie = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "utils.walletUtils", null);
                    });
                },
                xe = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "wallet.stakingInfo", {});
                    });
                },
                Pe = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "wallet.stakingWalletInfo", {});
                    });
                },
                je = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "wallet.bnbBalance", 0);
                    });
                },
                Re = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "wallet.bscpadBalance", 0);
                    });
                },
                Le = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "utils.blocking", !1);
                    });
                },
                We = { GET_PROJECTS: "/api/projects", GET_PROJECT_DETAILS: "/api/projects/:id", GET_STAKING_ENABLE: "/api/staking", GET_CALENDAR: "/api/calendar", GET_KYC: "/api/kycs" },
                Me = "Wrong network! You need connect to Binance Smart Chain  network!",
                De = "/home",
                Be = "/staking",
                Ge =
                    ((Te = {
                        LANGUAGE_CHANGE: "LANGUAGE_CHANGE",
                        REQUEST_SUBMIT: "REQUEST_SUBMIT",
                        REQUEST_DONE: "REQUEST_DONE",
                        ALERT_SUCCESS: "ALERT_SUCCESS",
                        ALERT_FAILS: "ALERT_FAILS",
                        ALERT_WARNING: "ALERT_WARNING",
                        ALERT_CLEAR: "ALERT_CLEAR",
                        ALERT_LINK: "ALERT_LINK",
                        ALERT_LINK_CLEAR: "ALERT_LINK_CLEAR",
                        CONNECT_WALLET_SUCCESS: "CONNECT_WALLET_SUCCESS",
                        LOG_OUT_WALLET_SUCCESS: "LOG_OUT_WALLET_SUCCESS",
                        ENABLE_WALLET_SUCCESS: "ENABLE_WALLET_SUCCESS",
                        SET_SHOW_MODAL_HELP: "SET_SHOW_MODAL_HELP",
                        GET_PROJECTS_SUCCESS: "GET_PROJECTS_SUCCESS",
                        GET_LIST_CONTRACTS_INFO: "GET_LIST_CONTRACTS_INFO",
                        GET_PROJECT_SELECTED: "GET_PROJECT_SELECTED",
                        SUBMIT_GET_PROJECTS: "SUBMIT_GET_PROJECTS",
                        SUBMIT_PROJECT_SELECTED: "SUBMIT_PROJECT_SELECTED",
                        GET_PROJECT_SELECTED_SUCCESS: "GET_PROJECT_SELECTED_SUCCESS",
                        SET_CURRENT_CONTRACT_SELECTED: "SET_CURRENT_CONTRACT_SELECTED",
                        SET_LIST_CONTRACT_SELECTED: "SET_LIST_CONTRACT_SELECTED",
                        SET_JOB_PROJECT_SELECTED: "SET_JOB_PROJECT_SELECTED",
                        SET_JOB_GET_WALLET_INFO: "SET_JOB_GET_WALLET_INFO",
                        SET_JOB_COUNT_DOWN_OPEN: "SET_JOB_COUNT_DOWN_OPEN",
                        SET_JOB_COUNT_DOWN_CLOSE: "SET_JOB_COUNT_DOWN_CLOSE",
                        SET_JOB_COUNT_DOWN_ROUND: "SET_JOB_COUNT_DOWN_ROUND",
                        SET_JOB_COUNT_DOWN_FCFS_TIME: "SET_JOB_COUNT_DOWN_FCFS_TIME",
                        SET_JOB_GET_KYC: "SET_JOB_GET_KYC",
                        SET_JOB_GET_PROJECTS: "SET_JOB_GET_PROJECTS",
                        CLEAR_INTERVAL_PROJECTS_JOB: "CLEAR_INTERVAL_PROJECTS_JOB",
                        GET_INFO_WALLET: "GET_INFO_WALLET",
                        GET_KYC_INFO: "GET_KYC_INFO",
                        GET_KYC_3RD: "GET_KYC_3RD",
                        CLEAR_KYC_STATE: "CLEAR_KYC_STATE",
                        SET_JOB_GET_BALANCE: "SET_JOB_GET_BALANCE",
                        GET_STAKING_INFO: "GET_STAKING_INFO",
                        SET_JOB_GET_STAKING_INFO: "SET_GET_STAKING_INFO",
                        GET_STAKING_WALLET_INFO: "GET_STAKING_WALLET_INFO",
                        SET_JOB_GET_STAKING_WALLET_INFO: "SET_GET_STAKING_WALLET_INFO",
                        SET_JOB_COUNTDOWN_STAKE_TIME: "SET_JOB_COUNTDOWN_STAKE_TIME",
                        SUBMIT_GET_BALANCE: "SUBMIT_GET_BALANCE",
                        GET_TOKENPAD_BALANCE: "GET_TOKENPAD_BALANCE",
                        GET_BNB_BALANCE: "GET_BNB_BALANCE",
                    }),
                    Object(U.a)(Te, "SET_JOB_GET_BALANCE", "SET_JOB_GET_BALANCE"),
                    Object(U.a)(Te, "CLEAR_STAKING_JOB", "CLEAR_STAKING_JOB"),
                    Object(U.a)(Te, "SET_STAKING_ENABLE", "SET_STAKING_ENABLE"),
                    Object(U.a)(Te, "SET_JOB_GET_STAKING_STATUS", "SET_JOB_GET_STAKING_STATUS"),
                    Object(U.a)(Te, "SET_LATEST_BLOCK", "SET_LATEST_BLOCK"),
                    Te),
                Ue = a(1),
                Fe = a.n(Ue),
                Ye = a(12),
                Ke = a(76),
                He = a.n(Ke),
                Je = a(25);
            function ze() {
                return !(!He.a.ethereum || !He.a.ethereum.isMetaMask);
            }
            function Ze(e) {
                return Object(Je.BigNumber)(e).multipliedBy(Math.pow(10, 18)).integerValue();
            }
            var qe = [
                    { title: "Metamask", icon: "/images/metamask.svg", connectorId: v, enable: ze() },
                    { title: "TrustWallet", icon: "/images/trust.svg", connectorId: v, enable: !(!He.a.ethereum || !He.a.ethereum.isTrust) },
                    { title: "Binance Chain Wallet", icon: "/images/bscwallet.svg", connectorId: g, enable: !!He.a.BinanceChain },
                ],
                Ve = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "utils.latestBlock", 0);
                    });
                },
                Qe = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "utils.walletUtils", null);
                    });
                },
                $e = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "project.selectedProject", null);
                    });
                },
                Xe = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "project.selectedProject.name", "");
                    });
                },
                et = function () {
                    return Object(s.c)(function (e) {
                        return Object(d.get)(e, "project.selectedProject.symbol", "");
                    });
                },
                tt = a(6),
                at = a(278),
                nt = a(74);
            function rt() {
                var e = Object(m.d)(),
                    t = Object(m.d)("NETWORK");
                return e.active ? e : t;
            }
            var it = new nt.a({ supportedChainIds: y });
            var ot,
                lt = a(75),
                st = a.n(lt),
                ct = (function () {
                    var e = Object(Ye.a)(
                        Fe.a.mark(function e(t, a) {
                            var n, r;
                            return Fe.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.prev = 0), (e.next = 3), st.a.get("".concat("https://bscpad.com").concat(We.GET_KYC, "?address=").concat(t, "&type=").concat(a));
                                            case 3:
                                                if (200 != (n = e.sent).status) {
                                                    e.next = 6;
                                                    break;
                                                }
                                                return e.abrupt("return", n.data);
                                            case 6:
                                                return e.abrupt("return", null);
                                            case 9:
                                                return (e.prev = 9), (e.t0 = e.catch(0)), (r = e.t0.response), console.log(r), e.abrupt("return", null);
                                            case 14:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 9]]
                            );
                        })
                    );
                    return function (t, a) {
                        return e.apply(this, arguments);
                    };
                })(),
                ut = function () {
                    var e = Object(s.b)(),
                        t = rt(),
                        a = t.account,
                        n = (t.library, t.chainId, Ie()),
                        o = Re(),
                        l = Ve(),
                        c = Object(s.c)(function (e) {
                            return Object(d.get)(e, "wallet.stakingWalletInfo.stakedAmount", 0);
                        }),
                        u = Object(s.c)(function (e) {
                            return Object(d.get)(e, "wallet.kycStatus", null);
                        });
                    Object(r.useEffect)(
                        function () {
                            n &&
                                a &&
                                (n.web3.eth
                                    .getBalance(a)
                                    .then(function (t) {
                                        e({ type: F.GET_BNB_BALANCE, data: fe.a.div(t, Math.pow(10, 18)) });
                                    })
                                    .catch(function (e) {
                                        console.log(e);
                                    }),
                                n.getTokenPadBalance().then(function (t) {
                                    e({ type: F.GET_GZONE_WALLET_BALANCE, data: t });
                                }),
                                n.getStakingInfoWallet().then(function (t) {
                                    e({ type: F.GET_STAKING_WALLET_INFO, data: t });
                                }));
                        },
                        [l, n, a]
                    ),
                        Object(r.useEffect)(
                            function () {
                                a && Number(o) + Number(c) >= Number(1e3) && m(a);
                            },
                            [a, o, c, l]
                        );
                    var m = function (t) {
                            ct(t, "state")
                                .then(function (a) {
                                    if (((t = t.toLowerCase()), a)) {
                                        var n = a.state;
                                        if (1 === n) return e({ type: F.GET_KYC_INFO, data: "START" });
                                        if (2 === n) return e({ type: F.GET_KYC_INFO, data: "PENDING" });
                                        if (3 === n) return e({ type: F.GET_KYC_INFO, data: "APPROVED" });
                                        if (4 === n) return e({ type: F.GET_KYC_INFO, data: "ERROR" });
                                    }
                                })
                                .catch(function (e) {
                                    console.log(e);
                                });
                        },
                        p = function () {
                            ct(a, "url")
                                .then(function (e) {
                                    if (e) {
                                        var t = e.url;
                                        window.open(t, "_blank");
                                    }
                                })
                                .catch(function (e) {
                                    console.log(e);
                                });
                        },
                        b = function () {
                            Ae()(".navbar-toggler").trigger("click");
                        };
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                            "nav",
                            { id: "PPNavbar", className: "navbar navbar-expand-lg navbar-dark" },
                            i.a.createElement(
                                "div",
                                { className: "container-fluid" },
                                i.a.createElement(
                                    "a",
                                    { className: "navbar-brand d-flex align-items-center", href: "https://gamezone.io" },
                                    i.a.createElement("img", { src: "/images/logo.svg", height: "41", alt: "GAMEZONE", className: "me-2" })
                                ),
                                Object(he.isMobile)() &&
                                    i.a.createElement(
                                        "div",
                                        { className: "d-flex align-items-center", style: { flexWrap: "nowrap" } },
                                        i.a.createElement("div", { className: "dropdown d-block d-md-none d-lg-none d-xl-none" }),
                                        i.a.createElement(
                                            "button",
                                            {
                                                className: "navbar-toggler",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#navbarSupportedContent",
                                                "aria-controls": "navbarSupportedContent",
                                                "aria-expanded": "false",
                                                "aria-label": "Toggle navigation",
                                            },
                                            i.a.createElement("span", { className: "navbar-toggler-icon" })
                                        )
                                    ),
                                i.a.createElement(
                                    "div",
                                    { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                                    i.a.createElement(
                                        "ul",
                                        { className: "navbar-nav me-auto mb-3 mt-3 mt-lg-0 mb-lg-0 ms-lg-5" },
                                        i.a.createElement("li", { className: "nav-item" }, i.a.createElement(be.b, { className: "nav-link", activeClassName: "active", to: _, onClick: b }, "Projects")),
                                        i.a.createElement("li", { className: "nav-item" }, i.a.createElement(be.b, { className: "nav-link", activeClassName: "active", to: O, onClick: b }, "Stake")),
                                        i.a.createElement("li", { className: "nav-item" }, i.a.createElement(be.b, { className: "nav-link", activeClassName: "active", to: k, onClick: b }, "Unstake & Withdraw"))
                                    ),
                                    i.a.createElement(
                                        "ul",
                                        { className: a ? "navbar-nav ms-auto mb-2 mb-md-0 connected" : "navbar-nav ms-auto mb-2 mb-md-0" },
                                        a
                                            ? i.a.createElement(
                                                  i.a.Fragment,
                                                  null,
                                                  i.a.createElement(
                                                      "li",
                                                      { className: "nav-item me-2" },
                                                      i.a.createElement(
                                                          "a",
                                                          {
                                                              href: "#",
                                                              "data-bs-toggle": "modal",
                                                              "data-bs-target": "#walletModal",
                                                              className: "btn btn-oht btn--custom bordered bordered--btn bordered--btn_no-angled position-relative px-3 px-xl-4",
                                                          },
                                                          i.a.createElement("span", null, i.a.createElement("b", null, _e.formatTransactionHash(a, 4, 4)), " - ", _e.formatNumberDownRoundWithExtractMax(o, 4), " $GZONE"),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                      )
                                                  ),
                                                  "START" === u &&
                                                      i.a.createElement(
                                                          "li",
                                                          { className: "nav-item" },
                                                          i.a.createElement(
                                                              "button",
                                                              {
                                                                  className: "btn btn-oht btn-kyc-pending btn--custom bordered bordered--btn bordered--btn_no-angled position-relative px-3 px-xl-4 ms-2",
                                                                  style: { minWidth: "80px" },
                                                                  onClick: function () {
                                                                      return p();
                                                                  },
                                                              },
                                                              i.a.createElement("i", { className: "mdi mdi-pencil-plus me-1", style: { fontSize: "24px", lineHeight: 1 } }),
                                                              i.a.createElement("span", null, "KYC")
                                                          )
                                                      ),
                                                  "PENDING" === u &&
                                                      i.a.createElement(
                                                          "li",
                                                          { className: "nav-item" },
                                                          i.a.createElement(
                                                              "button",
                                                              {
                                                                  className: "btn btn-oht btn-kyc-pending btn--custom bordered bordered--btn bordered--btn_no-angled position-relative px-3 px-xl-4 ms-2",
                                                                  style: { minWidth: "80px" },
                                                                  onClick: function () {
                                                                      return p();
                                                                  },
                                                              },
                                                              i.a.createElement("i", { className: "mdi mdi-exclamation-thick me-1", style: { fontSize: "24px", lineHeight: 1 } }),
                                                              i.a.createElement("span", null, "KYC")
                                                          )
                                                      ),
                                                  "APPROVED" === u &&
                                                      i.a.createElement(
                                                          "li",
                                                          { className: "nav-item" },
                                                          i.a.createElement(
                                                              "button",
                                                              { className: "btn btn-oht btn-kyc-success btn--custom bordered bordered--btn bordered--btn_no-angled position-relative px-3 px-xl-4 ms-2", style: { minWidth: "80px" } },
                                                              i.a.createElement("i", { className: "mdi mdi-check-bold me-1", style: { fontSize: "24px", lineHeight: 1 } }),
                                                              i.a.createElement("span", null, "KYC")
                                                          )
                                                      ),
                                                  "ERROR" === u &&
                                                      i.a.createElement(
                                                          "li",
                                                          { className: "nav-item" },
                                                          i.a.createElement(
                                                              "button",
                                                              {
                                                                  className: "btn btn-oht btn-kyc-failed btn--custom bordered bordered--btn bordered--btn_no-angled position-relative px-3 px-xl-4 ms-2",
                                                                  style: { minWidth: "80px" },
                                                                  onClick: function () {
                                                                      return p();
                                                                  },
                                                              },
                                                              i.a.createElement("i", { className: "mdi mdi-alert-octagon-outline me-1", style: { fontSize: "24px", lineHeight: 1 } }),
                                                              i.a.createElement("span", null, "KYC")
                                                          )
                                                      )
                                              )
                                            : i.a.createElement(
                                                  "li",
                                                  { className: "nav-item me-2" },
                                                  i.a.createElement(
                                                      "div",
                                                      { className: "d-flex align-items-center justify-content-end" },
                                                      i.a.createElement(
                                                          "a",
                                                          {
                                                              href: "#",
                                                              "data-bs-toggle": "modal",
                                                              "data-bs-target": "#connectWalletModal",
                                                              className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                          },
                                                          i.a.createElement("span", null, "Connect Wallet"),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                          i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                          i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                      )
                                                  )
                                              )
                                    )
                                )
                            )
                        )
                    );
                },
                mt = a(280),
                dt = a(7),
                pt = a(11),
                bt = a(59),
                ht = a.n(bt),
                Et = a(283),
                ft = a(125),
                yt = a(126),
                vt = (function () {
                    function e(t, a, n) {
                        Object(dt.a)(this, e), (this.web3 = new ht.a(t)), (this.address = a), (this.chainId = n);
                    }
                    return (
                        Object(pt.a)(e, [
                            {
                                key: "getWeb3Helper",
                                value: function (t, a) {
                                    return e.web3 || (e.web3 = new e(t, a)), e.web3;
                                },
                            },
                            {
                                key: "approve",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t, a) {
                                            var n, r, i, o, l;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = t.tokenContractAddress),
                                                                    (r = t.contractAddress),
                                                                    (i = Ze((i = t.amount))),
                                                                    (e.prev = 2),
                                                                    (o = this.useERC20Contract(n)),
                                                                    a({ status: Y }),
                                                                    (l = "0x" + i.toString(16)),
                                                                    console.log(l),
                                                                    (e.next = 9),
                                                                    o.methods.approve(r, l).send({ from: this.address })
                                                                );
                                                            case 9:
                                                                a({ status: K }), (e.next = 16);
                                                                break;
                                                            case 12:
                                                                (e.prev = 12), (e.t0 = e.catch(2)), a({ status: H }), console.log(e.t0);
                                                            case 16:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[2, 12]]
                                            );
                                        })
                                    );
                                    return function (t, a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "claim",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t, a) {
                                            var n, r, i, o;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = t.contractAddress),
                                                                    (r = t.index),
                                                                    (i = this.useIDOContract(n)),
                                                                    (e.prev = 2),
                                                                    (e.next = 5),
                                                                    i.methods
                                                                        .claim(r)
                                                                        .send({ from: this.address })
                                                                        .on("error", function (e) {
                                                                            console.log(e), a({ status: J });
                                                                        })
                                                                        .then(function (e) {
                                                                            1 == e.status ? a({ status: z, txID: e.transactionHash }) : a({ status: J });
                                                                        })
                                                                        .catch(function (e) {
                                                                            console.log(e), a({ status: J });
                                                                        })
                                                                );
                                                            case 5:
                                                                return (o = e.sent), e.abrupt("return", o);
                                                            case 9:
                                                                return (e.prev = 9), (e.t0 = e.catch(2)), console.error(e.t0.message), a({ status: J }), e.abrupt("return", e.t0.message);
                                                            case 14:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[2, 9]]
                                            );
                                        })
                                    );
                                    return function (t, a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "buyTokens",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t, a) {
                                            var n, r, i, o, l, s, c;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = t.contractAddress),
                                                                    (r = t.tokenAddress),
                                                                    (i = t.amount),
                                                                    (o = this.useIDOContract(n)),
                                                                    (i = Ze(i)),
                                                                    (l = "0x" + i.toString(16)),
                                                                    (s = "0x0000000000000000000000000000000000000000" === r ? { from: this.address, value: l } : { from: this.address }),
                                                                    (e.prev = 5),
                                                                    (e.next = 8),
                                                                    o.methods
                                                                        .participate(r, l)
                                                                        .send(s)
                                                                        .on("error", function (e) {
                                                                            console.log(e), a({ status: q });
                                                                        })
                                                                        .then(function (e) {
                                                                            1 == e.status ? a({ status: Z, txID: e.transactionHash }) : a({ status: q });
                                                                        })
                                                                        .catch(function (e) {
                                                                            console.log(e), a({ status: q });
                                                                        })
                                                                );
                                                            case 8:
                                                                return (c = e.sent), e.abrupt("return", c);
                                                            case 12:
                                                                return (e.prev = 12), (e.t0 = e.catch(5)), console.error(e.t0.message), a({ status: q }), e.abrupt("return", e.t0.message);
                                                            case 17:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[5, 12]]
                                            );
                                        })
                                    );
                                    return function (t, a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getInfoAllocations",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t) {
                                            var a, n;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return { 0: "PENDING", 1: "OPEN", 2: "CLOSED" }, (a = this.useIDOContract(t)), (e.next = 4), a.methods.infoAllocations().call({ from: this.address });
                                                            case 4:
                                                                return (n = e.sent), e.abrupt("return", gt(n));
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getInfoWallet",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t) {
                                            var a, n, r, i, o, l, s, c, u, m;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (a = this.useIDOContract(t)), (e.next = 3), a.methods.infoWallet().call({ from: this.address });
                                                            case 3:
                                                                return (
                                                                    (n = e.sent),
                                                                    (r = parseFloat(n[0] / Math.pow(10, 18))),
                                                                    (i = parseInt(n[1])),
                                                                    (o = n[2]),
                                                                    (l = parseInt(n[3])),
                                                                    (s = n[4]),
                                                                    (c = parseInt(n[5])),
                                                                    (u = parseInt(n[6])),
                                                                    (m = parseInt(n[7])),
                                                                    e.abrupt("return", { tokenBalance: i, tier: o, roundState: l, roundStateText: s, roundTimestamp: c, remainingAllocation: u, ethBalance: r, userParticipation: m })
                                                                );
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getTokenBalance",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t) {
                                            var a, n;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (a = this.useERC20Contract(t)), (e.next = 3), a.methods.balanceOf(this.address).call();
                                                            case 3:
                                                                return (
                                                                    (n = e.sent),
                                                                    e.abrupt(
                                                                        "return",
                                                                        new Je.BigNumber(n.toString())
                                                                            .dividedBy(Math.pow(10, 18))
                                                                            .toFixed(18)
                                                                            .replace(/\.?0+$/, "")
                                                                            .toString()
                                                                    )
                                                                );
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getAllowance",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t, a) {
                                            var n, r;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (n = this.useERC20Contract(t)), (e.next = 3), n.methods.allowance(this.address, a).call();
                                                            case 3:
                                                                return (r = e.sent), e.abrupt("return", new Je.BigNumber(r.toString()).dividedBy(Math.pow(10, 18)).toString());
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function (t, a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getTokenPadBalance",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e() {
                                            var t,
                                                a,
                                                n,
                                                r = arguments;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (t = r.length > 0 && void 0 !== r[0] ? r[0] : 56), (e.prev = 1), (a = this.useStakingContract(t)), (e.next = 5), a.methods.token().call();
                                                            case 5:
                                                                return (n = e.sent), (e.next = 8), this.getTokenBalance(n);
                                                            case 8:
                                                                return e.abrupt("return", e.sent);
                                                            case 11:
                                                                return (e.prev = 11), (e.t0 = e.catch(1)), console.log(e.t0), e.abrupt("return", 0);
                                                            case 15:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[1, 11]]
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "stakingDeposit",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t, a) {
                                            var n, r, i, o;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = t.amount),
                                                                    (r = this.useStakingContract(this.chainId)),
                                                                    (n = Ze(n)),
                                                                    (i = "0x" + n.toString(16)),
                                                                    (e.prev = 4),
                                                                    (e.next = 7),
                                                                    r.methods
                                                                        .stake(i)
                                                                        .send({ from: this.address })
                                                                        .on("error", function (e) {
                                                                            console.log(e), a({ status: V });
                                                                        })
                                                                        .on("transactionHash", function (e) {
                                                                            a({ status: Q, txID: e });
                                                                        })
                                                                        .then(function (e) {
                                                                            !0 === e.status ? a({ status: $, txID: e.transactionHash }) : a({ status: V });
                                                                        })
                                                                        .catch(function (e) {
                                                                            console.log(e), a({ status: V });
                                                                        })
                                                                );
                                                            case 7:
                                                                return (o = e.sent), e.abrupt("return", o);
                                                            case 11:
                                                                return (e.prev = 11), (e.t0 = e.catch(4)), console.error(e.t0.message), a({ status: V }), e.abrupt("return", e.t0.message);
                                                            case 16:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[4, 11]]
                                            );
                                        })
                                    );
                                    return function (t, a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "stakingInitiateWithdrawal",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t, a) {
                                            var n, r, i, o;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = t.amount),
                                                                    (r = this.useStakingContract(this.chainId)),
                                                                    (n = Ze(n)),
                                                                    (i = "0x" + n.toString(16)),
                                                                    (e.prev = 4),
                                                                    (e.next = 7),
                                                                    r.methods
                                                                        .unstake(i)
                                                                        .send({ from: this.address })
                                                                        .on("transactionHash", function (e) {
                                                                            a({ status: X, txID: e });
                                                                        })
                                                                        .on("error", function (e) {
                                                                            console.log(e), a({ status: ee });
                                                                        })
                                                                        .then(function (e) {
                                                                            !0 === e.status ? a({ status: te, txID: e.transactionHash }) : a({ status: ee });
                                                                        })
                                                                        .catch(function (e) {
                                                                            console.log(e), a({ status: ee });
                                                                        })
                                                                );
                                                            case 7:
                                                                return (o = e.sent), e.abrupt("return", o);
                                                            case 11:
                                                                return (e.prev = 11), (e.t0 = e.catch(4)), console.error(e.t0.message), a({ status: ee }), e.abrupt("return", e.t0.message);
                                                            case 16:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[4, 11]]
                                            );
                                        })
                                    );
                                    return function (t, a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "stakingExecuteWithdrawal",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t) {
                                            var a, n;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (a = this.useStakingContract(this.chainId)),
                                                                    (e.prev = 1),
                                                                    (e.next = 4),
                                                                    a.methods
                                                                        .withdraw()
                                                                        .send({ from: this.address })
                                                                        .on("transactionHash", function (e) {
                                                                            t({ status: ae, txID: e });
                                                                        })
                                                                        .on("error", function (e) {
                                                                            console.log(e), t({ status: ne });
                                                                        })
                                                                        .then(function (e) {
                                                                            !0 === e.status ? t({ status: re, txID: e.transactionHash }) : t({ status: ne });
                                                                        })
                                                                        .catch(function (e) {
                                                                            console.log(e), t({ status: ne });
                                                                        })
                                                                );
                                                            case 4:
                                                                return (n = e.sent), e.abrupt("return", n);
                                                            case 8:
                                                                return (e.prev = 8), (e.t0 = e.catch(1)), console.error(e.t0.message), t({ status: ne }), e.abrupt("return", e.t0.message);
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[1, 8]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "stakingExecuteWithdrawRewards",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t) {
                                            var a, n;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (a = this.useStakingContract(this.chainId)),
                                                                    (e.prev = 1),
                                                                    (e.next = 4),
                                                                    a.methods
                                                                        .withdrawRewards()
                                                                        .send({ from: this.address })
                                                                        .on("transactionHash", function (e) {
                                                                            t({ status: ie, txID: e });
                                                                        })
                                                                        .on("error", function (e) {
                                                                            console.log(e), t({ status: oe });
                                                                        })
                                                                        .then(function (e) {
                                                                            !0 === e.status ? t({ status: le, txID: e.transactionHash }) : t({ status: oe });
                                                                        })
                                                                        .catch(function (e) {
                                                                            console.log(e), t({ status: oe });
                                                                        })
                                                                );
                                                            case 4:
                                                                return (n = e.sent), e.abrupt("return", n);
                                                            case 8:
                                                                return (e.prev = 8), (e.t0 = e.catch(1)), console.error(e.t0.message), t({ status: oe }), e.abrupt("return", e.t0.message);
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[1, 8]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "stakingRewards",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e(t) {
                                            var a, n;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (a = this.useStakingContract(this.chainId)),
                                                                    (e.prev = 1),
                                                                    (e.next = 4),
                                                                    a.methods
                                                                        .stakeRewards()
                                                                        .send({ from: this.address })
                                                                        .on("transactionHash", function (e) {
                                                                            t({ status: se, txID: e });
                                                                        })
                                                                        .on("error", function (e) {
                                                                            console.log(e), t({ status: ce });
                                                                        })
                                                                        .then(function (e) {
                                                                            !0 === e.status ? t({ status: ue, txID: e.transactionHash }) : t({ status: ce });
                                                                        })
                                                                        .catch(function (e) {
                                                                            console.log(e), t({ status: ce });
                                                                        })
                                                                );
                                                            case 4:
                                                                return (n = e.sent), e.abrupt("return", n);
                                                            case 8:
                                                                return (e.prev = 8), (e.t0 = e.catch(1)), console.error(e.t0.message), t({ status: ce }), e.abrupt("return", e.t0.message);
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[1, 8]]
                                            );
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getStakingInfoWallet",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e() {
                                            var t, a, n;
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.prev = 0), (t = this.useStakingContract(this.chainId)), (e.next = 4), t.methods.infoWallet(this.address).call();
                                                            case 4:
                                                                return (a = e.sent), (e.next = 7), t.methods.infoWalletFees(this.address).call();
                                                            case 7:
                                                                return (
                                                                    (n = e.sent),
                                                                    e.abrupt("return", {
                                                                        stakedAmount: Object(Je.BigNumber)(a[0].toString()).dividedBy(Math.pow(10, 18)).toString(),
                                                                        unstakedAmount: Object(Je.BigNumber)(a[1].toString()).dividedBy(Math.pow(10, 18)).toString(),
                                                                        depositTimestamp: 1e3 * Number(a[2]),
                                                                        lastUnstakeTimestamp: 1e3 * Number(a[3]),
                                                                        withdrawTimestamp: 1e3 * Number(a[4]),
                                                                        rewardAmount: Object(Je.BigNumber)(a[5].toString())
                                                                            .dividedBy(Math.pow(10, 18))
                                                                            .toFixed(18)
                                                                            .replace(/\.?0+$/, "")
                                                                            .toString(),
                                                                        stakedDuration: Number(n[0]),
                                                                        totalPctFee: Number(n[1]),
                                                                    })
                                                                );
                                                            case 11:
                                                                return (e.prev = 11), (e.t0 = e.catch(0)), console.log(e.t0), e.abrupt("return", {});
                                                            case 15:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[0, 11]]
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "useStakingContract",
                                value: function (e) {
                                    return new this.web3.eth.Contract(yt, h[e]);
                                },
                            },
                            {
                                key: "useIDOContract",
                                value: function (e) {
                                    return new this.web3.eth.Contract(ft, e);
                                },
                            },
                            {
                                key: "useERC20Contract",
                                value: function (e) {
                                    return new this.web3.eth.Contract(Et, e);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                gt = function (e) {
                    var t = [],
                        a = { 0: "PENDING", 1: "OPEN", 2: "CLOSED" },
                        n = e[0],
                        r = e[1],
                        i = e[2],
                        o = e[3],
                        l = e[4];
                    if (n.length >= 2 && n[0] ^ (0 === n[1])) {
                        for (var s = 0; s < n.length - 1; s++) {
                            var c = n[s];
                            if (c === n[s + 1]) {
                                var u = r[s] === r[s + 1] ? r[s] : "".concat(r[s], "-").concat(r[s + 1]),
                                    m = i[s] === i[s + 1] ? i[s] : "".concat(i[s], "-").concat(i[s + 1]),
                                    d = o[s + 1];
                                t.push({ no: c, allocationAmount: u, timestamp: m, claimedAmount: o[s], status: a[l[s]], percentage: d });
                            }
                        }
                        return { layout: 2, infoAllocation: t };
                    }
                    for (var p = 0; p < n.length; p++) t.push({ no: n[p], allocationAmount: r[p], timestamp: parseInt(i[p]), claimedAmount: o[p], status: a[l[p]] });
                    return { layout: 1, infoAllocation: t };
                },
                Nt = a(127),
                wt = a(638),
                Tt = a(284),
                _t = a(16),
                St = a(17),
                Ot = a(73),
                kt = (a(50), a(27)),
                At = a(51),
                Ct = a(289),
                It = (function (e) {
                    Object(_t.a)(a, e);
                    var t = Object(St.a)(a);
                    function a(e, n, r) {
                        return Object(dt.a)(this, a), t.call(this, e);
                    }
                    return a;
                })(Object(Ct.a)(Error)),
                xt = function e(t, a, n) {
                    var r = this;
                    Object(dt.a)(this, e),
                        (this.isMetaMask = !1),
                        (this.chainId = 56),
                        (this.url = ""),
                        (this.host = ""),
                        (this.path = ""),
                        (this.nextId = 1),
                        (this.batchTimeoutId = null),
                        (this.batch = []),
                        (this.clearBatch = Object(Ye.a)(
                            Fe.a.mark(function e() {
                                var t, a, n, i, o, l, s, c, u, m, d, p, b, h;
                                return Fe.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        console.info("Clearing batch", r.batch),
                                                        (t = r.batch),
                                                        (r.batch = []),
                                                        (r.batchTimeoutId = null),
                                                        (e.prev = 4),
                                                        (e.next = 7),
                                                        fetch(r.url, {
                                                            method: "POST",
                                                            headers: { "content-type": "application/json", accept: "application/json" },
                                                            body: JSON.stringify(
                                                                t.map(function (e) {
                                                                    return e.request;
                                                                })
                                                            ),
                                                        })
                                                    );
                                                case 7:
                                                    (a = e.sent), (e.next = 14);
                                                    break;
                                                case 10:
                                                    return (
                                                        (e.prev = 10),
                                                        (e.t0 = e.catch(4)),
                                                        t.forEach(function (e) {
                                                            return (0, e.reject)(new Error("Failed to send batch call"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 14:
                                                    if (a.ok) {
                                                        e.next = 17;
                                                        break;
                                                    }
                                                    return (
                                                        t.forEach(function (e) {
                                                            return (0, e.reject)(new It("".concat(a.status, ": ").concat(a.statusText), -32e3));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 17:
                                                    return (e.prev = 17), (e.next = 20), a.json();
                                                case 20:
                                                    (n = e.sent), (e.next = 27);
                                                    break;
                                                case 23:
                                                    return (
                                                        (e.prev = 23),
                                                        (e.t1 = e.catch(17)),
                                                        t.forEach(function (e) {
                                                            return (0, e.reject)(new Error("Failed to parse JSON response"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 27:
                                                    (i = t.reduce < Object(U.a)({}, id, BatchItem) > {}), (o = Object(At.a)(n));
                                                    try {
                                                        for (o.s(); !(l = o.n()).done; )
                                                            (s = l.value),
                                                                (c = i[s.id]),
                                                                (u = c.resolve),
                                                                (m = c.reject),
                                                                (d = c.request.method),
                                                                u &&
                                                                    ("error" in s
                                                                        ? m(
                                                                              new It(
                                                                                  null === s || void 0 === s || null === (p = s.error) || void 0 === p ? void 0 : p.message,
                                                                                  null === s || void 0 === s || null === (b = s.error) || void 0 === b ? void 0 : b.code,
                                                                                  null === s || void 0 === s || null === (h = s.error) || void 0 === h ? void 0 : h.data
                                                                              )
                                                                          )
                                                                        : "result" in s
                                                                        ? u(s.result)
                                                                        : m(new It("Received unexpected JSON-RPC response to ".concat(d, " request."), -32e3, s)));
                                                    } catch (E) {
                                                        o.e(E);
                                                    } finally {
                                                        o.f();
                                                    }
                                                case 30:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [
                                        [4, 10],
                                        [17, 23],
                                    ]
                                );
                            })
                        )),
                        (this.sendAsync = function (e, t) {
                            r.request(e.method, e.params)
                                .then(function (a) {
                                    return t(null, { jsonrpc: "2.0", id: e.id, result: a });
                                })
                                .catch(function (e) {
                                    return t(e, null);
                                });
                        }),
                        (this.request = (function () {
                            var e = Object(Ye.a)(
                                Fe.a.mark(function e(t, a) {
                                    var n, i;
                                    return Fe.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ("string" === typeof t) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt("return", r.request(t.method, t.params));
                                                case 2:
                                                    if ("eth_chainId" !== t) {
                                                        e.next = 4;
                                                        break;
                                                    }
                                                    return e.abrupt("return", "0x".concat(r.chainId.toString(16)));
                                                case 4:
                                                    return (
                                                        (i = new Promise(function (e, n) {
                                                            r.batch.push({ request: { jsonrpc: "2.0", id: r.nextId++, method: t, params: a }, resolve: e, reject: n });
                                                        })),
                                                        (r.batchTimeoutId = null !== (n = r.batchTimeoutId) && void 0 !== n ? n : setTimeout(r.clearBatch, r.batchWaitTimeMs)),
                                                        e.abrupt("return", i)
                                                    );
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t, a) {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (this.chainId = t),
                        (this.url = a);
                    var i = new URL(a);
                    (this.host = i.host), (this.path = i.pathname), (this.batchWaitTimeMs = null !== n && void 0 !== n ? n : 50);
                },
                Pt = (function (e) {
                    Object(_t.a)(a, e);
                    var t = Object(St.a)(a);
                    function a(e) {
                        var n,
                            r = e.urls,
                            i = e.defaultChainId;
                        return (
                            Object(dt.a)(this, a),
                            Object(kt.a)(i || 1 === Object.keys(r).length, "defaultChainId is a required argument with >1 url"),
                            ((n = t.call(this, {
                                supportedChainIds: Object.keys(r).map(function (e) {
                                    return Number(e);
                                }),
                            })).providers = []),
                            (n.currentChainId = i || Number(Object.keys(r)[0])),
                            (n.providers = Object.keys(r).reduce(function (e, t) {
                                return (e[Number(t)] = new xt(Number(t), r[Number(t)])), e;
                            }, {})),
                            n
                        );
                    }
                    return (
                        Object(pt.a)(a, [
                            {
                                key: "provider",
                                value: function () {
                                    return this.providers[this.currentChainId];
                                },
                            },
                            {
                                key: "activate",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e() {
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", { provider: this.providers[this.currentChainId], chainId: this.currentChainId, account: null });
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getProvider",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e() {
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.providers[this.currentChainId]);
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getChainId",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e() {
                                            return Fe.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.currentChainId);
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getAccount",
                                value: (function () {
                                    var e = Object(Ye.a)(
                                        Fe.a.mark(function e() {
                                            return Fe.a.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.abrupt("return", null);
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "deactivate",
                                value: function () {
                                    return null;
                                },
                            },
                        ]),
                        a
                    );
                })(Ot.AbstractConnector),
                jt = Pt;
            if ("undefined" === typeof w) throw new Error("REACT_APP_NETWORK_URL must be a defined environment variable");
            new Pt({ urls: Object(U.a)({}, 56, w), defaultChainId: 56 });
            var Rt = new nt.a({ supportedChainIds: y }),
                Lt = new Nt.BscConnector({ supportedChainIds: [56] }),
                Wt = new Tt.a({ rpc: Object(U.a)({}, 56, w), qrcode: !0, pollingInterval: 15e3 });
            (ot = {}), Object(U.a)(ot, v, Rt), Object(U.a)(ot, g, Lt), Object(U.a)(ot, N, Wt);
            var Mt = function () {
                    var e,
                        t = Object(s.b)(),
                        a = Object(m.d)(),
                        n = a.activate,
                        i = a.deactivate,
                        o = (a.chainId, (e = {}), Object(U.a)(e, v, Rt), Object(U.a)(e, g, Lt), e);
                    return {
                        login: Object(r.useCallback)(function (e) {
                            var a = o[e];
                            if (a)
                                try {
                                    n(
                                        a,
                                        (function () {
                                            var e = Object(Ye.a)(
                                                Fe.a.mark(function e(a) {
                                                    return Fe.a.wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    window.localStorage.removeItem("connectorId"),
                                                                        a instanceof m.a
                                                                            ? t({ type: Ge.ALERT_WARNING, message: Me })
                                                                            : a instanceof nt.b || a instanceof Nt.NoBscProviderError
                                                                            ? t({ type: Ge.ALERT_FAILS, message: "No provider was found" })
                                                                            : a instanceof nt.c
                                                                            ? t({ type: Ge.ALERT_FAILS, message: "Please authorize to access your account" })
                                                                            : (t({ type: Ge.ALERT_FAILS, message: a.message }),
                                                                              setTimeout(function () {
                                                                                  window.location.reload();
                                                                              }, 2e3));
                                                                case 2:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            );
                                            return function (t) {
                                                return e.apply(this, arguments);
                                            };
                                        })()
                                    );
                                } catch (r) {
                                    console.log(r);
                                }
                            else t({ type: Ge.ALERT_FAILS, message: "The connector config is wrong" });
                        }, []),
                        logout: i,
                    };
                },
                Dt = function (e) {
                    var t = Object(s.b)(),
                        a = Mt().login,
                        n = rt(),
                        o = n.account,
                        l = n.library,
                        c = n.error,
                        u = n.chainId,
                        m = Object(r.useCallback)(function (e) {
                            try {
                                a(e.connectorId), window.localStorage.setItem("connectorId", e.connectorId);
                            } catch (c) {
                                console.log(c);
                            }
                        }, []);
                    Object(r.useEffect)(
                        function () {
                            if (!c)
                                if (o && l && l.provider) {
                                    var e = new vt(l.provider, o, u);
                                    t({ type: F.ENABLE_WALLET_SUCCESS, data: e });
                                } else;
                        },
                        [l, o, c]
                    );
                    var d = Object(r.useState)(""),
                        p = Object(tt.a)(d, 2);
                    p[0], p[1];
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                            "div",
                            { className: "modal fade", id: "connectWalletModal", tabIndex: "-1", "aria-labelledby": "connectWalletModalLabel", "aria-hidden": "true" },
                            i.a.createElement(
                                "div",
                                { className: "modal-dialog modal-dialog-centered modal-sm" },
                                i.a.createElement(
                                    "div",
                                    { className: "modal-content" },
                                    i.a.createElement(
                                        "div",
                                        { className: "modal-header" },
                                        i.a.createElement("h5", { className: "modal-title", id: "connectWalletModalLabel" }, "Connect to wallet"),
                                        i.a.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })
                                    ),
                                    i.a.createElement(
                                        "div",
                                        { className: "modal-body p-4" },
                                        qe.map(function (e, t) {
                                            var a;
                                            if (!0 === e.enable)
                                                return i.a.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative w-100 mb-4",
                                                        key: t,
                                                        "data-bs-dismiss": "modal",
                                                        onClick: function () {
                                                            return m(e);
                                                        },
                                                    },
                                                    i.a.createElement("img", ((a = { className: "btn__icon", src: e.icon, height: "26" }), Object(U.a)(a, "className", "me-2"), Object(U.a)(a, "alt", e.connectorId), a)),
                                                    i.a.createElement("span", null, e.title),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                );
                                        })
                                    )
                                )
                            )
                        )
                    );
                },
                Bt = a(273),
                Gt = a.n(Bt);
            var Ut = function (e) {
                var t = Object(s.b)(),
                    a = (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = i.a.useState(!1),
                            a = Object(tt.a)(t, 2),
                            n = a[0],
                            r = a[1],
                            o = i.a.useCallback(function (e) {
                                "string" === typeof e || "number" == typeof e ? (Gt()(e.toString()), r(!0)) : (r(!1), console.error("Cannot copy typeof ".concat(typeof e, " to clipboard, must be a string or number.")));
                            }, []);
                        return (
                            i.a.useEffect(
                                function () {
                                    var t;
                                    return (
                                        n &&
                                            e &&
                                            (t = setTimeout(function () {
                                                return r(!1);
                                            }, e)),
                                        function () {
                                            clearTimeout(t);
                                        }
                                    );
                                },
                                [n, e]
                            ),
                            [n, o]
                        );
                    })(1e3),
                    n = Object(tt.a)(a, 2),
                    r = n[0],
                    o = n[1],
                    l = Mt().logout,
                    c = rt(),
                    u = c.account,
                    m = (c.library, c.error, c.chainId);
                return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                        "div",
                        { className: "modal fade ", id: "walletModal", tabIndex: "-1", "aria-labelledby": "walletModalLabel", "aria-hidden": "true" },
                        i.a.createElement(
                            "div",
                            { className: "modal-dialog modal-md modal-dialog-centered" },
                            i.a.createElement(
                                "div",
                                { className: "modal-content" },
                                i.a.createElement(
                                    "div",
                                    { className: "modal-header" },
                                    i.a.createElement("h5", { className: "modal-title", id: "walletModalLabel" }, "Your wallet"),
                                    i.a.createElement("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" })
                                ),
                                i.a.createElement(
                                    "div",
                                    { className: "modal-body" },
                                    i.a.createElement(
                                        "div",
                                        { className: "mb-3 text-center" },
                                        i.a.createElement("h5", { style: { fontSize: "17px", wordBreak: "break-word" }, className: "mb-3" }, i.a.createElement("b", null, u)),
                                        i.a.createElement(
                                            "a",
                                            { href: "".concat(b[m], "/address/").concat(u), target: "_blank", className: "d-inline-flex align-items-center me-4", style: { textDecoration: "none" } },
                                            i.a.createElement("span", { className: "me-1" }, "View on BscScan"),
                                            i.a.createElement("i", { className: "mdi mdi-open-in-new" })
                                        ),
                                        i.a.createElement(
                                            "a",
                                            {
                                                className: "d-inline-flex align-items-center",
                                                href: "#",
                                                onClick: function () {
                                                    return o(u);
                                                },
                                                style: { textDecoration: "none" },
                                            },
                                            i.a.createElement("span", { className: "me-1" }, "Copy Address"),
                                            r ? i.a.createElement("i", { className: "mdi mdi-check" }) : i.a.createElement("i", { className: "mdi mdi-content-copy" })
                                        )
                                    ),
                                    i.a.createElement(
                                        "div",
                                        { className: "text-center mt-4" },
                                        i.a.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative mb-4",
                                                style: { minWidth: "150px" },
                                                "data-bs-dismiss": "modal",
                                                onClick: function () {
                                                    l(), localStorage.clear(), t({ type: F.LOG_OUT_WALLET_SUCCESS }), window.location.reload();
                                                },
                                            },
                                            i.a.createElement("span", null, "Logout"),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            };
            function Ft() {
                var e = new Date().getFullYear();
                return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                        "div",
                        { className: "pp-footer" },
                        i.a.createElement(
                            "div",
                            { className: "container-fluid" },
                            i.a.createElement(
                                "div",
                                { className: "d-flex justify-content-between pp-footer-content" },
                                i.a.createElement("div", null, " Copyright \xa9 ", e, ". All Rights Reserved by GameZone"),
                                i.a.createElement("div", null, " v", mt.version),
                                i.a.createElement(
                                    "div",
                                    { className: "text-end pp-footer-link" },
                                    i.a.createElement(be.a, { target: "_blank", to: A }, "Privacy Policy "),
                                    i.a.createElement("span", null, "\xa0\xa0|\xa0\xa0"),
                                    i.a.createElement(be.a, { target: "_blank", to: C }, "Cookies Policy "),
                                    i.a.createElement("span", null, "\xa0\xa0|\xa0\xa0"),
                                    i.a.createElement(be.a, { target: "_blank", to: I }, "Terms of Use ")
                                )
                            )
                        )
                    ),
                    i.a.createElement(Dt, null),
                    i.a.createElement(Ut, null)
                );
            }
            a(274);
            var Yt,
                Kt = ["children"],
                Ht = function (e) {
                    var t = e.children,
                        a =
                            (Object(de.a)(e, Kt),
                            Object(s.c)(function (e) {
                                return Object(d.get)(e, "utils.blocking", !1);
                            }));
                    return i.a.createElement(i.a.Fragment, null, i.a.createElement(pe.a, { tag: "div", blocking: a }, i.a.createElement(ut, null), t));
                },
                Jt = ["component"],
                zt = function (e) {
                    var t = e.component,
                        a = Object(de.a)(e, Jt);
                    return i.a.createElement(
                        T.b,
                        Object.assign({}, a, {
                            render: function (e) {
                                return i.a.createElement(Ht, null, i.a.createElement(t, e));
                            },
                        })
                    );
                },
                Zt = a(640),
                qt = function () {
                    return (
                        Object(r.useEffect)(function () {
                            return (
                                ke("body").addClass("no-bg"),
                                function () {
                                    ke("body").removeClass("no-bg");
                                }
                            );
                        }, []),
                        i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                                Zt.a,
                                null,
                                i.a.createElement(
                                    "div",
                                    { className: "w-100", style: { minHeight: "calc(100vh - 168px)" } },
                                    i.a.createElement(
                                        "div",
                                        { className: "py-5" },
                                        i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                                "div",
                                                { className: "text-center mb-5" },
                                                i.a.createElement("h1", { className: "p-tab-title" }, "GAMEPAD LIMITED"),
                                                i.a.createElement("h2", { className: "p-tab-title mb-4" }, "Privacy Policy of ", i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/")),
                                                i.a.createElement("small", null, "Last revised Date: 29", i.a.createElement("sup", null, "th"), " September 2021")
                                            ),
                                            i.a.createElement("h3", { className: "p-tab-title" }, "Introduction"),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "This Privacy Policy describes how GamePad Limited (herein referred to as ",
                                                i.a.createElement("b", null, '"GAMEZONE"'),
                                                ", ",
                                                i.a.createElement("b", null, '"We"'),
                                                ", ",
                                                i.a.createElement("b", null, '"Our"'),
                                                ", and ",
                                                i.a.createElement("b", null, '"Us"'),
                                                ") collects, uses, processes, discloses, shares, transfers, and protects the information You provide on ",
                                                i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/"),
                                                " (",
                                                i.a.createElement("b", null, '"Website"'),
                                                ") or on ",
                                                i.a.createElement("b", null, "GAMEZONE Platform"),
                                                ". This Privacy Policy constitutes a part of the Terms and Conditions of the Website (",
                                                i.a.createElement("b", null, '"T&Cs"'),
                                                "). The terms used in this Privacy Policy will share the same definition as those stipulated in the T&Cs except for others indicated herein."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "We respect and value your privacy as well as the integrity of the information You have provided and/or permitted Us to collect. Thus, We endeavour to follow industry standards to ensure the security and confidentiality of your Personal Information when You use Our Services or access GAMEZONE Platform."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "When accessing, connecting, using, clicking on, or engaging in any Services provided on GAMEZONE Platform, You are strongly advised to carefully read, acknowledge, understand, and accept all terms stipulated in this Privacy Policy. We will not use your information, in any shape or form, for any other purpose that has not been indicated in this Privacy Policy or the T&Cs without providing You prior notification or obtaining consent from You."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "This Privacy Policy has incorporated several provisions from the General Data Protection Regulation (",
                                                i.a.createElement("b", null, '"GDPR"'),
                                                "), specifically following its Personal Information Processing rules within the European Economic Area (",
                                                i.a.createElement("b", null, '"EEA"'),
                                                ")."
                                            ),
                                            i.a.createElement("p", null, "This Privacy Policy will inform You about the following matters among several others:"),
                                            i.a.createElement(
                                                "ul",
                                                { id: "nav" },
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#acceptance" }, "Acceptance of the Privacy Policy")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#our-relationship" }, "Our Relationship with You")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#we-collect" }, "Personal Information that We collect")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#how-we-collect" }, "How We collect Personal Information")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#how-we-use" }, "How We use Personal Information")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#how-we-protect" }, "How We protect Personal Information")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#how-we-retain" }, "How long We retain Personal Information")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#cookies" }, "Cookies")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#sharing" }, "Sharing your Personal Information")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#third-party" }, "Third-Party Collection of Personal Information")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#designated-countries" }, "Designated Countries and Your Legal Rights")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#eea" }, "Rights of the residents of the European Economic Area (EEA)")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#cross-border" }, "Cross-Border Transfer of Personal Information")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#limitations" }, "Limitations")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#updates" }, "Updates or amendments to the Privacy Policy")),
                                                i.a.createElement("li", null, i.a.createElement("a", { href: "#contact" }, "How to contact"))
                                            ),
                                            i.a.createElement(
                                                "ol",
                                                null,
                                                i.a.createElement(
                                                    "li",
                                                    { id: "acceptance" },
                                                    i.a.createElement("b", null, "Acceptance of the Privacy Policy"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "By accessing, connecting, clicking on, using, or engaging in Our Services, You indicate and confirm that You have consented and agreed to the terms of this Privacy Policy. We will not use your Personal Information for any other purpose that has not covered in this Privacy Policy or the T&Cs without providing You prior notification or obtaining your consent."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "If You do not agree, either partially or wholly, to this Privacy Policy, You must immediately discontinue accessing, connecting, using, or engaging in Our Services and GAMEZONE Platform. This Privacy Policy does not apply to services offered by other companies or service providers or other websites linked from Our Platform."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "our-relationship" },
                                                    i.a.createElement("b", null, "Our Relationship with You"),
                                                    i.a.createElement("p", null, "GAMEZONE has the relationship with individuals on its Services as described below:"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cUser\u201d"),
                                                        " is an individual providing personal information to Us via Our Website or GAMEZONE Platform, Medium pages, social media accounts, or other means. For example, User can engage and complete additional GAMEZONE social media engagement tasks, to be entitled of opportunities provided by Us or interact with Us on Our social media accounts."
                                                    ),
                                                    i.a.createElement("p", null, 'Hereinafter, We may refer to User as "You" in this Privacy Policy.')
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "we-collect" },
                                                    i.a.createElement("b", null, "Personal Information that We collect"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "For the purposes of this Privacy Policy, Personal Information is information that can be used to identify, describe, relate, or associate with a particular individual. The following are the types of information We collect, store, and process when You use Our services:"
                                                    ),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Information provided by You when connecting with GAMEZONE Platform and for KYC purpose.",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Prior to connecting or participating in GAMEZONE Platform to use Our Services, You must provide Us with your full name, birthday date, nationality, home address, location, government identification number (Identification Card/Passport Number and Date of the Issuance of Identification Card/Passport), telegram username, digital wallet address, email address, IP address, documentation for proof of address and other information as We required which can be used to distinguish your identity, to access the GAMEZONE Platform and for the Know Your Customer (\u201cKYC\u201d) Verification purpose. Additionally, You will use single sign \u2013 on (also known as \u201cOAuth\u201d) by logging in to Our Services using MetaMask. These services will authenticate your identity and provide You the option to share certain information with Us such as your username and email address."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Furthermore, You must be required to upload facial image data, namely photo images of your face and, provide additional information when firstly connecting with GAMEZONE Platform such as linking to your Facebook account, Telegram, LinkedIn, GitHub, Google, or Twitter of other social media accounts, and more."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Information collected by Us as You use Our services",
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "Usage Information",
                                                                    i.a.createElement(
                                                                        "p",
                                                                        null,
                                                                        "When You engage or use Our Services, We will monitor your information in relation to your usage of GAMEZONE\u2019s Services through your device such as your IP address, phone number, the type of device You use to access Our Platform, device information, which websites You visited before accessing Our Services or Platform, browser type, Information about your browser, Date and Time You visit Our Platform, Volume of data transmitted and network operator. This information will either be directly obtained by GAMEZONE Platform or Our website or through third party service providers."
                                                                    ),
                                                                    i.a.createElement(
                                                                        "p",
                                                                        null,
                                                                        "We collect this type of information to ensure that Our interface and/or GAMEZONE Platform is seamlessly accessible for all users around the world, except users in the prohibited jurisdictions."
                                                                    )
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "Communication Information",
                                                                    i.a.createElement(
                                                                        "p",
                                                                        null,
                                                                        "You hereby agree that We are entitled to collect and use or process the Personal Information You have provided on GAMEZONE Platform or generated through your usage of Our Services for the purpose of being able to communicate with You through messages, requests, emails, live chats, file attachments in connection with your transactions on GAMEZONE Platform, or any other information related to your contact with Our Services. If You contact Us, We will keep a record of the information shared during the correspondence."
                                                                    )
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "Financial Information",
                                                                    i.a.createElement(
                                                                        "p",
                                                                        null,
                                                                        "You hereby agree that, for the purposes stipulated in this Privacy Policy, We are entitled to collect and use the information contained in or related to your financial information when You use Our services. This includes, without limitation, your transaction history such as your initial cryptocurrency or token amount, your GAMEZONE Tokens amount, your staking instructions, your wallet address(es) etc."
                                                                    ),
                                                                    i.a.createElement(
                                                                        "p",
                                                                        null,
                                                                        "We collect this financial information to monitor suspicious financial activities to protect You from fraud, resolution of legal cases, as well as any other purposes disclosed in this Privacy Policy."
                                                                    )
                                                                )
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                'Parts of GAMEZONE Services are public, including any information disclosed on Our social media accounts, thus You acknowledge that such parts of GAMEZONE Services may appear on search engines or other publicly available platforms, and may be "crawled", searched and used by the third parties or other Users and Customers of the Services. Please do not post any information that You do not wish to reveal publicly.'
                                                            )
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "how-we-collect" },
                                                    i.a.createElement("b", null, "How We collect Personal Information"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Information automatically collected by Us",
                                                            i.a.createElement("p", null, "We will collect and process Personal Information automatically provided by You under the following situations."),
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement("li", null, "when You visit and/or firstly connect with the Website;"),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "when You voluntarily complete any user survey or provide feedback to Us via emails or any other electronic channels including on Our social media accounts;"
                                                                ),
                                                                i.a.createElement("li", null, "when You use browser cookies or any other relevant software upon visiting the Website; and"),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "other situations where We may automatically collect your information as described in this Privacy Policy, Our T&Cs, or other relevant agreements with You."
                                                                )
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Information collected by the third-party",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We will collect your Personal Information from the third parties as required or permitted to the extent of applicable laws. Information from the third-party sources will include, but will not limited to, public databases, ID verification partners, KYC Verification partners, blockchain data, marketing partners and resellers, advertising partners, and analytics providers."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Anonymized and Aggregated Data",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We will also collect other Information in the form of anonymized and aggregate information where all information will be combined and then removed of personally identifiable information, making it unusable for the identification of specific individuals. Aggregated data could be derived from your personal data, but it is not considered as personal data under applicable laws. For example, We may aggregate your usage data to calculate the percentage of users accessing a specific feature of GAMEZONE Services. However, if we combine or connect aggregated data with your personal data so that it can directly or indirectly identify You, You acknowledge that we treat the combined data as personal data which will be used in accordance with this Privacy Policy."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We use anonymized or aggregate users' information for the purposes stipulated in this Privacy Policy at any time, including gaining better understanding of users' needs and behaviours, conducting business intelligence and marketing initiatives, and detecting security threats. In this regard, We reserve the right to implement innovative technologies as they become available to be used for strategic planning and operational processes."
                                                            )
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "how-we-use" },
                                                    i.a.createElement("b", null, "How We use Personal Information"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Your Personal Information will be made available to need-to-know basis to GAMEZONE, Our Affiliate, Our Partners and/or within Our group of companies. This will include, but not be limited to, the employees and/or any persons or third parties working for GAMEZONE who are responsible for using and protecting your Personal Information."
                                                    ),
                                                    i.a.createElement("p", null, "We use and process your Personal Information for the following purposes or in the following ways:"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "To provide Our Services",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We respect data protection principles, and process personal data only for specified, explicit, and legitimate purpose for which such personal data were provided. We primarily use your Personal information, either collected or delivered, in order to enable your use of GAMEZONE\u2019s Services (including, but not limited to, processing transactions), to improve the efficiency of the Services, the process to participate on Our Project, and to verify your identity."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "To protect users",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                'We use the information collected to protect Our Platforms, Users\' information, and archives. We also use IP addresses and cookies to detect suspicious activities and to protect against automated abuse such as spam, phishing, and Distributed Denial of Service ("DDoS") attacks, and other security risks.'
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "To comply with regulations and compliance",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "For Our legitimate interests, We will use the information in compliance with Our legal obligations, global and local industry standards, and Our AML/KYC/CTF procedures. In the case where it is strictly necessary (i.e., to protect the vital interests of the users or other natural persons, to prevent or mitigate fraud, to fulfil the purpose of public interest, or to pursue Our reasonable interests), We may use and process your Personal Information without obtaining your consent. You hereby expressly authorise GAMEZONE to disclose any and all information relating to You in GAMEZONE\u2019s possession to any law enforcement or government officials upon the only upon a valid request."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "For measurement, research and development purposes-",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We actively measure and analyse your information to understand the way You use and interact with Our Services, and Our Platform, and to provide You with the unique and personalized experience. For example, We allow You to use social media plugins on Our Services (e.g., Telegram, Twitter, etc.), We keep track of your preferences such as display name, time zone, and so on. This review is continuously conducted by Our operation teams to continuously improve Our Platforms' performance and to resolve issues with User experience."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "In addition, We use such information to monitor trends, and improve Our Services, Our administration, the content and layout of the Website, and to develop new Services for You."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "For communication purposes",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We use your Personal Information, collected or derived from your communication devices or your email address, to interact with You directly, to provide You with necessary support, and/or to keep You informed of wallets connected, transactions, staking instructions, security details, as well as other aspects. All direct communications will be appropriately maintained at GAMEZONE, or the service providers designated by GAMEZONE, to be reviewed for accuracy, retained as evidence, or used to perform other statutory requirements or other obligations as stipulated in this Privacy Policy and the T&Cs."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "To enforce Our T&Cs, and other relevant agreements",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Personal Information is also used to enforce Our T&Cs continuously and actively among, and other agreements relating to the Services on GAMEZONE Platform. Activities in this regard include, but are not limited to, reviewing, processing, verifying, investigating, mitigating and preventing any potentially prohibited or illegal activities that may violate preceding provisions, or disclose relevant information to third parties in accordance therewith. In light of this, GAMEZONE shall be entitled to freeze/close/delete accounts or any User activity on the Website as necessary to any User found to be engaged in any activities that violate Our T&Cs, and other agreements."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "For marketing and advertising",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We will share your Personal Information with Our marketing partners for the purposes of targeting, modelling, and/or identifying analytics as well as marketing and advertising. We may send You marketing communications to alert You about new Services, yet You can opt-out of Our marketing activities at any time."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "For other purposes",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Provided that we need to process or use your Personal Information for other purposes, not stipulated in this Privacy Policy, We will notify or request your consent to use such information. We will not use your Personal Information for purposes other than the purposes stipulated in this Privacy Policy without your prior consent except where it is necessary for our legitimate interests (or for Our Affiliate, Our Partners and/or Our group of companies) and your interests and fundamental rights do not override those interests."
                                                            )
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "how-we-protect" },
                                                    i.a.createElement("b", null, "How We protect Personal Information"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We take reasonable care to protect the GAMEZONE\u2019s security on GAMEZONE Platform and website as well as your Personal Information from loss, misuse, disclosure, alteration, and destruction. We take reasonable steps to maintain physical, technical, and employ procedural safeguard to ensure the confidentiality, integrity of your Personal Information. The safeguards include the use of firewalls, and data encryption, enforcing physical access controls to Our premise and files, and limiting access to Personal Information only to those employees, agents or third parties who need access to that information to process it for Us."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We also implement certain reasonable security measures to protect your Personal Information from unauthorized access, and such security measures are in compliance with the security practices and procedures as prescribed under the applicable laws."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "However, You agree and acknowledge that it is impossible to fully guarantee the security of your Personal Information by implementing the above-mentioned safeguard and measures. It is not absolute protection to your Personal Information and by accessing the Services."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "You agree that We will not hold any responsibility for the acts committed by those who gain unauthorized access or abuse your information and services. In addition, We will not hold any responsibility for any act committed by the third-party service providers who are contractually engaged with Us to maintain an appropriate security measure for protecting your Personal Information. Thus, You are recommended to understand this responsibility and to independently take safety precautions to protect your Personal Information, particularly your credential information such your wallet address. You hereby agree that We will not be liable for any information leakage and other damage or loss not caused by Our intention or gross negligence, including, but not limited to, hacker attacks, power interruptions, or unavoidable technical failures."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "how-we-retain" },
                                                    i.a.createElement("b", null, "How long We retain Personal Information"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "You are aware that your Personal Information will continue to be stored and retained by Us or by a third-party processor engaged by Us for KYC Verification while You have been using or accessing GAMEZONE Platform and the Services, and after your use of the Services for a reasonable period of time stipulated under the applicable law."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "In addition, We may be required by applicable laws and regulatory requirements to retain certain information, including your Personal Information, your identification verification materials, information relevant to AML/KYC/CTF procedures, information related to staking instructions, account agreements, and other agreements between Us and third-parties, account statements, and other records after You stop accessing or participating in GAMEZONE Platform or its website."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "cookies" },
                                                    i.a.createElement("b", null, "Cookies"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We will use cookies and other technologies or methods of web and analytic tools to gather, store, and analyse certain information related with your access to and activities through the Services, including when You visit the Website."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        'A "cookie" is a small piece of information that a website assigns to your device while You are viewing a website. Cookies are beneficial and may be used for various purposes. These purposes include, among other things, allowing You to navigate between pages efficiently, enabling automatic activation of certain features, remembering your preferences and making the interaction between You and the Services quicker, easier and smoother. Our Website will use the following types of cookies:'
                                                    ),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Strictly Necessary Cookies",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "These cookies are essential to enable You to log in, navigate a website, and use its features or to provide a service requested by You. We will not need to obtain your consent in order to use these cookies."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Functionality Cookies",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "These cookies allow the website to remember choices You make (such as your username, language, or the region You reside in) and provide enhanced, more personal features. The information these cookies collect remains anonymous, and they cannot track your browsing activity on other websites."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Performance cookies",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "These cookies collect information about how You use a website, for example, which pages You go to most often, how much time You spend on a page, record difficulties You may experience while using the website such as error messages. All information collected by these cookies is aggregated and therefore anonymous. It is only used to improve the efficiency of the website."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Targeting Cookies or Advertising Cookies",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "These cookies are used to deliver advertisements tailored to You and your interests specifically. They are also used to limit the number of times You see an advertisement as well as help measure the effectiveness of the advertising campaign. These cookies remember that You have visited a website, and this information is shared with other organizations such as advertisers. Quite often targeting or advertising cookies will be linked to the sites' functionality provided by the other organizations."
                                                            )
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "You may remove these cookies by following the instructions of your device preferences. However, if You choose to disable cookies, some features of GAMEZONE Services may not operate properly or become inaccessible, and your online experience may be limited. For Further information please visit our Cookies Policy."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "sharing" },
                                                    i.a.createElement("b", null, "Sharing your Personal Information"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We will not rent, sell, or disclose your Personal Information to any third parties, except to those who require access to the information to perform their tasks and duties under the binding agreements executed with Us and to share with third parties who have a legitimate purpose for accessing it."
                                                    ),
                                                    i.a.createElement("p", null, "We may share, transfer, disclose, or allow access to your Personal Information to the following third parties for the purposes described below:"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We may disclose Personal Information to the third parties in order to administer or process a transaction, or services You have authorized or requested, or in the context of facilitating the execution of a transaction, or We may disclose Personal Information to third parties that provide supporting services, or analytical information for the purpose of the Service improvement, only where we have a lawful basis to do so or under an agreement or legal requirements for the transfer of Personal Information."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We will be required to verify your identities by applicable laws and regulatory requirements and rely on third-party services to perform these verifications. Personal Information that You provide to Us during the initial connecting process is passed to these services at KYC Verification process and on an ongoing basis thereafter."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We may disclose or transfer a part of your Personal Information We collect if We are involved in a business transition or any merger and/or acquisition (M&A) projects. In such M&A event, your Personal Information might be among the assets transferred, but it will be protected and secure in accordance with this Privacy Policy."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We may share your Personal Information with law enforcement, and government officials when We are compelled to do so by a subpoena, a valid court order to prevent financial loss, to report suspected illegal activity or to investigate violations of any of Our T&Cs or any other applicable policies."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We may share your Personal Information with third-party processors acting on behalf of Us or engaged by Us to process your Personal Information for Us, Our Affiliate and/or Our Partners."
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "All Affiliate and third parties with whom We share your Personal Information have their privacy policies. However, they will be expected to protect this information in a manner that aligns with the provisions described in this Privacy Policy."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "third-party" },
                                                    i.a.createElement("b", null, "Third-Party Collection of Personal Information"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "This Privacy Policy only addresses the use and disclosure of the Personal Information We collect from You. To the extent that You disclose your information to other parties through the use of Our Services such as by clicking on a link to any other websites of our partner networks, different rules regarding Privacy Policies may apply to their use or disclosure of the Personal Information You disclose to them."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "You hereby acknowledge that We will not be responsible for the products, services, or descriptions of products or services that You receive from the third-party websites or to the content or privacy practices of the third-party websites. Also, this Privacy Policy will not be applied to any such third-party products and services that You access through GAMEZONE Platform. You are knowingly and voluntarily assuming all risks of using third-party websites to purchase products or services, and You agree that We will have no liability whatsoever concerning such third-party websites and your usage of them."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Your relationship with these third parties and their services and tools is independent of your relationship with Us. These third parties may allow You to permit/restrict the information that is collected. It may be in your interest to individually restrict or enable such data collections."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "designated-countries" },
                                                    i.a.createElement("b", null, "Designated Countries Privacy Right and Your Legal Rights"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "This provision applies to Users of the Services that are located in the European Economic Area, United Kingdom and/or Switzerland (herein collectively referred as ",
                                                        i.a.createElement("b", null, "\u201cDesignated Countries\u201d"),
                                                        ") at the time of Data or Personal Information being collected. We may ask your information regarding your nationality, your location, which country You are in when You use Our Services or Platform, or We may rely on your IP address. We cannot apply this provision to Users who do not provide information about the location or obfuscates location information so as not to appear located in the Designated Countries."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We use and process your Personal Information based on a valid lawful basis of the GDPR and any equivalent regulations (collectively referred as ",
                                                        i.a.createElement("b", null, '"Data Protection Laws"'),
                                                        "). The lawful basis for processing your Personal Information includes (i) your consent, (ii) performance of a contract, (iii) a legitimate interest, (iv) a compliance with legal obligations, (v) protection your vital interest, and (vi) public task."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "In the event of any conflict or inconsistency between any term in this provision and other terms contained in this Privacy Policy, the term in this provision will govern and control over Users in the Designated Countries."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Under certain circumstances when You use Our Services, You have the rights under the Data Protection Laws in relation to your Personal Information. These rights include the followings:"
                                                    ),
                                                    i.a.createElement(
                                                        "ol",
                                                        { id: "eea" },
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right to be informed",
                                                            i.a.createElement("p", null, "You reserve the right to be informed about the collection, use, and process of your Personal Information.")
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right of access",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You reserve the right to make a request for a copy of the Personal Information We hold about You and specific information regarding Our processing of this information."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right to rectify",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You reserve the right to request Us to update, correct, or complete your Personal Information that You believe to be outdated, inaccurate, or incomplete. You will rectify at any time by informing Us via our contact channels."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right to erasure (",
                                                            i.a.createElement("b", null, '"Right to be Forgotten"'),
                                                            ")",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You may request to have your Personal Information deleted from Our record where (i) your Personal Information is no longer necessary to be used for the Services or on the Platform, (ii) Personal Information was collected in relation to processing that You previously consented to, but later withdrew such consent, or (iii) your Personal Information was collected in relation to processing activities to which You object, and there are no overriding legitimate grounds for Our processing."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Please be informed that the Right to be Forgotten mentioned above is not an absolute right. We are compelled to fulfil your request only where the retention of your Personal Information might cause an infraction of the GDPR or applicable law to which We are subject. We shall exercise reasonable efforts in having your Personal Information erased to the extent required by the GDPR or applicable law including in communicating erasure to Our recipients of your Personal Information unless that proves to be impossible or a disproportionate effort."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right to data portability",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You reserve the right to request to transfer a machine-readable copy of your Personal Information to You or the third-party of your choice. We will provide You, or third-party, your Personal Information in a machine-readable format. This right only applies to Personal Information You have consented Us to use."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right to restrict processing",
                                                            i.a.createElement("p", null, "You may request Us to restrict or suppress the processing of your Personal Information under certain circumstances as follows:"),
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement("li", null, "to establish the accuracy of the Personal Information;"),
                                                                i.a.createElement("li", null, "when the processing is considered unlawful, but You do not wish to have your Personal Information erased;"),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "where We no longer need to process your Personal Information, but the information must be retained for the establishment, exercise or defence of legal claims; and"
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "where You have objected to Our processing your Personal Information, but We need to determine whether Our legitimate interest overrides your objection."
                                                                )
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right to object",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You may object to Our reliance on Our legitimate interests as the basis of Our processing of your Personal Information that impacts your rights. You may also object to Our process of your Personal Information for direct marketing purposes."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Right to withdraw consent (",
                                                            i.a.createElement("b", null, '"Opt-out"'),
                                                            ")",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You reserve the right to withdraw your consent at any time where We are relying on it to process your Personal Information. Withdrawing your consent does not affect the lawfulness of Our processing of your Personal Information prior to withdrawing."
                                                            )
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "If You wish to exercise these rights as aforementioned, please inform and contact Us via Our Platform, including the Website or send a request to ",
                                                        i.a.createElement("a", { href: "mailto:support@gamezone.io" }, "support@gamezone.io"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Please also be noted that there are some limitations when You wish to exercise any one of these individual rights. We may limit your individual rights in the following situations:"
                                                    ),
                                                    "(i) Where denial of access is required by laws;",
                                                    i.a.createElement("br", null),
                                                    "(ii) When granting access would have a negative impact on others' privacy;",
                                                    i.a.createElement("br", null),
                                                    "(iii) In order to protect Our rights and properties;",
                                                    i.a.createElement("br", null),
                                                    "(iv) Where the request burdensome.",
                                                    i.a.createElement("br", null),
                                                    i.a.createElement("br", null)
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "cross-border" },
                                                    i.a.createElement("b", null, "Cross Border Transfer of Personal Information"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "As a part of your use of and to ensure better and seamless delivery of the Services to You, We may store, process, analyse, transfer your Personal Information in location globally, including countries other than your home jurisdiction, and/or locations outside the Designated Countries where there may have data protections with less protection than the EU GDPR or the equivalent data protection laws."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Our Service and Platform contain the transmission of your Personal Information to or to be transferred to or to be processed outside of the country where You are located or outside the Designated Countries, it is not suggestible if your Personal Information is restrictive."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "However, if You wish to continue using Our Services outside the Designated Countries and your home locations, We will ensure that We will transfer your Personal Information only to country that has the required contractual provisions for transferring Personal Information in place with the third parties to which your Information is transferred, or to country where is approved by the EU authorities as providing an adequate level of data protection or enter into legal agreements ensuring an adequate level of data protection in the jurisdiction of the party receiving the information. In this manner, You hereby expressly consent to this transfer, and agree that We will not be responsible for any additional T&Cs, policies or any other guidelines implemented by any party receiving the information."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "limitations" },
                                                    i.a.createElement("b", null, "Limitation"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Our Services are not designed for the individuals who are under the age of 18 or under the legal age to provide consent under the applicable laws of country or jurisdiction where You are using Our Services or Platform. If You are not over 18 or of the legal age of your country, You will not provide any Personal Information to Us, or to engage in Our services. We reserve the right to access and verify any Personal Information collected from You. If We are aware that You are under 18 or under the legal age who already shared your Personal Information with Us, We will then discard such information and block your access to GAMEZONE Platform or Our website immediately."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We cannot guarantee that any losses, misuses, unauthorized accession, or alteration of your Personal Information will not occur. You hereby agree that You play a vital role in protecting your Personal Information, including your credentials."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "updates" },
                                                    i.a.createElement("b", null, "Updates or amendments to the Privacy Policy"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        'We will revise and update this Privacy Policy periodically, at Our sole discretion, and the most current version will be published on the Website or GAMEZONE Platform (as reflected in the "Last Revised" heading).'
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "In the event of any material change which may affect your usage on Our Services and Platform, We will notify You by means of a prominent notice in advance of such change coming into effect. A prominent notice may include sending through your email address or other communication channels You provide to Us or providing You with an in-application notice such as a banner or pop-up alerting You of the change on the website. We strongly encourage You to review this Privacy Policy actively. If You do not agree, either partially or wholly, the revised Privacy Policy, You should discontinue accessing or using Our Services. Your continued access to and use of Our Services after any changes to this Privacy Policy constitutes your consent to any changes and agree to continue using the Services."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        'Furthermore, We may provide You with the "just-in-time" disclosures or additional information about Our data collection process, purposes for processing, or other information with respect to collection of your personal information. The purpose of the just-in-time notification is to supplement or clarify Our privacy practice or provide You with additional choices about how We process your personal information.'
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    { id: "contact" },
                                                    i.a.createElement("b", null, "How to contact GAMEZONE"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "For any questions regarding this Privacy Policy, your Personal Information collected or proceeded by Us, or in case You would like to exercise one of your legal privacy rights as stipulated in Clause 11, please submit your requests to ",
                                                        i.a.createElement("a", { href: "mailto:support@gamezone.io" }, "support@gamezone.io"),
                                                        " and visit Our website at ",
                                                        i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/"),
                                                        "."
                                                    )
                                                )
                                            ),
                                            i.a.createElement(
                                                "a",
                                                {
                                                    href: "#nav",
                                                    className: "top",
                                                    title: "Scroll to navigation",
                                                    onClick: function (e) {
                                                        return (function (e) {
                                                            e.preventDefault(), ke("html,body").animate({ scrollTop: ke("#nav").offset().top - 100 }, "slow");
                                                        })(e);
                                                    },
                                                },
                                                "\xbb"
                                            )
                                        )
                                    )
                                )
                            ),
                            i.a.createElement(Zt.a, { className: "mt-5" }, i.a.createElement(Ft, null))
                        )
                    );
                },
                Vt = function () {
                    return (
                        Object(r.useEffect)(function () {
                            return (
                                ke("body").addClass("no-bg"),
                                function () {
                                    ke("body").removeClass("no-bg");
                                }
                            );
                        }, []),
                        i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                                Zt.a,
                                null,
                                i.a.createElement(
                                    "div",
                                    { className: "w-100", style: { minHeight: "calc(100vh - 168px)" } },
                                    i.a.createElement(
                                        "div",
                                        { className: "py-5" },
                                        i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                                "div",
                                                { className: "text-center mb-5" },
                                                i.a.createElement("h1", { className: "p-tab-title" }, "GAMEPAD LIMITED"),
                                                i.a.createElement("h2", { className: "p-tab-title mb-4" }, "Cookies Policy of ", i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/")),
                                                i.a.createElement("small", null, "Last revised Date: 29", i.a.createElement("sup", null, "th"), " September 2021")
                                            ),
                                            i.a.createElement("h3", { className: "p-tab-title" }, "Cookies Information"),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "These Cookies Policy (herein referred as ",
                                                i.a.createElement("b", null, '"Cookies"'),
                                                ") govern the use and the utilization of ",
                                                i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/"),
                                                " website (herein referred as ",
                                                i.a.createElement("b", null, '"website"'),
                                                "), provided by GamePad Limited (herein referred to as ",
                                                i.a.createElement("b", null, '"GAMEZONE"'),
                                                ", ",
                                                i.a.createElement("b", null, '"We"'),
                                                ", ",
                                                i.a.createElement("b", null, '"Our"'),
                                                ", and ",
                                                i.a.createElement("b", null, '"Us"'),
                                                "), Cookies are small text files that are placed on your computer by the websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. The use of cookies is now standard for most websites. If you are uncomfortable with the use of cookies, you can manage and control them through your browser, including removing cookies by deleting them from your 'browser history' when you leave the site. If you do not comfortable to the cookies utilization, please do not access or use the website and the Services."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                'In order to improve our Service to you, we will occasionally use a "cookie" and/or other similar files or programs which may place certain information on your computer\'s hard drive when you visit our website. A cookie is a small amount of data that our web server sends to your web browser when you visit certain parts of our site. We may use cookies to:'
                                            ),
                                            i.a.createElement(
                                                "ul",
                                                null,
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    "allow us to recognise the PC you are using when you return to our website so that we can understand your interest in our website and tailor its content to match your interests (This type of cookie may be stored permanently on your PC but does not contain any information that can identify you personally.);"
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    "identify you after you have logged in by storing a temporary reference number in the cookie so that our web server can conduct a dialogue with you while simultaneously dealing with other User (Your browser keeps this type of cookie until you log off or close down your browser when these types of cookie are normally deleted. No other information is stored in this type of cookie.);"
                                                ),
                                                i.a.createElement("li", null, "allow you to carry information across pages of our site and avoid having to re-enter that information;"),
                                                i.a.createElement("li", null, "allow you access to stored information if you register for any of our on-line services;"),
                                                i.a.createElement("li", null, "enable us to produce statistical information (anonymous) which helps us to improve the structure and content of our website, to improve our Service;"),
                                                i.a.createElement("li", null, "enable us to evaluate the effectiveness of our advertising and promotions.")
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "By using GAMEZONE website or application you consent to the deployment of cookies. You can control and manage cookies using your browser (see below). Please note that removing or blocking cookies can impact your user experience and some functionality may no longer be available. Cookies do not enable us to gather personal information about you unless you give the information to our Service. Most Internet browser software allows the blocking of all cookies or enables you to receive a warning before a cookie is stored. For further information, please refer to your Internet browser software instructions or help screen."
                                            ),
                                            i.a.createElement("h3", { className: "p-tab-title" }, "Controlling Cookies by your browser"),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "Most browsers allow you to view, manage, delete and block cookies for a website. Be aware that if you delete all cookies then any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself requires placement of an opt out cookie on your device. Guidance on how to control cookies for common browsers is linked below."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("b", null, "Google Chrome"),
                                                i.a.createElement("br", null),
                                                i.a.createElement(
                                                    "a",
                                                    { href: "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en", target: "_blank" },
                                                    "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en"
                                                )
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("b", null, "Mozilla Firefox"),
                                                i.a.createElement("br", null),
                                                i.a.createElement(
                                                    "a",
                                                    {
                                                        href: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US",
                                                        target: "_blank",
                                                    },
                                                    "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                                                )
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("b", null, "Safari web and iOS"),
                                                i.a.createElement("br", null),
                                                i.a.createElement("a", { href: "https://support.apple.com/en-us/HT201265", target: "_blank" }, "https://support.apple.com/en-us/HT201265")
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("b", null, "Microsoft Internet Explorer"),
                                                i.a.createElement("br", null),
                                                i.a.createElement(
                                                    "a",
                                                    { href: "https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d", target: "_blank" },
                                                    "https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                                                )
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "Alternatively, information on deleting or controlling cookies is available at ",
                                                i.a.createElement("a", { href: "http://www.allaboutcookies.org", target: "_blank" }, "http://www.allaboutcookies.org"),
                                                "."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "For information on additional browsers and device type please see ",
                                                i.a.createElement("a", { href: "http://www.aboutcookies.org/", target: "_blank" }, "http://www.aboutcookies.org/"),
                                                " or ",
                                                i.a.createElement("a", { href: "http://www.cookiecentral.com/faq/", target: "_blank" }, "http://www.cookiecentral.com/faq/"),
                                                "."
                                            ),
                                            i.a.createElement("h3", null, "Type of Cookies"),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("u", null, "Strictly Necessary Cookies"),
                                                ": These cookies are essential to enable you to log in, navigate a website, and use its features or to provide a service requested by you. We will not need to obtain your consent in order to use these cookies."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("u", null, "Functionality Cookies"),
                                                ": These cookies allow the website to remember choices you make (such as your username, language, or the region you reside in) and provide enhanced, more personal features. The information these cookies collect remains anonymous, and they cannot track your browsing activity on other websites."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("u", null, "Performance cookies"),
                                                ": These cookies collect information about how you use a website, for example, which pages you go to most often, how much time you spend on a page, record difficulties you may experience while using the website such as error messages. All information collected by these cookies is aggregated and therefore anonymous. It is only used to improve the efficiency of the website."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                i.a.createElement("u", null, "Targeting Cookies or Advertising Cookies"),
                                                ": These cookies are used to deliver advertisements tailored to you and your interests specifically. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. These cookies remember that you have visited a website, and this information is shared with other organizations such as advertisers. Quite often targeting or advertising cookies will be linked to the sites' functionality provided by the other organizations."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "For any questions regarding this Cookies Policy, your Cookies management or if you would like to contact is about the cookies, please email ",
                                                i.a.createElement("a", { href: "mailto:support@gamezone.io" }, "support@gamezone.io"),
                                                " and visit Our website at ",
                                                i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/"),
                                                "."
                                            ),
                                            i.a.createElement(
                                                "p",
                                                null,
                                                "GAMEZONE reserves the right to amend its prevailing Cookies Policy at any time and will place any such amendments at ",
                                                i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/"),
                                                ". This Cookies Policy is not intended to, nor does it, create any contractual rights whatsoever or any other legal rights, nor does it create any obligations on GAMEZONE in respect of any other party or on behalf of any party."
                                            )
                                        )
                                    )
                                )
                            ),
                            i.a.createElement(Zt.a, { className: "mt-5" }, i.a.createElement(Ft, null))
                        )
                    );
                },
                Qt = function () {
                    return (
                        Object(r.useEffect)(function () {
                            return (
                                ke("body").addClass("no-bg"),
                                function () {
                                    ke("body").removeClass("no-bg");
                                }
                            );
                        }, []),
                        i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement(
                                Zt.a,
                                null,
                                i.a.createElement(
                                    "div",
                                    { className: "w-100", style: { minHeight: "calc(100vh - 168px)" } },
                                    i.a.createElement(
                                        "div",
                                        { className: "py-5" },
                                        i.a.createElement(
                                            "div",
                                            null,
                                            i.a.createElement(
                                                "div",
                                                { className: "text-center mb-5" },
                                                i.a.createElement("h1", { className: "p-tab-title" }, "GAMEPAD LIMITED"),
                                                i.a.createElement("h2", { className: "p-tab-title mb-4" }, "Terms and Conditions of ", i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/")),
                                                i.a.createElement("small", null, "Last revised Date: 29", i.a.createElement("sup", null, "st"), " September 2021")
                                            ),
                                            i.a.createElement(
                                                "ol",
                                                null,
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Introduction"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "These Terms and Conditions (herein referred to as ",
                                                        i.a.createElement("b", null, "\u201cTerms\u201d"),
                                                        ") govern the use and the conditions of ",
                                                        i.a.createElement("a", { href: "https://gamezone.io/" }, "https://gamezone.io/"),
                                                        " (herein referred as ",
                                                        i.a.createElement("b", null, "\u201cWebsite\u201d"),
                                                        "), and the Services provided by GamePad Limited (herein referred to as ",
                                                        i.a.createElement("b", null, "\u201cGAMEZONE\u201d"),
                                                        " or ",
                                                        i.a.createElement("b", null, "\u201cwe\u201d"),
                                                        " or ",
                                                        i.a.createElement("b", null, "\u201cus\u201d"),
                                                        " or ",
                                                        i.a.createElement("b", null, "\u201cours\u201d"),
                                                        ", which shall have the same meaning in these Terms), a company incorporated and registered under the laws of Republic of Seychelles. These Terms constitute a binding and enforceable legal contract between us and our Affiliate and subsidiaries worldwide and you, an end user of the Services (herein referred to as ",
                                                        i.a.createElement("b", null, "\u201cyou\u201d"),
                                                        " or ",
                                                        i.a.createElement("b", null, "\u201cuser\u201d"),
                                                        ") in relation to the Services. You and GAMEZONE are referred to separately as ",
                                                        i.a.createElement("b", null, "\u201cParty\u201d"),
                                                        " and collectively as ",
                                                        i.a.createElement("b", null, "\u201cParties\u201d"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "By accessing, registering, using, or clicking on the Services, and information made available by us via the Website, you hereby accept and agree to all the Terms set forth herein."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "You are strongly advised to carefully read these Terms as well as the provisions detailed in our Privacy Policy prior to using the Website and our Services. By using the Website and the Services in any capacity, you agree that: (i) You have read and familiarized yourself with these Terms; (ii) You understand these Terms; and (iii) You agree to be bound by these Terms when using the Website. If You do not agree to these Terms, please do not access or use the Website and the Services."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We reserve the right to modify or amend these Terms, the Website, or any content on either one of the platforms from time to time, including for security, legal, or regulatory reasons, as well as to reflect updates or changes to the Services or functionality of the Website. You are advised to check these Terms periodically to ensure that you are cognizant of the current versions and comply with them. Users of the Website and the Services are bound by these changes which will take immediate effect after the revised versions of these Terms have been published on the Website or the relevant mobile application. Through your continued use of or interaction with the Website, the Services, tools, and information made available on the Website, you hereby agree to be bound by the provisions highlighted in the subsequent versions."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We will provide a notification on the Website specifying that changes have been made to these Terms whenever they occur. By accepting the notification, you accept that we have provided you with sufficient notice of any changes. You should seek professional advice regarding any possible legal requirements you must comply with in relation to the use of the Website, the Service or the relevant tools provided by us or the Partners."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Definitions"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"ADAPAD"'),
                                                        " refers to the platform for Cardano Smart Chain Network, which is a platform for retail investment into tokens offered via IDO. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://adapad.io" }, "https://adapad.io/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"Affiliate"'),
                                                        " refers to in relation in any party, any other company which, directly or indirectly, (i) is controlled by that party, (ii) controls that party, or (iii) is under common control with that party, and in respect of us, shall also include any fund, limited partnership or other collective investment vehicle or other person which is managed or advised by us."
                                                    ),
                                                    i.a.createElement("p", null, i.a.createElement("b", null, '"AML"'), " refers to anti-money laundering."),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"Applicable Laws"'),
                                                        " refers to acts, statutes, regulations, ordinances, treaties, guidelines, and policies issued by governmental organizations or regulatory bodies, including, but not limited to, the governing law stipulated under Laws of the British Virgin Islands."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cGAMEZONE Platform\u201d"),
                                                        " refers to our Website, or platform for high-quality blockchain gaming projects that where the  Project is officially launched, and makes available its native GAMEZONE Tokens."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cGAMEZONE Token(s)\u201d"),
                                                        " refers to $GZONE Token, a blockchain-based token which is issued, stored, transferred, transacted, launched as a BEP-20 asset on the Binance Smart Chain Network. Users need to hold and Stake GAMEZONE Tokens to participate in any Services on the GAMEZONE Platform."
                                                    ),
                                                    i.a.createElement("p", null, i.a.createElement("b", null, '"CFT"'), " refers to Combating the Financing of Terrorism."),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"Confidential Information"'),
                                                        " refers to any non-public, proprietary information or documents of or related to the user or us (whether in writing, orally or by any other means) by or on behalf of the user to us and which if disclose in tangible or intangible form is marked confidential (including in visual, oral, or electronic form) relating to us or any other user that was previously an user, which is provided or disclosed through us (or to any employees or agents) in connection with the use or participate in the services."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"Content"'),
                                                        " refers to all content generated by us, including logos, identifying marks, images, illustrations, designs, icons, photographs, videos, text, any written or multimedia materials, services, advertisements, software, code, data, files, archives, folders, or available downloads on the GAMEZONE Platform."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"Cookies"'),
                                                        " refers to the small text files that are placed on your computer by the website that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owner of the site."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"CrossSwap"'),
                                                        " refers to the cross-chain swap designed to unify the trading service on one platform. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://crossswap.com/", target: "_blank" }, "https://crossswap.com/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"CrossWallet"'),
                                                        " refers to the non-custodian wallet service that holds any digital asset you prefer to hold, trade, or send, from tokens to NFTs, which it works seamlessly move between different blockchain and works on any device, either mobile or web. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://crosswallet.app/", target: "_blank" }, "https://crosswallet.app/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"ETHPAD"'),
                                                        " refers to the platform for Ethereum Smart Chain Network, which is a platform for retail investment into tokens offered via IDO. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://ethpad.network/", target: "_blank" }, "https://ethpad.network/"),
                                                        "."
                                                    ),
                                                    i.a.createElement("p", null, i.a.createElement("b", null, '"IGO(s)"'), " refers to Initial Game Offerings."),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cINO(s)\u201d"),
                                                        " refers to Initial Non-Fungible Token Offerings, which the GAMEZONE Platform\u2019s user may benefit from rarer items, more tokens, or more favorable ratio of item to tokens, which the details are provided on the Website."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"KCCPAD"'),
                                                        " refers to the platform for KuCoin Community Chain Network, which is a platform for retail investment into tokens offered via IDO. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://kccpad.io/", target: "_blank" }, "https://kccpad.io/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cKCCSwap\u201d"),
                                                        " refers to the decentralized exchange service for instantly swap token, crypto token, utility token with no requirement of account registration and the service provider does not hold your funds when you participate in the swap service, you have 100% ownership of your crypto. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://kccswap.io/", target: "_blank" }, "https://kccswap.io/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"NFTLaunch"'),
                                                        " refers to the platform for deflationary NFT Launchpad which is the first platform to offer zero gas wars, fair distribution and free NFT airdrops of new and upcoming NFT projects. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://nftlaunch.network/", target: "_blank" }, "https://nftlaunch.network/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '\u201cPartners"'),
                                                        " refer to us, BSCPAD, ETHPAD, KCCPAD, TRONPAD, ADAPAD, VELASPAD, NFTLaunch, CrossWallet, CrossSwap, KCCSwap, and WagyuSwap."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"Prohibited Jurisdictions"'),
                                                        " specifically refer to Albania, Barbados, Botswana, Burkina Faso, Cambodia, Democratic People\u2019s Republic of Korea, Haiti, Iran, Jamaica, Morocco, Myanmar (Burma), Nicaragua, Pakistan, Panama, Philippines, Senegal, South Sudan, Syria, Thailand, Uganda, Yemen, Zimbabwe, and the United States of America."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cProject\u201d"),
                                                        " refers to the game project being launched for Initial Game Offering (\u201cIGO\u201d) and Initial NFT Offerings (\u201cINO\u201d) event on GAMEZONE Platform."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cServices\u201d"),
                                                        " refer to the services provided to the users through the Website, which include the accessibility to the new games partnered with GAMEZONE as well as a qualifier to participate in IGOs and INOs, Staking services, and other relevant services available through the Platform, which may be subject to periodic revision."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cStaking or Stake\u201d"),
                                                        " refers to the staking or deposit service in which the users can delegate or deposit the user\u2019s GAMEZONE Token in exchange for opportunities GAMEZONE offers as stipulated on the Website, which may be subject to periodic revision."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cTRONPAD\u201d"),
                                                        " refers to the platform for Tron Smart Chain Network, which is a platform for retail investment into tokens offered via IDO. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://tronpad.network/", target: "_blank" }, "https://tronpad.network/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cVELASPAD\u201d"),
                                                        " refers to the platform for Velas Chain Network, which is a platform for retail investment into tokens offered via IDO. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://velaspad.io/", target: "_blank" }, "https://velaspad.io/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, "\u201cWagyuSwap\u201d"),
                                                        " refers to the Decentralized Exchange build on Velas Blockchain, an entirely new blockchain adapted from Solana which guaranteed full EVM compatibility. Please find further details at ",
                                                        i.a.createElement("a", { href: "https://wagyuswap.app/", target: "_blank" }, "https://wagyuswap.app/"),
                                                        "."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        i.a.createElement("b", null, '"Wallet(s)"'),
                                                        " refers to a digital wallet which must be compatible with the Binance Smart Chain Network, such as MetaMask or Trust wallet."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "General Provisions"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Contractual Relationship",
                                                            i.a.createElement("p", null, "These Terms constitute a valid and binding agreement between the Parties. The binding obligations stipulated in these Terms are enforceable.")
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Revision and Amendments",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We reserve the right to revise, amend, or update any clauses and provisions stipulated in these Terms in our sole discretion at any time. We may notify the revision or amendment of such clauses or provisions by updating these Terms and specify the 'Last Revised Date' displayed on a page of Terms and Conditions. Any revisions and updates on these Terms will be automatically effective upon their publication on the Platform, which includes the Website. Therefore, your continuity of accessing or using the GAMEZONE Platform, and/or Services will be deemed that you agree to have read, understood, and accepted all revised terms and provisions. If you do not agree on any revised or updated terms and provisions, you should immediately stop accessing the Website or using the Services. You are encouraged to frequently and carefully review these Terms to ensure that you understand these Terms."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Privacy Policy",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You acknowledge and confirm that you have read, understood, and agreed to provisions stipulated in the Website\u2019s Privacy Policy, which will explain how we treat your information and protect your privacy when accessing or using the GAMEZONE Platform."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "By using GAMEZONE Platform, you hereby agree that we may collect, use your information, and anonymised data pertaining to your use of the Services for analytics, trends\u2019 identification, and purpose of statistics to further enhance the effectiveness and efficiency of the Services."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You hereby expressly authorise us to disclose any and all information relating to you in our possession to any law enforcement or government officials upon the request by the court order."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Links to and from the Website",
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "You may, through hypertext or other computer links, gain access form the Website to websites operated or made available, or otherwise licensed by persons other than us (",
                                                                    i.a.createElement("b", null, "\u201cThird Party Services\u201d"),
                                                                    "). Such links are provided for your convenience."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "A link from Third Party Services does not mean that we endorse or approves the content on such website or does not mean that we are an operator of that website. You understand that you are solely responsible for determining the extent to which you may use or rely upon any content at any other Third Party Services websites which you have accessed from the Website. We have no control over the content of these sites or resources and accept no liability for them or for any loss or damage that may arise from your use of them."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "We assume no responsibility for the use of, or inability to use, any Third Party Services\u2019 software, other materials, or contents posted and/or uploaded on such website and we will have no liability whatsoever to any person or entity for any inaccuracy or incompleteness of such third-party content. All intellectual property rights in and to Third Party Services are property of the respective third parties."
                                                                )
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Disclaimer for Accessibility of the Website and the Services",
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "The Website merely facilitates the user\u2019s accessibility to the Project and does not provide you with any warranty or representation whatsoever regarding its quality, value, specification, fitness for the purpose, completeness or accuracy of its technology or infrastructure of such Project."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "We will make all commercially reasonable attempts to facilitate information about the Project on the GAMEZONE Platform. However, you hereby acknowledge that we do not guarantee the accuracy, timeliness, or completeness of such information, and do not provide any warranty in connection with your use or reliance on such information. You agree that your use of the Project information will be at all your own risk. We will not be liable to you in any manner for the termination, interruption, delay, or inaccuracy of any Project information launched on the GAMEZONE Platform."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "To the extent permitted by applicable laws, the Website and our Services are provided on an \u2018AS IS\u2019 and \u2018AS AVAILABLE\u2019 basis. We do not warrant that the features, and functions contained on the Website and the Services will satisfy your preferences you hereby agree and acknowledge that your access and use of the Website and the Services are at your own risk, and you will be liable for any responsibility, consequences that may arise out of or in connection with the usage or accessibility of the Website and the Services. You expressly agree that we will have absolutely no liability in this regard."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "You hereby agree and acknowledge that the Website may contain links to a third-party website or services that are not owned or even controlled by us, thus we will hold no responsibility for the content or services, goods, or activities provided by such third-party website. You further agree that we have no liability directly or indirectly for any damage, loss, or consequence arising out of or in connection with the usage or reliance of any content, material, services available through the third-party website."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "We reserve the right to limit the availability of the Website to any person, geographic area, or jurisdiction we so desire and/or terminate your access to and use of the Website and the Services, at any time and in our sole discretion."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "We may, at our sole discretion, impose limits or restrictions on the use you make of the Website. Further, for commercial, security, technical, maintenance, legal or regulatory reasons, or due to any breach of these Terms, we may limit your access to the Website and the Services at any time and without notice to you."
                                                                )
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Information",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "You acknowledge that you are solely responsible for any submissions of all contents, remarks, suggestions, ideas, materials, feedbacks, or other information, including bug reports in relation to the Services provided through the Website including any submission to our social media platforms such as Twitter and Telegram, and you, not us, have full responsibility for such submissions, including their accuracy, legality, reliability, appropriateness, originality, and copyright. We shall reply on the information you have provided and will not verify it  foregoing, we have the right to refuse to post, remove, edit, or abridge any submission for any reason and to freely use, copy, disclose, publish, display, or exploit such submission as we deem necessary without any payment of royalty, acknowledgement prior to consent, we may retain copies of all information materials relevant to the Service."
                                                            )
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Intellectual Property"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "All present and future copyright, title, interests in and to the Services, registered and unregistered trademarks, design rights, unregistered designs, database rights and all other present and future intellectual property rights and rights in the nature of intellectual property rights that exist in or in relation to the use and access of the Website and Services are owned by or otherwise licensed to us. Subject to your compliance with these Terms, we grant you a non-exclusive, non-sub license, and any limited license to merely use or access the Website and the Services in the permitted hereunder."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Except as expressly stated in these Terms, nothing in these Terms should be construed as conferring any right in or license to us or any other third party\u2019s intellectual rights."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "If and to the extent that any such intellectual property rights are vested in you by operation of law or otherwise, you agree to do any and all such acts and execute any and all such documents as we may reasonably request in order to assign such intellectual property rights back to us."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You agree and acknowledge that all Website content must not be copied or reproduced, modified, redistributed, used, created for derivative works, or otherwise dealt with for any other reason without being granted a written consent from us."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Third parties participating on the Website may permit us to utilise trademarks, copyrighted material, and other Intellectual Property associated with their businesses. We will not warrant or represent that the content of the Website does not infringe the rights of any third party."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Participation in the our Services"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "By using or accessing the Services, you represent and warrant that you understand that there are inherent risks associated with digital currencies, and the underlying technologies, including, without limitation, cryptography and blockchain, and you agree that we, the community, and open-source code contributors are not responsible for any loss or damage associated with these risks."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You specifically acknowledge and agree to follow the conditions stipulate herein the Website, such as tier-based system, Staking/Unstaking and other conditions which we may update from time to time."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Identity Verification through KYC/AML/CFT Process"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "As a software development company, we have no role in enforcing KYC/AML/CFT by default, however, we have mandatory requirements for KYC/AML/CFT identification verification tools for the Project fundraising companies through us to enforce on users. We are implementing KYC/AML/CFT tools into our launchpad through ",
                                                            i.a.createElement("a", { href: "https://kycaid.com/", target: "_blank" }, "https://kycaid.com/"),
                                                            "."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "The use of KYC/AML/CFT tools on us by the Project fundraising companies using the Services on the GAMEZONE Platform is not the discretion of said entitles, and they must require you to complete KYC/AML/CFT verification process before participating in any Projects."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Although we make no warranty as to the merit, legality, or juridical nature of any Project, we nonetheless understand the need of the Project to require KYC/AML/CFT verification on its blockchain games users. Therefore, we reserve the right:",
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "at any time, to ask for your personal information, name-surname, birthday,-e- mail address, nationality, location, government identification number (identification card/passport number and date of identification card/passport issuing), telegram username,  Wallet address, and any KYC/AML/CFT documentation with the liveness test that it deems necessary to determine the identity and location of an user, and reserve the right to restrict Service and payment until the user\u2019s identity is sufficiently determined;"
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "The liveness test shall require you to take a photo of your government identification with your phone or camera. and then take a photo of (i.e., a selfie of your face) holding your ID document and a piece of paper you wrote on next to your face (not covering your face), in which you shall write down the (1) Game Zone, (2) the current date, and (3) the last 4 characters of your Wallet address\u201d. If you have any questions, please find detail about KYC/AML/CFT process here: ",
                                                                    i.a.createElement(
                                                                        "a",
                                                                        { href: "https://bscpad.medium.com/bscpad-kyc-process-16e6a5557138", target: "_blank" },
                                                                        "https://bscpad.medium.com/bscpad-kyc-process-16e6a5557138"
                                                                    ),
                                                                    "."
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "to share the submitted KYC/AML/CFT information and documentation to the third parties to verify the authenticity of the submitted information, and the end user (you) giving the consent to share such information by using the Services; and"
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "to reject the use of the Services if we have the reasonable ground to believe that they are found to be in violation of relevant and applicable AML/CFT laws and regulations, and to cooperate with the competent authorities or any investigation when and if necessary, upon the valid request by the court order."
                                                                )
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We expressly prohibit and reject the use of the Service for any form of illicit activity, including money laundering, terrorist financing or trade sanctions violations, consistent with various jurisdictions\u2019 laws, regulations and norms. To that end, the Services are not offered to individuals or entities on any Politically Exposed Persons (\u201cPEP\u201d) lists, or subject to any United States, European Union, or other global sanctions or watch lists. By using the Services, you represent that you are not on any of such lists."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You fully acknowledge that your information and KYC/AML/CFT documentation may be disclosed to government agencies or regulators upon a valid request of the court order. Once you have decided to participate in any Project and start staking your GAMEZONE Token, you must ensure that all information provided to us is complete, accurate, and updated in a timely manner. We will rely on the information you provided and should there be any reasonable grounds for us to believe that the partial or the whole of your information provided to us is incomplete, or incorrect, or outdated, we reserve the right to send you a notice to demand correction, or to delete such information directly, and, as the case may be, to disable you to access to all or part of the Website and the Services."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "If we have a reasonable ground to believe that any user transacts or use the Services by using digital currencies derived from any suspicious illegal activities, we shall be entitled to block your accessibility as necessary. We will hold no liability to such users for any damage, or loss arising out of or in connection with this manner herein. Please note that any attempt to circumvent our measures set out in this Clause 6 will also result in a similar action."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Misuse of the Website"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "In the event of any misuse and/or abuse of the Website or breach any provision in these Terms, we reserve the right to block your access to the Website and other Services until the matter is solved."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Use of the Website for transmission, publication or storage of any material on or via the Website which is in violation of any applicable laws or regulations or any third-party's rights is strictly prohibited, including but not limited to the use of the Website or the transmission, distribution, publication or storage any material on or via the Website in a matter or for the purpose which infringes copyright, trademark, trade secret or other intellectual property rights, is obscene or harmful to minors or constitutes an illegal act or harassment, is libellous or defamatory, violates any privacy or data protections laws, is fraudulent or breaches any exchange control laws."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Representations and Warranties"),
                                                    i.a.createElement("p", null, "You hereby agree to make the following representations and warranties by accessing to the Website and/or using the Services:"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement("li", null, "You have full capacity and authority under the applicable laws to agree and bind yourself to these Terms."),
                                                        i.a.createElement("li", null, "You are eighteen years of age or older."),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You are not a citizen or a resident of the Prohibited Jurisdictions, and you do not have any relevant connection with any of the Prohibited Jurisdictions."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You are aware and agree to comply with all applicable domestic and international laws, statutes, ordinances, and regulations applicable to your use of the Website and the Services. Your use of the Website and the Services are not for any unlawful or illegal purposes, including but not limited to the usage against the copyright laws and, AML/CFT laws."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You are the exclusive owner of GAMEZONE Token and your other cryptocurrencies held in your Wallet. The tokens maintained in your Wallets are not and will not be derived from money laundering, terrorist financing, fraud, or any other illegal activities under any applicable laws. You further hereby acknowledge and agree that we will not be responsible for actions taken by you that result in the loss or destruction of the value of the tokens and rewards you hold in the Wallet."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You validly undertake any action or enter into any transaction with regard to these Terms. You are solely responsible for the use of the Website and the Services for all activities, or transactions that occur on or through your user account on GAMEZONE Platform."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You will provide only accurate, complete, and up-to-date information and documents, if any, for the purposes of accessing or using or participating our Services on the GAMEZONE Platform. You will further agree to put your effort to ensure that the confidentiality of your personal or credential information, including your Wallet address is restricted, and safely maintained to your device you use to access the Website."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You acknowledged and agreed that if you lose access to the Wallet that you connected with the GAMEZONE Platform, we will not be able to help you recover the loss, or transfer of Project\u2019s tokens or any GAMEZONE Token back to your Wallet. It will be your solely responsibility to manage your cryptocurrencies stored in your Wallet, and your private key."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You will be responsible for obtaining the data network access necessary to use the Website. Your network's data and rates and fees may apply if you access or use the Website from a wireless-enabled device, and you will be responsible for such rates and fees."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You understand and are aware of the risks associated with accessing or using or participating in the Services, and you will be fully liable at your own risk."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You are aware that you are subject to tax regulations in the jurisdiction you reside in and will be fully responsible for filling or reporting any taxes and paying them as required by the Applicable Laws. We will not be liable to compensate you for your tax obligations or advise you in relation to your tax obligations. Any uncertainties and unpredictable matters in tax legislation with respect to any tokens may expose you to any unknown or unforeseeable tax implications associated with your holding of tokens and the use the Services for which we will have no liability. Moreover, you will not hold us liable for any expenses or losses resulting from unknown or unforeseeable tax implications."
                                                        ),
                                                        i.a.createElement("li", null, "You will not breach any of the provisions stipulated in these Terms, the Privacy Policy, or any Applicable Laws in any relevant jurisdictions."),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You will not use the Website and the Services in one of any following manners, except as expressly permitted in these Terms, or at our discretion.",
                                                            i.a.createElement("p", null, "You will not:"),
                                                            i.a.createElement("p", null, "(a) infringe any propriety rights, including but not limited to copyrights, patents, trademarks, or trade secrets of us."),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "(b) use the Website or the Services to transmit any data or send or upload any material or content that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programmes or similar computer code designed to adversely affect the operation of the Website and/or the Services."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "(c) expressly or impliedly, use the Website and the Services in the manner that is deemed unlawful, offensive, malicious, threatening, libellous, defamatory, obscene, or otherwise objectionable or violates these Terms, or any other party's intellectual property."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "(d) modify, make any back-up or archival copies of the Platform or any part thereof including disassembling, and you will also not adapt, hack the Website or modify another website to falsely imply that it is associated with the Website falsely."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "(e) crawl, scrape, or otherwise cache any content from the Website, and you agree not to use any automated data collection methods, data mining, robots, or scraping or any data gathering methods of any kind on the Website."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "(f) use the Website or any of its contents for advertising or soliciting, for any other commercial, political, or religious purpose, or to compete, either directly or indirectly with us."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "You will defend, indemnify, and not hold us, the Partners, our Affiliate, each of our respective employees, officers, directors, and representatives liable to and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorney's fees), arising out of or relating to any third-party claim concerning these Terms, or your use of our Services in violation of these Terms and Applicable Laws."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Each of the user\u2019s Representations and warranties under this Clause 8 shall survive and continue to remain in full force and effect after the termination and/or the expiration of these Terms."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Risk Disclosure"),
                                                    i.a.createElement("p", null, "By accessing the Website or using or participating in our Services, you expressly acknowledge and assume the following risks:"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Risk of loss in value",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Tokens or any digital currencies are not issued by any central banks or national, supra-national, or quasi-national organizations. They are also not backed by any hard assets or other credit. The value of tokens or any digital currencies is affected by several factors, including but not limited to, the total number of tokens or any digital currencies in existence, the continued willingness of market participants to exchange government-issued currency for tokens or digital currencies, purchasers' expectations with respect to the rate of inflation of fiat currencies, purchasers' expectations with respect to the rate of deflation of cryptocurrencies, interest rates, currency exchange rates, cyber theft of cryptocurrencies from online digital wallet providers, or news of such theft from such providers or individuals' digital wallets, investment and trading activities of large investors, monetary policies of the governments, trade restrictions, currency devaluations and revaluations, regulatory measures, the global or regional political, economic or financial events and situations. Thus, all these factors will affect the value of tokens or digital currencies, which may result in the permanent partial or total loss of the value of a particular tokens or digital currencies, a particular tokens or digital currency. No one will be obliged to guarantee the liquidity or the market price of any of the GAMEZONE Token or digital currencies maintained into your Wallets. The volatility and unpredictability of the value of tokens or digital currencies relative to the government-issued currency may result in a significant loss over a short period of time."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "The regulatory regime governing tokens or digital currencies",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "The regulatory framework relating to tokens or digital currencies remains unsettled, and any laws, regulations, or guidelines may be significantly revised and amended which will materially and adversely affect the value of tokens or digital currencies and your services on Website or the GAMEZONE Platform as follows."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Technical and system failure affected the obligations stipulated in these Terms we may experience system failures, unplanned interruptions in the Binance Smart Chain Network or the Services, hardware or software defects, security breaches or other causes that could adversely affect our infrastructure network, which includes the Website and the GAMEZONE Platform.",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We are unable to anticipate the occurrence of hacks, cyber-attacks, mining attacks, including but not limited to double-spend attacks, majority mining power attacks and selfish-mining attacks, distributed denial of service attacks or errors, vulnerabilities or defects on the Website, GAMEZONE Token, users' Wallets or any technology, including but not limited to smart contract technology. Also, we are unable to detect the hacks as mentioned earlier, mining attacks, cyber-attacks, distributed denials of service errors vulnerabilities, or defects in a timely manner and does not have sufficient resources to efficiently cope with multiple service incidents happening simultaneously or in rapid succession."
                                                            ),
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "In addition, our network or the services could be disrupted by numerous events, including natural disasters, equipment breakdown, network connectivity downtime, power losses, or even intentional disruptions of our services, such as disruptions caused by software viruses or attacks by unauthorized users, some of which are beyond the our control. Although we have taken steps and used our best endeavour against malicious attacks on our appliances or our infrastructure, which are critical for the maintenance of the GAMEZONE Platform and the Services, there can be no assurance that cyber-attacks, such as distributed denials of the Service, will not be attempted in the future, and that our enhanced security measures will be effective. Any significant breach of our security measures or other disruptions resulting in a compromise of the usability, stability and security of our network or the services, including the GAMEZONE Platform, may adversely affect GAMEZONE Token."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We will have no liability for any delay, error, interruption, or failure to perform any obligation under these Terms where the delay or failure is directly or indirectly resulting from any causes beyond our control, including, but not limited to:",
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement("li", null, "Acts of God, nature, court or government;"),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "Failure or interruption of public or private telecommunication networks, the failure of Binance Smart Chain Network, communication channels or information systems;"
                                                                ),
                                                                i.a.createElement("li", null, "Acts or omission of a party for whom we are not responsible;"),
                                                                i.a.createElement("li", null, "Delay, failure, or interruption in, or unavailability of, third-party services; and"),
                                                                i.a.createElement("li", null, "Strikes, lockouts, labour disputes, wars, terrorist acts and riots.")
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE SERVICES AND THE WEBSITE IS COMPLETELY AT YOUR OWN RISK. THIS CLAUSE IS NOT EXHAUSTIVE AND DOES NOT DISCLOSE ALL THE RISKS ASSOCIATED WITH DIGITAL CURRENCIES AND THE USE OF SERVICES. THEREFORE, YOU ARE RECOMMENDED TO CAREFULLY CONSIDER WHETHER SUCH USE IS SUITABLE FOR YOU IN LIGHT OF YOUR JUDGEMENT, CIRCUMSTANCES, AND FINANCIAL POSITION."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Limitation of Liability"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "NOTWITHSTANDING ANY PROVISIONS WITHIN THESE TERMS, IN NO EVENT WILL US, OUR PARTNERS, OUR AFFILIATE, OR OUR EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE TO THE USER FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, INDIRECT, OR CONSEQUENTIAL DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR OTHER SUCH WEBSITES, OR ANY OTHER SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE, OR OTHER SUCH WEBSITES, INCLUDING, BUT NOT LIMITED TO, LOST REVENUE, LOST PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, LOSS OF YOUR CREDENTIAL INFORMATION, LOSS OR INTERRUPTION OF TECHNOLOGY, LOSS OF USE OF SERVICE OR EQUIPMENT, EVEN IF THE USER WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND WHETHER ARISING UNDER A THEORY OF CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE. WE WILL ALSO HAVE NO LIABILITY FOR ANY EMERGENCY AND/OR UNFORESEEABLE INCIDENTS RELATED TO YOUR USE OF THE SERVICES ON THE GAMEZONE PLATFORM SUCH AS STOLEN PRIVATE KEY, OR HACKED ACCOUNTS."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Except as expressly provided in these Terms, and to the maximum extent permitted by any Applicable Laws, we disclaim all other representations or warranties, express or implied, made to you, your affiliates, or any other person, including, without limitation, any warranties regarding the quality, suitability, merchantability, fitness for a particular purpose or otherwise (regardless of any course of dealing, custom or usage of trade) of any service provided incidental to the Services under these Terms."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "In no event will our aggregate liability for any loss or damage that arises in connection with the Services exceed the purchase amount you paid to participate in the Service, if any, during a twelve (12) month period immediately preceding the event that gave rise to the claim for liability. The preceding limitations of liability will apply to the fullest actual amount you paid to participate in or access in the Service."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Except as expressly provided in these Terms, and to the fullest extent permitted by any Applicable Laws, us, our Affiliate, and our related parties each disclaim all liability to you for any loss or damage arising out of or due to:",
                                                            i.a.createElement(
                                                                "ol",
                                                                null,
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "your use of, inability to use, or availability or unavailability of the Services, including any Third Party Services made available through the Services;"
                                                                ),
                                                                i.a.createElement(
                                                                    "li",
                                                                    null,
                                                                    "the occurrence or existence of any defect, interruption, deletion of files, delays in the operation or transmission of information to, from, or through the Services, communications failure, theft, destruction or unauthorised access to our records, programs, services, server, or other infrastructure relating to the Services;"
                                                                ),
                                                                i.a.createElement("li", null, "the Services being infected with any malicious code or viruses; or"),
                                                                i.a.createElement("li", null, "the failure of the Services to remain operational for any period of time.")
                                                            )
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Indemnification"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "You irrevocably undertake the responsibility of fully indemnifying and holding harmless each of us, our Partners, our Affiliate, licensors, shareholders, officers, directors, managers, employees, and agents from and against any and all losses, claims, actions, proceedings, damages, demands, judgements, sums, liabilities, damages, costs, charges and expenses, including, but not limited to, any reasonable attorney's fees or penalties imposed by any regulatory authority, and reimbursements arising out of or related to the following situations:"
                                                    ),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement("li", null, "Your use or any person using the Services on your behalf or participation in accordance with the Services on the Website or the GAMEZONE Platform;"),
                                                        i.a.createElement("li", null, "Your breach of or our enforcement of these Terms;"),
                                                        i.a.createElement("li", null, "Any violations of Applicable Laws, regulation, or rights of any third-party during your use or participate in the Service.")
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "If you are obligated to indemnify us, our Affiliate, shareholders, licensors, officers, directors, managers, employees, and agents, we will have the right, at our sole discretion, to control any action or proceeding and to determine whether we wish to proceed, or settle, and if so, on what terms or provisions."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Termination"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "These Terms will be immediately terminated by discontinuing your use of or participate in the Services and you agree to terminate the accessibility on the GAMEZONE Platform."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "These Terms can be suspended or terminated without a notice from us if there is a reasonable ground for us to believe that you have breached any of the terms or provisions stipulated in these Terms, or if you do not comply with these Terms."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "The termination of these Terms will not prevent us from seeking remedies from you in the case where you have breached any terms or provisions of these term before such termination. We will not be liable to you or to any third party for any termination, suspension, or modification of your access to the Services."
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Any ongoing obligation to you as well as the provisions regarding (i) Intellectual Property, (ii) Indemnification, (iii) Limitation of Liability, and (iv) any other provisions designed to survive, will survive any termination or expiration of these Terms for any reason."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "No Financial and Legal Advice"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "We are merely a technology platform, and is not your broker, intermediary, agent, or legal advisor and has no fiduciary relationship or obligation to you in connection with any decisions or activities effected by you using the Website or the Services. No communication or information provided to you by us is intended as or will be considered or construed as, the solicitation of an offer to buy, the investment advice, financial advice, legal advice, or any other sort of advice. All Services, transactions, and Investments will be executed automatically based on the parameters of your consideration. You will be solely responsible for determining whether any Services, or investments are suitable and match your interests according to your judgement, objectives, circumstances, and risk tolerance. You will be solely responsible for any losses or liabilities therefrom."
                                                    ),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Before executing any transactions, purchasing GAMEZONE Token, Project\u2019s token, in-game assets and NFTs on the GAMEZONE Platform, you should consult with your independent financial, legal, or tax professionals. We will not be liable for the decisions you make to access and purchase through us."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Notice/Announcement"),
                                                    i.a.createElement(
                                                        "p",
                                                        null,
                                                        "Any notice, requests, demands, and determinations for us under these Terms (other than routine operational communications) shall be sent to ",
                                                        i.a.createElement("a", { href: "mailto:support@gamezone.io" }, "support@gamezone.io"),
                                                        " at Website."
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Governing Law, Resolving Disputes, Arbitration and Class Action Waiver"),
                                                    i.a.createElement("p", null, "PLEASE READ THIS SECTION CAREFULLY AS IT INVOLVES A WAIVER OF CERTAIN RIGHTS TO BRING LEGAL PROCEEDINGS, INCLUDING A CLASS ACTION."),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Notice of Claim and Dispute Resolution Period",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Please contact us first. We will seek to address your concerns without resorting to formal legal proceedings whenever possible. If you have a dispute with the Company, you should contact us, and a case number will be assigned. We will attempt to resolve your dispute internally as soon as possible. The Parties will agree to negotiate in good faith to resolve the dispute and discussions will remain confidential and subject to applicable laws protecting settlement discussions from use as evidence in any legal proceeding."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Agreement to Arbitrate",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Parties agree that subject to Clause 15.1 above, any dispute, claim, or controversy between Parties that arises in connection with, or relating in any way, to these Terms, or to your relationship with us as an user of the Services (whether by contract, tort, statute, fraud, misrepresentation, or any other legal theory, and whether the claims arise during or after the termination of these Terms) will be determined by a mandatory final and binding individual arbitration rather than a class action, except as set forth below under Exceptions to the Agreement to Arbitrate. The Parties further agree that the arbitrator will have the exclusive power to rule on his or her jurisdiction, including, without limitation, any objections with respect to the existence, scope, or validity of the Agreement to Arbitrate, or to the arbitrability of any claim or counterclaim. Arbitration is more informal than a lawsuit in court. THERE IS NO JUDGE OR JURY IN ARBITRATION, AND COURT REVIEW OF AN ARBITRATION AWARD IS LIMITED. There may be more limited discovery than in court. The arbitrator must follow this agreement and can award the same damages and relief as a court, including, if applicable, attorney fees, except the arbitrator may not award declaratory or injunctive relief benefiting anyone but the parties to the arbitration. The arbitration provisions set forth in Clause 15 will survive termination of these Terms."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Arbitration Rules",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                'Any dispute arising out of or in connection with these Terms including any question regarding its existence, validity or termination, shall be referred to and finally resolved by arbitration administered by the Singapore International Arbitration Centre (\u201cSIAC\u201d) in accordance with the Arbitration Rules of the Singapore International Arbitration Centre ("SIAC Rules") for the time being in force, which rules are deemed to be incorporated by reference in these Terms. The seat of the arbitration shall be Singapore. The Tribunal shall consist of one arbitrator. The language of the arbitration shall be English.'
                                                            )
                                                        ),
                                                        i.a.createElement("li", null, "Governing Law/Jurisdiction", i.a.createElement("p", null, "The governing law of the arbitration will be that of the Republic of Seychelles.")),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Confidentiality",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "The Parties agree that the arbitration will be kept confidential. The existence of the arbitration, any non-public information provided in the arbitration, and any submissions, orders or awards made in the arbitration will not be disclosed to any non-parties except the tribunal, the parties, their counsel, experts, witnesses, accountants and auditors, insurers and reinsurers, and any other person necessary to facilitate the arbitration. Notwithstanding the preceding, a Party may disclose information to the extent that disclosure may be required to fulfil a legal duty, protect, or pursue a legal right, or enforce or challenge an award in bona fide legal proceedings. This confidentiality provision will survive the termination of these Terms and any arbitration brought under these Terms."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Class Action Waiver",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "The Parties agree that any claims relevant to these Terms, or your relationship with us will be brought against the other party in arbitration on an individual basis only and not as a plaintiff or class member in a purported class or representative action. The Parties further agree to waive any right for such claims to be brought, heard, or arbitrated as a class, collective, representative, or private attorney general action, to the extent permissible by applicable laws. Combining or consolidating individual arbitrations into a single arbitration is not permitted without the consent of all parties involved."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "We reserve the right to update, modify, revise, suspend, or make future changes to Clause 15.2 regarding the Parties' Agreement to Arbitrate, subject to applicable laws. You hereby consent and agree that it is your responsibility to ensure that your understanding of this Clause is up to date. Subject to applicable laws, your continued use of your GAMEZONE Platform\u2019s account will be interpreted as your acceptance of any modifications to Clause 15 regarding the Parties' Agreement to Arbitrate. You agree that if you object to the modifications to Clause 15, we may block access to your account pending closure of your account. In such circumstances, these Terms prior to modification will remain in full force and affect the pending closure of your accessibility."
                                                        )
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "li",
                                                    null,
                                                    i.a.createElement("b", null, "Miscellaneous"),
                                                    i.a.createElement(
                                                        "ol",
                                                        null,
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Severability",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "If any of the provisions in these Terms is found by a court of competent authority to be invalid, void, unlawful or unenforceable under any applicable laws, such unenforceability or invalidity will not render these Terms unenforceable or invalid as a whole, and such provisions will be deleted without affecting the remaining provisions herein."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Variation of Terms",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We have the right to revise these Terms at our sole discretion at any time, and by using the Website or other GAMEZONE\u2019s platforms, you will be expected to review such Terms regularly to ensure that you understand all provisions stipulated in these Terms."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Assignment",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We will be allowed to assign, transfer, and subcontract our rights and/or obligations under these Terms without the need to provide you any notification or acquire your consent. Nevertheless, you will not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Entire Agreement",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "These Terms, including the Privacy Policy and any rules contained on the Website or other GAMEZONE\u2019s platforms, constitute the sole and entire agreement between Parties with respect to your use of the GAMEZONE Platform, and supersedes other prior or contemporaneous negotiations, discussions, agreements, understandings, representations, and warranties, both written and oral, between Parties with respect to such subject matter."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "No Third-Party Rights",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "Nothing in these Terms will be deemed to create any rights to any creditors or other persons, not a party hereto. Moreover, these Terms will not be construed, in any respect, to be a contract, in whole or in part, for the benefit of any third parties."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Clickwrap",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "We may deliver the Services through electronic means such as download links, graphical, Tools or other technologies for providing the Service for users. The user interfaces to such electronic means may require that the users agree to these Terms by checking a box, clicking a button, or continuing with the Services, the user complying through such actions shall become a Party to these Terms. Such an action of acceptance shall be sufficient to bind the users to the terms and conditions herein these Terms."
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "li",
                                                            null,
                                                            "Waiver",
                                                            i.a.createElement(
                                                                "p",
                                                                null,
                                                                "The failure of one Party to require the performance of any provision will not affect that Party's right to require performance at any time thereafter. At the same time, the waiver of one Party to seek recovery for the other Party's violation of these Terms of any provisions of applicable terms will not constitute a waiver by that Party of any subsequent breach or violation by the other Party or of the provision itself."
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            i.a.createElement(Zt.a, { className: "mt-5" }, i.a.createElement(Ft, null))
                        )
                    );
                },
                $t = f[56][p.a.random(0, f[56].length - 1)];
            function Xt() {
                return (Xt = Object(Ye.a)(
                    Fe.a.mark(function e() {
                        var t, a;
                        return Fe.a.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (Yt = new ht.a($t)), (t = new Yt.eth.Contract(yt, h[56])), (e.prev = 2), (e.next = 5), t.methods.info().call();
                                        case 5:
                                            return (
                                                (a = e.sent),
                                                e.abrupt("return", {
                                                    tokenAddr: a[0],
                                                    tokenSymbol: a[1],
                                                    tokenDecimals: Number(a[2]),
                                                    stakerCount: Number(a[3]),
                                                    totalStakedAmount: Object(Je.BigNumber)(a[4]).dividedBy(Math.pow(10, 18)).toString(),
                                                    apyPercentage: Number(a[5]),
                                                    unstakePeriod: Number(a[6]),
                                                    isStakingPaused: a[7],
                                                    totalRewardsDistributed: Object(Je.BigNumber)(a[8]).dividedBy(Math.pow(10, 18)).toString(),
                                                })
                                            );
                                        case 9:
                                            return (
                                                (e.prev = 9),
                                                (e.t0 = e.catch(2)),
                                                console.log(e.t0),
                                                e.abrupt("return", { tokenAddr: 0, tokenSymbol: 0, tokenDecimals: 0, stakerCount: 0, totalStakedAmount: 0, apyPercentage: 0, unstakePeriod: 0, isStakingPaused: 0, totalRewardsDistributed: 0 })
                                            );
                                        case 13:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[2, 9]]
                        );
                    })
                )).apply(this, arguments);
            }
            var ea = function (e, t, a, n) {
                    var r = t,
                        i = setInterval(function () {
                            var t = new Date().getTime(),
                                a = r - t,
                                o = Math.floor(a / 864e5),
                                l = Math.floor((a % 864e5) / 36e5),
                                s = Math.floor((a % 36e5) / 6e4),
                                c = Math.floor((a % 6e4) / 1e3);
                            try {
                                (document.getElementById(e).innerHTML = o + "d " + l + "h " + s + "m " + c + "s "), a <= 0 && (n(i), clearInterval(i), (document.getElementById(e).innerHTML = "0d 0h 0m 0s"));
                            } catch (u) {}
                        }, 1e3);
                    a(i);
                },
                ta = function () {
                    var e = Object(s.b)(),
                        t = rt(),
                        a = (t.chainId, t.account),
                        n = Ce(),
                        o = Ie(),
                        l = Object(r.useState)("0"),
                        c = Object(tt.a)(l, 2),
                        u = c[0],
                        m = c[1],
                        d = Object(r.useState)("0"),
                        p = Object(tt.a)(d, 2),
                        b = (p[0], p[1]),
                        h = Object(r.useState)("0"),
                        E = Object(tt.a)(h, 2),
                        f = E[0],
                        y = E[1],
                        v = Object(r.useState)(0),
                        g = Object(tt.a)(v, 2),
                        N = g[0],
                        w = g[1],
                        T = Le(),
                        _ = Ve();
                    Object(r.useEffect)(
                        function () {
                            o &&
                                a &&
                                o.getStakingInfoWallet().then(function (t) {
                                    m(t.stakedAmount), b(t.unstakedAmount), y(t.rewardAmount);
                                    var a = new Date().getTime();
                                    t.withdrawTimestamp > a && w(t.withdrawTimestamp), e({ type: F.GET_STAKING_WALLET_INFO, data: t });
                                });
                        },
                        [o, a, T, e, N, _]
                    );
                    var S = (function () {
                        var t = Object(Ye.a)(
                            Fe.a.mark(function t() {
                                return Fe.a.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                o &&
                                                    (e({ type: F.REQUEST_SUBMIT }),
                                                    o.stakingRewards(function (t) {
                                                        t.status === D && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_SUCCESS, message: "Stake rewards successfully" })),
                                                            t.status === M && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_FAILS, message: "Stake rewards fail" }));
                                                    }));
                                            case 1:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        );
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })();
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                            "div",
                            { className: "p-sidebar" },
                            i.a.createElement(
                                "div",
                                { className: "mb-3" },
                                i.a.createElement(
                                    "div",
                                    { className: "level-item bordered mb-4 mt-xl-3" },
                                    i.a.createElement(
                                        "div",
                                        { className: "bordered__inner bordered--double_angled bordered--bg_top" },
                                        i.a.createElement("div", { className: "level-item__title title title--grad mb-0" }, "Staked"),
                                        i.a.createElement("div", { className: "level__inner pb-4 pt-3" }, i.a.createElement("div", { className: "level-item__digit title" }, _e.formatNumberDownRoundWithExtractMax(u, 4))),
                                        i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                        i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                    ),
                                    i.a.createElement("div", { className: "bordered__icon bordered__icon--left" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })),
                                    i.a.createElement("div", { className: "bordered__icon bordered__icon--right" }, i.a.createElement("img", { src: "/images/bordered-lines-narrow.svg", alt: "" }))
                                )
                            ),
                            i.a.createElement(
                                "div",
                                { className: "level-item bordered" },
                                i.a.createElement(
                                    "div",
                                    { className: "bordered__inner bordered--double_angled bordered--bg_top" },
                                    i.a.createElement("div", { className: "level-item__title title title--grad mb-0" }, "Rewards"),
                                    i.a.createElement(
                                        "div",
                                        { className: "level__inner pb-4 pt-3" },
                                        i.a.createElement("div", { className: "level-item__digit title" }, _e.formatNumberDownRoundWithExtractMax(f, 4)),
                                        i.a.createElement(
                                            "div",
                                            { className: "px-4 mt-4 d-block w-100" },
                                            i.a.createElement(
                                                "div",
                                                { className: "d-flex align-items-center justify-content-center", style: { height: "40px" } },
                                                i.a.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        style: { minWidth: "180px" },
                                                        disabled: !n || 0 === parseFloat(f),
                                                        onClick: function () {
                                                            return S();
                                                        },
                                                        className: "btn btn--custom btn-oht bordered bordered--btn bordered--btn_no-angled py-2",
                                                    },
                                                    i.a.createElement("span", null, "Stake"),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                )
                                            ),
                                            i.a.createElement(
                                                "div",
                                                { className: "d-flex align-items-center justify-content-center mt-3", style: { height: "40px" } },
                                                i.a.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        style: { minWidth: "180px" },
                                                        disabled: !n || 0 === parseFloat(f),
                                                        onClick: function () {
                                                            o &&
                                                                (e({ type: F.REQUEST_SUBMIT }),
                                                                o.stakingExecuteWithdrawRewards(function (t) {
                                                                    t.status === W && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_SUCCESS, message: "Withdraw stake successfully" })),
                                                                        t.status === L && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_FAILS, message: "Withdraw stake fail" }));
                                                                }));
                                                        },
                                                        className: "btn btn--custom btn-oht bordered bordered--btn bordered--btn_no-angled py-2",
                                                    },
                                                    i.a.createElement("span", null, "Withdraw"),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                )
                                            )
                                        )
                                    ),
                                    i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                    i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                ),
                                i.a.createElement("div", { className: "bordered__icon bordered__icon--left" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })),
                                i.a.createElement("div", { className: "bordered__icon bordered__icon--right" }, i.a.createElement("img", { src: "/images/bordered-lines-narrow.svg", alt: "" }))
                            )
                        ),
                        i.a.createElement("div", { className: "p-sidebar-backdrop" })
                    );
                };
            var aa = function (e) {
                    var t = e.selectedTab,
                        a = e.children,
                        n = Object(s.b)(),
                        o = xe(),
                        l = Ve(),
                        c = Object(d.get)(o, "stakerCount", 0),
                        u = Object(d.get)(o, "apyPercentage", 0),
                        m = Object(d.get)(o, "totalStakedAmount", 0),
                        p = Le();
                    return (
                        Object(r.useEffect)(function () {
                            n({ type: F.TAB_SELECTED_CHANGE, tabIndex: 1 });
                        }, []),
                        Object(r.useEffect)(
                            function () {
                                (function () {
                                    return Xt.apply(this, arguments);
                                })().then(function (e) {
                                    n({ type: F.GET_STAKING_INFO, data: e });
                                });
                            },
                            [n, p, l]
                        ),
                        i.a.createElement(
                            i.a.Fragment,
                            null,
                            o.isStakingPaused &&
                                i.a.createElement(
                                    "div",
                                    { className: "container mt-4 text-center d-md-block d-none" },
                                    i.a.createElement(
                                        "span",
                                        { className: "pp-banner-top" },
                                        i.a.createElement("i", { className: "mdi mdi-alert-outline me-2 text-danger" }),
                                        " All staking functions are temporarily paused. Please check back again later."
                                    )
                                ),
                            i.a.createElement(
                                "div",
                                { className: "page-container" },
                                o.isStakingPaused &&
                                    i.a.createElement(
                                        "div",
                                        { className: "container mt-4 text-center d-md-none d-block pp-notice" },
                                        i.a.createElement(
                                            "span",
                                            { className: "pp-banner-top" },
                                            i.a.createElement("i", { className: "mdi mdi-alert-outline me-2 text-danger" }),
                                            " All staking functions are temporarily paused. Please check back again later."
                                        )
                                    ),
                                i.a.createElement(
                                    "div",
                                    { className: "p-content" },
                                    i.a.createElement(
                                        "div",
                                        { className: "container-fluid mt-3 p-scroll" },
                                        i.a.createElement(
                                            "div",
                                            { className: "p-content-tabs" },
                                            i.a.createElement(
                                                "div",
                                                { className: "row align-items-start" },
                                                i.a.createElement(
                                                    "div",
                                                    { className: "col-xl-4" },
                                                    i.a.createElement(
                                                        "div",
                                                        { style: { marginTop: "-5px" }, className: "mb-xl-0 mb-3" },
                                                        1 == t &&
                                                            i.a.createElement(
                                                                "h4",
                                                                { className: "p-tab-title mb-0" },
                                                                "Stake ",
                                                                i.a.createElement("br", { className: "d-none d-xl-block" }),
                                                                "your ",
                                                                i.a.createElement("span", null, "$GZONE")
                                                            ),
                                                        2 == t &&
                                                            i.a.createElement(
                                                                "h4",
                                                                { className: "p-tab-title mb-0" },
                                                                "Unstake & Withdraw ",
                                                                i.a.createElement("br", { className: "d-none d-xl-block" }),
                                                                "your ",
                                                                i.a.createElement("span", null, "$GZONE")
                                                            ),
                                                        3 == t && i.a.createElement("h4", { className: "p-tab-title mb-0" }, "Withdraw your ", i.a.createElement("span", null, "$GZONE"))
                                                    )
                                                ),
                                                i.a.createElement(
                                                    "div",
                                                    { className: "col-xl-8 mt-xl-0 mt-3" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "grant__bordered bordered mb-0" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "bordered__inner bordered--flex bordered-statistics bordered--tripled bordered--double_angled bordered--bg_bottom" },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1" },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "Number of Stakers"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, i.a.createElement("span", { className: "value-staking" }, c))
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1" },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "Total ", i.a.createElement("span", null, "$GZONE"), " Staked"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, i.a.createElement("span", { className: "value-staking" }, _e.formatNumberDownRound(m, 2)))
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1" },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "APY"),
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "p-sidebar-card-body mt-2" },
                                                                    i.a.createElement("span", { className: "value-staking" }, _e.formatNumberDownRound((u / 100).toString(), 2), "%")
                                                                )
                                                            ),
                                                            i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                            i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                        ),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                            i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                        ),
                                                        i.a.createElement("div", { className: "bordered__icon bordered__icon--right" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" }))
                                                    )
                                                )
                                            ),
                                            i.a.createElement("div", { className: "tab-content pt-5 mt-5", id: "myTabContent" }, a)
                                        )
                                    ),
                                    i.a.createElement(Ft, null)
                                ),
                                i.a.createElement(ta, null)
                            )
                        )
                    );
                },
                na = function () {
                    var e = Object(s.b)(),
                        t = rt(),
                        a = t.account,
                        n = t.chainId,
                        o = (t.library, Ce()),
                        l = Ie(),
                        c = xe(),
                        u = Pe(),
                        m = je(),
                        d = Re(),
                        p = Object(r.useState)(!1),
                        f = Object(tt.a)(p, 2),
                        y = f[0],
                        v = f[1],
                        g = Object(r.useState)("0"),
                        N = Object(tt.a)(g, 2),
                        w = N[0],
                        T = N[1],
                        _ = Object(r.useState)(!1),
                        S = Object(tt.a)(_, 2),
                        O = S[0],
                        k = S[1],
                        A = Object(r.useState)(1),
                        C = Object(tt.a)(A, 2),
                        L = C[0],
                        W = C[1],
                        M = Object(r.useState)(!1),
                        D = Object(tt.a)(M, 2),
                        B = D[0],
                        G = D[1],
                        U = Object(r.useState)(""),
                        Y = Object(tt.a)(U, 2),
                        K = Y[0],
                        H = Y[1],
                        J = Object(r.useState)(!1),
                        z = Object(tt.a)(J, 2),
                        Z = z[0],
                        q = z[1];
                    Object(r.useEffect)(
                        function () {
                            1 === L && (y && o && !c.isStakingPaused && parseFloat(d) > 0 && m > 0 && 0 === u.withdrawTimestamp ? G(!0) : G(!1));
                        },
                        [y, o, m, d, c, u, L]
                    );
                    var V = (function () {
                        var t = Object(Ye.a)(
                            Fe.a.mark(function t() {
                                var a, r;
                                return Fe.a.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (5 !== L) {
                                                    t.next = 2;
                                                    break;
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                if (1 !== L || 0 !== parseFloat(w)) {
                                                    t.next = 6;
                                                    break;
                                                }
                                                return G(!1), W(L + 1), t.abrupt("return");
                                            case 6:
                                                if (3 !== L) {
                                                    t.next = 20;
                                                    break;
                                                }
                                                if (!l) {
                                                    t.next = 18;
                                                    break;
                                                }
                                                return e({ type: F.REQUEST_SUBMIT }), (a = O ? d : w), (t.next = 12), l.getAllowance(E[n], h[n]);
                                            case 12:
                                                if (((r = t.sent), !Object(Je.BigNumber)(r).gte(Object(Je.BigNumber)(a)))) {
                                                    t.next = 17;
                                                    break;
                                                }
                                                return W(4), e({ type: F.REQUEST_DONE }), t.abrupt("return");
                                            case 17:
                                                l.approve({ tokenContractAddress: c.tokenAddr, contractAddress: h[n], amount: a }, function (t) {
                                                    t.status === x && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_SUCCESS, message: "Approve Tokens successfully!" }), W(4)),
                                                        t.status === P && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_FAILS, message: "Failed to Approve Tokens!" }));
                                                });
                                            case 18:
                                                t.next = 21;
                                                break;
                                            case 20:
                                                4 === L
                                                    ? l &&
                                                      (e({ type: F.REQUEST_SUBMIT }),
                                                      l.stakingDeposit({ amount: O ? d : w }, function (t) {
                                                          t.status === R && (e({ type: F.REQUEST_DONE }), q(!0), H(t.txID), W(5)), t.status === j && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_FAILS, message: "Deposit stake fail!" }));
                                                      }))
                                                    : W(L + 1);
                                            case 21:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        );
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })();
                    return i.a.createElement(
                        aa,
                        { selectedTab: 1 },
                        i.a.createElement(
                            "div",
                            { className: "tab-pane fade show active", id: "stake", role: "tabpanel", "aria-labelledby": "stake-tab" },
                            i.a.createElement(
                                "div",
                                { className: "row justify-content-center mb-4" },
                                i.a.createElement(
                                    "div",
                                    { className: "col-lg-12" },
                                    i.a.createElement(
                                        "div",
                                        { className: "bs-stepper w-100" },
                                        i.a.createElement(
                                            "div",
                                            { className: "bs-stepper-header", role: "tablist" },
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(L >= 1 ? "active" : ""), id: "swapButtonStep1" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger ps-0" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label first" }, "Checkpoints")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "swapLineStep1" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(L >= 2 ? "active" : ""), id: "swapButtonStep2" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label" }, "Amount Stake")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "swapLineStep2" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(L >= 3 ? "active" : ""), id: "swapButtonStep3" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label" }, "Pre-authorization")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "swapLineStep3" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(L >= 4 ? "active" : ""), id: "swapButtonStep4" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label" }, "Confirm")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "swapLineStep4" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(L >= 5 ? "active" : ""), id: "swapButtonStep5" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label last" }, "Confirmation")
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            i.a.createElement(
                                "div",
                                { className: "row justify-content-center" },
                                i.a.createElement(
                                    "div",
                                    { className: "col-lg-12" },
                                    i.a.createElement(
                                        "div",
                                        { className: "" },
                                        i.a.createElement(
                                            "div",
                                            { className: "p-sidebar-card-body" },
                                            1 === L &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "SwapStep1" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center mb-5" },
                                                        i.a.createElement("h4", { className: "mb-2 pb-1 step-title" }, "Checkpoints"),
                                                        i.a.createElement("p", { className: "step-desc" }, "The following conditions must be met to proceed:")
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "grant__bordered bordered mb-0" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "bordered__inner bordered-statistics bordered--flex bordered--tripled bordered--cust bordered--double_angled bordered--bg_bottom" },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 ".concat(o ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "Connected MetaMask"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, 'If not connected, click the "Connect Wallet" button in the top right corner')
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 ".concat(parseFloat(d) > 0 ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "$GZONE available"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, "Current Balance: ", _e.formatNumberDownRoundWithExtractMax(d, 4))
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 ".concat(m > 0 ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "BNB available"),
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "p-sidebar-card-body mt-2" },
                                                                    "BNB is required to pay transaction fees on the Binance Smart Chain network.",
                                                                    i.a.createElement("br", null),
                                                                    "BNB Balance: ",
                                                                    _e.formatNumberDownRoundWithExtractMax(m, 4)
                                                                )
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 last ".concat(0 === u.withdrawTimestamp ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "Eligible to stake"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, "You cannot stake if you have an active $GZONE unstake/withdrawal request")
                                                            ),
                                                            i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                            i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                        ),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                            i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "mt-4 mb-3 text-center" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "form-check" },
                                                            i.a.createElement("input", {
                                                                className: "form-check-input float-none me-1",
                                                                type: "checkbox",
                                                                defaultValue: !0,
                                                                id: "flexCheckDefault",
                                                                onChange: function () {
                                                                    return v(!y);
                                                                },
                                                            }),
                                                            i.a.createElement(
                                                                "label",
                                                                { className: "form-check-label", htmlFor: "flexCheckDefault" },
                                                                "I have read the\xa0",
                                                                i.a.createElement(be.a, { target: "_blank", to: I }, "Terms and Conditions ")
                                                            )
                                                        )
                                                    )
                                                ),
                                            2 === L &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "SwapStep2" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("h4", { className: "mb-2 pb-1 step-title" }, "Amount Stake"),
                                                        i.a.createElement("p", { className: "step-desc text-white" }, "Please enter the amount of $GZONE you want to stake"),
                                                        i.a.createElement("p", { className: "step-desc" }, "Any fees applied at Unstake & Withdraw stage will be based on the date you last staked."),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "unlock__bordered bordered mx-auto mt-5", style: { maxWidth: "100%", width: "400px" } },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "bordered__block pb-3" },
                                                                    i.a.createElement(
                                                                        "div",
                                                                        { className: "text-start" },
                                                                        i.a.createElement(
                                                                            "div",
                                                                            { className: "p-form-group" },
                                                                            i.a.createElement("label", { className: "form-label p-main-text" }, "Amount"),
                                                                            i.a.createElement(
                                                                                "div",
                                                                                { className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative w-100 py-0" },
                                                                                i.a.createElement(
                                                                                    "div",
                                                                                    { className: "d-flex align-items-center justify-content-between px-3 w-100" },
                                                                                    i.a.createElement("input", {
                                                                                        type: "number",
                                                                                        className: "form-control px-0",
                                                                                        placeholder: 0,
                                                                                        value: w,
                                                                                        onChange: function (e) {
                                                                                            return (function (e) {
                                                                                                k(!1),
                                                                                                    _e.isFloatFormatted(e.target.value, 4) &&
                                                                                                        (T(e.target.value),
                                                                                                        Object(Je.BigNumber)(e.target.value).lte(Object(Je.BigNumber)(d)) && Object(Je.BigNumber)(e.target.value).gt(Object(Je.BigNumber)(0))
                                                                                                            ? G(!0)
                                                                                                            : G(!1));
                                                                                            })(e);
                                                                                        },
                                                                                    }),
                                                                                    i.a.createElement(
                                                                                        "span",
                                                                                        {
                                                                                            style: { cursor: "pointer" },
                                                                                            onClick: function () {
                                                                                                T(_e.formatNumberDownRound(d, 4)), G(!0), k(!0);
                                                                                            },
                                                                                        },
                                                                                        "MAX"
                                                                                    )
                                                                                ),
                                                                                i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                                i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                            )
                                                                        ),
                                                                        i.a.createElement(
                                                                            "div",
                                                                            { className: "d-flex align-items-start justify-content-between" },
                                                                            i.a.createElement("div", { className: "font-14" }, "Balance: ", i.a.createElement("b", { className: "text-warning" }, _e.formatNumberDownRound(d, 4))),
                                                                            i.a.createElement("div", null)
                                                                        )
                                                                    )
                                                                ),
                                                                i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                                i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                                i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                                                i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                            )
                                                        )
                                                    )
                                                ),
                                            3 === L &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "SwapStep3" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("h4", { className: "mb-2 pb-1 step-title" }, "Pre-authorization"),
                                                        i.a.createElement("p", { className: "step-desc" }, "Required transaction 1 of 2"),
                                                        i.a.createElement("p", { className: "step-desc" }, "In this step, you grant access to the staking smart contract to accept your $GZONE")
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center mt-4" },
                                                        i.a.createElement("div", { className: "p-progress-waiting" }, i.a.createElement("div", { className: "p-progress-percent", style: { width: "60%" } })),
                                                        i.a.createElement("h4", { className: "mb-2 pb-1 mt-5" }, "Waiting for the transaction to complete"),
                                                        i.a.createElement("p", null, "Please wait for the transaction to confirm before proceeding."),
                                                        i.a.createElement("p", null, i.a.createElement("a", { className: "p-address", href: "".concat(b[n], "/address/").concat(a), target: "blank" }, a))
                                                    )
                                                ),
                                            4 === L &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "SwapStep4" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("h4", { className: "mb-2 pb-1 step-title" }, "Confirm"),
                                                        i.a.createElement("p", { className: "step-desc" }, "Required transaction 2 of 2"),
                                                        i.a.createElement(
                                                            "p",
                                                            { className: "step-desc" },
                                                            "In this step, you deposit the tokens into the staking contract.",
                                                            i.a.createElement("br", null),
                                                            "After this step, your tokens will be successfully staked."
                                                        )
                                                    )
                                                ),
                                            5 === L &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "SwapStep5" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("div", { className: "icon-gradient" }, i.a.createElement("i", { className: "mdi mdi-shield-check-outline", style: { fontSize: "70px", lineHeight: 1.3 } })),
                                                        i.a.createElement("h4", { className: "step-title" }, "Success"),
                                                        i.a.createElement(
                                                            "p",
                                                            { className: "step-desc" },
                                                            "Congratulations! Your tokens are now staked.",
                                                            i.a.createElement("br", null),
                                                            "If desired, you may check Binance Smart Chain to confirm the transaction."
                                                        ),
                                                        i.a.createElement("p", null, i.a.createElement("a", { className: "p-address", href: "".concat(b[n], "/tx/").concat(K), target: "blank" }, K))
                                                    )
                                                )
                                        )
                                    )
                                )
                            ),
                            i.a.createElement(
                                "div",
                                { className: "mb-5 text-center step-buttons", style: { height: "100px", paddingTop: "50px" } },
                                Z
                                    ? i.a.createElement(
                                          "div",
                                          { className: "d-flex align-items-center justify-content-center" },
                                          i.a.createElement(
                                              "button",
                                              {
                                                  onClick: function () {
                                                      return T("0"), k(!0), W(1), void q(!1);
                                                  },
                                                  type: "button",
                                                  className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                              },
                                              i.a.createElement("span", null, "Done"),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                          )
                                      )
                                    : i.a.createElement(
                                          "div",
                                          { className: "d-flex align-items-center justify-content-center", style: { gap: "20px" } },
                                          i.a.createElement(
                                              "button",
                                              {
                                                  onClick: function () {
                                                      1 !== L && W(L - 1);
                                                  },
                                                  type: "button",
                                                  disabled: !B || 1 === L,
                                                  className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                              },
                                              i.a.createElement("span", null, i.a.createElement("i", { className: "mdi mdi-arrow-left me-2" }), "Previous"),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                          ),
                                          i.a.createElement(
                                              "button",
                                              {
                                                  onClick: function () {
                                                      return V();
                                                  },
                                                  type: "button",
                                                  disabled: !B || 5 === L,
                                                  className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                              },
                                              i.a.createElement("span", null, "Next", i.a.createElement("i", { className: "mdi mdi-arrow-right ms-2" })),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                          )
                                      )
                            )
                        )
                    );
                },
                ra = function () {
                    var e = Object(s.b)(),
                        t = Object(r.useState)(1),
                        a = Object(tt.a)(t, 2),
                        n = a[0],
                        o = a[1],
                        l = Ce(),
                        c = Ie(),
                        u = xe(),
                        m = Pe(),
                        d = je(),
                        p = Object(r.useState)(!1),
                        h = Object(tt.a)(p, 2),
                        E = h[0],
                        f = h[1],
                        y = Object(r.useState)(!1),
                        v = Object(tt.a)(y, 2),
                        g = v[0],
                        N = v[1],
                        w = Object(r.useState)(0),
                        T = Object(tt.a)(w, 2),
                        _ = T[0],
                        S = T[1],
                        O = Object(r.useState)(0),
                        k = Object(tt.a)(O, 2),
                        A = k[0],
                        C = k[1],
                        x = Object(r.useState)(""),
                        P = Object(tt.a)(x, 2),
                        j = P[0],
                        R = P[1],
                        L = Object(r.useState)("0"),
                        W = Object(tt.a)(L, 2),
                        M = W[0],
                        D = W[1],
                        U = Object(r.useState)(!1),
                        Y = Object(tt.a)(U, 2),
                        K = Y[0],
                        H = Y[1],
                        J = Object(r.useState)(!1),
                        z = Object(tt.a)(J, 2),
                        Z = z[0],
                        q = z[1];
                    Object(r.useEffect)(
                        function () {
                            2 === n && (E && l && !u.isStakingPaused && parseFloat(m.stakedAmount) > 0 && d > 0 && 0 === m.withdrawTimestamp ? N(!0) : N(!1)),
                                1 === n && N(!0),
                                u && m.stakedDuration && (S(m.stakedDuration), C(m.totalPctFee / 100));
                        },
                        [E, l, d, u, m, n]
                    );
                    return i.a.createElement(
                        aa,
                        { selectedTab: 2 },
                        i.a.createElement(
                            "div",
                            { className: "tab-pane fade show active pb-4", id: "unstake", role: "tabpanel", "aria-labelledby": "unstake-tab" },
                            i.a.createElement(
                                "div",
                                { className: "row justify-content-center mb-4" },
                                i.a.createElement(
                                    "div",
                                    { className: "col-lg-12" },
                                    i.a.createElement(
                                        "div",
                                        { className: "bs-stepper w-100" },
                                        i.a.createElement(
                                            "div",
                                            { className: "bs-stepper-header", role: "tablist" },
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(n >= 1 ? "active" : ""), id: "unStakeButtonStep1" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger ps-0" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label first" }, "Warning")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "unStakeLineStep1" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(n >= 2 ? "active" : ""), id: "unStakeButtonStep2" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label" }, "Checkpoints")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "unStakeLineStep2" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(n >= 3 ? "active" : ""), id: "unStakeButtonStep3" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label" }, "Amount to Unstake")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "unStakeLineStep3" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(n >= 4 ? "active" : ""), id: "unStakeButtonStep4" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label" }, "Initialize Unstake")
                                                )
                                            ),
                                            i.a.createElement("div", { className: "line", id: "unStakeLineStep4" }),
                                            i.a.createElement(
                                                "div",
                                                { className: "step ".concat(n >= 5 ? "active" : ""), id: "unStakeButtonStep5" },
                                                i.a.createElement(
                                                    "button",
                                                    { type: "button", className: "step-trigger" },
                                                    i.a.createElement("img", { src: "/images/cir.svg" }),
                                                    i.a.createElement("span", { className: "bs-stepper-label last" }, "Confirmation")
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            i.a.createElement(
                                "div",
                                { className: "row justify-content-center" },
                                i.a.createElement(
                                    "div",
                                    { className: "col-lg-12" },
                                    i.a.createElement(
                                        "div",
                                        { className: "" },
                                        i.a.createElement(
                                            "div",
                                            { className: "p-sidebar-card-body" },
                                            1 === n &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "UnStakeStep1" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("h4", { className: "mb-4 step-title" }, "Warning"),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "step-warning d-flex justify-content-center align-items-center" },
                                                            i.a.createElement("i", { className: "fas fa-exclamation-triangle fa-2x text-warning me-3" }),
                                                            i.a.createElement("div", { className: "step-desc text-warning" }, "You may be subject to a fee if you wish to unstake & withdraw your $GZONE tokens early.")
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "row justify-content-center" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "col-lg-6 col-md-8" },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "unlock__bordered bordered mx-auto mt-5", style: { maxWidth: "100%", width: "460px" } },
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                                                                    i.a.createElement(
                                                                        "div",
                                                                        { className: "bordered__block pb-3 p-2-mb" },
                                                                        i.a.createElement(
                                                                            "div",
                                                                            { className: "table-responsive" },
                                                                            i.a.createElement(
                                                                                "table",
                                                                                { className: "table text-white mb-0" },
                                                                                i.a.createElement(
                                                                                    "tbody",
                                                                                    null,
                                                                                    i.a.createElement(
                                                                                        "tr",
                                                                                        null,
                                                                                        i.a.createElement("td", null, "Staked less than 2 weeks"),
                                                                                        i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "25.00%"))
                                                                                    ),
                                                                                    i.a.createElement(
                                                                                        "tr",
                                                                                        null,
                                                                                        i.a.createElement("td", null, "Less than 4 weeks"),
                                                                                        i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "15.00%"))
                                                                                    ),
                                                                                    i.a.createElement(
                                                                                        "tr",
                                                                                        null,
                                                                                        i.a.createElement("td", null, "Less than 6 weeks"),
                                                                                        i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "10.00%"))
                                                                                    ),
                                                                                    i.a.createElement(
                                                                                        "tr",
                                                                                        null,
                                                                                        i.a.createElement("td", null, "Less than 8 weeks"),
                                                                                        i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "5.00%"))
                                                                                    ),
                                                                                    i.a.createElement(
                                                                                        "tr",
                                                                                        null,
                                                                                        i.a.createElement("td", { style: { border: 0 } }, "8 weeks or more"),
                                                                                        i.a.createElement("td", { style: { border: 0 }, className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "0.00%"))
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    ),
                                                                    i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                                    i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                                ),
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                                    i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                                ),
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                                                    i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement(
                                                            "p",
                                                            { className: "mb-2" },
                                                            "You have staked for",
                                                            " [",
                                                            _e.convertSecondsToReadableString(_),
                                                            "]. Your current fee is: ",
                                                            i.a.createElement("b", { className: "text-white" }, A, "%")
                                                        ),
                                                        i.a.createElement("p", null, "Fees will be deducted at the Withdraw stage. Please click 'Next' if you wish to proceed.")
                                                    )
                                                ),
                                            2 === n &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "UnStakeStep2" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center mb-5" },
                                                        i.a.createElement("h4", { className: "mb-2 pb-1 step-title" }, "Checkpoints"),
                                                        i.a.createElement("p", { className: "step-desc" }, "The following conditions must be met to proceed:")
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "grant__bordered bordered mb-0" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "bordered__inner bordered-statistics bordered--flex bordered--tripled bordered--cust bordered--double_angled bordered--bg_bottom" },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 ".concat(l ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "Connected MetaMask"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, 'If not connected, click the "Connect Wallet" button in the top right corner')
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 ".concat(parseFloat(m.stakedAmount) > 0 ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "Have an active $GZONE stake"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, "You currently have ", _e.formatNumberDownRound(m.stakedAmount, 2), " $GZONE staked")
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 ".concat(d > 0 ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "BNB available"),
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "p-sidebar-card-body mt-2" },
                                                                    "BNB is required to pay transaction fees on the Binance Smart Chain network.",
                                                                    i.a.createElement("br", null),
                                                                    "BNB Balance: ",
                                                                    _e.formatNumberDownRoundWithExtractMax(d, 4)
                                                                )
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__block d-flex-1 last ".concat(0 === m.withdrawTimestamp ? "selected" : "") },
                                                                i.a.createElement("div", { className: "p-sidebar-card-title" }, "Eligible to stake"),
                                                                i.a.createElement("div", { className: "p-sidebar-card-body mt-2" }, "You cannot stake if you have an active $GZONE unstake/withdrawal request")
                                                            ),
                                                            i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                            i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                        ),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                            i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "mt-4 mb-3 text-center" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "form-check" },
                                                            i.a.createElement("input", {
                                                                className: "form-check-input float-none me-1",
                                                                type: "checkbox",
                                                                defaultValue: !0,
                                                                id: "flexCheckDefault",
                                                                onChange: function () {
                                                                    return f(!E);
                                                                },
                                                            }),
                                                            i.a.createElement(
                                                                "label",
                                                                { className: "form-check-label", htmlFor: "flexCheckDefault" },
                                                                "I have read the\xa0",
                                                                i.a.createElement(be.a, { target: "_blank", to: I }, "Terms and Conditions ")
                                                            )
                                                        )
                                                    )
                                                ),
                                            3 === n &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "UnStakeStep3" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("h4", { className: "mb-2 pb-1 step-title" }, "Amount to Unstake & Withdraw"),
                                                        i.a.createElement("p", { className: "step-desc text-white" }, "Please enter the amount of $GZONE you want to unstake"),
                                                        i.a.createElement("p", { className: "step-desc" }, "Any fees applied at Unstake & Withdraw stage will be based on the date you last staked."),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "unlock__bordered bordered mx-auto mt-5", style: { maxWidth: "100%", width: "400px" } },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                                                                i.a.createElement(
                                                                    "div",
                                                                    { className: "bordered__block pb-3" },
                                                                    i.a.createElement(
                                                                        "div",
                                                                        { className: "text-start" },
                                                                        i.a.createElement(
                                                                            "div",
                                                                            { className: "p-form-group" },
                                                                            i.a.createElement("label", { className: "form-label p-main-text" }, "Amount"),
                                                                            i.a.createElement(
                                                                                "div",
                                                                                { className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative w-100 py-0" },
                                                                                i.a.createElement(
                                                                                    "div",
                                                                                    { className: "d-flex align-items-center justify-content-between px-3 w-100" },
                                                                                    i.a.createElement("input", {
                                                                                        type: "number",
                                                                                        className: "form-control px-0",
                                                                                        placeholder: 0,
                                                                                        value: M,
                                                                                        onChange: function (e) {
                                                                                            return (function (e) {
                                                                                                H(!1),
                                                                                                    _e.isFloatFormatted(e.target.value, 4) &&
                                                                                                        (D(e.target.value),
                                                                                                        Object(Je.BigNumber)(e.target.value).lte(Object(Je.BigNumber)(m.stakedAmount)) &&
                                                                                                        Object(Je.BigNumber)(e.target.value).gt(Object(Je.BigNumber)(0))
                                                                                                            ? N(!0)
                                                                                                            : N(!1));
                                                                                            })(e);
                                                                                        },
                                                                                    }),
                                                                                    i.a.createElement(
                                                                                        "span",
                                                                                        {
                                                                                            style: { cursor: "pointer" },
                                                                                            onClick: function () {
                                                                                                D(_e.formatNumberDownRound(m.stakedAmount, 4)), N(!0), H(!0);
                                                                                            },
                                                                                        },
                                                                                        "MAX"
                                                                                    )
                                                                                ),
                                                                                i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                                i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                            )
                                                                        )
                                                                    )
                                                                ),
                                                                i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                                i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                                i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                            ),
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                                                i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                            )
                                                        )
                                                    )
                                                ),
                                            4 === n &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "UnStakeStep4" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("h4", { className: "mb-4 step-title" }, "Confirm Unstaking Process"),
                                                        i.a.createElement("p", { className: "step-desc" }, "In this step, you initiate the unstaking process.")
                                                    )
                                                ),
                                            5 === n &&
                                                i.a.createElement(
                                                    "div",
                                                    { className: "bs-stepper-content", id: "UnStakeStep5" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "text-center" },
                                                        i.a.createElement("div", { className: "icon-gradient" }, i.a.createElement("i", { className: "mdi mdi-shield-check-outline", style: { fontSize: "70px", lineHeight: 1.3 } })),
                                                        i.a.createElement("h4", { className: "step-title" }, "Confirmed"),
                                                        i.a.createElement(
                                                            "p",
                                                            { className: "step-desc" },
                                                            "You have initiated the unstaking process.",
                                                            i.a.createElement("br", null),
                                                            "If desired, you may check Binance SmartChain to confirm the transaction."
                                                        ),
                                                        i.a.createElement("p", null, i.a.createElement("a", { className: "p-address", href: "".concat(b.MAINNET, "/tx/").concat(j), target: "blank" }, j))
                                                    )
                                                )
                                        )
                                    )
                                )
                            ),
                            i.a.createElement(
                                "div",
                                { className: "mb-3 mt-4 text-center step-buttons" },
                                Z
                                    ? i.a.createElement(
                                          "div",
                                          { className: "d-flex align-items-center justify-content-center" },
                                          i.a.createElement(
                                              "button",
                                              {
                                                  onClick: function () {
                                                      return D("0"), H(!0), o(1), void q(!1);
                                                  },
                                                  type: "button",
                                                  className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                              },
                                              i.a.createElement("span", null, "Done"),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                          )
                                      )
                                    : i.a.createElement(
                                          "div",
                                          { className: "d-flex align-items-center justify-content-center", style: { gap: "20px" } },
                                          i.a.createElement(
                                              "button",
                                              {
                                                  onClick: function () {
                                                      1 !== n && o(n - 1);
                                                  },
                                                  type: "button",
                                                  disabled: !g || 1 === n,
                                                  className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                              },
                                              i.a.createElement("span", null, i.a.createElement("i", { className: "mdi mdi-arrow-left me-2" }), "Previous"),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                          ),
                                          i.a.createElement(
                                              "button",
                                              {
                                                  onClick: function () {
                                                      return (function () {
                                                          if (1 === n) return N(!1), void o(n + 1);
                                                          if (2 === n && 0 === parseFloat(M)) return N(!1), void o(n + 1);
                                                          if (4 === n)
                                                              c &&
                                                                  (e({ type: F.REQUEST_SUBMIT }),
                                                                  c.stakingInitiateWithdrawal({ amount: K ? m.stakedAmount : M }, function (t) {
                                                                      t.status === B && (e({ type: F.REQUEST_DONE }), q(!0), R(t.txID), o(5)),
                                                                          t.status === G && (e({ type: F.REQUEST_DONE }), e({ type: F.ALERT_FAILS, message: "INIT Unstake fails" }));
                                                                  }));
                                                          else {
                                                              if (5 === n) return;
                                                              o(n + 1);
                                                          }
                                                      })();
                                                  },
                                                  type: "button",
                                                  disabled: !g || 5 === n,
                                                  className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                              },
                                              i.a.createElement("span", null, "Next", i.a.createElement("i", { className: "mdi mdi-arrow-right ms-2" })),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                              i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                          )
                                      )
                            )
                        )
                    );
                };
            function ia() {
                return { type: F.SUBMIT_GET_PROJECTS };
            }
            function oa(e) {
                return { type: F.SUBMIT_PROJECT_SELECTED, data: e };
            }
            a(626);
            var la = function () {
                    var e = Object(r.useState)([]),
                        t = Object(tt.a)(e, 2),
                        a = t[0],
                        n =
                            (t[1],
                            Object(s.c)(function (e) {
                                return Object(d.get)(e, "project.closedProjects", []);
                            }));
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                            "section",
                            { id: "imagine", className: "section imagine" },
                            i.a.createElement(
                                "div",
                                { className: "wrapper" },
                                i.a.createElement(
                                    "div",
                                    { className: "imagine__wrapper" },
                                    i.a.createElement("h2", { className: "title title--center" }, "Projects Closed"),
                                    i.a.createElement("div", { className: "imagine__bg" }, i.a.createElement("img", { className: "lighten", src: "/images/imagine-bg.png", alt: "" }))
                                )
                            )
                        ),
                        i.a.createElement(
                            "div",
                            { className: "pp-investment pp-close" },
                            i.a.createElement(
                                "div",
                                { className: "text-center" },
                                i.a.createElement(
                                    "div",
                                    { className: "investment-section-items" },
                                    i.a.createElement(
                                        "div",
                                        { className: "row gx-md-5" },
                                        n.length > 0
                                            ? n.map(function (e, t) {
                                                  return i.a.createElement(
                                                      "div",
                                                      { className: "col-xl-4 col-lg-6 col-md-6 text-center", key: t },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "level-item bordered project-item mb-4 mt-xl-3" },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "bordered__inner bordered--double_angled bordered--bg_top" },
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "level-item__title-wrap" },
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "level-item__title title title--grad m-3" },
                                                                      i.a.createElement("span", { className: "pp-status-closed" }, "Closed"),
                                                                      i.a.createElement("span", { className: "symbol" }, e.symbol)
                                                                  )
                                                              ),
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "level__inner pb-0 pt-3" },
                                                                  i.a.createElement(
                                                                      be.a,
                                                                      { to: e.contract && "TBA" !== e.contract ? "projects/".concat(e.contract) : "#", className: "text-decoration-none w-100 px-4" },
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "level-item__img mb-4" },
                                                                          i.a.createElement("img", { src: e.logo, alt: "" }),
                                                                          e.athMultiplier &&
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "pp-top-tag" },
                                                                                  i.a.createElement("div", null, i.a.createElement("small", null, "ATH")),
                                                                                  i.a.createElement("div", null, i.a.createElement("b", null, e.athMultiplier, "x"))
                                                                              )
                                                                      ),
                                                                      i.a.createElement("div", { className: "level-item__digit title" }, e.name)
                                                                  ),
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "level-item__info pb-4 px-2 text-start mt-2" },
                                                                      i.a.createElement("div", { className: "text-center mb-4 level-item__desc" }, e.description),
                                                                      e.button_name &&
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "text-center mb-4" },
                                                                              i.a.createElement(
                                                                                  "a",
                                                                                  { href: e.button_url, target: "blank", className: "btn btn-oht btn--custom bordered bordered--btn bordered--btn_no-angled position-relative" },
                                                                                  i.a.createElement("span", null, e.button_name),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                              )
                                                                          ),
                                                                      i.a.createElement(
                                                                          "ul",
                                                                          { className: "mb-3" },
                                                                          i.a.createElement(
                                                                              "li",
                                                                              null,
                                                                              i.a.createElement("span", null, "Swap rate"),
                                                                              i.a.createElement("br", null),
                                                                              i.a.createElement("b", { className: "nowrap text-white" }, "1 BUSD = ", e.rate, " ", e.projectTokenSymbol)
                                                                          ),
                                                                          i.a.createElement(
                                                                              "li",
                                                                              null,
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "d-flex align-items-center justify-content-between" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      null,
                                                                                      i.a.createElement("span", null, "Cap"),
                                                                                      i.a.createElement("br", null),
                                                                                      i.a.createElement("b", { className: "nowrap text-white" }, "".concat(e.maxTotalParticipationAllocated || 0, " ").concat(e.symbol || ""))
                                                                                  ),
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "pe-3" },
                                                                                      i.a.createElement("span", null, "Access"),
                                                                                      i.a.createElement("br", null),
                                                                                      i.a.createElement("b", { className: "nowrap text-white" }, e.isPrivate ? "Private" : "Public")
                                                                                  )
                                                                              )
                                                                          ),
                                                                          i.a.createElement(
                                                                              "li",
                                                                              null,
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "O" == e.state ? "pp-card-progress-wrap disabled" : "pp-card-progress-wrap" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "mb-2 d-flex justify-content-between align-items-center pp-card-progress-top" },
                                                                                      i.a.createElement("div", { className: "pp-card-col" }, "Progress"),
                                                                                      "O" != e.state &&
                                                                                          i.a.createElement(
                                                                                              "div",
                                                                                              { className: "pp-card-col text-end" },
                                                                                              "Participants ",
                                                                                              i.a.createElement("b", { className: "text-white" }, e.totalCountUserParticipated)
                                                                                          )
                                                                                  ),
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "pp-card-progress" },
                                                                                      (!a || a.length <= 0) &&
                                                                                          i.a.createElement("div", {
                                                                                              title: "9",
                                                                                              className: "pp-card-progress-percent",
                                                                                              style: { width: "".concat(100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0), "%") },
                                                                                          }),
                                                                                      a &&
                                                                                          a.length > 0 &&
                                                                                          a.map(function (e, t) {
                                                                                              return i.a.createElement("div", {
                                                                                                  key: t,
                                                                                                  title: "0",
                                                                                                  className: "pp-card-progress-percent animation",
                                                                                                  style: { width: e.width + "%", left: e.left + "%" },
                                                                                              });
                                                                                          }),
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "pp-card-progress-label" },
                                                                                          i.a.createElement(
                                                                                              "span",
                                                                                              null,
                                                                                              i.a.createElement("b", null, (100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0)).toFixed(2), "%")
                                                                                          ),
                                                                                          "O" == e.state &&
                                                                                              i.a.createElement(
                                                                                                  "span",
                                                                                                  { className: "participants-center" },
                                                                                                  i.a.createElement("b", { className: "" }, e.totalCountUserParticipated),
                                                                                                  " Participants"
                                                                                              ),
                                                                                          i.a.createElement(
                                                                                              "span",
                                                                                              { className: "text-allocation" },
                                                                                              i.a.createElement("b", { className: "" }, e.totalFundParticipated.toFixed(4), "/", e.maxTotalParticipationAllocated)
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      )
                                                                  ),
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "item-social" },
                                                                      e.pancakeswap &&
                                                                          i.a.createElement(
                                                                              "a",
                                                                              { style: { backgroundColor: "#47d4dc" }, href: e.pancakeswap, target: "_blank" },
                                                                              i.a.createElement("img", { height: "18", src: "/images/pancake-swap.png" })
                                                                          ),
                                                                      e.website && i.a.createElement("a", { href: e.website, target: "_blank" }, i.a.createElement("i", { className: "fas fa-globe" })),
                                                                      e.twitter && i.a.createElement("a", { href: e.twitter, target: "_blank" }, i.a.createElement("i", { className: "fab fa-twitter" })),
                                                                      e.medium && i.a.createElement("a", { href: e.medium, target: "_blank" }, i.a.createElement("i", { className: "fab fa-medium-m" })),
                                                                      e.telegram && i.a.createElement("a", { href: e.telegram, target: "_blank" }, i.a.createElement("i", { className: "fab fa-telegram" }))
                                                                  )
                                                              ),
                                                              i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                              i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                          ),
                                                          i.a.createElement("div", { className: "bordered__icon bordered__icon--left" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })),
                                                          i.a.createElement("div", { className: "bordered__icon bordered__icon--right" }, i.a.createElement("img", { src: "/images/bordered-lines-narrow.svg", alt: "" }))
                                                      )
                                                  );
                                              })
                                            : i.a.createElement("span", { className: "text-white fs-mb-16", style: { fontSize: "24px" } }, "No projects currently closed")
                                    )
                                )
                            )
                        )
                    );
                },
                sa = function () {
                    var e = Object(s.c)(function (e) {
                            return Object(d.get)(e, "project.openingProjects", []);
                        }),
                        t = Object(r.useState)([]),
                        a = Object(tt.a)(t, 2);
                    a[0], a[1];
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                            "section",
                            { id: "welcome", className: "section welcome" },
                            i.a.createElement(
                                "div",
                                { className: "wrapper" },
                                i.a.createElement(
                                    "div",
                                    { className: "welcome__wrapper" },
                                    i.a.createElement("h2", { className: "welcome__title title title--center title--grad pt-4" }, "Projects Open Now"),
                                    i.a.createElement("div", { className: "welcome__bg" }, i.a.createElement("img", { src: "/images/welcome-bg.png", alt: "" }))
                                )
                            )
                        ),
                        i.a.createElement(
                            "div",
                            { className: "pp-investment pp-open" },
                            i.a.createElement(
                                "div",
                                { className: "text-center" },
                                i.a.createElement(
                                    "div",
                                    { className: "investment-section-items" },
                                    i.a.createElement(
                                        "div",
                                        { className: "row gx-md-5 justify-content-xl-center" },
                                        e.length > 0
                                            ? e.map(function (e, t) {
                                                  return i.a.createElement(
                                                      "div",
                                                      { className: "col-xl-4 col-lg-6 col-md-6 text-center", key: t },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "level-item bordered project-item mb-4 mt-xl-3" },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "bordered__inner bordered--double_angled bordered--bg_top" },
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "level-item__title-wrap" },
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "level-item__title title title--grad m-3" },
                                                                      i.a.createElement("span", { className: "pp-status-open" }, "Open"),
                                                                      i.a.createElement("span", { className: "symbol" }, e.symbol)
                                                                  )
                                                              ),
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "level__inner pb-0 pt-3" },
                                                                  i.a.createElement(
                                                                      be.a,
                                                                      { to: "projects/".concat(e.contract), className: "text-decoration-none w-100 px-4" },
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "level-item__img mb-4" },
                                                                          i.a.createElement("img", { src: e.logo, alt: "" }),
                                                                          e.athMultiplier &&
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "pp-top-tag" },
                                                                                  i.a.createElement("div", null, i.a.createElement("small", null, "ATH")),
                                                                                  i.a.createElement("div", null, i.a.createElement("b", null, e.athMultiplier, "x"))
                                                                              )
                                                                      ),
                                                                      i.a.createElement("div", { className: "level-item__digit title" }, e.name)
                                                                  ),
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "level-item__info px-2 pb-4 text-start mt-2" },
                                                                      i.a.createElement("div", { className: "text-center mb-4 level-item__desc" }, e.description),
                                                                      e.button_name &&
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "text-center mb-4" },
                                                                              i.a.createElement(
                                                                                  "a",
                                                                                  { href: e.button_url, target: "blank", className: "btn btn-oht btn--custom bordered bordered--btn bordered--btn_no-angled position-relative" },
                                                                                  i.a.createElement("span", null, e.button_name),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                                  i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                                  i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                              )
                                                                          ),
                                                                      i.a.createElement(
                                                                          "ul",
                                                                          { className: "mb-3" },
                                                                          i.a.createElement(
                                                                              "li",
                                                                              null,
                                                                              i.a.createElement("span", null, "Swap rate"),
                                                                              i.a.createElement("br", null),
                                                                              i.a.createElement("b", { className: "nowrap text-white" }, "1 BUSD = ", e.rate, " ", e.projectTokenSymbol)
                                                                          ),
                                                                          i.a.createElement(
                                                                              "li",
                                                                              null,
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "d-flex align-items-center justify-content-between" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      null,
                                                                                      i.a.createElement("span", null, "Cap"),
                                                                                      i.a.createElement("br", null),
                                                                                      i.a.createElement("b", { className: "nowrap text-white" }, "".concat(e.maxTotalParticipationAllocated || 0, " ").concat(e.symbol || ""))
                                                                                  ),
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "pe-3" },
                                                                                      i.a.createElement("span", null, "Access"),
                                                                                      i.a.createElement("br", null),
                                                                                      i.a.createElement("b", { className: "nowrap text-white" }, e.isPrivate ? "Private" : "Public")
                                                                                  )
                                                                              )
                                                                          ),
                                                                          i.a.createElement(
                                                                              "li",
                                                                              null,
                                                                              "O" == e.state
                                                                                  ? i.a.createElement(
                                                                                        "div",
                                                                                        { className: "O" == e.state ? "pp-card-progress-wrap light-progress disabled" : "pp-card-progress-wrap" },
                                                                                        i.a.createElement(
                                                                                            "div",
                                                                                            { className: "mb-2 d-flex justify-content-between align-items-center pp-card-progress-top" },
                                                                                            i.a.createElement("div", { className: "pp-card-col" }, "Progress"),
                                                                                            "O" != e.state &&
                                                                                                i.a.createElement(
                                                                                                    "div",
                                                                                                    { className: "pp-card-col text-end" },
                                                                                                    "Participants ",
                                                                                                    i.a.createElement("b", { className: "text-participants font-12" }, e.totalCountUserParticipated)
                                                                                                )
                                                                                        ),
                                                                                        i.a.createElement(
                                                                                            "div",
                                                                                            { className: "pp-card-progress" },
                                                                                            i.a.createElement("div", {
                                                                                                className: "pp-card-progress-percent",
                                                                                                style: { width: "".concat(100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0), "%") },
                                                                                            }),
                                                                                            i.a.createElement(
                                                                                                "div",
                                                                                                { className: "pp-card-progress-label" },
                                                                                                i.a.createElement("span", { className: "participants-center" }, "Allocation round"),
                                                                                                i.a.createElement(
                                                                                                    "span",
                                                                                                    { className: "participants-center", style: { top: "8px" } },
                                                                                                    i.a.createElement("b", null, e.totalCountUserParticipated),
                                                                                                    " Participants"
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                  : i.a.createElement(
                                                                                        i.a.Fragment,
                                                                                        null,
                                                                                        i.a.createElement(
                                                                                            "div",
                                                                                            { className: "pp-card-progress-wrap" },
                                                                                            i.a.createElement(
                                                                                                "div",
                                                                                                { className: "mb-2 d-flex justify-content-between align-items-center pp-card-progress-top" },
                                                                                                i.a.createElement("div", { className: "pp-card-col" }, "Progress"),
                                                                                                i.a.createElement(
                                                                                                    "div",
                                                                                                    { className: "pp-card-col text-end" },
                                                                                                    "Participants ",
                                                                                                    i.a.createElement("b", { className: "text-participants font-12" }, e.totalCountUserParticipated)
                                                                                                )
                                                                                            ),
                                                                                            i.a.createElement(
                                                                                                "div",
                                                                                                { className: "pp-card-progress" },
                                                                                                i.a.createElement("div", {
                                                                                                    className: "pp-card-progress-percent",
                                                                                                    style: { width: "".concat(100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0), "%") },
                                                                                                }),
                                                                                                i.a.createElement(
                                                                                                    "div",
                                                                                                    { className: "pp-card-progress-label" },
                                                                                                    i.a.createElement(
                                                                                                        "span",
                                                                                                        null,
                                                                                                        i.a.createElement("b", null, (100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0)).toFixed(2), "%")
                                                                                                    ),
                                                                                                    "O" == e.state &&
                                                                                                        i.a.createElement(
                                                                                                            "span",
                                                                                                            { className: "participants-center", style: { top: "8px" } },
                                                                                                            i.a.createElement("b", null, e.totalCountUserParticipated),
                                                                                                            " Participants"
                                                                                                        ),
                                                                                                    i.a.createElement(
                                                                                                        "span",
                                                                                                        { className: "text-allocation" },
                                                                                                        i.a.createElement("b", null, e.totalFundParticipated.toFixed(4), "/", e.maxTotalParticipationAllocated)
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                          )
                                                                      )
                                                                  ),
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "item-social" },
                                                                      e.pancakeswap &&
                                                                          i.a.createElement(
                                                                              "a",
                                                                              { style: { backgroundColor: "#47d4dc" }, href: e.pancakeswap, target: "_blank" },
                                                                              i.a.createElement("img", { height: "18", src: "/images/pancake-swap.png" })
                                                                          ),
                                                                      e.website && i.a.createElement("a", { href: e.website, target: "_blank" }, i.a.createElement("i", { className: "fas fa-globe" })),
                                                                      e.twitter && i.a.createElement("a", { href: e.twitter, target: "_blank" }, i.a.createElement("i", { className: "fab fa-twitter" })),
                                                                      e.medium && i.a.createElement("a", { href: e.medium, target: "_blank" }, i.a.createElement("i", { className: "fab fa-medium-m" })),
                                                                      e.telegram && i.a.createElement("a", { href: e.telegram, target: "_blank" }, i.a.createElement("i", { className: "fab fa-telegram" }))
                                                                  )
                                                              ),
                                                              i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                              i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                          ),
                                                          i.a.createElement("div", { className: "bordered__icon bordered__icon--left" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })),
                                                          i.a.createElement("div", { className: "bordered__icon bordered__icon--right" }, i.a.createElement("img", { src: "/images/bordered-lines-narrow.svg", alt: "" }))
                                                      )
                                                  );
                                              })
                                            : i.a.createElement("span", { className: "text-white fs-mb-16", style: { fontSize: "24px" } }, "No projects currently open")
                                    )
                                )
                            )
                        )
                    );
                },
                ca = function () {
                    var e = Object(s.c)(function (e) {
                        return Object(d.get)(e, "project.waitingProjects", []);
                    });
                    return i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                            "section",
                            { id: "imagine", className: "section imagine" },
                            i.a.createElement(
                                "div",
                                { className: "wrapper" },
                                i.a.createElement(
                                    "div",
                                    { className: "imagine__wrapper" },
                                    i.a.createElement("h2", { className: "title title--center" }, "Projects Coming soon"),
                                    i.a.createElement("div", { className: "imagine__bg" }, i.a.createElement("img", { className: "lighten", src: "/images/imagine-bg.png", alt: "" }))
                                )
                            )
                        ),
                        i.a.createElement(
                            "div",
                            { className: "pp-investment pt-0", style: { backgroundImage: "none" } },
                            i.a.createElement(
                                "div",
                                { className: "text-center" },
                                i.a.createElement(
                                    "div",
                                    { className: "investment-section-items" },
                                    i.a.createElement(
                                        "div",
                                        { className: "row gx-md-5 justify-content-xl-center" },
                                        e.length > 0
                                            ? e.map(function (e, t) {
                                                  return (
                                                      ea(
                                                          "idOpenTime-".concat(e.contract, "-").concat(e.openTime),
                                                          1e3 * e.openTime,
                                                          function (e) {},
                                                          function (e) {}
                                                      ),
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "col-xl-4 col-lg-6 col-md-6 text-center", key: t },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "level-item bordered project-item mb-4 mt-xl-3" },
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "bordered__inner bordered--double_angled bordered--bg_top" },
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "level-item__title-wrap" },
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "level-item__title title title--grad m-3" },
                                                                          "P" === e.state &&
                                                                              i.a.createElement(
                                                                                  i.a.Fragment,
                                                                                  null,
                                                                                  "TBA" === e.contract || 0 === e.openTime || 0 == e.rate
                                                                                      ? i.a.createElement("span", { className: "pp-status-opening" }, "Opens in TBA", i.a.createElement("b", null))
                                                                                      : i.a.createElement(
                                                                                            "span",
                                                                                            { className: "pp-status-opening" },
                                                                                            "Opens in ",
                                                                                            i.a.createElement(
                                                                                                "b",
                                                                                                { id: "idOpenTime-".concat(e.contract, "-").concat(e.openTime) },
                                                                                                (function (e) {
                                                                                                    var t = e - new Date().getTime();
                                                                                                    return (
                                                                                                        Math.floor(t / 864e5) +
                                                                                                        "d " +
                                                                                                        Math.floor((t % 864e5) / 36e5) +
                                                                                                        "h " +
                                                                                                        Math.floor((t % 36e5) / 6e4) +
                                                                                                        "m " +
                                                                                                        Math.floor((t % 6e4) / 1e3) +
                                                                                                        "s"
                                                                                                    );
                                                                                                })(1e3 * e.openTime)
                                                                                            )
                                                                                        )
                                                                              ),
                                                                          "TBA" !== e.contract ? i.a.createElement("div", null, i.a.createElement("span", { className: "symbol" }, e.symbol)) : i.a.createElement("div", null)
                                                                      )
                                                                  ),
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "level__inner pb-0 pt-3" },
                                                                      i.a.createElement(
                                                                          be.a,
                                                                          { to: e.contract && "TBA" !== e.contract ? "projects/".concat(e.contract) : "#", className: "text-decoration-none w-100 px-4" },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "level-item__img mb-4" },
                                                                              i.a.createElement("img", { src: e.logo, alt: "" }),
                                                                              e.athMultiplier &&
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "pp-top-tag" },
                                                                                      i.a.createElement("div", null, i.a.createElement("small", null, "ATH")),
                                                                                      i.a.createElement("div", null, i.a.createElement("b", null, e.athMultiplier, "x"))
                                                                                  )
                                                                          ),
                                                                          i.a.createElement("div", { className: "level-item__digit title" }, e.name)
                                                                      ),
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "level-item__info pb-4 text-start mt-2" },
                                                                          i.a.createElement("div", { className: "text-center mb-4 level-item__desc" }, e.description),
                                                                          e.button_name &&
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "text-center mb-4" },
                                                                                  i.a.createElement(
                                                                                      "a",
                                                                                      { href: e.button_url, target: "blank", className: "btn btn-oht btn--custom bordered bordered--btn bordered--btn_no-angled position-relative" },
                                                                                      i.a.createElement("span", null, e.button_name),
                                                                                      i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                                      i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                                      i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                                      i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                                      i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                                      i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                                      i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                                      i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                                  )
                                                                              ),
                                                                          i.a.createElement(
                                                                              "ul",
                                                                              { className: "mb-3" },
                                                                              i.a.createElement(
                                                                                  "li",
                                                                                  null,
                                                                                  i.a.createElement("span", null, "Swap rate"),
                                                                                  i.a.createElement("br", null),
                                                                                  i.a.createElement(
                                                                                      "b",
                                                                                      { className: "nowrap text-white" },
                                                                                      e.contract && "TBA" !== e.contract && 0 !== e.rate ? "1 BUSD = ".concat(e.rate, " ").concat(e.projectTokenSymbol) : "TBA"
                                                                                  )
                                                                              ),
                                                                              i.a.createElement(
                                                                                  "li",
                                                                                  null,
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "d-flex align-items-center justify-content-between" },
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          null,
                                                                                          i.a.createElement("span", null, "Cap"),
                                                                                          i.a.createElement("br", null),
                                                                                          i.a.createElement(
                                                                                              "b",
                                                                                              { className: "nowrap text-white" },
                                                                                              e.contract && "TBA" !== e.contract ? "".concat(e.maxTotalParticipationAllocated || 0, " ").concat(e.symbol || "") : "TBA"
                                                                                          )
                                                                                      ),
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "pe-3" },
                                                                                          i.a.createElement("span", null, "Access"),
                                                                                          i.a.createElement("br", null),
                                                                                          i.a.createElement("b", { className: "nowrap text-white" }, e.isPrivate ? "Private" : "Public")
                                                                                      )
                                                                                  )
                                                                              ),
                                                                              i.a.createElement(
                                                                                  "li",
                                                                                  null,
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "O" == e.state ? "pp-card-progress-wrap disabled" : "pp-card-progress-wrap" },
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "mb-2 d-flex justify-content-between align-items-center pp-card-progress-top" },
                                                                                          i.a.createElement("div", { className: "pp-card-col" }, "Progress"),
                                                                                          "TBA" !== e.contract &&
                                                                                              "P" != e.state &&
                                                                                              i.a.createElement(
                                                                                                  "div",
                                                                                                  { className: "pp-card-col text-end" },
                                                                                                  "Participants ",
                                                                                                  i.a.createElement("b", { className: "text-participants font-12" }, e.totalCountUserParticipated)
                                                                                              )
                                                                                      ),
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "pp-card-progress" },
                                                                                          i.a.createElement("div", {
                                                                                              className: "pp-card-progress-percent",
                                                                                              style: { width: "".concat(100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0), "%") },
                                                                                          }),
                                                                                          i.a.createElement(
                                                                                              "div",
                                                                                              { className: "pp-card-progress-label" },
                                                                                              i.a.createElement(
                                                                                                  "span",
                                                                                                  null,
                                                                                                  i.a.createElement("b", null, (100 * (e.totalFundParticipated / e.maxTotalParticipationAllocated || 0)).toFixed(2), "%")
                                                                                              ),
                                                                                              "O" == e.state &&
                                                                                                  i.a.createElement("span", { className: "participants-center" }, i.a.createElement("b", null, e.totalCountUserParticipated), " Participants"),
                                                                                              i.a.createElement(
                                                                                                  "span",
                                                                                                  { className: "text-allocation" },
                                                                                                  i.a.createElement("b", null, e.totalFundParticipated.toFixed(4), "/", e.maxTotalParticipationAllocated)
                                                                                              )
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "item-social" },
                                                                          e.pancakeswap &&
                                                                              i.a.createElement(
                                                                                  "a",
                                                                                  { style: { backgroundColor: "#47d4dc" }, href: e.pancakeswap, target: "_blank" },
                                                                                  i.a.createElement("img", { height: "18", src: "/images/pancake-swap.png" })
                                                                              ),
                                                                          e.website && i.a.createElement("a", { href: e.website, target: "_blank" }, i.a.createElement("i", { className: "fas fa-globe" })),
                                                                          e.twitter && i.a.createElement("a", { href: e.twitter, target: "_blank" }, i.a.createElement("i", { className: "fab fa-twitter" })),
                                                                          e.medium && i.a.createElement("a", { href: e.medium, target: "_blank" }, i.a.createElement("i", { className: "fab fa-medium-m" })),
                                                                          e.telegram && i.a.createElement("a", { href: e.telegram, target: "_blank" }, i.a.createElement("i", { className: "fab fa-telegram" }))
                                                                      )
                                                                  ),
                                                                  i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                                  i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                              ),
                                                              i.a.createElement("div", { className: "bordered__icon bordered__icon--left" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })),
                                                              i.a.createElement("div", { className: "bordered__icon bordered__icon--right" }, i.a.createElement("img", { src: "/images/bordered-lines-narrow.svg", alt: "" }))
                                                          )
                                                      )
                                                  );
                                              })
                                            : i.a.createElement("span", { className: "text-white fs-mb-16", style: { fontSize: "24px" } }, "No projects currently coming soon")
                                    )
                                )
                            )
                        )
                    );
                },
                ua =
                    (a(627),
                    function () {
                        var e = Object(s.b)(),
                            t = Ve();
                        return (
                            Object(r.useEffect)(
                                function () {
                                    e(ia());
                                },
                                [t]
                            ),
                            i.a.createElement(
                                "div",
                                { className: "projects-page" },
                                i.a.createElement(
                                    "section",
                                    { id: "intro", className: "section intro" },
                                    i.a.createElement(
                                        "div",
                                        { className: "wrapper" },
                                        i.a.createElement("div", { className: "intro__img" }, i.a.createElement("img", { className: "lighten", src: "/images/intro-img.png", alt: "", style: { maxWidth: "100%" } })),
                                        i.a.createElement(
                                            "div",
                                            { className: "intro__nav intro__wrapper justify-content-center mt-5 d-none d-md-flex" },
                                            i.a.createElement(
                                                "div",
                                                { className: "intro-btns flex-wrap me-0 justify-content-center", style: { rowGap: "20px" } },
                                                i.a.createElement(
                                                    "a",
                                                    { href: "https://gamezone.io/", target: "_blank", className: "intro-btns__item btn btn--icon btn--custom bordered bordered--btn bordered--btn_no-angled" },
                                                    i.a.createElement("img", { src: "/images/homepage.png", height: "24", alt: "" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                ),
                                                i.a.createElement(
                                                    be.a,
                                                    { to: Be, className: "intro-btns__item btn btn--icon btn--custom bordered bordered--btn bordered--btn_no-angled" },
                                                    i.a.createElement("img", { src: "/images/staking.png", height: "24", alt: "" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                    i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                    i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                )
                                            )
                                        )
                                    )
                                ),
                                i.a.createElement(Zt.a, null, i.a.createElement(sa, null), i.a.createElement(ca, null), i.a.createElement(la, null)),
                                i.a.createElement(Zt.a, { className: "mt-5" }, i.a.createElement(Ft, null))
                            )
                        );
                    }),
                ma = function (e) {
                    var t = Object(s.b)(),
                        a = $e(),
                        n = Qe(),
                        o = Object(r.useState)(0),
                        l = Object(tt.a)(o, 2),
                        c = l[0],
                        u = l[1],
                        m = Xe(),
                        d = et(),
                        p = Object(r.useState)(!1),
                        b = Object(tt.a)(p, 2),
                        h = b[0],
                        E = b[1];
                    return i.a.createElement(
                        "div",
                        { className: "modal fade", id: "buyModal", tabIndex: "-1", "aria-labelledby": "buyModalLabel", "aria-hidden": "true", "data-bs-backdrop": "static", "data-bs-keyboard": "false" },
                        i.a.createElement(
                            "div",
                            { className: "modal-dialog modal-md modal-dialog-centered" },
                            i.a.createElement(
                                "div",
                                { className: "modal-content" },
                                i.a.createElement(
                                    "div",
                                    { className: "modal-header" },
                                    i.a.createElement("h5", { className: "modal-title", id: "buyModalLabel" }, "Join ", m, " Pool"),
                                    i.a.createElement("div", { className: "d-flex align-items-center" }, i.a.createElement("button", { type: "button", className: "btn-close me-2", "data-bs-dismiss": "modal", "aria-label": "Close" }))
                                ),
                                i.a.createElement(
                                    "div",
                                    { className: "modal-body pb-5" },
                                    i.a.createElement(
                                        "div",
                                        { className: "unlock__bordered bordered mx-auto mt-5", style: { maxWidth: "100%", width: "400px" } },
                                        i.a.createElement(
                                            "div",
                                            { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                                            i.a.createElement(
                                                "div",
                                                { className: "bordered__block pb-3" },
                                                i.a.createElement(
                                                    "div",
                                                    { className: "text-start" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "p-form-group" },
                                                        i.a.createElement("label", { className: "form-label p-main-text" }, d, " Amount"),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative w-100 py-0" },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "d-flex align-items-center justify-content-between px-3 w-100" },
                                                                i.a.createElement("input", {
                                                                    type: "number",
                                                                    className: "form-control px-0",
                                                                    placeholder: 0,
                                                                    defaultValue: 0,
                                                                    autoFocus: !0,
                                                                    onChange: function (t) {
                                                                        return (function (t) {
                                                                            var a = Number(t.target.value);
                                                                            0 < a && a <= e.remainingAllocation && a <= e.walletInfo.remainingAllocation && a <= e.walletInfo.tokenBalance ? E(!0) : E(!1), u(a), e.handleInputAmount(a);
                                                                        })(t);
                                                                    },
                                                                    id: "inputAmountSwap",
                                                                }),
                                                                i.a.createElement(
                                                                    "span",
                                                                    {
                                                                        style: { cursor: "pointer" },
                                                                        onClick: function () {
                                                                            if (0 != e.allocationNumber && 0 != e.remainingAllocation)
                                                                                return e.allocationNumber > 0 && e.allocationNumber < e.remainingAllocation && e.allocationNumber < e.walletInfo.tokenBalance
                                                                                    ? ((document.getElementById("inputAmountSwap").value = _e.formatNumberDownRound(e.allocationNumber, 6)),
                                                                                      u(_e.formatNumberDownRound(e.allocationNumber, 6)),
                                                                                      void E(!0))
                                                                                    : e.remainingAllocation > 0 && e.remainingAllocation < e.walletInfo.tokenBalance
                                                                                    ? ((document.getElementById("inputAmountSwap").value = _e.formatNumberDownRound(e.remainingAllocation, 6)),
                                                                                      u(_e.formatNumberDownRound(e.remainingAllocation, 6)),
                                                                                      void E(!0))
                                                                                    : e.walletInfo.tokenBalance > 0 && e.remainingAllocation >= e.walletInfo.tokenBalance
                                                                                    ? ((document.getElementById("inputAmountSwap").value = _e.formatNumberDownRound(e.walletInfo.tokenBalance, 6)),
                                                                                      u(_e.formatNumberDownRound(e.walletInfo.tokenBalance, 6)),
                                                                                      void E(!0))
                                                                                    : void E(!1);
                                                                            E(!1);
                                                                        },
                                                                    },
                                                                    "MAX"
                                                                )
                                                            ),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "d-flex align-items-start justify-content-between" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "font-14" },
                                                            "Your balance: ",
                                                            i.a.createElement("b", { className: "text-warning" }, null === e || void 0 === e ? void 0 : e.tokenBalance, " ", null === e || void 0 === e ? void 0 : e.symbol)
                                                        ),
                                                        i.a.createElement("div", null)
                                                    )
                                                )
                                            ),
                                            i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                            i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                        ),
                                        i.a.createElement(
                                            "div",
                                            { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                            i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                        ),
                                        i.a.createElement(
                                            "div",
                                            { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                            i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                        )
                                    ),
                                    i.a.createElement(
                                        "div",
                                        { className: "get-start mt-5 text-center", style: { columnGap: "10px" } },
                                        i.a.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                disabled: !h,
                                                onClick: function () {
                                                    n &&
                                                        a &&
                                                        (t({ type: Ge.REQUEST_SUBMIT }),
                                                        n
                                                            .buyTokens({ contractAddress: a.contract, tokenAddress: a.tokenAddress, amount: Number(c) }, function (a) {
                                                                "BUY_SUCCESS" == a.status &&
                                                                    (t({ type: Ge.REQUEST_DONE }),
                                                                    e.handleBuyClick(),
                                                                    E(!1),
                                                                    (document.getElementById("inputAmountSwap").value = 0),
                                                                    t({ type: Ge.ALERT_SUCCESS, message: "Successfully Joined Pool" })),
                                                                    "BUY_FAIL" == a.status && (t({ type: Ge.REQUEST_DONE }), t({ type: Ge.ALERT_FAILS, message: "Failed to Join Pool" }));
                                                            })
                                                            .catch(function (e) {
                                                                t({ type: Ge.REQUEST_DONE }), t({ type: Ge.ALERT_FAILS, message: "Failed to Join Pool! Please try again!" }), console.log(e);
                                                            }));
                                                },
                                                "data-bs-dismiss": "modal",
                                                className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                style: { minWidth: "180px" },
                                            },
                                            i.a.createElement("span", null, "Join"),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                        )
                                    )
                                )
                            )
                        )
                    );
                },
                da = function (e) {
                    var t = Object(s.b)(),
                        a = $e(),
                        n = Qe(),
                        o = Object(r.useState)(0),
                        l = Object(tt.a)(o, 2),
                        c = l[0],
                        u = l[1],
                        m = Xe(),
                        d = et(),
                        p = Object(r.useState)(!1),
                        b = Object(tt.a)(p, 2),
                        h = b[0],
                        E = b[1];
                    return i.a.createElement(
                        "div",
                        { className: "modal fade", id: "approveModal", tabIndex: "-1", "aria-labelledby": "approveModalLabel", "aria-hidden": "true", "data-bs-backdrop": "static", "data-bs-keyboard": "false" },
                        i.a.createElement(
                            "div",
                            { className: "modal-dialog modal-md modal-dialog-centered" },
                            i.a.createElement(
                                "div",
                                { className: "modal-content" },
                                i.a.createElement(
                                    "div",
                                    { className: "modal-header" },
                                    i.a.createElement("h5", { className: "modal-title", id: "approveModalLabel" }, "Join ", m, " Pool"),
                                    i.a.createElement("div", { className: "d-flex align-items-center" }, i.a.createElement("button", { type: "button", className: "btn-close me-2", "data-bs-dismiss": "modal", "aria-label": "Close" }))
                                ),
                                i.a.createElement(
                                    "div",
                                    { className: "modal-body pb-5" },
                                    i.a.createElement(
                                        "div",
                                        { className: "unlock__bordered bordered mx-auto mt-5", style: { maxWidth: "100%", width: "400px" } },
                                        i.a.createElement(
                                            "div",
                                            { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                                            i.a.createElement(
                                                "div",
                                                { className: "bordered__block pb-3" },
                                                i.a.createElement(
                                                    "div",
                                                    { className: "text-start" },
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "p-form-group" },
                                                        i.a.createElement("label", { className: "form-label p-main-text" }, d, " Amount"),
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "btn btn--custom bordered bordered--btn bordered--btn_no-angled position-relative w-100 py-0" },
                                                            i.a.createElement(
                                                                "div",
                                                                { className: "d-flex align-items-center justify-content-between px-3 w-100" },
                                                                i.a.createElement("input", {
                                                                    type: "number",
                                                                    className: "form-control px-0",
                                                                    placeholder: 0,
                                                                    defaultValue: 0,
                                                                    autoFocus: !0,
                                                                    onChange: function (t) {
                                                                        return (function (t) {
                                                                            var a = Number(t.target.value);
                                                                            0 < a && a <= e.walletInfo.remainingAllocation && a <= e.walletInfo.tokenBalance ? E(!0) : E(!1), u(a), e.handleInputAmount(a);
                                                                        })(t);
                                                                    },
                                                                    id: "inputAmountApprove",
                                                                }),
                                                                i.a.createElement(
                                                                    "span",
                                                                    {
                                                                        style: { cursor: "pointer" },
                                                                        onClick: function () {
                                                                            return e.walletInfo.tokenBalance > 0 && e.walletInfo.remainingAllocation <= e.walletInfo.tokenBalance
                                                                                ? (u(_e.formatNumberDownRound(e.walletInfo.remainingAllocation, 6)),
                                                                                  (document.getElementById("inputAmountApprove").value = _e.formatNumberDownRound(e.walletInfo.remainingAllocation, 6)),
                                                                                  void E(!0))
                                                                                : e.walletInfo.remainingAllocation > 0 && e.walletInfo.remainingAllocation > e.walletInfo.tokenBalance
                                                                                ? (u(_e.formatNumberDownRound(e.walletInfo.tokenBalance, 6)),
                                                                                  (document.getElementById("inputAmountApprove").value = _e.formatNumberDownRound(e.walletInfo.tokenBalance, 6)),
                                                                                  void E(!0))
                                                                                : void E(!1);
                                                                        },
                                                                    },
                                                                    "MAX"
                                                                )
                                                            ),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        { className: "d-flex align-items-start justify-content-between" },
                                                        i.a.createElement(
                                                            "div",
                                                            { className: "font-14" },
                                                            "Your balance: ",
                                                            i.a.createElement("b", { className: "text-warning" }, null === e || void 0 === e ? void 0 : e.tokenBalance, " ", null === e || void 0 === e ? void 0 : e.symbol)
                                                        ),
                                                        i.a.createElement("div", null)
                                                    )
                                                )
                                            ),
                                            i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                            i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                        ),
                                        i.a.createElement(
                                            "div",
                                            { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                            i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                        ),
                                        i.a.createElement(
                                            "div",
                                            { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                            i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                        )
                                    ),
                                    i.a.createElement(
                                        "div",
                                        { className: "get-start mt-5 text-center", style: { columnGap: "10px" } },
                                        i.a.createElement(
                                            "button",
                                            {
                                                type: "button",
                                                disabled: !h,
                                                onClick: function () {
                                                    n &&
                                                        a &&
                                                        (t({ type: Ge.REQUEST_SUBMIT }),
                                                        n
                                                            .approve({ contractAddress: a.contract, tokenContractAddress: a.tokenAddress, amount: Number(c) }, function (a) {
                                                                "APPROVED" == a.status &&
                                                                    (t({ type: Ge.REQUEST_DONE }),
                                                                    e.handleBuyClick(),
                                                                    (document.getElementById("inputAmountApprove").value = 0),
                                                                    E(!1),
                                                                    t({ type: Ge.ALERT_SUCCESS, message: "Approve Success" })),
                                                                    "APPROVE_FAILS" == a.status && (t({ type: Ge.REQUEST_DONE }), t({ type: Ge.ALERT_FAILS, message: "Failed to Approve Tokens" }));
                                                            })
                                                            .catch(function (e) {
                                                                t({ type: Ge.ALERT_SUCCESS, message: "Token Approve Fails! Please try again!" }), t({ type: Ge.REQUEST_DONE });
                                                            }));
                                                },
                                                "data-bs-dismiss": "modal",
                                                className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                style: { minWidth: "180px" },
                                            },
                                            i.a.createElement("span", null, "Approve"),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                            i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                        )
                                    )
                                )
                            )
                        )
                    );
                },
                pa = function (e) {
                    return i.a.createElement(
                        "div",
                        { className: "unlock__bordered bordered mx-auto mt-5", style: { maxWidth: "100%" } },
                        i.a.createElement(
                            "div",
                            { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                            i.a.createElement(
                                "div",
                                { className: "bordered__block pb-3 p-2-mb" },
                                i.a.createElement("div", { className: "block-title" }, i.a.createElement("h4", null, "Schedule")),
                                i.a.createElement(
                                    "div",
                                    { className: "table-responsive" },
                                    i.a.createElement(
                                        "table",
                                        { className: "table mb-0 pp-table-info text-white" },
                                        i.a.createElement(
                                            "tbody",
                                            null,
                                            i.a.createElement(
                                                "tr",
                                                { className: "card-header", style: { border: "none" } },
                                                i.a.createElement("td", { className: "text-white" }, "Round"),
                                                i.a.createElement("td", { className: "text-white" }, "Opens"),
                                                i.a.createElement("td", { className: "text-white" }, "Closes")
                                            ),
                                            e.roundInfo.length > 0 &&
                                                e.roundInfo.map(function (e, t) {
                                                    return i.a.createElement(
                                                        "tr",
                                                        { key: t },
                                                        i.a.createElement("td", { className: "text-white" }, e.round),
                                                        i.a.createElement(
                                                            "td",
                                                            null,
                                                            i.a.createElement(
                                                                "h5",
                                                                { className: "mb-0" },
                                                                ve()(1e3 * e.opens || 0)
                                                                    .utc()
                                                                    .format("MM-DD HH:mm"),
                                                                " UTC"
                                                            )
                                                        ),
                                                        i.a.createElement(
                                                            "td",
                                                            null,
                                                            i.a.createElement(
                                                                "h5",
                                                                { className: "mb-0" },
                                                                ve()(1e3 * e.closes || 0)
                                                                    .utc()
                                                                    .format("MM-DD HH:mm"),
                                                                " UTC"
                                                            )
                                                        )
                                                    );
                                                })
                                        )
                                    )
                                ),
                                i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                            ),
                            i.a.createElement("div", { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })),
                            i.a.createElement(
                                "div",
                                { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                            )
                        )
                    );
                },
                ba = (function () {
                    var e = Object(Ye.a)(
                        Fe.a.mark(function e(t, a) {
                            var n, r, i, o, l;
                            return Fe.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (n = t.tokenAddress),
                                                    (r = t.tokenSymbol),
                                                    (i = t.tokenDecimals),
                                                    (o = t.tokenImage),
                                                    (e.prev = 1),
                                                    (e.next = 4),
                                                    window.ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: n, symbol: r, decimals: i, image: o } } })
                                                );
                                            case 4:
                                                (l = e.sent) ? (a({ status: "ADD_TOKEN_SUCCESS", data: l }), console.log("Thanks for your interest!")) : (a({ status: "ADD_TOKEN_FAILS", data: l }), console.log("Your loss!")), (e.next = 12);
                                                break;
                                            case 8:
                                                (e.prev = 8), (e.t0 = e.catch(1)), a({ status: "ADD_TOKEN_FAILS", data: null }), console.log(e.t0);
                                            case 12:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[1, 8]]
                            );
                        })
                    );
                    return function (t, a) {
                        return e.apply(this, arguments);
                    };
                })(),
                ha = function (e) {
                    var t = Object(s.b)(),
                        a = Qe(),
                        n = Object(r.useState)(1),
                        o = Object(tt.a)(n, 2),
                        l = o[0],
                        c = o[1],
                        u = Object(r.useState)([]),
                        m = Object(tt.a)(u, 2),
                        d = m[0],
                        p = m[1];
                    Object(r.useEffect)(
                        function () {
                            e && (p(e.allocationInfo), c(e.layout));
                        },
                        [e]
                    );
                    var b = function (n) {
                            a &&
                                (t({ type: Ge.REQUEST_SUBMIT }),
                                a.claim({ contractAddress: e.contractAddress, index: n }, function (a) {
                                    "CLAIM_SUCCESS" == a.status && (t({ type: Ge.REQUEST_DONE }), t({ type: Ge.ALERT_SUCCESS, message: "Tokens Successfully Claimed" }), e.handleBuyClick()),
                                        "CLAIM_FAIL" == a.status && (t({ type: Ge.REQUEST_DONE }), t({ type: Ge.ALERT_FAILS, message: "Failed to claim tokens, Please contact support" }), e.handleBuyClick());
                                }));
                        },
                        h = (function () {
                            var a = Object(Ye.a)(
                                Fe.a.mark(function a() {
                                    return Fe.a.wrap(function (a) {
                                        for (;;)
                                            switch ((a.prev = a.next)) {
                                                case 0:
                                                    e.tokenAddress
                                                        ? ba({ tokenAddress: e.tokenAddress, tokenSymbol: e.tokenSymbol, tokenDecimals: e.decimals, tokenImage: "" }, function (e) {
                                                              "ADD_TOKEN_SUCCESS" == e.status && t({ type: Ge.ALERT_SUCCESS, message: "Successfully added token to MetaMask" }),
                                                                  "ADD_TOKEN_FAILS" == e.status && t({ type: Ge.ALERT_FAILS, message: "Failed to add token to MetaMask" });
                                                          })
                                                        : t({ type: Ge.ALERT_FAILS, message: "Token incorrect!" });
                                                case 1:
                                                case "end":
                                                    return a.stop();
                                            }
                                    }, a);
                                })
                            );
                            return function () {
                                return a.apply(this, arguments);
                            };
                        })();
                    return i.a.createElement(
                        "div",
                        { className: "py-3" },
                        i.a.createElement(
                            "div",
                            { className: "d-flex flex-wrap justify-content-center justify-content-md-end", style: { rowGap: "20px" } },
                            i.a.createElement(
                                "div",
                                null,
                                e.allocationInfo.length >= 0 &&
                                    i.a.createElement(
                                        "button",
                                        {
                                            type: "button",
                                            onClick: function () {
                                                return h();
                                            },
                                            className: "btn btn-oht btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                        },
                                        i.a.createElement("span", null, "Add token to ", i.a.createElement("b", null, "MetaMask")),
                                        i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                        i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                        i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                        i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                        i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                        i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                        i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                        i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                    )
                            )
                        ),
                        i.a.createElement(
                            "div",
                            { className: "unlock__bordered bordered mx-auto mt-4", style: { maxWidth: "100%" } },
                            i.a.createElement(
                                "div",
                                { className: "bordered__inner bordered--flex bordered--double_angled" },
                                i.a.createElement(
                                    "div",
                                    { className: "bordered__block pb-3 p-2-mb" },
                                    i.a.createElement("div", { className: "block-title" }, i.a.createElement("h4", null, "Your Allocation")),
                                    i.a.createElement(
                                        "div",
                                        { className: "d-lg-none d-block mt-4" },
                                        d.length > 0 &&
                                            1 === l &&
                                            d.map(function (t, a) {
                                                return i.a.createElement(
                                                    "div",
                                                    { className: "allocation-card", key: a },
                                                    i.a.createElement("div", null, "#", t.no),
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement("span", null, "Allocation"),
                                                        i.a.createElement("h4", null, _e.formatNumberDownRoundWithExtractMax(t.allocationAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement("span", null, "Date"),
                                                        i.a.createElement(
                                                            "h4",
                                                            null,
                                                            0 !== t.timestamp && "0" !== t.timestamp
                                                                ? i.a.createElement(
                                                                      "div",
                                                                      null,
                                                                      ve()(1e3 * t.timestamp || 0)
                                                                          .utc()
                                                                          .format("YYYY-MM-DD HH:mm:ss"),
                                                                      " UTC "
                                                                  )
                                                                : "DEX Listing"
                                                        )
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement("span", null, "Claimed"),
                                                        i.a.createElement("h4", null, _e.formatNumberDownRoundWithExtractMax(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement(
                                                            "button",
                                                            {
                                                                type: "button",
                                                                disabled: !("OPEN" === t.status),
                                                                onClick: function () {
                                                                    return b(a);
                                                                },
                                                                className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative w-100",
                                                                style: { minWidth: "170px" },
                                                            },
                                                            i.a.createElement("span", null, "Claim Tokens"),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                        )
                                                    )
                                                );
                                            }),
                                        d.length > 0 &&
                                            2 === l &&
                                            d.map(function (t, a) {
                                                return i.a.createElement(
                                                    "div",
                                                    { className: "allocation-card", key: a },
                                                    i.a.createElement("div", null, "#", t.no),
                                                    i.a.createElement("div", null, i.a.createElement("span", null, "Allocation"), i.a.createElement("h4", null, Se(t.allocationAmount, e.decimals, 4))),
                                                    i.a.createElement("div", null, i.a.createElement("span", null, "Percentage"), i.a.createElement("h4", null, (t.percentage / 100).toFixed(2), "%")),
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement("span", null, "Date"),
                                                        i.a.createElement("h4", null, 0 !== t.timestamp && "0" !== t.timestamp ? i.a.createElement("div", { dangerouslySetInnerHTML: { __html: Oe(t.timestamp) } }) : "DEX Listing")
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement("span", null, "Claimed"),
                                                        i.a.createElement("h4", null, _e.formatNumberDownRoundWithExtractMax(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4))
                                                    ),
                                                    i.a.createElement(
                                                        "div",
                                                        null,
                                                        i.a.createElement(
                                                            "button",
                                                            {
                                                                type: "button",
                                                                disabled: !("OPEN" === t.status),
                                                                onClick: function () {
                                                                    return b(a);
                                                                },
                                                                className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative w-100",
                                                                style: { minWidth: "170px" },
                                                            },
                                                            i.a.createElement("span", null, "Claim Tokens"),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                            i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                        )
                                                    )
                                                );
                                            })
                                    ),
                                    i.a.createElement(
                                        "div",
                                        { className: "d-none d-lg-block" },
                                        i.a.createElement(
                                            "div",
                                            { className: "table-responsive" },
                                            i.a.createElement(
                                                "table",
                                                { className: "table mb-5 pp-table-info text-white" },
                                                i.a.createElement(
                                                    "tbody",
                                                    null,
                                                    i.a.createElement(
                                                        "tr",
                                                        { className: "card-header", style: { border: "none" } },
                                                        i.a.createElement("td", null, "No."),
                                                        i.a.createElement("td", null, "Allocation"),
                                                        2 === l && i.a.createElement("td", null, "Percentage"),
                                                        i.a.createElement("td", null, "Date"),
                                                        i.a.createElement("td", null, "Claimed"),
                                                        ze() && i.a.createElement("td", null, "Action")
                                                    ),
                                                    d.length > 0 &&
                                                        1 === l &&
                                                        d.map(function (t, a) {
                                                            return i.a.createElement(
                                                                "tr",
                                                                { key: a },
                                                                i.a.createElement("td", null, i.a.createElement("h5", { className: "mb-0" }, t.no)),
                                                                i.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    i.a.createElement("h5", { className: "mb-0" }, _e.formatNumberDownRoundWithExtractMax(t.allocationAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)
                                                                ),
                                                                i.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    i.a.createElement(
                                                                        "h5",
                                                                        { className: "mb-0" },
                                                                        0 !== t.timestamp && "0" !== t.timestamp
                                                                            ? i.a.createElement(
                                                                                  "div",
                                                                                  null,
                                                                                  ve()(1e3 * t.timestamp || 0)
                                                                                      .utc()
                                                                                      .format("YYYY-MM-DD HH:mm:ss"),
                                                                                  " UTC "
                                                                              )
                                                                            : "DEX Listing"
                                                                    )
                                                                ),
                                                                i.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    i.a.createElement("h5", { className: "mb-0" }, _e.formatNumberDownRoundWithExtractMax(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4), " ", e.tokenSymbol)
                                                                ),
                                                                i.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    i.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            disabled: !("OPEN" === t.status),
                                                                            onClick: function () {
                                                                                return b(a);
                                                                            },
                                                                            className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                                            style: { minWidth: "120px" },
                                                                        },
                                                                        i.a.createElement("span", null, "Claim Tokens"),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                    )
                                                                )
                                                            );
                                                        }),
                                                    d.length > 0 &&
                                                        2 === l &&
                                                        d.map(function (t, a) {
                                                            return i.a.createElement(
                                                                "tr",
                                                                { key: a },
                                                                i.a.createElement("td", null, i.a.createElement("h5", { className: "mb-0" }, t.no)),
                                                                i.a.createElement("td", null, i.a.createElement("h5", { className: "mb-0" }, Se(t.allocationAmount, e.decimals, 4))),
                                                                i.a.createElement("td", null, i.a.createElement("h5", { className: "mb-0" }, (t.percentage / 100).toFixed(2), "%")),
                                                                i.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    i.a.createElement(
                                                                        "h5",
                                                                        { className: "mb-0" },
                                                                        0 !== t.timestamp && "0" !== t.timestamp ? i.a.createElement("div", { dangerouslySetInnerHTML: { __html: Oe(t.timestamp) } }) : "DEX Listing"
                                                                    )
                                                                ),
                                                                i.a.createElement("td", null, i.a.createElement("h5", { className: "mb-0" }, _e.formatNumberDownRoundWithExtractMax(t.claimedAmount / Math.pow(10, e.decimals) || 0, 4))),
                                                                i.a.createElement(
                                                                    "td",
                                                                    null,
                                                                    i.a.createElement(
                                                                        "button",
                                                                        {
                                                                            type: "button",
                                                                            disabled: !("OPEN" === t.status),
                                                                            onClick: function () {
                                                                                return b(a);
                                                                            },
                                                                            className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                                            style: { minWidth: "170px" },
                                                                        },
                                                                        i.a.createElement("span", null, "Claim Tokens"),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                    )
                                                                )
                                                            );
                                                        })
                                                )
                                            )
                                        )
                                    ),
                                    i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                    i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                ),
                                i.a.createElement(
                                    "div",
                                    { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                    i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                ),
                                i.a.createElement(
                                    "div",
                                    { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                    i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                )
                            )
                        )
                    );
                },
                Ea =
                    (a(628),
                    function () {
                        var e = Object(s.b)(),
                            t = Object(T.g)(),
                            a = Object(r.useState)(""),
                            n = Object(tt.a)(a, 2),
                            o = n[0],
                            l = n[1],
                            c = Object(r.useState)(0),
                            m = Object(tt.a)(c, 2),
                            p = m[0],
                            b = m[1],
                            h = Object(r.useState)(0),
                            E = Object(tt.a)(h, 2),
                            f = E[0],
                            y = E[1],
                            v = Object(r.useState)(0),
                            g = Object(tt.a)(v, 2),
                            N = g[0],
                            w = g[1],
                            _ = Object(r.useState)(0),
                            S = Object(tt.a)(_, 2),
                            O = S[0],
                            k = S[1],
                            A = Object(r.useState)(0),
                            C = Object(tt.a)(A, 2),
                            I = (C[0], C[1]),
                            x = Object(r.useState)(0),
                            P = Object(tt.a)(x, 2),
                            j = P[0],
                            R = P[1],
                            L = Object(r.useState)(!1),
                            W = Object(tt.a)(L, 2),
                            M = W[0],
                            D = W[1],
                            B = Object(r.useState)(null),
                            G = Object(tt.a)(B, 2),
                            U = G[0],
                            Y = G[1],
                            K = Object(r.useState)(""),
                            H = Object(tt.a)(K, 2),
                            J = H[0],
                            z = H[1],
                            Z = Object(r.useState)(0),
                            q = Object(tt.a)(Z, 2),
                            V = q[0],
                            Q = q[1],
                            $ = Object(r.useState)(""),
                            X = Object(tt.a)($, 2),
                            ee = X[0],
                            te = X[1],
                            ae = Object(r.useState)(0),
                            ne = Object(tt.a)(ae, 2),
                            re = ne[0],
                            ie = ne[1],
                            oe = Object(r.useState)(0),
                            le = Object(tt.a)(oe, 2),
                            se = le[0],
                            ce = le[1],
                            ue = Object(r.useState)([]),
                            me = Object(tt.a)(ue, 2),
                            de = me[0],
                            pe = me[1],
                            be = Object(r.useState)(1),
                            he = Object(tt.a)(be, 2),
                            Ee = he[0],
                            fe = he[1],
                            ye = Object(r.useState)(!1),
                            ge = Object(tt.a)(ye, 2),
                            Ne = ge[0],
                            we = ge[1],
                            Te = Object(r.useState)(!1),
                            Se = Object(tt.a)(Te, 2),
                            Oe = Se[0],
                            ke = Se[1],
                            Ce = Object(s.c)(function (e) {
                                return Object(d.get)(e, "utils.blocking", !1);
                            }),
                            Ie = Object(r.useState)({ remainingAllocation: 0, tokenBalance: 0 }),
                            xe = Object(tt.a)(Ie, 2),
                            Pe = xe[0],
                            je = xe[1];
                        Object(r.useEffect)(function () {
                            return (
                                Ae()("body").addClass("no-bg"),
                                function () {
                                    Ae()("body").removeClass("no-bg");
                                }
                            );
                        }, []),
                            Object(r.useEffect)(
                                function () {
                                    var a = t.contract;
                                    a && "string" === typeof a
                                        ? (l(a),
                                          e(oa(a)),
                                          e(
                                              (function (e) {
                                                  return { type: F.SET_CURRENT_CONTRACT_SELECTED, data: e };
                                              })(a)
                                          ))
                                        : u.push(De);
                                },
                                [Ce]
                            );
                        var Re = rt().account,
                            Le = Ve(),
                            We = $e(),
                            Me = Object(s.c)(function (e) {
                                return Object(d.get)(e, "utils.showModalHelp", !1);
                            }),
                            Be = Qe(),
                            Ue = Object(s.c)(function (e) {
                                return Object(d.get)(e, "project.selectedProject.infoRound", []);
                            }),
                            Ke = Object(r.useState)(0),
                            He = Object(tt.a)(Ke, 2),
                            Je = He[0],
                            ze = He[1],
                            Ze = Object(r.useState)(0),
                            qe = Object(tt.a)(Ze, 2),
                            Xe = qe[0],
                            et = qe[1],
                            at = Object(r.useState)(0),
                            nt = Object(tt.a)(at, 2),
                            it = nt[0],
                            ot = nt[1];
                        Object(r.useEffect)(
                            function () {
                                o && e(oa(o));
                            },
                            [Le, o]
                        ),
                            Object(r.useEffect)(
                                function () {
                                    We && (We.closeTime !== Je && ze(We.closeTime), We.openTime != Xe && et(We.openTime), We.fcfsOpenTime != it && ot(We.fcfsOpenTime), we(We.yourAllocationVisible), Y(We));
                                },
                                [We]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    Xe > 0 &&
                                        ea(
                                            "idOpenTime-".concat(We.contract),
                                            1e3 * Xe,
                                            function (t) {
                                                e({ type: Ge.SET_JOB_COUNT_DOWN_OPEN, data: t });
                                            },
                                            function (t) {
                                                lt(o), e(oa(o));
                                            }
                                        );
                                },
                                [Xe]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    Je > 0 &&
                                        ea(
                                            "idTimeClose-".concat(We.contract),
                                            1e3 * Je,
                                            function (t) {
                                                e({ type: Ge.SET_JOB_COUNT_DOWN_CLOSE, data: t });
                                            },
                                            function (t) {
                                                lt(o), e(oa(o));
                                            }
                                        );
                                },
                                [Je]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    it > 0 &&
                                        ea(
                                            "idFcfsOpenTime-".concat(We.contract),
                                            1e3 * it,
                                            function (t) {
                                                e({ type: Ge.SET_JOB_COUNT_DOWN_FCFS_TIME, data: t });
                                            },
                                            function (t) {
                                                lt(o), e(oa(o));
                                            }
                                        );
                                },
                                [it]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    re > 0 &&
                                        We &&
                                        ea(
                                            "idRoundTime-".concat(We.contract),
                                            1e3 * re,
                                            function (t) {
                                                e({ type: Ge.SET_JOB_COUNT_DOWN_ROUND, data: t });
                                            },
                                            function (t) {
                                                lt(o), e(oa(o));
                                            }
                                        );
                                },
                                [re, We]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    Number(N) > Number(se) ? ke(!0) : ke(!1);
                                },
                                [se, N]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    function a() {
                                        return (a = Object(Ye.a)(
                                            Fe.a.mark(function e() {
                                                var a;
                                                return Fe.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (!(a = t.contract)) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                return (e.next = 4), lt(a);
                                                            case 4:
                                                                return (e.next = 6), st();
                                                            case 6:
                                                                return (e.next = 8), ct(a);
                                                            case 8:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        )).apply(this, arguments);
                                    }
                                    Re &&
                                        Be &&
                                        U &&
                                        (e(ia()),
                                        (function () {
                                            a.apply(this, arguments);
                                        })()),
                                        console.log("update==>", Le);
                                },
                                [Re, Be, j, o, U, Le]
                            );
                        var lt = (function () {
                                var e = Object(Ye.a)(
                                    Fe.a.mark(function e(t) {
                                        return Fe.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        Be &&
                                                            Be.getInfoWallet(t)
                                                                .then(function (e) {
                                                                    if (
                                                                        (console.log("getInfoWallet==>", e),
                                                                        je({ remainingAllocation: e.remainingAllocation / Math.pow(10, U.decimal), tokenBalance: e.tokenBalance / Math.pow(10, U.decimal), ethBalance: e.ethBalance }),
                                                                        y(e.ethBalance),
                                                                        b(e.tokenBalance / Math.pow(10, U.decimal)),
                                                                        k(e.userParticipation / Math.pow(10, U.decimal)),
                                                                        w(e.remainingAllocation / Math.pow(10, U.decimal)),
                                                                        z(e.tier),
                                                                        Q(e.roundState),
                                                                        te(e.roundStateText),
                                                                        document.getElementById("idTextRoundState") && (document.getElementById("idTextRoundState").innerHTML = e.roundStateText),
                                                                        re != e.roundTimestamp && ie(e.roundTimestamp),
                                                                        1 === e.roundState || 3 === e.roundState)
                                                                    ) {
                                                                        if ("C" !== U.state && "P" !== U.state && "TBA" !== U.address)
                                                                            return We.isPrivate ? (0 === e.remainingAllocation ? void D(!1) : void D(!0)) : (D(!0), void w(U.maxSingleParticipationAllocated));
                                                                        D(!1);
                                                                    } else D(!1);
                                                                })
                                                                .catch(function (e) {
                                                                    console.log(e);
                                                                });
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            st = (function () {
                                var e = Object(Ye.a)(
                                    Fe.a.mark(function e() {
                                        return Fe.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        Be.getAllowance(We.tokenAddress, We.contract)
                                                            .then(function (e) {
                                                                ce(e);
                                                            })
                                                            .catch(function (e) {
                                                                console.log(e);
                                                            });
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            ct = function (e) {
                                Be.getInfoAllocations(e)
                                    .then(function (e) {
                                        fe(e.layout), pe(e.infoAllocation);
                                    })
                                    .catch(function (e) {
                                        console.log(e);
                                    });
                            };
                        return i.a.createElement(
                            i.a.Fragment,
                            null,
                            We
                                ? i.a.createElement(
                                      "div",
                                      { className: "pp-detail-page" },
                                      i.a.createElement(
                                          "div",
                                          { className: "pp-detail-banner mb-5 pb-5" },
                                          i.a.createElement(
                                              "div",
                                              { className: "container" },
                                              i.a.createElement(
                                                  "section",
                                                  { id: "welcome", className: "section welcome mb-5" },
                                                  i.a.createElement(
                                                      "div",
                                                      { className: "wrapper" },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "welcome__wrapper" },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "icon-box text-center position-relative zindex2" },
                                                              i.a.createElement("img", { className: "mx-auto img-project-logo", src: We.logo, alt: We.name })
                                                          ),
                                                          i.a.createElement("h2", { className: "welcome__title title title--center title--grad mb-0 position-relative zindex2" }, We.name),
                                                          i.a.createElement("p", { className: "mb-0 text-center text-white position-relative", style: { fontSize: "20px" } }, We.description),
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "item-social position-relative zindex2" },
                                                              We.pancakeswap && i.a.createElement("a", { href: We.pancakeswap, target: "_blank" }, i.a.createElement("img", { height: "20", src: "/images/pancake-swap.png" })),
                                                              We.website && i.a.createElement("a", { href: We.website, target: "_blank" }, i.a.createElement("i", { className: "fas fa-globe-americas" })),
                                                              We.twitter && i.a.createElement("a", { href: We.twitter, target: "_blank" }, i.a.createElement("i", { className: "fab fa-twitter" })),
                                                              We.medium && i.a.createElement("a", { href: We.medium, target: "_blank" }, i.a.createElement("i", { className: "fab fa-medium-m" })),
                                                              We.telegram && i.a.createElement("a", { href: We.telegram, target: "_blank" }, i.a.createElement("i", { className: "fab fa-telegram-plane" }))
                                                          ),
                                                          i.a.createElement("div", { className: "welcome__bg" }, i.a.createElement("img", { src: "/images/welcome-bg.png", className: "w-100", alt: "" }))
                                                      )
                                                  )
                                              ),
                                              i.a.createElement(
                                                  "div",
                                                  { className: "intro__section position-relative", style: { maxWidth: "100%" } },
                                                  i.a.createElement(
                                                      "div",
                                                      { className: "bordered" },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "bordered__inner bordered--flex bordered--single_angled bordered--card" },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "bordered__block position-relative" },
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "items-morex" },
                                                                  ("O" === We.state || "F" === We.state) &&
                                                                      i.a.createElement(
                                                                          i.a.Fragment,
                                                                          null,
                                                                          i.a.createElement("span", { className: "pp-status-open text-success" }, i.a.createElement("i", { className: "mdi mdi-circle text-success" }), " ", "Open")
                                                                      ),
                                                                  "C" === We.state &&
                                                                      i.a.createElement(
                                                                          i.a.Fragment,
                                                                          null,
                                                                          i.a.createElement("span", { className: "pp-status-closed text-danger" }, i.a.createElement("i", { className: "mdi mdi-circle text-danger" }), " ", "Closed")
                                                                      ),
                                                                  "P" === We.state &&
                                                                      i.a.createElement(
                                                                          i.a.Fragment,
                                                                          null,
                                                                          void 0 !== We.openTime
                                                                              ? i.a.createElement(
                                                                                    "span",
                                                                                    { className: "pp-status-opening text-warning" },
                                                                                    i.a.createElement("i", { className: "mdi mdi-circle  text-warning" }),
                                                                                    " ",
                                                                                    "Opens in",
                                                                                    " ",
                                                                                    i.a.createElement("b", { id: "idOpenTime-".concat(We.contract) }, "0d 0h 0m 0s")
                                                                                )
                                                                              : i.a.createElement("span", { className: "pp-status-opening text-warning" }, i.a.createElement("i", { className: "mdi mdi-circle  text-warning" }), "TBA")
                                                                      )
                                                              ),
                                                              "P" !== We.state &&
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "mb-4" },
                                                                      Re &&
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "pp-card-info mt-2" },
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "pp-card-col w-100" },
                                                                                  "Your balance",
                                                                                  i.a.createElement("br", null),
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "d-flex justify-content-between align-items-center mb-2" },
                                                                                      i.a.createElement("strong", { className: "text-white detail-value", id: "idBusdBalance" }, _e.formatNumberDownRound(p, 4), " ", We.symbol)
                                                                                  ),
                                                                                  "BNB" !== We.symbol &&
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "d-flex justify-content-between align-items-center mb-3" },
                                                                                          i.a.createElement("strong", { id: "idKcsBalance", className: "text-white detail-value" }, _e.formatNumberDownRound(f, 4), " BNB")
                                                                                      ),
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "pp-card-col mb-3 mb-md-0" },
                                                                                      "Your approved amount:",
                                                                                      i.a.createElement("br", null),
                                                                                      i.a.createElement("b", { className: "text-white detail-value" }, _e.formatNumberDownRound(se, 4), " ", We.symbol)
                                                                                  )
                                                                              ),
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "pp-card-col w-100" },
                                                                                  J && i.a.createElement("div", null, "Your tier", i.a.createElement("br", null), i.a.createElement("b", { className: "text-white detail-value" }, J))
                                                                              )
                                                                          )
                                                                  ),
                                                              "P" === We.state &&
                                                                  Re &&
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "mb-4" },
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "card card-img-holder bg-gradient-danger mx-auto mx-lg-0" },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "card-body py-3 px-3 px-md-4" },
                                                                              Re &&
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "pp-card-info mt-2" },
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "pp-card-col" },
                                                                                          "Your balance",
                                                                                          i.a.createElement("br", null),
                                                                                          void 0 !== We.openTime
                                                                                              ? i.a.createElement(
                                                                                                    "div",
                                                                                                    { className: "d-flex justify-content-between align-items-center" },
                                                                                                    i.a.createElement(
                                                                                                        "h4",
                                                                                                        { className: "mb-0" },
                                                                                                        i.a.createElement("strong", { id: "idBusdBalance" }, _e.formatNumberDownRound(p, 4) || 0, "\xa0", We.symbol)
                                                                                                    ),
                                                                                                    "P" !== We.state && i.a.createElement("h6", { id: "idBusdConvert" }, "1 ", We.symbol, " = ", We.rate, " ", We.projectTokenSymbol)
                                                                                                )
                                                                                              : i.a.createElement("div", null),
                                                                                          "BNB" !== We.symbol &&
                                                                                              i.a.createElement(
                                                                                                  "div",
                                                                                                  { className: "d-flex justify-content-between align-items-center" },
                                                                                                  i.a.createElement(
                                                                                                      "h4",
                                                                                                      { className: "mb-0" },
                                                                                                      i.a.createElement("strong", { id: "idethBalance" }, _e.formatNumberDownRound(f, 4) || 0, " BNB")
                                                                                                  )
                                                                                              )
                                                                                      )
                                                                                  )
                                                                          )
                                                                      )
                                                                  ),
                                                              i.a.createElement(
                                                                  "div",
                                                                  null,
                                                                  Re
                                                                      ? i.a.createElement(
                                                                            i.a.Fragment,
                                                                            null,
                                                                            "P" !== We.state &&
                                                                                i.a.createElement(
                                                                                    "div",
                                                                                    { className: "d-flex flex-wrap", style: { gap: "20px" } },
                                                                                    i.a.createElement(
                                                                                        "button",
                                                                                        {
                                                                                            type: "button",
                                                                                            disabled: !Oe,
                                                                                            "data-bs-toggle": "modal",
                                                                                            "data-bs-target": "#approveModal",
                                                                                            className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                                                            style: { minWidth: "180px" },
                                                                                        },
                                                                                        i.a.createElement("span", null, "Approve"),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                                    ),
                                                                                    i.a.createElement(
                                                                                        "button",
                                                                                        {
                                                                                            type: "button",
                                                                                            disabled: !M || 0 == se,
                                                                                            "data-bs-toggle": "modal",
                                                                                            "data-bs-target": "#buyModal",
                                                                                            className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                                                            style: { minWidth: "180px" },
                                                                                        },
                                                                                        i.a.createElement("span", null, "Join Pool"),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                                        i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                                        i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                                    )
                                                                                )
                                                                        )
                                                                      : i.a.createElement(
                                                                            "button",
                                                                            {
                                                                                type: "button",
                                                                                "data-bs-toggle": "modal",
                                                                                "data-bs-target": Me ? "#helpModal" : "#connectWalletModal",
                                                                                className: "btn btn-oht btn-connect btn--custom bordered bordered--btn bordered--btn_no-angled position-relative",
                                                                            },
                                                                            i.a.createElement("span", null, "Connect Wallet"),
                                                                            i.a.createElement("div", { className: "btn-rect btn-rect--1" }),
                                                                            i.a.createElement("div", { className: "btn-rect btn-rect--2" }),
                                                                            i.a.createElement("div", { className: "btn-rect btn-rect--3" }),
                                                                            i.a.createElement("div", { className: "btn-rect btn-rect--4" }),
                                                                            i.a.createElement("div", { className: "btn-circle btn-circle--1" }),
                                                                            i.a.createElement("div", { className: "btn-circle btn-circle--2" }),
                                                                            i.a.createElement("div", { className: "btn-circle btn-circle--3" }),
                                                                            i.a.createElement("div", { className: "btn-circle btn-circle--4" })
                                                                        )
                                                              )
                                                          ),
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "bordered__block position-relative pb-5", style: { flex: 1 } },
                                                              "P" !== We.state &&
                                                                  i.a.createElement(
                                                                      "div",
                                                                      null,
                                                                      "O" == We.state &&
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "pp-card-info mt-2" },
                                                                              Re
                                                                                  ? 4 !== V
                                                                                      ? i.a.createElement(
                                                                                            "div",
                                                                                            { className: "pp-card-col w-100" },
                                                                                            ee && i.a.createElement("div", null, i.a.createElement("span", { id: "idTextRoundState" }, " ", ee), i.a.createElement("br", null)),
                                                                                            i.a.createElement("b", { id: "idRoundTime-".concat(We.contract), className: "detail-value" }, " 0d 0h 0m 0s")
                                                                                        )
                                                                                      : i.a.createElement("div", null, "ROUND CLOSED")
                                                                                  : i.a.createElement(
                                                                                        "div",
                                                                                        { className: "pp-card-col w-100" },
                                                                                        "First Come First Serve ",
                                                                                        i.a.createElement("u", null, "opens"),
                                                                                        " in:",
                                                                                        i.a.createElement("br", null),
                                                                                        i.a.createElement("b", { id: "idFcfsOpenTime-".concat(We.contract), className: "detail-value" }, " 0d 0h 0m 0s")
                                                                                    )
                                                                          ),
                                                                      "F" == We.state &&
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "pp-card-info mt-2" },
                                                                              Re
                                                                                  ? 4 !== V
                                                                                      ? i.a.createElement(
                                                                                            "div",
                                                                                            { className: "pp-card-col w-100" },
                                                                                            i.a.createElement("span", { id: "idTextRoundState" }, " ", ee),
                                                                                            i.a.createElement("br", null),
                                                                                            i.a.createElement("b", { id: "idRoundTime-".concat(We.contract), className: "detail-value" }, " 0d 0h 0m 0s")
                                                                                        )
                                                                                      : i.a.createElement("div", null, "ROUND CLOSED")
                                                                                  : i.a.createElement(
                                                                                        "div",
                                                                                        { className: "pp-card-col w-100" },
                                                                                        "Closing in:",
                                                                                        i.a.createElement("br", null),
                                                                                        i.a.createElement("b", { id: "idTimeClose-".concat(We.contract), className: "detail-value" }, " 0d 0h 0m 0s")
                                                                                    )
                                                                          ),
                                                                      "C" == We.state && i.a.createElement("div", { className: "pp-card-info mt-2 text-white" }, i.a.createElement("div", null, "CLOSED")),
                                                                      Re &&
                                                                          i.a.createElement(
                                                                              "div",
                                                                              null,
                                                                              i.a.createElement("hr", { className: "mb-2 mt-2" }),
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "pp-card-info" },
                                                                                  i.a.createElement(
                                                                                      "div",
                                                                                      { className: "d-flex justify-content-between w-100" },
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "pp-card-col w-100" },
                                                                                          "Swapped",
                                                                                          i.a.createElement("br", null),
                                                                                          i.a.createElement("b", { id: "idUseParticipation", className: "detail-value" }, _e.formatNumberDownRound(O, 4), " ", We.symbol),
                                                                                          i.a.createElement(
                                                                                              "div",
                                                                                              null,
                                                                                              i.a.createElement("b", { className: "detail-value" }, " ", "".concat(_e.formatNumberDownRound(O * We.rate, 4), " ").concat(We.projectTokenSymbol))
                                                                                          )
                                                                                      ),
                                                                                      i.a.createElement(
                                                                                          "div",
                                                                                          { className: "pp-card-col w-100" },
                                                                                          "Remaining Allocation",
                                                                                          i.a.createElement("br", null),
                                                                                          i.a.createElement("b", { id: "idBusdMaxBuy", className: "detail-value" }, _e.formatNumberDownRound(N, 4), " ", We.symbol)
                                                                                      )
                                                                                  )
                                                                              )
                                                                          ),
                                                                      i.a.createElement("hr", { className: "mb-2 mt-2" }),
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "pp-card-info" },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "d-flex justify-content-between w-100" },
                                                                              "O" !== We.state
                                                                                  ? i.a.createElement(
                                                                                        "div",
                                                                                        { className: "pp-card-col w-100" },
                                                                                        "Swap progress",
                                                                                        i.a.createElement("br", null),
                                                                                        i.a.createElement(
                                                                                            "div",
                                                                                            { className: "pp-card-progress" },
                                                                                            i.a.createElement("div", {
                                                                                                className: "pp-card-progress-percent",
                                                                                                style: { width: "".concat(100 * (We.totalFundParticipated / We.maxTotalParticipationAllocated || 0), "%") },
                                                                                            }),
                                                                                            i.a.createElement(
                                                                                                "div",
                                                                                                { className: "pp-card-progress-label" },
                                                                                                i.a.createElement(
                                                                                                    "span",
                                                                                                    null,
                                                                                                    i.a.createElement("b", null, (100 * (We.totalFundParticipated / We.maxTotalParticipationAllocated || 0)).toFixed(2), "%")
                                                                                                ),
                                                                                                i.a.createElement(
                                                                                                    "span",
                                                                                                    null,
                                                                                                    i.a.createElement("b", null, We.totalFundParticipated.toFixed(4), "/", We.maxTotalParticipationAllocated, " ", We.symbol)
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                  : i.a.createElement(
                                                                                        "div",
                                                                                        { className: "pp-card-col w-100 pp-card-progress-wrap light-progress disabled" },
                                                                                        i.a.createElement(
                                                                                            "div",
                                                                                            { className: "pp-card-progress text-center" },
                                                                                            i.a.createElement("div", { className: "pp-card-progress-percent pp-card-progress-percent-card" }),
                                                                                            i.a.createElement(
                                                                                                "div",
                                                                                                { className: "pp-card-progress-label" },
                                                                                                i.a.createElement("span", { className: "participants-center" }, "Allocation round"),
                                                                                                i.a.createElement("span", { className: "participants-center", style: { top: "8px" } }, We.totalCountUserParticipated, " Participants")
                                                                                            )
                                                                                        )
                                                                                    )
                                                                          )
                                                                      )
                                                                  )
                                                          )
                                                      )
                                                  ),
                                                  i.a.createElement("div", { className: "bordered__icon bordered__icon--left" }, i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })),
                                                  i.a.createElement(
                                                      "div",
                                                      { className: "bordered__icon bordered__icon--bottom_right bordered__icon--horizont bordered__icon--horizont_bottom" },
                                                      i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                  )
                                              )
                                          )
                                      ),
                                      i.a.createElement(
                                          "div",
                                          { className: "pp-detail-content mt-5" },
                                          i.a.createElement(
                                              "div",
                                              { className: "container" },
                                              i.a.createElement(
                                                  "div",
                                                  { className: "tab-content", id: "myTabContent" },
                                                  i.a.createElement(
                                                      "div",
                                                      { className: "tab-pane fade show active", id: "home", role: "tabpanel", "aria-labelledby": "home-tab" },
                                                      i.a.createElement(
                                                          "div",
                                                          { className: "py-3" },
                                                          i.a.createElement(
                                                              "div",
                                                              { className: "row gx-xl-5" },
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "col-lg-6" },
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "unlock__bordered bordered mx-auto", style: { maxWidth: "100%" } },
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "bordered__block pb-3 p-2-mb" },
                                                                              i.a.createElement("div", { className: "block-title" }, i.a.createElement("h4", null, "Pool information")),
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "table-responsive" },
                                                                                  i.a.createElement(
                                                                                      "table",
                                                                                      { className: "table mb-0 pp-table-info text-white" },
                                                                                      i.a.createElement(
                                                                                          "tbody",
                                                                                          null,
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Opens"),
                                                                                              void 0 === We.openTime
                                                                                                  ? i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "TBA"))
                                                                                                  : i.a.createElement(
                                                                                                        "td",
                                                                                                        { className: "text-end" },
                                                                                                        i.a.createElement(
                                                                                                            "h5",
                                                                                                            { className: "mb-0" },
                                                                                                            ve()(1e3 * We.openTime || 0)
                                                                                                                .utc()
                                                                                                                .format("MM-DD HH:mm"),
                                                                                                            " UTC"
                                                                                                        )
                                                                                                    )
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "FCFS Opens"),
                                                                                              void 0 === We.fcfsOpenTime
                                                                                                  ? i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "TBA"))
                                                                                                  : i.a.createElement(
                                                                                                        "td",
                                                                                                        { className: "text-end" },
                                                                                                        i.a.createElement(
                                                                                                            "h5",
                                                                                                            { className: "mb-0" },
                                                                                                            ve()(1e3 * We.fcfsOpenTime || 0)
                                                                                                                .utc()
                                                                                                                .format("MM-DD HH:mm"),
                                                                                                            " UTC"
                                                                                                        )
                                                                                                    )
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Closes"),
                                                                                              void 0 === We.closeTime
                                                                                                  ? i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "TBA"))
                                                                                                  : i.a.createElement(
                                                                                                        "td",
                                                                                                        { className: "text-end" },
                                                                                                        i.a.createElement(
                                                                                                            "h5",
                                                                                                            { className: "mb-0" },
                                                                                                            ve()(1e3 * We.closeTime || 0)
                                                                                                                .utc()
                                                                                                                .format("MM-DD HH:mm"),
                                                                                                            " UTC"
                                                                                                        )
                                                                                                    )
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Swap Rate"),
                                                                                              void 0 !== We.openTime
                                                                                                  ? i.a.createElement(
                                                                                                        "td",
                                                                                                        { className: "text-end" },
                                                                                                        i.a.createElement(
                                                                                                            "h5",
                                                                                                            { className: "mb-0", id: "idBusdConvert" },
                                                                                                            i.a.createElement("span", { className: "text-nowrap" }, "1 USD"),
                                                                                                            i.a.createElement("span", { className: "text-nowrap" }, " = ", We.rate.toFixed(4), " ", We.projectTokenSymbol)
                                                                                                        )
                                                                                                    )
                                                                                                  : i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0", id: "idBusdConvert" }, "TBA"))
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Cap"),
                                                                                              void 0 !== We.openTime
                                                                                                  ? i.a.createElement(
                                                                                                        "td",
                                                                                                        { className: "text-end" },
                                                                                                        i.a.createElement("h5", { className: "mb-0" }, We.maxTotalParticipationAllocated, " ", We.symbol)
                                                                                                    )
                                                                                                  : i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "TBA"))
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Total Users Participated"),
                                                                                              i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, We.totalCountUserParticipated || 0))
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Total Funds Swapped"),
                                                                                              void 0 !== We.openTime
                                                                                                  ? i.a.createElement(
                                                                                                        "td",
                                                                                                        { className: "text-end" },
                                                                                                        i.a.createElement("h5", { className: "mb-0 text-nowrap" }, We.totalFundParticipated.toFixed(4) || 0, " ", We.symbol || "")
                                                                                                    )
                                                                                                  : i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, "0"))
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Access Type"),
                                                                                              i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, We.isPrivate ? "Private" : "Public"))
                                                                                          ),
                                                                                          i.a.createElement("tr", null, i.a.createElement("td", { className: "pb-3", colSpan: 2 }, i.a.createElement("br", null)))
                                                                                      )
                                                                                  )
                                                                              ),
                                                                              i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                                              i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                                          ),
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                                              i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                                          ),
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                                                              i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                                          )
                                                                      )
                                                                  )
                                                              ),
                                                              i.a.createElement(
                                                                  "div",
                                                                  { className: "col-lg-6" },
                                                                  i.a.createElement(
                                                                      "div",
                                                                      { className: "unlock__bordered bordered mx-auto", style: { maxWidth: "100%" } },
                                                                      i.a.createElement(
                                                                          "div",
                                                                          { className: "bordered__inner bordered--flex bordered--double_angled bordered--bg_right" },
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "bordered__block pb-3 p-2-mb" },
                                                                              i.a.createElement("div", { className: "block-title" }, i.a.createElement("h4", null, "Token information")),
                                                                              i.a.createElement(
                                                                                  "div",
                                                                                  { className: "table-responsive" },
                                                                                  i.a.createElement(
                                                                                      "table",
                                                                                      { className: "table mb-0 pp-table-info text-white" },
                                                                                      i.a.createElement(
                                                                                          "tbody",
                                                                                          null,
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Name"),
                                                                                              i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, We.name))
                                                                                          ),
                                                                                          i.a.createElement(
                                                                                              "tr",
                                                                                              null,
                                                                                              i.a.createElement("td", null, "Token Symbol"),
                                                                                              i.a.createElement("td", { className: "text-end" }, i.a.createElement("h5", { className: "mb-0" }, We.projectTokenSymbol))
                                                                                          )
                                                                                      )
                                                                                  )
                                                                              ),
                                                                              i.a.createElement("div", { className: "bordered__border bordered__border--left" }),
                                                                              i.a.createElement("div", { className: "bordered__border bordered__border--right" })
                                                                          ),
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "bordered__icon bordered__icon--top_left bordered__icon--horizont bordered__icon--horizont_top" },
                                                                              i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                                          ),
                                                                          i.a.createElement(
                                                                              "div",
                                                                              { className: "bordered__icon bordered__icon--bottom_center bordered__icon--horizont bordered__icon--horizont_bottom" },
                                                                              i.a.createElement("img", { src: "/images/bordered-lines.svg", alt: "" })
                                                                          )
                                                                      )
                                                                  ),
                                                                  i.a.createElement(pa, { roundInfo: Ue })
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  Ne &&
                                                      i.a.createElement(ha, {
                                                          allocationInfo: de,
                                                          tokenSymbol: We.projectTokenSymbol,
                                                          decimals: U.decimal,
                                                          contractAddress: o,
                                                          tokenAddress: U.projectTokenContract,
                                                          handleBuyClick: function () {
                                                              return R(j + 1);
                                                          },
                                                          claim: We.claim,
                                                          layout: Ee,
                                                      })
                                              )
                                          ),
                                          i.a.createElement(Zt.a, { className: "mt-5" }, i.a.createElement(Ft, null))
                                      )
                                  )
                                : i.a.createElement(
                                      "div",
                                      { className: "pp-detail-page", style: { backgroundImage: "none" } },
                                      i.a.createElement("div", { className: "pp-detail-banner" }, i.a.createElement("div", { className: "container text-white py-5 text-center text-lg-start", style: { fontSize: "20px" } }, "Loading...")),
                                      i.a.createElement(Zt.a, { className: "mt-5" }, i.a.createElement(Ft, null))
                                  ),
                            i.a.createElement(ma, {
                                walletInfo: Pe,
                                allocationNumber: se,
                                remainingAllocation: N,
                                handleBuyClick: function () {
                                    return R(j + 1);
                                },
                                countClick: j,
                                tokenBalance: _e.formatNumberDownRound(p, 4),
                                symbol: null === We || void 0 === We ? void 0 : We.symbol,
                                handleInputAmount: function (e) {
                                    return I(e);
                                },
                            }),
                            i.a.createElement(da, {
                                remainingAllocation: N,
                                walletInfo: Pe,
                                handleBuyClick: function () {
                                    return R(j + 1);
                                },
                                handleInputAmount: function (e) {
                                    return I(e);
                                },
                                tokenBalance: _e.formatNumberDownRound(p, 4),
                            })
                        );
                    });
            function fa(e) {
                var t = e.children,
                    a = Object(m.d)().active,
                    n = Object(m.d)("NETWORK"),
                    i = n.active,
                    o = n.error,
                    l = n.activate,
                    s = new jt({ urls: Object(U.a)({}, 56, w) }),
                    c = (function () {
                        var e = Object(m.d)(),
                            t = e.activate,
                            a = e.active,
                            n = Object(r.useState)(!1),
                            i = Object(tt.a)(n, 2),
                            o = i[0],
                            l = i[1];
                        return (
                            Object(r.useEffect)(
                                function () {
                                    it.isAuthorized().then(function (e) {
                                        var a = window.localStorage.getItem("connectorId");
                                        (e && a) || (at.isMobile && window.ethereum && a)
                                            ? t(it, void 0, !0).catch(function () {
                                                  l(!0);
                                              })
                                            : l(!0);
                                    });
                                },
                                [t]
                            ),
                            Object(r.useEffect)(
                                function () {
                                    a && l(!0);
                                },
                                [a]
                            ),
                            o
                        );
                    })();
                Object(r.useEffect)(
                    function () {
                        !c || i || o || a || l(s);
                    },
                    [c, i, o, l, a]
                ),
                    (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = Object(m.d)(),
                            a = t.active,
                            n = t.error,
                            i = t.activate;
                        Object(r.useEffect)(
                            function () {
                                var t = window.ethereum;
                                if (t && t.on && !a && !n && !e) {
                                    var r = function () {
                                            i(it, void 0, !0).catch(function (e) {
                                                console.error("Failed to activate after chain changed", e);
                                            });
                                        },
                                        o = function (e) {
                                            e.length > 0 &&
                                                i(it, void 0, !0).catch(function (e) {
                                                    console.error("Failed to activate after accounts changed", e);
                                                });
                                        };
                                    return (
                                        t.on("chainChanged", r),
                                        t.on("accountsChanged", o),
                                        function () {
                                            t.removeListener && (t.removeListener("chainChanged", r), t.removeListener("accountsChanged", o));
                                        }
                                    );
                                }
                            },
                            [a, n, e, i]
                        );
                    })(!c);
                var u = Object(r.useState)(!1),
                    d = Object(tt.a)(u, 2),
                    p = (d[0], d[1]);
                return (
                    Object(r.useEffect)(function () {
                        var e = setTimeout(function () {
                            p(!0);
                        }, 600);
                        return function () {
                            clearTimeout(e);
                        };
                    }, []),
                    c ? t : null
                );
            }
            function ya() {
                var e = Object(s.b)(),
                    t = Object(m.d)(),
                    a = t.chainId,
                    n = t.library,
                    i = t.account,
                    o = Object(r.useState)({ chainId: a, blockNumber: null }),
                    l = Object(tt.a)(o, 2),
                    c = l[0],
                    u = l[1],
                    d = Object(r.useCallback)(
                        function (e) {
                            u(function (t) {
                                return a === t.chainId ? ("number" !== typeof t.blockNumber ? { chainId: a, blockNumber: e } : { chainId: a, blockNumber: Math.max(e, t.blockNumber) }) : t;
                            });
                        },
                        [a, u]
                    );
                Object(r.useEffect)(
                    function () {
                        if (n && a)
                            return (
                                u({ chainId: a, blockNumber: null }),
                                n
                                    .getBlockNumber()
                                    .then(d)
                                    .catch(function (e) {
                                        return console.error("Failed to get block number for chainId: ".concat(a), e);
                                    }),
                                n.on("block", d),
                                function () {
                                    n.removeListener("block", d);
                                }
                            );
                    },
                    [e, a, n, d]
                );
                var p = (function (e, t) {
                    var a = Object(r.useState)(e),
                        n = Object(tt.a)(a, 2),
                        i = n[0],
                        o = n[1];
                    return (
                        Object(r.useEffect)(
                            function () {
                                var a = setTimeout(function () {
                                    o(e);
                                }, t);
                                return function () {
                                    clearTimeout(a);
                                };
                            },
                            [e, t]
                        ),
                        i
                    );
                })(c, 1e3);
                Object(r.useEffect)(
                    function () {
                        p.chainId && p.blockNumber && (console.log("BlockNumber latest ==>", p.blockNumber), e({ type: Ge.SET_LATEST_BLOCK, data: p.blockNumber }));
                    },
                    [e, p.blockNumber, p.chainId]
                );
                var b = Qe(),
                    h = Ve();
                return (
                    Object(r.useEffect)(
                        function () {
                            b &&
                                i &&
                                a &&
                                b.getStakingInfoWallet(a).then(function (t) {
                                    e({ type: Ge.GET_STAKING_WALLET_INFO, data: t });
                                });
                        },
                        [b, i, e, h, a]
                    ),
                    null
                );
            }
            var va = function (e) {
                var t = Object(s.c)(function (e) {
                        return e;
                    }),
                    a = t.utils,
                    n = t.alert,
                    r = Object(s.b)();
                return (
                    ga(!0),
                    window.setTimeout(function () {
                        ga(!1), n && JSON.stringify(n) != JSON.stringify({}) && r({ type: F.ALERT_CLEAR }), a.alertLink && a.alertLink.type.trim().length > 0 && r(me());
                    }, 5e3),
                    i.a.createElement(
                        i.a.Fragment,
                        null,
                        n.message &&
                            i.a.createElement(
                                "div",
                                { id: "toast-container", className: "toast-top-right" },
                                i.a.createElement(
                                    "div",
                                    { id: "toast-id", className: "toast toast-".concat(n.type) },
                                    i.a.createElement("div", { className: "toast-message" }, i.a.createElement("div", null, i.a.createElement("div", null, n.message)))
                                )
                            ),
                        a.alertLink.url.length > 0 &&
                            i.a.createElement(
                                "a",
                                {
                                    onClick: function () {
                                        return r(me());
                                    },
                                    href: a.alertLink.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                },
                                i.a.createElement(
                                    "div",
                                    { id: "toast-container", className: "toast-top-right" },
                                    i.a.createElement(
                                        "div",
                                        { id: "toast-id", className: "toast toast-".concat(a.alertLink.type) },
                                        i.a.createElement("div", { className: "toast-message" }, i.a.createElement("div", null, i.a.createElement("div", null, a.alertLink.message)))
                                    )
                                )
                            ),
                        i.a.createElement(
                            T.c,
                            { history: u },
                            i.a.createElement(
                                fa,
                                null,
                                i.a.createElement(ya, null),
                                i.a.createElement(
                                    T.d,
                                    null,
                                    i.a.createElement(zt, { exact: !0, path: _, component: ua }),
                                    i.a.createElement(zt, { exact: !0, path: S, component: Ea }),
                                    i.a.createElement(zt, { exact: !0, path: O, component: na }),
                                    i.a.createElement(zt, { exact: !0, path: k, component: ra }),
                                    i.a.createElement(zt, { exact: !0, path: A, component: qt }),
                                    i.a.createElement(zt, { exact: !0, path: C, component: Vt }),
                                    i.a.createElement(zt, { exact: !0, path: I, component: Qt }),
                                    i.a.createElement(T.a, { from: "**", to: _ })
                                )
                            )
                        )
                    )
                );
            };
            function ga(e) {
                var t = document.getElementById("toast-container"),
                    a = document.getElementById("toast-id");
                (t && "A" === t.parentElement.nodeName) || (t && (t.style.display = e ? "block" : "none"), a && (a.style.opacity = e ? 1 : 0));
            }
            var Na,
                wa = a(49),
                Ta = (a(629), a(639)),
                _a = a(167),
                Sa = a(286),
                Oa = a.n(Sa),
                ka = a(287),
                Aa = a.n(ka),
                Ca = (alert = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { type: "" };
                    switch (t.type) {
                        case F.ALERT_SUCCESS:
                            return { type: "success", message: t.message };
                        case F.ALERT_FAILS:
                            return { type: "error", message: t.message };
                        case F.ALERT_WARNING:
                            return { type: "warning", message: t.message };
                        case F.ALERT_CLEAR:
                            return {};
                        default:
                            return e;
                    }
                }),
                Ia = a(8),
                xa = { latestBlock: 0, blocking: !1, leftBarActive: !0, isConnectWallet: !1, walletAddress: null, walletUtils: null, showModalHelp: !1, alertLink: { type: "", url: "", message: "" } },
                Pa = {
                    projects: [],
                    openingProjects: [],
                    waitingProjects: [],
                    closedProjects: [],
                    selectedProject: null,
                    currentWalletInfo: null,
                    contractsInfo: [],
                    currentSelectedContractAddress: null,
                    jobGetProjects: 0,
                    jobGetProjectSelected: 0,
                    jobGetWalletInfo: 0,
                    jobCountDownOpen: 0,
                    jobCountDownClose: 0,
                    jobCountDownRoundTime: 0,
                    jobCountDownFcfsTime: 0,
                },
                ja = { walletInfo: {}, kycStatus: null, kycURL: "", jobKyc: 0, stakingInfo: {}, stakingWalletInfo: {}, jobUnStakeTime: 0, bscpadBalance: 0, bnbBalance: 0, jobGetBalance: 0, jobStakingStatus: 0 },
                Ra = { selectedTabIndex: 1 },
                La = Object(wa.b)({
                    alert: Ca,
                    utils: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xa,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case F.REQUEST_SUBMIT:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { blocking: !0 });
                            case F.REQUEST_DONE:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { blocking: !1 });
                            case F.CLICK_LEFT_BAR_ACTIVE:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { leftBarActive: !e.leftBarActive });
                            case F.ALERT_LINK:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { alertLink: { type: t.alertType, url: t.alertUrl, message: t.alertMessage } });
                            case F.ALERT_LINK_CLEAR:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { alertLink: { type: "", url: "", message: "" } });
                            case F.CONNECT_WALLET_SUCCESS:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { isConnectWallet: !0, walletAddress: t.data });
                            case F.ENABLE_WALLET_SUCCESS:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { isConnectWallet: !0, walletUtils: t.data });
                            case F.LOG_OUT_WALLET_SUCCESS:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { isConnectWallet: !1, walletAddress: null, walletUtils: null });
                            case F.SET_SHOW_MODAL_HELP:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { showModalHelp: !0 });
                            case F.SET_LATEST_BLOCK:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { latestBlock: t.data });
                            default:
                                return e;
                        }
                    },
                    project: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pa,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case F.GET_PROJECTS_SUCCESS:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { projects: t.data.projects, openingProjects: t.data.openingProjects, waitingProjects: t.data.waitingProjects, closedProjects: t.data.closedProjects });
                            case F.GET_LIST_CONTRACTS_INFO:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { contractsInfo: t.data });
                            case F.GET_PROJECT_SELECTED:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { selectedProject: t.data });
                            case F.SET_CURRENT_CONTRACT_SELECTED:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { currentSelectedContractAddress: t.data });
                            case F.SET_JOB_PROJECT_SELECTED:
                                return clearInterval(e.jobGetProjectSelected), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobGetProjectSelected: t.data });
                            case F.SET_JOB_GET_WALLET_INFO:
                                return clearInterval(e.jobGetWalletInfo), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobGetWalletInfo: t.data });
                            case F.SET_JOB_COUNT_DOWN_OPEN:
                                return clearInterval(e.jobCountDownOpen), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobCountDownOpen: t.data });
                            case F.SET_JOB_COUNT_DOWN_CLOSE:
                                return clearInterval(e.jobCountDownClose), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobCountDownClose: t.data });
                            case F.SET_JOB_COUNT_DOWN_ROUND:
                                return clearInterval(e.jobCountDownRoundTime), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobCountDownRoundTime: t.data });
                            case F.SET_JOB_COUNT_DOWN_FCFS_TIME:
                                return clearInterval(e.jobCountDownFcfsTime), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobCountDownFcfsTime: t.data });
                            case F.SET_JOB_GET_PROJECTS:
                                return clearInterval(e.jobGetProjects), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobGetProjects: t.data });
                            case F.CLEAR_INTERVAL_PROJECTS_JOB:
                                return (
                                    clearInterval(e.jobGetProjectSelected),
                                    clearInterval(e.jobGetWalletInfo),
                                    clearInterval(e.jobGetProjects),
                                    Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobGetProjectSelected: 0, jobGetWalletInfo: 0, jobGetProjects: 0 })
                                );
                            default:
                                return e;
                        }
                    },
                    wallet: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ja,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case F.GET_INFO_WALLET:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { walletInfo: t.data });
                            case F.GET_KYC_INFO:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { kycStatus: t.data });
                            case F.GET_KYC_3RD:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { kycURL: t.data });
                            case F.SET_JOB_GET_KYC:
                                return clearInterval(e.jobKyc), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobKyc: t.data });
                            case F.CLEAR_KYC_STATE:
                                return clearInterval(e.jobKyc), Object(Ia.a)(Object(Ia.a)({}, e), {}, { kycStatus: null });
                            case F.GET_STAKING_INFO:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { stakingInfo: t.data });
                            case F.GET_STAKING_WALLET_INFO:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { stakingWalletInfo: t.data });
                            case F.SET_JOB_COUNTDOWN_STAKE_TIME:
                                return clearInterval(e.jobUnStakeTime), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobUnStakeTime: t.data });
                            case F.GET_GZONE_WALLET_BALANCE:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { bscpadBalance: t.data });
                            case F.GET_BNB_BALANCE:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { bnbBalance: t.data });
                            case F.SET_JOB_GET_BALANCE:
                                return clearInterval(e.jobGetBalance), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobGetBalance: t.data });
                            case F.CLEAR_INTERVAL_PROJECTS_JOB:
                                return clearInterval(e.jobUnStakeTime), clearInterval(e.stakingWalletInfo), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobUnStakeTime: 0, stakingWalletInfo: 0 });
                            case F.SET_JOB_GET_STAKING_STATUS:
                                return clearInterval(e.jobStakingStatus), Object(Ia.a)(Object(Ia.a)({}, e), {}, { jobStakingStatus: t.data });
                            default:
                                return e;
                        }
                    },
                    app: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ra,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case F.TAB_SELECTED_CHANGE:
                                return Object(Ia.a)(Object(Ia.a)({}, e), {}, { selectedTabIndex: t.tabIndex });
                            default:
                                return e;
                        }
                    },
                }),
                Wa = a(288),
                Ma = a(42),
                Da = (function () {
                    var e = Object(Ye.a)(
                        Fe.a.mark(function e() {
                            var t, a;
                            return Fe.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.prev = 0), (e.next = 3), st.a.get("".concat("https://app.gamezone.io").concat(We.GET_PROJECTS));
                                            case 3:
                                                if (((t = e.sent), console.log(t), 200 !== t.status)) {
                                                    e.next = 7;
                                                    break;
                                                }
                                                return e.abrupt("return", t.data);
                                            case 7:
                                                return e.abrupt("return", []);
                                            case 10:
                                                return (e.prev = 10), (e.t0 = e.catch(0)), (a = e.t0.response), console.log(a), e.abrupt("return", []);
                                            case 15:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 10]]
                            );
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                Ba = (function () {
                    var e = Object(Ye.a)(
                        Fe.a.mark(function e(t) {
                            var a, n;
                            return Fe.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.prev = 0), (e.next = 3), st.a.get("".concat("https://app.gamezone.io").concat(We.GET_PROJECT_DETAILS.replace(":id", t)));
                                            case 3:
                                                if (200 !== (a = e.sent).status) {
                                                    e.next = 8;
                                                    break;
                                                }
                                                return e.abrupt("return", { status: 200, data: a.data });
                                            case 8:
                                                return e.abrupt("return", { status: 404, data: null });
                                            case 9:
                                                e.next = 16;
                                                break;
                                            case 11:
                                                return (e.prev = 11), (e.t0 = e.catch(0)), (n = e.t0.response), console.log(n), e.abrupt("return", { status: 404, data: null });
                                            case 16:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 11]]
                            );
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                Ga = f[56][p.a.random(0, f[56].length - 1)],
                Ua = (function () {
                    var e = Object(Ye.a)(
                        Fe.a.mark(function e(t) {
                            var a;
                            return Fe.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (a = {}), (e.prev = 1), console.log("provider URI==>", Ga), (e.next = 5), st.a.post(Ga);
                                            case 5:
                                                200 === e.sent.status || (Ga = f[56][p.a.random(0, f[56].length - 1)]), (Na = new ht.a(Ga)), (e.next = 13);
                                                break;
                                            case 9:
                                                (e.prev = 9), (e.t0 = e.catch(1)), (Ga = f[56][p.a.random(0, f[56].length - 1)]), (Na = new ht.a(Ga));
                                            case 13:
                                                return (
                                                    (e.next = 15),
                                                    Promise.all(
                                                        t
                                                            .filter(function (e) {
                                                                return "TBA" !== e;
                                                            })
                                                            .map(
                                                                (function () {
                                                                    var e = Object(Ye.a)(
                                                                        Fe.a.mark(function e(t) {
                                                                            var n, r, i, o, l, s, c, u, m, d, p, b, h, E, f, y, v;
                                                                            return Fe.a.wrap(function (e) {
                                                                                for (;;)
                                                                                    switch ((e.prev = e.next)) {
                                                                                        case 0:
                                                                                            if ("TBA" !== t) {
                                                                                                e.next = 4;
                                                                                                break;
                                                                                            }
                                                                                            (a["".concat(t)] = {
                                                                                                state: "P",
                                                                                                symbol: "TBA",
                                                                                                rate: 0,
                                                                                                totalCountWallet: 0,
                                                                                                totalCountUserParticipated: 0,
                                                                                                totalFundParticipated: 0,
                                                                                                maxSingleParticipationAllocated: 0,
                                                                                                maxTotalParticipationAllocated: 0,
                                                                                            }),
                                                                                                (e.next = 26);
                                                                                            break;
                                                                                        case 4:
                                                                                            return (n = new Na.eth.Contract(ft, t)), (e.next = 7), n.methods.info().call();
                                                                                        case 7:
                                                                                            return (r = e.sent), (e.next = 10), n.methods.infoRounds().call();
                                                                                        case 10:
                                                                                            for (
                                                                                                i = e.sent,
                                                                                                    o = r[0],
                                                                                                    l = r[1],
                                                                                                    s = parseInt(r[2]),
                                                                                                    c = parseFloat(r[3] / Math.pow(10, 6)),
                                                                                                    u = parseInt(r[4]),
                                                                                                    m = parseInt(r[5]),
                                                                                                    d = parseInt(r[6]),
                                                                                                    p = r[7],
                                                                                                    b = r[8],
                                                                                                    h = r[9],
                                                                                                    E = fe.a.div(r[10], Math.pow(10, s)),
                                                                                                    f = fe.a.div(r[11], Math.pow(10, s)),
                                                                                                    y = [],
                                                                                                    v = 0;
                                                                                                v < i[0].length;
                                                                                                v++
                                                                                            )
                                                                                                y.push({ round: i[0][v], opens: i[1][v], closes: i[2][v] });
                                                                                            a["".concat(t)] = {
                                                                                                tokenAddress: o,
                                                                                                symbol: l,
                                                                                                decimal: s,
                                                                                                rate: c,
                                                                                                openTime: u,
                                                                                                fcfsOpenTime: m,
                                                                                                closeTime: d,
                                                                                                totalCountWallet: p,
                                                                                                totalCountUserParticipated: h,
                                                                                                totalFundParticipated: E,
                                                                                                maxTotalParticipationAllocated: f,
                                                                                                state: b,
                                                                                                infoRound: y,
                                                                                            };
                                                                                        case 26:
                                                                                        case "end":
                                                                                            return e.stop();
                                                                                    }
                                                                            }, e);
                                                                        })
                                                                    );
                                                                    return function (t) {
                                                                        return e.apply(this, arguments);
                                                                    };
                                                                })()
                                                            )
                                                    )
                                                );
                                            case 15:
                                                return e.abrupt("return", a);
                                            case 16:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[1, 9]]
                            );
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })();
            var Fa = Fe.a.mark(Ja),
                Ya = Fe.a.mark(za),
                Ka = Fe.a.mark(Za),
                Ha = Fe.a.mark(qa);
            function Ja() {
                var e, t, a, n;
                return Fe.a.wrap(
                    function (r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (r.prev = 0), (r.next = 3), Object(Ma.b)(Da);
                                case 3:
                                    if (
                                        ((e = r.sent),
                                        (t = []),
                                        e.forEach(function (e) {
                                            "string" === typeof e.contract && "C" !== e.state && t.push(e.contract);
                                        }),
                                        !(t.length > 0))
                                    ) {
                                        r.next = 26;
                                        break;
                                    }
                                    return (a = []), (n = []), (r.prev = 9), (r.next = 12), Object(Ma.b)(Ua, t);
                                case 12:
                                    (n = r.sent), (r.next = 21);
                                    break;
                                case 15:
                                    return (r.prev = 15), (r.t0 = r.catch(9)), console.log("err==>", r.t0), (r.next = 20), Object(Ma.b)(Ua, t);
                                case 20:
                                    n = r.sent;
                                case 21:
                                    return (
                                        e.forEach(function (t) {
                                            var r = t,
                                                i = n[t.contract],
                                                o = Object.assign(r, i),
                                                l = e.find(function (e) {
                                                    return e.symbol === t.projectTokenSymbol;
                                                });
                                            (o.athMultiplier = l ? l.ath_multiplier : null), a.push(o);
                                        }),
                                        (r.next = 24),
                                        Object(Ma.d)({
                                            type: Ge.GET_PROJECTS_SUCCESS,
                                            data: {
                                                projects: a,
                                                openingProjects: a.filter(function (e) {
                                                    return "O" == e.state || "F" == e.state;
                                                }),
                                                waitingProjects: a.filter(function (e) {
                                                    return "P" == e.state;
                                                }),
                                                closedProjects: a.filter(function (e) {
                                                    return "C" == e.state;
                                                }),
                                            },
                                        })
                                    );
                                case 24:
                                    r.next = 28;
                                    break;
                                case 26:
                                    return (
                                        (r.next = 28),
                                        Object(Ma.d)({
                                            type: Ge.GET_PROJECTS_SUCCESS,
                                            data: {
                                                projects: e,
                                                openingProjects: e.filter(function (e) {
                                                    return "O" == e.state;
                                                }),
                                                waitingProjects: e.filter(function (e) {
                                                    return "P" == e.state;
                                                }),
                                                closedProjects: e.filter(function (e) {
                                                    return "C" == e.state;
                                                }),
                                            },
                                        })
                                    );
                                case 28:
                                    r.next = 34;
                                    break;
                                case 30:
                                    return (r.prev = 30), (r.t1 = r.catch(0)), console.log(r.t1), r.abrupt("return", null);
                                case 34:
                                case "end":
                                    return r.stop();
                            }
                    },
                    Fa,
                    null,
                    [
                        [0, 30],
                        [9, 15],
                    ]
                );
            }
            function za(e) {
                var t, a, n, r;
                return Fe.a.wrap(function (i) {
                    for (;;)
                        switch ((i.prev = i.next)) {
                            case 0:
                                return (t = e.data), (i.next = 3), Object(Ma.b)(Ba, t);
                            case 3:
                                if (200 != (a = i.sent).status) {
                                    i.next = 11;
                                    break;
                                }
                                return (i.next = 7), Object(Ma.b)(Ua, [t]);
                            case 7:
                                return (n = i.sent), (r = Object.assign(a.data, n[t])), (i.next = 11), Object(Ma.d)({ type: Ge.GET_PROJECT_SELECTED, data: r });
                            case 11:
                            case "end":
                                return i.stop();
                        }
                }, Ya);
            }
            function Za() {
                return Fe.a.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), Object(Ma.e)(Ge.SUBMIT_GET_PROJECTS, Ja);
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, Ka);
            }
            function qa() {
                return Fe.a.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), Object(Ma.e)(Ge.SUBMIT_PROJECT_SELECTED, za);
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, Ha);
            }
            var Va = Fe.a.mark(Qa);
            function Qa() {
                return Fe.a.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), Object(Ma.a)([Object(Ma.c)(Za), Object(Ma.c)(qa)]);
                            case 2:
                            case "end":
                                return e.stop();
                        }
                }, Va);
            }
            var $a = { key: "root", storage: Oa.a, blacklist: ["alert", "utils", "systemInfo"], stateReconciler: Aa.a };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            function Xa(e) {
                var t = new wt.a(e);
                return (t.pollingInterval = 15e3), t;
            }
            var en = (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        a = wa.c,
                        n = {},
                        r = Object(Wa.a)(n),
                        i = [r, Object(Ta.a)(t)],
                        o = [wa.a.apply(void 0, i)],
                        l = (Object(_a.a)($a, La), Object(wa.d)(La, e, a.apply(void 0, o))),
                        s = Object(_a.b)(l);
                    return r.run(Qa), { store: l, persistor: s };
                })({}, u).store,
                tn = Object(m.c)("NETWORK");
            l.a.render(i.a.createElement(s.a, { store: en }, i.a.createElement(m.b, { getLibrary: Xa }, i.a.createElement(tn, { getLibrary: Xa }, i.a.createElement(va, null)))), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister();
                        })
                        .catch(function (e) {
                            console.error(e.message);
                        });
        },
    },
    [[298, 1, 2]],
]);
//# sourceMappingURL=main.0efbb413.chunk.js.map
