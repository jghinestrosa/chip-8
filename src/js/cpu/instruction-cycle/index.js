import fetch from './fetch';
import decode from './decode';
import execute from './execute';

function step({ cpu, display, keys }) {
  const { memory, registers, stack, counters, timers } = cpu;
  const opcode = fetch({ counters, memory });
  const instruction = decode(opcode);
  execute({ instruction, memory, registers, stack, counters, display, keys, timers });
  // canvasHandler.drawFrameBuffer(display.getDisplayStatus());
}

// TODO: Improve this
let timer = 0;

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
  setTimeout(() => cycle(data), 3)
}