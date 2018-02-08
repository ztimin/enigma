const ALGOS = require("../constants/ALGOS.js");
const COINS = require("../constants/COINS.js");
const POOLS = require("../constants/POOLS.js");

function ACTIVE_CONFIG(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

ACTIVE_CONFIG("ALGO", ALGOS.EQUIHASH);
ACTIVE_CONFIG("COIN", COINS.ZCL);
ACTIVE_CONFIG("POOL_CHOSEN", POOLS.MINING_POOL_HUB);

