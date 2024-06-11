const resolvedWrapper = (val) => {
  return new Promise((resolve,reject) => {
    resolve(`${val}`)
  });
};

const rejectedWrapper = (str) => {
  return new Promise((resolve,reject) => {
    reject(new Error(`${str}`))
  });
};

const handleResolvedPromise = (prom) => {
  return prom.then((data) => {
    console.log(data)
    return data
})
};

const handleResolvedOrRejectedPromise = (prom) => {
  return prom.then((data) => {
    console.log(`${data}`)
    return data
  })
  .catch((error) => {
    console.error(`Your error message was: ${error.message}`);
    return null
  })
};


// const pauseForMs = () => {

// }
const pauseForMs = (timer) => {
  return new Promise((resolve,reject) => {
	  setTimeout (() => {
		  resolve();
	  }, timer)
  })
  .then(`We did it`)
}

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
