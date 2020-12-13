import fetch from './fetch';
import decode from './decode';
import execute from './execute';
import createDisplay from './display';
import createCanvasHandler from './canvasHandler';
import fonts from './fonts';

const memory = new Uint8Array(4096); // 4kb memory
const registers = new Uint8Array(16); // 16 registers of 8 bits each
const stack = new Uint16Array(16); // 16 values of 16 bit each

window.fooMemory = memory;

const display = createDisplay();

const canvas = document.querySelector('canvas.display');
const fileInput = document.querySelector('#file-explorer');
const canvasHandler = createCanvasHandler(canvas, display.getWidth(), display.getHeight());

const counters = {
  PC: 0x200, // program counter
  // PC: 0x000, // program counter
  I: 0, // index register, 16 bit
  SP: -1 // stack pointer
};

const keyMap = [
  '1', '2', '3', '4',
  'q', 'w', 'e', 'r', 
  'a', 's', 'd', 'f', 
  'z', 'x', 'c', 'v'
];

const keys = {
  pressed: [
    0, 0, 0, 0,
    0, 0, 0, 0, 
    0, 0, 0, 0, 
    0, 0, 0, 0
  ],
  lastPressed: -1
};

const timers = {
  DT: 0, // ??
  ST: 0 // ??
};


// TODO: Provide rom buffer
function load(romArrayBuffer) {
  /*
  // LD V1, 1
  memory[0] = 0x61;
  memory[1] = 0x01;
  
  // ADD V1, V1
  memory[2] = 0x81;
  memory[3] = 0x14;

  // PC = 16
  memory[4] = 0x10;
  memory[5] = 0x10;
  */

  for (let i = 0; i < fonts.length; i++) {
    const fontSprite = fonts[i];
    memory[i] = fontSprite;
  }

  for (let i = 0; i < romArrayBuffer.byteLength; i++) {
    const byte = romArrayBuffer[i];
    memory[0x200 + i] = byte;
  }

}

/*function fetch() { 
  const { PC } = counters;
  console.log(`> Fetching from position ${PC}`, (memory[PC] << 8 | memory[PC + 1]));
  return memory[PC] << 8 | memory[PC + 1];
}*/

function step() {
  const opcode = fetch({ counters, memory });
  const instruction = decode(opcode);
  execute({ instruction, memory, registers, stack, counters, display, keys, timers });
  canvasHandler.drawFrameBuffer(display.getDisplayStatus());
}

let timer = 0;


function cycle() {
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


  step()
  setTimeout(cycle, 3)
}

function listenKeyEvents() {
  document.body.addEventListener('keydown', (event) => {
    const { key } = event;
    const index = keyMap.indexOf(key);
    if (index > -1) {
      keys.pressed[index] = 1;
      keys.lastPressed = index;
      // console.log(keys.pressed);
    };
  });

  document.body.addEventListener('keyup', (event) => {
    const { key } = event;
    const index = keyMap.indexOf(key);
    if (index > -1) {
      keys.pressed[index] = 0;
      keys.lastPressed = -1;
      // console.log(keys.pressed);
    };
  });
}

canvasHandler.drawFrameBuffer(display.getDisplayStatus());

fileInput.addEventListener('change', (event) => {
  const [file] = event.target.files;
  const fileReader = new FileReader();
  fileReader.addEventListener('loadend', event => {
    const fileBuffer = event.target.result;
    const uint8Array = new Uint8Array(fileBuffer); 
    window.uint8Array = uint8Array;
    load(uint8Array);
    listenKeyEvents();
    cycle();
  });

  fileReader.readAsArrayBuffer(file);
});

// load();
// cycle()