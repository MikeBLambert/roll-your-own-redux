const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const validateBirthday = async (birthday) => {
  await sleep(1000);
  return new Date(birthday).valueOf() < Date.now();
};
