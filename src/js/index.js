import createCpu from './cpu';
import createMemory from './memory';
import createDisplay from './display';
import loadFonts from './fonts';
import createKeysHandler from './keys';
import loadRom from './rom';

const { memory, clearMemory } = createMemory();
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
listenKeyEvents();

function start(romArrayBuffer) {
  loadRom(memory, romArrayBuffer);
  cpu.start({ display, keys });
}

fileInput.addEventListener('change', (event) => {
  const [file] = event.target.files;
  const fileReader = new FileReader();

  fileReader.addEventListener('loadend', event => {
    const fileBuffer = event.target.result;
    const uint8Array = new Uint8Array(fileBuffer); 

    if (cpu.isWorking()) {
      cpu.on('stop', () => {
        console.log('>>>> CPU STOPPED, LETS LOAD ANOTHER ROM');
        cpu.reset();
        display.clear();
        clearMemory(memory);
        start(uint8Array);
      });

      cpu.stop();
      return;
    }

    console.log('>>>> CPU NOT WORkING, LETS LOAD THE FIRST ROM');
    start(uint8Array);
  });

  fileReader.readAsArrayBuffer(file);
});