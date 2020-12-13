/*
 Data structure to classify instructions from opcodes.
 Uses masks to identify the instruction and get the arguments.
 Totally based on Tania Rascia's Chip 8 implementation because it works like a charm! https://github.com/taniarascia/chip8/blob/master/data/instructionSet.js
*/
export default [
  {
    id: 'CLS',
    name: 'CLS',
    mask: 0xffff,
    pattern: 0x00e0,
    arguments: [],
  },
  {
    id: 'RET',
    name: 'RET',
    mask: 0xffff,
    pattern: 0x00ee,
    arguments: [],
  },
  {
    id: 'JP_ADDR',
    name: 'JP',
    mask: 0xf000,
    pattern: 0x1000,
    arguments: [
      { mask: 0x0fff, shift: 0 }
    ],
  },
  {
    id: 'CALL_ADDR',
    name: 'CALL',
    mask: 0xf000,
    pattern: 0x2000,
    arguments: [
      { mask: 0x0fff, shift: 0 }
    ],
  },
  {
    id: 'SE_VX_KK',
    name: 'SE',
    mask: 0xf000,
    pattern: 0x3000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00ff, shift: 0 }
    ],
  },
  {
    id: 'SNE_VX_KK',
    name: 'SNE',
    mask: 0xf000,
    pattern: 0x4000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00ff, shift: 0 }
    ],
  },
  {
    id: 'SE_VX_VY',
    name: 'SE',
    mask: 0xf00f,
    pattern: 0x5000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 }
    ],
  },
  {
    id: 'LD_VX_KK',
    name: 'LD',
    mask: 0xf000,
    pattern: 0x6000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00ff, shift: 0 }
    ],
  },
  {
    id: 'ADD_VX_KK',
    name: 'ADD',
    mask: 0xf000,
    pattern: 0x7000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00ff, shift: 0 },
    ],
  },
  {
    id: 'LD_VX_VY',
    name: 'LD',
    mask: 0xf00f,
    pattern: 0x8000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'OR_VX_VY',
    name: 'OR',
    mask: 0xf00f,
    pattern: 0x8001,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'AND_VX_VY',
    name: 'AND',
    mask: 0xf00f,
    pattern: 0x8002,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'XOR_VX_VY',
    name: 'XOR',
    mask: 0xf00f,
    pattern: 0x8003,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'ADD_VX_VY',
    name: 'ADD',
    mask: 0xf00f,
    pattern: 0x8004,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'SUB_VX_VY',
    name: 'SUB',
    mask: 0xf00f,
    pattern: 0x8005,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'SHR_VX_VY',
    name: 'SHR',
    mask: 0xf00f,
    pattern: 0x8006,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'SUBN_VX_VY',
    name: 'SUBN',
    mask: 0xf00f,
    pattern: 0x8007,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'SHL_VX_VY',
    name: 'SHL',
    mask: 0xf00f,
    pattern: 0x800e,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'SNE_VX_VY',
    name: 'SNE',
    mask: 0xf00f,
    pattern: 0x9000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
    ],
  },
  {
    id: 'LD_I_ADDR',
    name: 'LD',
    mask: 0xf000,
    pattern: 0xa000,
    arguments: [
      { mask: 0x0fff, shift: 0 },
    ],
  },
  {
    id: 'JP_V0_ADDR',
    name: 'JP',
    mask: 0xf000,
    pattern: 0xb000,
    arguments: [
      { mask: 0x0fff, shift: 0 },
    ],
  },
  {
    id: 'RND_VX_KK',
    name: 'RND',
    mask: 0xf000,
    pattern: 0xc000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00ff, shift: 0 },
    ],
  },
  {
    id: 'DRW_VX_VY_N',
    name: 'DRW',
    mask: 0xf000,
    pattern: 0xd000,
    arguments: [
      { mask: 0x0f00, shift: 8 },
      { mask: 0x00f0, shift: 4 },
      { mask: 0x000f, shift: 0 },
    ],
  },
  {
    id: 'SKP_VX',
    name: 'SKP',
    mask: 0xf0ff,
    pattern: 0xe09e,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'SKNP_VX',
    name: 'SKNP',
    mask: 0xf0ff,
    pattern: 0xe0a1,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_VX_DT',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf007,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_VX_K',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf00a,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_DT_VX',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf015,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_ST_VX',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf018,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'ADD_I_VX',
    name: 'ADD',
    mask: 0xf0ff,
    pattern: 0xf01e,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_F_VX',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf029,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_B_VX',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf033,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_I_VX',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf055,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  },
  {
    id: 'LD_VX_I',
    name: 'LD',
    mask: 0xf0ff,
    pattern: 0xf065,
    arguments: [
      { mask: 0x0f00, shift: 8 }
    ],
  }
];