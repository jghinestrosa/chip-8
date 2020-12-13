/**
 * Fetch the next opcode.
 * Chip-8 uses 2 bytes (16 bit) instructions. Each memory address is able to store 1 byte (8 bits), so
 * it is needed to fetch two bytes and assemble the opcode
 * @param {Object} data 
 * @param {Object} data.counters
 * @param {Array} data.memory
 */
export default function fetch({ counters, memory }) { 
  const { PC } = counters;

  // Assemble the opcode by shifting the first byte 8 bits to the left and
  // concatenating to the second byte
  const opcode = memory[PC] << 8 | memory[PC + 1];

  console.log(`> Fetching from position ${PC}`, opcode);

  return opcode;
}
