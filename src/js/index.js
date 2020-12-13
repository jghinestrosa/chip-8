import createCpu from './cpu/create';
import cycle from './cpu/instruction-cycle';
import createDisplay from './display';
import fonts from './fonts';

const cpu = createCpu();

const canvas = document.querySelector('canvas.display');
const fileInput = document.querySelector('#file-explorer');

const display = createDisplay(canvas);

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