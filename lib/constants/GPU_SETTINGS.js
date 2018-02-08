function GPU_SETTINGS(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

GPU_SETTINGS("EFFECTIVE_POWER_LIMIT", "gpuEffectivePowerLimit");
GPU_SETTINGS("CORE_OFFSET", "gpuCoreOffset");
GPU_SETTINGS("MAX_TEMP", "gpuMaxTemp");
GPU_SETTINGS("MEMORY_OFFSET", "gpuMemoryOffset");

