var scrypt_module_factory = (function (on_ready, optionsOpt) {
  var options = optionsOpt || {};
  var requested_total_memory = options.requested_total_memory || 33554432;

  if (typeof on_ready !== 'function') {
    throw new Error("scrypt_module_factory: Expect on_ready callback as first argument. New in v1.1.0.");
  }

  var Module = {
    TOTAL_MEMORY: (requested_total_memory || 33554432),
  };
  var scrypt_raw = Module;
