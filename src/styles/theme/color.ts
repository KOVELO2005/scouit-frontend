export const color = {
  primary: '#3d8aff',
  primaryDarken1: '#1070ff',
  primaryDarken2: '#005de8',
  primaryLighten1: '#b1d0ff',
  primaryLighten2: '#f5f9ff',
  gray1: '#ffffff',
  gray2: '#f9f9f9',
  gray3: '#eeeeee',
  gray4: '#dddddd',
  gray5: '#999999',
  gray6: '#555555',
  gray7: '#343434',
  gray8: '#202020',
  gray9: '#121212',
  gray10: '#000000',
  errorLighten1: '#ffd3d3',
  errorLighten2: '#fff0f0',
  error: '#ff4646',
  errorDarken1: '#c23535',
  errorDarken2: '#852424',
} as const;

export type keyOfColor = keyof typeof color;
