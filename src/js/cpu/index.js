import cycle from './instruction-cycle/index';

export default function create(memory) {
  const registers = new Uint8Array(16); // 16 registers of 8 bits each
  const stack = new Uint16Array(16); // 16 values of 16 bit each
  const counters = {
    PC: 0x200, // program counter
    I: 0, // index register, 16 bit
    SP: -1 // stack pointer
  };
  const timers = {
    DT: 0, // Delay timer
    ST: 0  // Sound timer
  };

  function start({ display, keys }) {
    const cpu = { registers, stack, counters, timers };
    cycle({ cpu, memory, display, keys });
  }

  return { start };
}