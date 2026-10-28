// The city listing pages show their cards in 4 grid blocks (top, more, final, featured) with a banner between
// them, 4 cards per row. When a block holds a number of cards that is not a multiple of 4, its last row is
// left with empty white slots in the middle of the page.
//
// rebalanceBlocks regroups the cards of one page: every block gets 8 cards (2 full rows) and only the very
// last block gets the remainder, so empty slots can only appear at the end of the page.
export const rebalanceBlocks = (blocks, blockSize = 8) => {
  const cards = blocks.flat();
  let start = 0;
  return blocks.map((_, index) => {
    const remaining = cards.length - start;
    const isLast = index === blocks.length - 1;
    const take = isLast || remaining <= blockSize ? remaining : blockSize;
    const part = cards.slice(start, start + take);
    start += take;
    return part;
  });
};
