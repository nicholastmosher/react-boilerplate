/**
 * Given an immutable.js sequence of items with an 'id' field, returns a
 * value one greater than the largest key in the sequence.
 * @param seq
 */
export const nextKey = (seq) => (
  (parseInt(seq.maxBy(item => parseInt(item.id)).id) + 1).toString()
);