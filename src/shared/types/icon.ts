export interface SpritesMap {
  common: 'cart' | 'close' | 'inst' | 'test' | 'twitter' | 'yt';
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string;
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string;
      }
    >;
  };
} = {
  common: {
    filePath: 'common.4c2e9223.svg',
    items: {
      cart: {
        viewBox: '0 0 21 21',
      },
      close: {
        viewBox: '0 0 22 22',
      },
      inst: {
        viewBox: '0 0 18 18',
      },
      test: {
        viewBox: '0 0 512 512',
      },
      twitter: {
        viewBox: '0 0 18 15',
      },
      yt: {
        viewBox: '0 0 18 13',
      },
    },
  },
};
