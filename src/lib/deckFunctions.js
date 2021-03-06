export const generateDeck = async (cardArray) => {
  const halfArr = await cardArray.map((img, id) => ({
    id,
    src: img,
    clicked: false,
    match: false,
  }));

  const objArr = [...halfArr, ...halfArr];

  const firstTry = objArr.map((obj) => ({
    ...obj,
    uid: Math.floor(Math.random() * 9999),
  }));

  const result = randomize(firstTry);
  return randomize(result);
};

const randomize = (Arr) => {
  const result = [];

  while (Arr.length > 0) {
    const num = Math.floor(Math.random() * Arr.length);
    result.push(...Arr.splice(num, 1));
  }

  return result;
};

export const checkForAinB = (A, B) => {
  return B?.indexOf(A) !== -1;
};

export const sleepFor = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));
