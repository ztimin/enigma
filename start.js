const CARD_TYPES = require('./lib/constants/CARD_TYPES.js');
const GPU_SETTINGS = require('./lib/constants/GPU_SETTINGS.js');
const mController = require('./lib/miner/MinerController.js');
const nHelper = require('./lib/gpu/NvidiaHelper.js');
const oClock = require('./lib/oc/Overclock.js');

var startMinerController = function () {
    var minerController = null;
    this.start = function () {
        minerController = mController.MinerController();
        // console.log(new nHelper.NvidiaHelper().getCardCount());
        console.log("Test getCardCount: " + new nHelper.NvidiaHelper().getCardCount());
        console.log("Test getCardDeviceIds: " + new nHelper.NvidiaHelper().getCardDeviceIds());
        console.log("Test getCardVendor: " + new nHelper.NvidiaHelper().getCardVendor(1));
        console.log("Test getCardCurrentValuesById: " + new nHelper.NvidiaHelper().getCardCurrentValuesById(0));
        console.log("Test getCardMakeAndModel: " + new nHelper.NvidiaHelper().getCardMakeAndModel(0));
        console.log("Test getCardModel: " + new nHelper.NvidiaHelper().getCardModel(0));
        console.log("Test getCardMaxRatedPowerLimit: " + new nHelper.NvidiaHelper().getCardMaxRatedPowerLimit(0));
        console.log("Test getCardMinRatedPowerLimit: " + new nHelper.NvidiaHelper().getCardMinRatedPowerLimit(0));
        console.log("Test getCardDefaultPowerLimit: " + new nHelper.NvidiaHelper().getCardDefaultPowerLimit(0));
        console.log("Test getCardCurrentEnforcedPowerLimit: " + new nHelper.NvidiaHelper().getCardCurrentEnforcedPowerLimit(0));
        console.log("Test getCardCurrentActiveCoreClock: " + new nHelper.NvidiaHelper().getCardCurrentActiveCoreClock(0));
        console.log("Test getCardCurrentActiveMemoryClock: " + new nHelper.NvidiaHelper().getCardCurrentActiveMemoryClock(0));
        // console.log("Test setCardPowerModeOne: " + new nHelper.NvidiaHelper().setCardPowerModeOne(0));
        // console.log("Test setCardPowerLimit: " + new nHelper.NvidiaHelper().setCardPowerLimit(0, 160)); // unable to test on windows
        // console.log("Test getCardCurrentEnforcedPowerLimit: " + new nHelper.NvidiaHelper().getCardCurrentEnforcedPowerLimit(0));
        // console.log("Test setCardGPUGraphicsClockOffset: " + new nHelper.NvidiaHelper().setCardGPUGraphicsClockOffset(0, 1, 100));
        // console.log("Test setCardGPUMemoryTransferRateOffset: " + new nHelper.NvidiaHelper().setCardGPUMemoryTransferRateOffset(0, 1, 100));
        console.log("Test getConnectedMonitorCount: " + new nHelper.NvidiaHelper().getConnectedMonitorCount());
        // console.log("Test setCardGPUFanControlState: " + new nHelper.NvidiaHelper().setCardGPUFanControlState(1, 1));
        // console.log("Test setCardGPUTargetFanSpeed: " + new nHelper.NvidiaHelper().setCardGPUTargetFanSpeed(1, 100));
        console.log("Test getCardModelAndUUIDs: " + new nHelper.NvidiaHelper().getCardModelAndUUIDs());
        console.log("Test getMiner: " + JSON.stringify(new oClock.Overclock().getMiner()));
        console.log("Test getCardTypeSettings 1060: " + JSON.stringify(new oClock.Overclock().getCardTypeSettings(CARD_TYPES.GTX_1060)));
        console.log("Test getCardTypeSettings 1070TI: " + JSON.stringify(new oClock.Overclock().getCardTypeSettings(CARD_TYPES.GTX_1070TI)));
        console.log("Test getCardTypeSettings 1070TI gpuCoreOffset: "
            + JSON.stringify(new oClock.Overclock().getCardTypeSettings(CARD_TYPES.GTX_1070TI)[GPU_SETTINGS.CORE_OFFSET]));
        console.log("Test getConfigValue 1070TI gpuMemoryOffset: "
            + new oClock.Overclock().getConfigValue(CARD_TYPES.GTX_1070TI, GPU_SETTINGS.MEMORY_OFFSET));

    };
    start();
};

startMinerController();