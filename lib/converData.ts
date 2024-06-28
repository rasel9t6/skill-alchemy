export const replaceMongoIdInArray = (
  array: { _id: any; [key: string]: any }[],
): { id: string; [key: string]: any }[] => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj: {
  _id: any;
  [key: string]: any;
}): { id: string; [key: string]: any } => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};
