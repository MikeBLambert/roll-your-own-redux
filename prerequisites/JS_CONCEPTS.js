/**
 * ===================
 * Object.entries
 * Turns object into an array of key/value pairs.
 * ===================
 */
const fruitDictionary = {
  apple:
    "the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.",
  banana:
    "a long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
  chirimoya:
    "a tropical American fruit with a flavor like pineapple and scaly green skin. ",
};

const iterableFruitsDictionary = Object.entries(fruitDictionary);
/** [
 *    [
 *      apple,
 *      "the round fruit of a tree of the rose family, which typically has
 *      thin red or green skin and crisp flesh. Many varieties have been
 *      developed as dessert or cooking fruit or for making cider."
 *    ],
 *    [
 *      banana,
 *      "a long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe."
 *    ],
 *    [
 *      chirimoya,
 *      "a tropical American fruit with a flavor like pineapple and scaly
 *      green skin."
 *    ],
 * ]
 */

/**
 * ===================
 * Object.entries
 * Iterate over an array and pass the result of each iteration to the next.
 * ===================
 */

export const reviewedFruits = iterableFruitsDictionary.reduce(
  (acc, [key, value]) => {
    if (key === "chirimoya")
      return { ...acc, [key]: { meaning: value, review: "Best fruit ever!" } };
    return { ...acc, [key]: { meaning: value, review: "Not bad..." } };
  },
  {},
);

/**
 * const reviewedFruits = {
    apple: {
      meaning: 
        "the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.",
      review: "Not bad..."
    }
    bananna: {
      meaning: 
        "a long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe.",
      review: "Not bad..."
    }
    chirimoya: {
      meaning: 
        "a tropical American fruit with a flavor like pineapple and scaly green skin.",
      review: "Best fruit ever!"
    }
};
 */
