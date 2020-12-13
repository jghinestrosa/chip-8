export default function createCanvasHandler(canvas, width, height) {
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;

  function drawPixel(x, y, value) {
    const color = `rgb(0, ${value ? 255 : 0}, 0)`;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  }

  function drawFrameBuffer(frameBuffer) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < frameBuffer.length; i++) {
      const row = frameBuffer[i];

      for (let j = 0; j < row.length; j++) {
        const pixel = frameBuffer[i][j];

        const index = (canvas.width * i + j) * 4; // * 4 because every pixel in canvas is 4 positions: r, g, b, a

        data[index] = 0;
        data[index + 1] = pixel ? 255 : 0;
        data[index + 2] = 0;
        data[index + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function clear() {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, width, height);
  }

  return { drawPixel, drawFrameBuffer, clear };
}
