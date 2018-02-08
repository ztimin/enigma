const CARD_TYPES = require('../../constants/CARD_TYPES.js');
const MINERS = require('../../constants/MINERS.js');

function ZCL(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

ZCL(MINERS.MINER, MINERS.EWBF);

ZCL(CARD_TYPES.GTX_1060, gpu1060_Settings = {
    gpuEffectivePowerLimit:"0", gpuMaxTemp:"75",
    gpuCoreOffset:"0", gpuMemoryOffset:"0",
    minerIntensity:"", minerAdditionalArguments:""
});

ZCL(CARD_TYPES.GTX_1070, gpu1070_Settings = {
    gpuEffectivePowerLimit:"165", gpuMaxTemp:"75",
    gpuCoreOffset:"200", gpuMemoryOffset:"1050",
    minerIntensity:"", minerAdditionalArguments:""
});

ZCL(CARD_TYPES.GTX_1070TI, gpu1070TI_Settings = {
    gpuEffectivePowerLimit:"165", gpuMaxTemp:"75",
    gpuCoreOffset:"200", gpuMemoryOffset:"1050",
    minerIntensity:"", minerAdditionalArguments:""
});

ZCL(CARD_TYPES.GTX_1080, gpu1080_Settings = {
    gpuEffectivePowerLimit:"0", gpuMaxTemp:"75",
    gpuCoreOffset:"0", gpuMemoryOffset:"0",
    minerIntensity:"", minerAdditionalArguments:""
});

ZCL(CARD_TYPES.GTX_1080TI, gpu1080TI_Settings = {
    gpuEffectivePowerLimit:"0", gpuMaxTemp:"75",
    gpuCoreOffset:"0", gpuMemoryOffset:"0",
    minerIntensity:"", minerAdditionalArguments:""
});

