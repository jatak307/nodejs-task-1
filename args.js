const args = process.argv.reduce((acc, current, i, arr) => {
  if (current === "-c" || current === "--config") {
    isDuplicated(acc, "config");
    acc["config"] = arr[i + 1];
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

module.exports = args;
