export default mili =>
  new Promise(resolve =>
    setTimeout(resolve, mili))