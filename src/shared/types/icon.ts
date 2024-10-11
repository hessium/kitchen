export interface SpritesMap {
  common: 'test';
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
    filePath: 'common.defe98a9.svg',
    items: {
      test: {
        viewBox: '0 0 512 512',
      },
    },
  },
};
