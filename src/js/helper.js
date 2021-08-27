// helper functions
export const removeDuplicates = (arr) => {
  const set = new Set(arr);
  const newArr = [...set];
  return newArr;
};
