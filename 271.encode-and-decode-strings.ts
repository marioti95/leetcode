function encode(strs: string[]) {
  let encoded = "";
  for (let s of strs) {
    encoded += s.length + "#" + s;
  }
  return encoded;
}

function decode(str: string) {
  let arr = [];

  let i = 0;
  while (i < str.length) {
    let hashIndex = i;

    while (str[hashIndex] !== "#") {
      hashIndex++;
    }

    let strLength = Number(str.substring(i, hashIndex));
    let start = Number(hashIndex + 1);
    let end = Number(hashIndex + strLength + 1);
    let tmp = str.substring(start, end);

    arr.push(tmp);

    i = end;
  }
  return arr;
}

console.log(encode(["neet", "code", "love", "you"]));
console.log(decode(encode(["neet", "code", "love", "you"])));
