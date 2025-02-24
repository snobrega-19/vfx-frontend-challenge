export const convertNestedJsonToArray = (
  jsonObj: Record<string, any>
): Array<Record<string, any>> => {
  const arrayData: Array<Record<string, any>> = [];

  for (const key in jsonObj) {
    if (jsonObj[key] !== null && typeof jsonObj[key] === "object") {
      const obj: Record<string, any> = {};

      for (const nestedKey in jsonObj[key]) {
        const objKey = nestedKey.split(". ")[1] ?? nestedKey;
        obj[objKey] = jsonObj[key][nestedKey];
      }

      arrayData.push({ date: key, ...obj });
    }
  }

  return arrayData;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
