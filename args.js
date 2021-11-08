const args = process.argv.reduce((acc, current, i, arr) => {
  if (current === "-c" || current === "--config") {
    isDuplicated(acc, "config");
    if (isValidConfig(arr[i + 1])) {
      acc["config"] = arr[i + 1];
    } else {
      process.stderr.write(`Error: The config is not valid.`);
      process.exit(1);
    }
  } else if (current === "-i" || current === "--input") {
    isDuplicated(acc, "input");
    acc["input"] = arr[i + 1];
  } else if (current === "-o" || current === "--output") {
    isDuplicated(acc, "output");
    acc["output"] = arr[i + 1];
  }
  return acc;
}, {});

function isDuplicated(obj, key) {
  if (obj[key]) {
    process.stderr.write(`Error: The process was aborted because some of the arguments are duplicated.`);
    process.exit(1);
  }
}

function isValidConfig(config) {
  let configArr;
  if (config[config.length - 1] === "-") {
    const configArr = config.slice(0, -1).split("-");
    return configArr.every((elem) => isValidElem(elem));
  }
  configArr = config.split("-");
  return configArr.every((elem) => isValidElem(elem));
}

function isValidElem(el) {
  return el.length === 1
    ? isValidAtbash(el)
    : el.length === 2
      ? isValidCaesar(el)
      : false;
}

function isValidAtbash(el) {
  return el === "A" ? true : false;
}

function isValidCaesar(el) {
  if (el[0] === "C" || el[0] === "R") {
    return Number(el[1]) <= 1 ? true : false;
  } else {
    return false;
  }
}

module.exports = args;
