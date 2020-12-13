import createCpu from './cpu';
import createMemory from './memory';
import createDisplay from './display';
import loadFonts from './fonts';
import createKeysHandler from './keys';
import loadRom from './rom';

const memory = createMemory();
const cpu = createCpu(memory);

const canvas = document.querySelector('canvas.display');
const fileInput = document.querySelector('#file-explorer');

const display = createDisplay(canvas);
const { keys, onKeyDown, onKeyUp } = createKeysHandler();

function listenKeyEvents() {
  document.body.addEventListener('keydown', onKeyDown);
  document.body.addEventListener('keyup', onKeyUp);
}

// Init the Chip-8 implementation
display.clear();
loadFonts(memory);

fileInput.addEventListener('change', (event) => {
  const [file] = event.target.files;
  const fileReader = new FileReader();
  fileReader.addEventListener('loadend', event => {
    const fileBuffer = event.target.result;
    const uint8Array = new Uint8Array(fileBuffer); 
    window.uint8Array = uint8Array;
    loadRom(memory, uint8Array);
    listenKeyEvents();
    cpu.start({ display, keys });
  });

  fileReader.readAsArrayBuffer(file);
});