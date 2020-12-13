import createCpu from './cpu/create';
import cycle from './cpu/instruction-cycle';
import createDisplay from './display';
import fonts from './fonts';
import createKeysHandler from './keys';

const cpu = createCpu();

const canvas = document.querySelector('canvas.display');
const fileInput = document.querySelector('#file-explorer');

const display = createDisplay(canvas);
const { keys, onKeyDown, onKeyUp } = createKeysHandler();

function load(romArrayBuffer, cpu) {
  const { memory } = cpu;

  for (let i = 0; i < fonts.length; i++) {
    const fontSprite = fonts[i];
    memory[i] = fontSprite;
  }

  for (let i = 0; i < romArrayBuffer.byteLength; i++) {
    const byte = romArrayBuffer[i];
    memory[0x200 + i] = byte;
  }
}

function listenKeyEvents() {
  document.body.addEventListener('keydown', onKeyDown);
  document.body.addEventListener('keyup', onKeyUp);
}

display.clear();

fileInput.addEventListener('change', (event) => {
  const [file] = event.target.files;
  const fileReader = new FileReader();
  fileReader.addEventListener('loadend', event => {
    const fileBuffer = event.target.result;
    const uint8Array = new Uint8Array(fileBuffer); 
    window.uint8Array = uint8Array;
    load(uint8Array, cpu);
    listenKeyEvents();
    cycle({ cpu, display, keys });
  });

  fileReader.readAsArrayBuffer(file);
});