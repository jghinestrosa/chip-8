import createCanvasHandler from './canvasHandler';

const DISPLAY_WIDTH = 64;
const DISPLAY_HEIGHT = 32;

export default function createDisplay(canvas) {
  const canvasHandler = createCanvasHandler(canvas, DISPLAY_WIDTH, DISPLAY_HEIGHT);

  const frameBuffer = [];

  for (let i = 0; i < DISPLAY_HEIGHT; i++) {
    frameBuffer.push([]);

    for (let j = 0; j < DISPLAY_WIDTH; j++) {
      frameBuffer[i].push(0);
    }
  }

  window.frameBuffer = frameBuffer;

  function drawPixel(x, y, value) {
    frameBuffer[y][x] = value;
    canvasHandler.drawPixel(x, y, value);
  }

  function getDisplayStatus() {
    return frameBuffer;
  }

  function getPixel(x, y) {
    return frameBuffer[y][x];
  }

  function getHeight() {
    return frameBuffer.length;
  }

  function getWidth() {
    return frameBuffer[0].length;
  }
  
  function clear() {
    for (let i = 0; i < DISPLAY_HEIGHT; i++) {
      for (let j = 0; j < DISPLAY_WIDTH; j++) {
        frameBuffer[i][j] = 0;
      }
    }
    canvasHandler.clear();
  }

  return { drawPixel, getDisplayStatus, getPixel, getWidth, getHeight, clear };
}