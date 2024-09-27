/* Flatten a Nested Map */
/* Write a function that takes a hierarchical map of properties
  and converts it to a single, flattened map,
  with the different levels separated by a forward slash ('/'). */

// Example

const input = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: 4
};

// Result
/*
{
  'a/b/c': 1,
  'a/b/d': 2,
  'a/e': 3,
  'f': 4
}
*/
const flattenNestedMap = (map) => {
    const result = {};
    (function recursive(map, key = "") {
        if (typeof map === "number") {
            result[key] = map
            return map;
        } else {
            Object.keys(map).forEach((item) => {
                let tempKey = key;
                if (key.length === 0) {
                    tempKey += item;
                } else {
                    tempKey += `/${item}`;
                }
                recursive(map[item], tempKey);
            });
        }
    })(map);

    return result
};
// const flattenNestedMap = (map, key = "", result = {}) => {
//     if (typeof map === "number") {
//         result[key] = map
//         return map;
//     } else {
//         Object.keys(map).forEach((item) => {
//             let tempKey = key;
//             if (key.length === 0) {
//                 tempKey += item;
//             } else {
//                 tempKey += `/${item}`;
//             }
//             flattenNestedMap(map[item], tempKey, result);
//         });
//     }
//     return result
// };
const output = flattenNestedMap(input);

console.log("OUTPUT: ", output);