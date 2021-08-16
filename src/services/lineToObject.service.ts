
// assuming that each  "key = value" line is separated by \n

type ObjectType = {
  [key: string]: any
}

const keyValLineToObject = (line: string) => {

  // spliting line to an array of ["key", "value"] pairs
  const keyValArr = line.trim().split("=")
    .map(item => item.trim());

  // creating object from the ["key", "value"] array
  const [key, value] = keyValArr;
  if (!key.includes(".")) {
    return { [key]: value };
  } else {
    return nestObj(key, value);
  }
}

// function for creating nested object

function nestObj(keyString: string, value: any) {

  let keysToNest = keyString.split(".");

  let obj: ObjectType = {};
  let changableObj = obj;

  keysToNest.forEach((key, index) => {
    if (index === keysToNest.length - 1) {
      changableObj[key] = value;
    } else {
      changableObj[key] = {};
      changableObj = changableObj[key];
    }
  })
  return obj
}



export default keyValLineToObject;