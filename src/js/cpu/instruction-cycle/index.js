import fetch from './fetch';
import decode from './decode';
import execute from './execute';

/**
 * Fetch, decodes and executes a opcode
 * @param {Object} data 
 * @param {Object} data.cpu
 * @param {Object} data.memory
 * @param {Object} data.display
 * @param {Object} data.keys
 */
function step({ cpu, memory, display, keys }) {
  const { registers, stack, counters, timers } = cpu;
  const opcode = fetch({ counters, memory });
  const instruction = decode(opcode);
  execute({ instruction, memory, registers, stack, counters, display, keys, timers });
}

// TODO: Improve this
let timer = 0;

/**
 * Performs a instruction cycle: updates timers, fetch op, decode op and execute op
 * It schedules another cycle after 3ms
 * @param {Object} data 
 * @param {Object} data.cpu
 * @param {Object} data.memory
 * @param {Object} data.display
 * @param {Object} data.keys
 */
export default function cycle(data) {
  const { cpu: { timers } } = data;

  timer++

  if (timer % 5 === 0) {
    if (timers.DT > 0) {
      timers.DT--
    }

    if (timers.ST > 0) {
      timers.ST--
    }
    timer = 0
  }


  step(data)

  setTimeout(() => {
    const { flags: { isWorking } , trigger } = data;

    if (!isWorking) {
      console.log('>> CPU STOPPED!!');
      trigger('stop');
      return;
    }

    cycle(data)
  }, 3)
}