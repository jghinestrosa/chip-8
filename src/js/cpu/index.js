import cycle from './instruction-cycle/index';

/**
 * Creates a CPU object. It handles the registers, the stack, the counters
 * and the timers. It needs to receive memory as argument to support those
 * instructions that manage memory addresses
 * @param {Uint8Array} memory 
 * @returns {Object} { start, stop, reset, on, isWorking }
 */
export default function create(memory) {
  const registers = new Uint8Array(16); // 16 registers of 8 bits each
  const stack = new Uint16Array(16); // 16 values of 16 bit each
  const counters = {
    PC: 0x200, // Program counter
    I: 0, // Index register, 16 bit
    SP: -1 // Stack pointer
  };
  const timers = {
    DT: 0, // Delay timer
    ST: 0  // Sound timer
  };

  // Flag to stop a current cpu session
  const flags = {
    isWorking: false
  };

  // Events handler to manage the 'stopped' event
  let events = {};

  /**
   * Starts CPUs cycles.
   * It requires the display and the keys objects as arguments to manage the draw instruction and
   * instructions to manage key events respectively
   * @param {Object} data 
   * @param {Object} data.display 
   * @param {Object} data.keys 
   */
  function start({ display, keys }) {
    const cpu = { registers, stack, counters, timers };
    flags.isWorking = true;
    events = {};
    cycle({ cpu, memory, display, keys, flags, trigger });
  }

  /**
   * Stops the current CPU session by setting an internal flag to false.
   * This way, when a scheduled cycle finishes, it won't schedule another one and the loop will end
   */
  function stop() {
    flags.isWorking = false;
  }

  /**
   * Reset the CPU data (counters, timers, registers and stack)
   */
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

  /**
   * Event listener register (to manage the stop event from CPU when it stops the cycles)
   * @param {string} event 
   * @param {Function} callback 
   */
  function on(event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  }

  /**
   * Internal method to trigger events (e.g. stop)
   * @param {string} event 
   */
  function trigger(event) {
    const listeners = events[event] || [];
    listeners.forEach((callback) => callback());
  }
  
  /**
   * Returns true if the CPU is currently working and executing cycles
   */
  function isWorking() {
    return flags.isWorking;
  }

  return { start, stop, reset, on, isWorking };
}