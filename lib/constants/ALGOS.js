function ALGOS(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

ALGOS("EQUIHASH", "equihash");
ALGOS("ETHASH", "ethash");
ALGOS("SCRYPT_10", "scrypt:10");
ALGOS("X17", "x17");
ALGOS("YESCRYPT", "yescrypt");

