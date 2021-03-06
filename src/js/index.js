import createCpu from './cpu';
import createMemory from './memory';
import createDisplay from './display';
import loadFonts from './fonts';
import createKeysHandler from './keys';
import loadRom from './rom';
import getGameInstructions from './games-instructions';

// DOM elements
const canvas = document.querySelector('canvas.display');
const h2 = document.querySelector('h2');
const fileInput = document.querySelector('#file-explorer');
const select = document.querySelector('#select-preloaded-rom');
const pre = document.querySelector('#instructions');

// Chip-8 related objects
const { memory, clearMemory } = createMemory();
const cpu = createCpu(memory);
const display = createDisplay(canvas);
const { keys, onKeyDown, onKeyUp } = createKeysHandler();

/**
 * Start listening key up / down events from document.body
 */
function listenKeyEvents() {
  document.body.addEventListener('keydown', onKeyDown);
  document.body.addEventListener('keyup', onKeyUp);
}

// Init the Chip-8 implementation
display.clear();
loadFonts(memory);
listenKeyEvents();

/**
 * Creates a callback function that resets the current CPU, memory and display status and
 * loads another ROM
 * @param {Uint8Array} romArrayBuffer 
 */
function createSwitchRom(romArrayBuffer) {
  return function switchRom() {
    console.log('> Switch ROM');
    cpu.reset();
    display.clear();
    clearMemory(memory);
    start(romArrayBuffer);
  }
}

/**
 * Loads a ROM and starts the CPU
 * @param {Uint8Array} romArrayBuffer 
 */
function start(romArrayBuffer) {
  loadRom(memory, romArrayBuffer);
  cpu.start({ display, keys });
  // foo(memory);
}

function onArrayBufferReady(arrayBuffer) {
  const romArrayBuffer = new Uint8Array(arrayBuffer);

  // If the CPU is currently working, stop it and when it is stopped, switch the ROM
  if (cpu.isWorking()) {
    const switchRom = createSwitchRom(romArrayBuffer);
    cpu.on('stop', switchRom);
    console.log('> Stop CPU');
    cpu.stop();
    return;
  }

  console.log('> CPU is not working yet');
  // Starts by loading the ROM and starting the CPU cycles
  start(romArrayBuffer);
}

fileInput.addEventListener('change', (event) => {
  const [file] = event.target.files;
  const fileReader = new FileReader();

  fileReader.addEventListener('loadend', event => {
    const fileBuffer = event.target.result;
    h2.textContent = `Playing: ${file.name}`;
    h2.classList.remove('hidden');
    onArrayBufferReady(fileBuffer);
  });

  fileReader.readAsArrayBuffer(file);
});

select.addEventListener('change', (event) => {
  const { value } = event.target;
  h2.textContent = `Playing: ${value}`;
  h2.classList.remove('hidden');

  fetch(`/roms/${value}`)
    .then((response) => response.arrayBuffer())
    .then(onArrayBufferReady)
    .then(() => { pre.textContent = getGameInstructions(value)})
});