const ACTIVE_CONFIG = require('../bash/ACTIVE_CONFIG.js');
const CARD_TYPES = require('../constants/CARD_TYPES.js');
const MINERS = require('../constants/MINERS');

var Overclock = function () {
    var coin = ACTIVE_CONFIG.COIN;
    var overclockConfig = require("./coins/" + coin + ".js");

    this.getCardTypeSettings = function (cardType) {
        switch (cardType) {
            case CARD_TYPES.GTX_1060:
                return overclockConfig[CARD_TYPES.GTX_1060];
            case CARD_TYPES.GTX_1070:
                return overclockConfig[CARD_TYPES.GTX_1070];
            case CARD_TYPES.GTX_1070TI:
                return overclockConfig[CARD_TYPES.GTX_1070TI];
            case CARD_TYPES.GTX_1080:
                return overclockConfig[CARD_TYPES.GTX_1080];
            case CARD_TYPES.GTX_1080TI:
                return overclockConfig[CARD_TYPES.GTX_1080TI];
            default:
                // TODO : call miner stop and kill any open processes for safety and print an error
                return null;

        }
    };

    this.getMiner = function () {
        return overclockConfig[MINERS.MINER];
    };

    this.getConfigValue = function (cardType, gpuSetting) {
        return this.getCardTypeSettings(cardType)[gpuSetting];
    }
};

module.exports = {
    Overclock
};
