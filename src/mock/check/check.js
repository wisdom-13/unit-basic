function check(predicate, onSuccess, onFail) {
  if (predicate()) {
    onSuccess('Yes')
  } else {
    onFail('No')
  }
}

module.exports = check;