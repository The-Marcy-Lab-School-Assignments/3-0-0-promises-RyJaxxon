const crypto = require('crypto');
/** FEEDBACK: Great job getting this test to pass! It was a challenge! */
const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomFill(new Uint8Array(3), (err, buffer) => {
    if (err) return reject(err);
    resolve([...buffer]);
  });
});

const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((data) => {
      colors.push(numsToRGBColor(data));
      return getRandomBytes();
    })
    .then((data) => {
      colors.push(numsToRGBColor(data));
      return getRandomBytes();
    })
    .then((data) => {
      colors.push(numsToRGBColor(data));
      return getRandomBytes();
    })
    .then((data) => {
      colors.push(numsToRGBColor(data));
      return colors;
    })
    .catch((err) => {
      console.error(err);
    });
};

return4RandomColors().then(console.log);

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
