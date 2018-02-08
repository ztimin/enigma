const CARD_TYPES = require('../../constants/CARD_TYPES.js');
const MINERS = require('../../constants/MINERS.js');

function GRLC(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

GRLC(MINERS.MINER, MINERS.CCMINER_223);

GRLC(CARD_TYPES.GTX_1060, gpu1060_Settings = {
    gpuEffectivePowerLimit:"0", gpuMaxTemp:"75",
    gpuCoreOffset:"0", gpuMemoryOffset:"0",
    minerIntensity:"", minerAdditionalArguments:"--lookup-gap=2"
});

GRLC(CARD_TYPES.GTX_1070, gpu1070_Settings = {
    gpuEffectivePowerLimit:"160", gpuMaxTemp:"75",
    gpuCoreOffset:"150", gpuMemoryOffset:"1100",
    minerIntensity:"", minerAdditionalArguments:"--lookup-gap=2"
});

GRLC(CARD_TYPES.GTX_1070TI, gpu1070TI_Settings = {
    gpuEffectivePowerLimit:"160", gpuMaxTemp:"75",
    gpuCoreOffset:"150", gpuMemoryOffset:"1100",
    minerIntensity:"", minerAdditionalArguments:"--lookup-gap=2"
});

GRLC(CARD_TYPES.GTX_1080, gpu1080_Settings = {
    gpuEffectivePowerLimit:"0", gpuMaxTemp:"75",
    gpuCoreOffset:"0", gpuMemoryOffset:"0",
    minerIntensity:"", minerAdditionalArguments:"--lookup-gap=2"
});

GRLC(CARD_TYPES.GTX_1080TI, gpu1080TI_Settings = {
    gpuEffectivePowerLimit:"0", gpuMaxTemp:"75",
    gpuCoreOffset:"0", gpuMemoryOffset:"0",
    minerIntensity:"", minerAdditionalArguments:"--lookup-gap=2"
});

