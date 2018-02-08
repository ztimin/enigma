const { execSync } = require('child_process');

var NvidiaHelper = function() {

    /**
     * @return The current card count.
     */
    this.getCardCount = function () {
        return execSync("nvidia-smi" +
            " --query-gpu=count" +
            " --format=csv,noheader,nounits | tail -1")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Vendor device id, eg. 0x33071462
     */
    this.getCardDeviceId = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " --query-gpu=pci.sub_device_id" +
            " --format=csv,noheader,nounits")
            .toString().trim();
    };

    /**
     * @return Vendor device id's, newline separated eg. 0x33071462 \n 0x33071462 \n
     */
    this.getCardDeviceIds = function () {
        return execSync("nvidia-smi" +
            " --query-gpu=pci.sub_device_id" +
            " --format=csv,noheader,nounits")
            .toString().trim().replace("\n",",");
    };

    /**
     * @param deviceId
     * @return Vendor name derived from the devices id, eg. 0x33071462 returns MSI
     */
    this.getCardVendorFromDeviceId = function (deviceId) {
        var deviceIdSubstr = deviceId.toString().trim().substring(6,10).trim();
        switch (deviceIdSubstr) {
            case "807":
            case "1043":
                return "ASUS";
            case "3842":
                return "EVGA";
            case "1458":
                return "GIGABYTE";
            case "1462":
                return "MSI";
            case "10DE":
                return "NVIDIA";
            case "1569":
                return "PALIT";
            case "196E":
                return "PNY";
            case "19DA":
                return "ZOTAC";
            default:
                return "UNIDENTIFIED";
        }
    };

    /**
     * @param cardId
     * @return Vendor name derived from the device id for the desired card, eg. card 1 deviceId = 0x33071462 returns MSI
     */
    this.getCardVendor = function (cardId) {
        return this.getCardVendorFromDeviceId(this.getCardDeviceId(cardId));
    };

    /**
     * @param cardId
     * @return PSTATE CURRENT_TEMP CURRENT_FAN UTILIZATION PWRLIMIT POWERDRAW
     */
    this.getCardCurrentValuesById = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " --query-gpu=pstate,temperature.gpu,fan.speed,utilization.gpu,power.limit,power.draw" +
            " --format=csv,noheader,nounits")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Make and model for the cardId, eg. GeForce GTX 1070 Ti
     */
    this.getCardMakeAndModel = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " --query-gpu=name" +
            " --format=csv,noheader,nounits")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Card model (Trimmed of GeForce GTX) eg. 1070 Ti
     */
    this.getCardModel = function (cardId) {
        return this.getCardMakeAndModel(cardId).toString().replace("GeForce GTX ", "");
    };

    /**
     * @param cardId
     * @return Card manufacturer maximum rated power, CAREFUL THIS IS THE RATED SAFETY LIMIT! not the enforced limit
     */
    this.getCardMaxRatedPowerLimit = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " -q | grep \"Max Power\" | cut -f 2 -d \":\" | cut -f 2 -d \" \"")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Card manufacturer minimum rated power limit
     */
    this.getCardMinRatedPowerLimit = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " -q | grep \"Min Power\" | cut -f 2 -d \":\" | cut -f 2 -d \" \"")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Card manufacturer default rated power limit
     */
    this.getCardDefaultPowerLimit = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " -q | grep \"Default Power\" | cut -f 2 -d \":\" | cut -f 2 -d \" \"")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Card manufacturer default rated power limit
     */
    this.getCardCurrentEnforcedPowerLimit = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " -q | grep \"Enforced Power\" | cut -f 2 -d \":\" | cut -f 2 -d \" \"")
            .toString().trim();
    };

    /**
     * @return The connected monitor count
     */
    this.getConnectedMonitorCount = function () {
        return execSync("nvidia-smi" +
            " --query-gpu=gpu_bus_id,display_mode" +
            " --format=csv,noheader" +
            " | grep Enabled | wc -l")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Current card core clock real time.
     */
    this.getCardCurrentActiveMemoryClock = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " -q -d CLOCK | grep Memory | head -1 | cut -f 2 -d \":\" | cut -f 2 -d \" \"")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Current card memory clock real time.
     */
    this.getCardCurrentActiveCoreClock = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " -q -d CLOCK | grep Graphics | head -1 | cut -f 2 -d \":\" | cut -f 2 -d \" \"")
            .toString().trim();
    };

    /**
     * @return All current cards model and UUID eg. GPU 0: GeForce GTX 1070 (UUID: GPU-d6603cd9-ae20-c8d6-462c-93ec8aa24aca)
     */
    this.getCardModelAndUUIDs = function () {
        return execSync("nvidia-smi" +
            " -L")
            .toString().trim();
    };

    /**
     * @param cardId
     * @return Set the card effective power limit
     */
    this.setCardPowerModeOne = function (cardId) {
        return execSync("nvidia-smi" +
            " -i " + cardId +
            " -pm 1" +
            " > /dev/null");
    };

    /**
     * @param cardId, powerMizerMode
     * @return Set the card power mizer mode eg. 1 = prefer performance
     */
    this.setCardGPUPowerMizerMode = function (cardId, powerMizerMode) {
        return execSync("sudo nvidia-settings" +
            " -a [gpu:" + cardId + "]/GPUPowerMizerMode=" + powerMizerMode + " > /dev/null");
    };

    /**
     * @param cardId, powerLimit
     * @return Set the card effective power limit
     */
    this.setCardPowerLimit = function (cardId, powerLimit) {
        return execSync("sudo nvidia-smi" +
            " -i " + cardId +
            " -pl " + powerLimit +
            " > /dev/null");
    };

    /**
     * @param cardId, fanState
     * @return Set the card GPUFanControlState eg. 0 auto, 1 = manual
     */
    this.setCardGPUFanControlState = function (cardId, fanState) {
        return execSync("sudo nvidia-settings" +
            " -a [gpu:" + cardId + "]/GPUFanControlState=" + fanState + " > /dev/null");
    };

    /**
     * @param cardId, fanSpeed
     * @return Set the card GPUTargetFanSpeed
     */
    this.setCardGPUTargetFanSpeed = function (cardId, fanSpeed) {
        return execSync("sudo nvidia-settings" +
            " -a [gpu:" + cardId + "]/GPUTargetFanSpeed=" + fanSpeed + " > /dev/null");
    };

    /**
     * @param cardId, perfLevel, coreClockOffset
     * @return Set the card GPUGraphicsClockOffset for the performance level (required)
     */
    this.setCardGPUGraphicsClockOffset = function (cardId, perfLevel, coreClockOffset) {
        return execSync("sudo nvidia-settings" +
            " -a [gpu:" + cardId + "]/GPUGraphicsClockOffset[" + perfLevel + "]=" + coreClockOffset + " > /dev/null");
    };

    /**
     * @param cardId, perfLevel, memoryOffset
     * @return Set the card GPUMemoryTransferRateOffset for the performance level (required)
     */
    this.setCardGPUMemoryTransferRateOffset = function (cardId, perfLevel, memoryOffset) {
        return execSync("sudo nvidia-settings" +
            " -a [gpu:" + cardId + "]/GPUMemoryTransferRateOffset[" + perfLevel + "]=" + memoryOffset + " > /dev/null");
    };
};

module.exports = {
    NvidiaHelper
};