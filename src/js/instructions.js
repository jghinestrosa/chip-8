export const instructions = [
  {
    id: 'CLS',
    name: 'CLS',
    mask: 0xffff,
    pattern: 0x00e0,
    arguments: [
      { mask: 0x0fff, shift: 0 }
    ],
  },
  {
    id: 'RET',
    name: 'RET',
    mask: 0xffff,
    pattern: 0x00ee,
    arguments: [
      { mask: 0x0fff, shift: 0 }
    ],
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
]

export const executions = {
  CLS: ({ display, counters }) => {
    console.log(`> CLS`);
    display.clear();

    counters.PC = counters.PC + 2;
  },
  RET: ({ counters, stack }) => {
    if (counters.SP === -1) {
      throw new Error('Stack underflow.')
    }

    console.log(`> RET`);

    counters.PC = stack[counters.SP]
    counters.SP--
  },
  JP_ADDR: ({ args, counters }) => {
    const [addr] = args;

    console.log(`> JP_ADDR - JP ${addr}`);

    counters.PC = addr;
  },
  CALL_ADDR: ({ args, counters, stack }) => {
    const [addr] = args;
    console.log(`> CALL_ADDR - CALL ${addr}`);

    if (counters.SP === 15) {
      throw new Error('Stack overflow.')
    }

    counters.SP++;
    stack[counters.SP] = counters.PC + 2; // next instruction
    counters.PC = addr;
  },
  'SE_VX_KK': ({ args, counters, registers }) => {
    const vx = registers[args[0]];
    const kk = args[1];

    console.log(`> SE_VX_KK - SE V${vx} ${kk}`);

    if (vx === kk) {
      counters.PC = counters.PC + 4;
      return;
    }

    counters.PC = counters.PC + 2;
  },
  'SNE_VX_KK': ({ args, counters, registers }) => {
    const vx = registers[args[0]];
    const kk = args[1];

    console.log(`> SNE_VX_KK - SNE V${vx} ${kk}`);

    if (vx !== kk) {
      counters.PC = counters.PC + 4;
      return;
    }

    counters.PC = counters.PC + 2;
  },
  'SE_VX_VY': ({ args, counters, registers }) => {
    const vx = registers[args[0]];
    const vy = registers[args[1]];

    console.log(`> SE_VX_VY - SE V${vx} V${vy}`);

    if (vx === vy) {
      counters.PC = counters.PC + 4;
      return;
    }

    counters.PC = counters.PC + 2;
  },
  LD_VX_KK: ({ args, registers, counters }) => {
    const [vx, kk] = args;

    console.log(`> LD_VX_KK - LD V${vx} ${kk}`);

    registers[vx] = kk;
    counters.PC = counters.PC + 2;
  },
  ADD_VX_KK: ({ registers, args, counters }) => {
    const vx = registers[args[0]];
    const kk = args[1];
    registers[args[0]] = vx + kk;

    console.log(`> ADD ${kk} to V${args[0]} and save it in V${args[0]}`);

    counters.PC = counters.PC + 2;
  },
  LD_VX_VY: ({ registers, args, counters }) => {
    const vy = registers[args[1]];
    registers[args[0]] = vy;

    console.log(`> LD_VX_VY - LD V${args[1]} to V${args[0]}`);

    counters.PC = counters.PC + 2;
  },
  OR_VX_VY: ({ registers, args, counters }) => {
    const vx = registers[args[0]];
    const vy = registers[args[1]];
    registers[args[0]] = vx | vy;

    console.log(`> OR_VX_VY - OR V${args[0]} V${args[1]}`);

    counters.PC = counters.PC + 2;
  },
  AND_VX_VY: ({ registers, args, counters }) => {
    const vx = registers[args[0]];
    const vy = registers[args[1]];
    registers[args[0]] = vx & vy;

    console.log(`> AND_VX_VY - AND V${args[0]} V${args[1]}`);

    counters.PC = counters.PC + 2;
  },
  XOR_VX_VY: ({ registers, args, counters }) => {
    const vx = registers[args[0]];
    const vy = registers[args[1]];
    registers[args[0]] = vx ^ vy;

    console.log(`> XOR_VX_VY - XOR V${args[0]} V${args[1]}`);

    counters.PC = counters.PC + 2;
  },
  ADD_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const x = registers[regX];
    const y = registers[regY];
    registers[regX] = x + y;

    console.log(`> ADD_VX_VY - ADD ${y} to ${x} and save it in V${regX}`);

    counters.PC = counters.PC + 2;
  },
  SUB_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const x = registers[regX];
    const y = registers[regY];
    registers[regX] = x - y;

    console.log(`> SUB_VX_VY - SUB V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SHR_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const x = registers[regX];
    registers[0xf] = x & 1;
    registers[regX] = x >> 1;
    
    console.log(`> SHR_VX_VY - SHR V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SUBN_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const x = registers[regX];
    const y = registers[regY];
    registers[0xf] = y > x ? 1 : 0;
    registers[regX] = y - x;

    console.log(`> SUBN_VX_VY - SUBN V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SHL_VX_VY: ({ registers, args, counters }) => {
    const [regX] = args; 
    const x = registers[regX];
    registers[0xf] = x >> 7;
    registers[regX] = x << 1;

    console.log(`> SHL_VX_VY - SHL V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SNE_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const x = registers[regX];
    const y = registers[regY];

    console.log(`> SNE_VX_VY - SNE V${regX} V${regY}`);

    if (x != y) {
      counters.PC = counters.PC + 4;
      return;
    }

    counters.PC = counters.PC + 2;
  },
  LD_I_ADDR: ({ args, counters }) => {
    const [addr] = args; 
    console.log(`> LD_I_ADDR - LD I ${addr}`);
    counters.I = addr;
    counters.PC = counters.PC + 2;
  },
  JP_V0_ADDR: ({ registers, args, counters }) => {
    const [addr] = args; 
    console.log(`> JP_V0_ADDR - JP V0 ${addr}`);
    const v0 = registers[0];
    counters.PC = addr + v0;
  },
  RND_VX_KK: ({ registers, args, counters }) => {
    const [regX, kk] = args; 
    console.log(`> RND_VX_KK - RND V${regX} ${kk}`);
    registers[regX] = Math.floor((Math.random() * 255)) & kk;
    counters.PC = counters.PC + 2;
  },
  DRW_VX_VY_N: ({ registers, args, counters, memory, display }) => {
    const [regX, regY, n] = args;
    const vx = registers[regX];
    const vy = registers[regY];

    console.log(`> DRW_VX_VY_N - DRW V${regX} V${regY} ${n}`);

    registers[0xf] = 0;

    for (let i = 0; i < n; i++) {
      const byte = memory[counters.I + i];

      for (let j = 0; j < 8; j++) {
        const offset = 7 - j;
        // const bit = (byte & (1 << offset)) >> offset;
        const bit = (byte >> offset) & 1;
        const x = (vx + j) % display.getWidth(); // TODO: Width
        const y = (vy + i) % display.getHeight(); // TODO: Height
        const displayPixel = display.getPixel(x, y);
        display.drawPixel(x, y, displayPixel ^ bit);

        // only if displayPixel = 1 and bit = 1 --> 1 (flip, erase pixel in display)
        if (displayPixel & bit) {
          registers[0xf] = 1;
        }
      }
    }

    counters.PC = counters.PC + 2;
  },
  SKP_VX: ({ registers, args, keys, counters }) => {
    const { pressed } = keys;
    const [regX] = args;
    const vx = registers[regX];

    console.log(`> SKP_VX - SKP V${regX}`);
    
    if (pressed[vx] === 1) {
      counters.PC = counters.PC + 4;
      return;
    }

    counters.PC = counters.PC + 2;
  },
  SKNP_VX: ({ registers, args, keys, counters }) => {
    const { pressed } = keys;
    const [regX] = args;
    const vx = registers[regX];

    console.log(`> SKNP_VX - SKNP V${regX}`);
    
    if (pressed[vx] === 0) {
      counters.PC = counters.PC + 4;
      return;
    }

    counters.PC = counters.PC + 2;
  },
  LD_VX_DT: ({ registers, args, timers, counters }) => {
    const [regX] = args;
    const { DT } = timers;

    console.log(`> LD_VX_DT - LD V${regX} DT`);
    
    registers[regX] = DT;

    counters.PC = counters.PC + 2;
  },
  LD_VX_K: ({ registers, args, keys, counters }) => {
    const { lastPressed } = keys;

    keys.lastPressed = -1; // if there is a key pressed, once that is read, we have to clear the register

    console.log(`> LD_VX_K - LD V${regX} K`);

    if (lastPressed < 0) {
      return;
    }

    const [regX] = args;
    registers[regX] = lastPressed;

    counters.PC = counters.PC + 2;
  },
  LD_DT_VX: ({ registers, args, timers, counters }) => {
    const [regX] = args;
    const vx = registers[regX];

    console.log(`> LD_DT_VX - LD DT V${regX}`);

    timers.DT = vx;

    counters.PC = counters.PC + 2;
  },
  LD_ST_VX: ({ registers, args, timers, counters }) => {
    const [regX] = args;
    const vx = registers[regX];

    console.log(`> LD_ST_VX - LD ST V${regX}`);

    timers.ST = vx;

    counters.PC = counters.PC + 2;
  },
  ADD_I_VX: ({ registers, args, counters }) => {
    const [regX] = args;
    const vx = registers[regX];

    console.log(`> ADD_I_VX - ADD I V${regX}`);

    counters.I = counters.I + vx;

    counters.PC = counters.PC + 2;
  },
  LD_F_VX: ({ registers, args, counters }) => {
    const [regX] = args;
    const vx = registers[regX];

    console.log(`> LD_F_VX - LD F V${regX}`);

    if (vx > 0xf) {
      throw new Error('> Font Digit not valid');
    }

    counters.I = 5 * vx;

    counters.PC = counters.PC + 2;
  },
  LD_B_VX: ({ registers, args, counters, memory }) => {
    const [regX] = args;
    const vx = registers[regX];

    console.log(`> LD_B_VX - LD B V${regX}`);

    if (counters.I > 4093) {
      throw new Error('Memory out of bounds.')
    }
    
    // extremely lazy way... improve it by doing something more efficient
    const bcd = vx.toString()
      .split('')
      .map((val) => parseInt(val))

    for (let i = 0; i < 3; i++) {
      memory[counters.I + i] = bcd[i];
    }

    counters.PC = counters.PC + 2;
  },
  LD_I_VX: ({ registers, args, counters, memory }) => {
    const [regX] = args;

    console.log(`> LD_I_VX - LD I V${regX}`);

    if (counters.I > 4095 - regX) {
      throw new Error('Memory out of bounds.')
    }

    for (let i = 0; i <= regX; i++) {
      const vi = registers[i];
      memory[counters.I + i] = vi;
    }

    counters.PC = counters.PC + 2;
  },
  LD_VX_I: ({ registers, args, counters, memory }) => {
    const [regX] = args;

    console.log(`> LD_VX_I - LD V${regX} I`);

    if (counters.I > 4095 - regX) {
      throw new Error('Memory out of bounds.')
    }

    for (let i = 0; i <= regX; i++) {
      const vi = memory[counters.I + i];
      registers[i] = vi;
    }

    counters.PC = counters.PC + 2;
  }
};

export function decode(opcode) {
  // Find the instruction from the opcode
  console.log('> opcode', opcode);
  const instruction = instructions.find(({ mask, pattern }) => (opcode & mask) === pattern);

  if (!instruction) {
    throw new Error(`Instruction unknown: ${opcode}`);
  }

  // Find the argument(s)
  const args = instruction.arguments.map(({ mask, shift }) => (opcode & mask) >> shift);

  // Return an object containing the instruction data and arguments
  const { id } = instruction;
  return { id, args }
}

export function execute({instruction, memory, registers, stack, counters, display, keys, timers }) {
  const { id, args } = instruction;
  const foo = executions[id];
  // foo({ registers, args, counters });
  foo({ instruction, memory, registers, stack, counters, display, keys, timers, args });
 
}