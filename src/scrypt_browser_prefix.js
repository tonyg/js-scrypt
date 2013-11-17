var scrypt_module_factory = (function (requested_total_memory) {
    var Module = {TOTAL_MEMORY: (requested_total_memory || 33554432)};
    var scrypt_raw = Module;
