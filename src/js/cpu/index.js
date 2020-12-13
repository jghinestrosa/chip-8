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

  const flags = {
    isWorking: false
  };

  let events = {};

  function start({ display, keys }) {
    const cpu = { registers, stack, counters, timers };
    flags.isWorking = true;
    events = {};
    cycle({ cpu, memory, display, keys, flags, trigger });
  }

  function stop() {
    flags.isWorking = false;
  }

  function reset() {
    counters.PC = 0x200;
    counters.I = 0;
    counters.SP = -1;
    timers.DT = 0;
    timers.ST = 0;

    for (let i = 0; i < registers.length; i++) {
      registers[i] = 0;
    }

    for (let i = 0; i < stack.length; i++) {
      stack[i] = 0;
    }
  }

  function on(event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  }

  function trigger(event) {
    const listeners = events[event] || [];
    listeners.forEach((callback) => callback());
  }
  
  function isWorking() {
    return flags.isWorking;
  }

  return { start, stop, reset, on, isWorking };
}