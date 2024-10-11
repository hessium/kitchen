export interface SpritesMap {
  common: 'cart' | 'test';
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
    filePath: 'common.6db0b309.svg',
    items: {
      cart: {
        viewBox: '0 0 25 17',
      },
      test: {
        viewBox: '0 0 512 512',
      },
    },
  },
};
