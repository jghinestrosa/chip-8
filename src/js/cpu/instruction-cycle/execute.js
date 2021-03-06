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

    counters.PC = stack[counters.SP];
    counters.SP--;
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
    const [regX, kk] = args;
    const vx = registers[regX];

    console.log(`> SE_VX_KK - SE V${regX} ${kk}`);

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
    const [regX, kk] = args;

    console.log(`> LD_VX_KK - LD V${regX} ${kk}`);

    registers[regX] = kk;
    counters.PC = counters.PC + 2;
  },
  ADD_VX_KK: ({ registers, args, counters }) => {
    const [regX, kk] = args;
    const vx = registers[regX];

    const result = vx + kk;

    registers[regX] = result > 255 ? result - 256 : result;

    console.log(`> ADD ${kk} to V${regX} and save it in V${regX}`);

    counters.PC = counters.PC + 2;
  },
  LD_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args;
    const vy = registers[regY];
    registers[regX] = vy;

    console.log(`> LD_VX_VY - LD V${regY} to V${regX}`);

    counters.PC = counters.PC + 2;
  },
  OR_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args;
    const vx = registers[regX];
    const vy = registers[regY];
    registers[regX] = vx | vy;

    console.log(`> OR_VX_VY - OR V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  AND_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args;
    const vx = registers[regX];
    const vy = registers[regY];
    registers[regX] = vx & vy;

    console.log(`> AND_VX_VY - AND V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  XOR_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args;
    const vx = registers[regX];
    const vy = registers[regY];
    registers[regX] = vx ^ vy;

    console.log(`> XOR_VX_VY - XOR V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  ADD_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const vx = registers[regX];
    const vy = registers[regY];

    registers[0xf] = vx + vy > 512 ? 1 : 0;
    registers[regX] = vx + vy;

    console.log(`> ADD_VX_VY - ADD ${vy} to ${vx} and save it in V${regX}`);

    counters.PC = counters.PC + 2;
  },
  SUB_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const vx = registers[regX];
    const vy = registers[regY];

    registers[0xf] = vx > vy ? 1 : 0;
    registers[regX] = vx - vy;

    console.log(`> SUB_VX_VY - SUB V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SHR_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const vx = registers[regX];
    registers[0xf] = vx & 1;
    registers[regX] = vx >> 1;
    
    console.log(`> SHR_VX_VY - SHR V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SUBN_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const vx = registers[regX];
    const vy = registers[regY];
    registers[0xf] = vy > vx ? 1 : 0;
    registers[regX] = vy - vx;

    console.log(`> SUBN_VX_VY - SUBN V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SHL_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const vx = registers[regX];
    registers[0xf] = vx >> 7;
    registers[regX] = vx << 1;

    console.log(`> SHL_VX_VY - SHL V${regX} V${regY}`);

    counters.PC = counters.PC + 2;
  },
  SNE_VX_VY: ({ registers, args, counters }) => {
    const [regX, regY] = args; 
    const vx = registers[regX];
    const vy = registers[regY];

    console.log(`> SNE_VX_VY - SNE V${regX} V${regY}`);

    if (vx != vy) {
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
    const [regX] = args;

    keys.lastPressed = -1; // if there is a key pressed, once that is read, we have to clear the register

    console.log(`> LD_VX_K - LD V${regX} K`);

    if (lastPressed < 0) {
      return;
    }

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

    console.log(`> LD_F_VX - LD F V${regX} - V${regX} = ${vx}`);

    if (vx > 0xf) {
      throw new Error('> Font Digit not valid');
    }

    counters.I = 5 * vx;

    counters.PC = counters.PC + 2;
  },
  LD_B_VX: ({ registers, args, counters, memory }) => {
    const [regX] = args;
    let vx = registers[regX];

    console.log(`> LD_B_VX - LD B V${regX}`);

    if (counters.I > 4093) {
      throw new Error('Memory out of bounds.')
    }

    const hundreds = Math.floor(vx / 100); // hundreds digit
    vx = vx - hundreds * 100; // removes the first digit from vx
    const tens = Math.floor(vx / 10); // tens digit
    vx = vx - tens * 10; // removes the tens digit from the updated vx
    const ones = Math.floor(vx)

    const bcd = [hundreds, tens, ones];

    for (let i = 0; i < bcd.length; i++) {
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

/**
 * Executes the instruction received. It also receives the required CPU and memory data as arguments.
 * @param {Object} data 
 * @param {Object} data.instruction 
 * @param {Object} data.memory 
 * @param {Object} data.registers 
 * @param {Object} data.stack 
 * @param {Object} data.counters 
 * @param {Object} data.display 
 * @param {Object} data.keys 
 * @param {Object} data.timers 
 */
export default function execute({ instruction, memory, registers, stack, counters, display, keys, timers }) {
  const { id, args } = instruction;
  const executeFn = executions[id];
  executeFn({ instruction, memory, registers, stack, counters, display, keys, timers, args });
}