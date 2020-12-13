/**
 * Loads a ROM in RAM memory
 * @param {Uint8Array} memory 
 * @param {Uint8Array} romArrayBuffer 
 */
export default function load(memory, romArrayBuffer) {
  // The rom data should be stored in RAM memory from 0x200 address onwards
  for (let i = 0; i < romArrayBuffer.byteLength; i++) {
    const byte = romArrayBuffer[i];
    memory[0x200 + i] = byte;
  }
}
