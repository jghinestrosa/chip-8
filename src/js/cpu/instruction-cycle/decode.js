import instructions from '../../instructions';

/**
 * Decodes the instruction from an opcode
 * @param {Number} opcode 
 * @returns {Object} The id and the arguments of the instruction
 */
export default function decode(opcode) {
  console.log('> Opcode to decode:', opcode);

  // Apply mask to opcode and compare with possible instruction pattern
  // E.g: 0x6789 will match with 0x6000 when the 0xf000 mask is applied, and it will
  // classify the instruction as LD_VK_KK
  const instruction = instructions.find(({ mask, pattern }) => (opcode & mask) === pattern);

  if (!instruction) {
    throw new Error(`Instruction unknown: ${opcode}`);
  }

  // Apply the arguments mask to the opcode to get the arguments
  // E.g. 0x6789 will get the arguments by using the 0x0fff mask, what will result in two arguments
  // according to the instruction arguments config: 0x7 as VK and 0x89 as KK
  const args = instruction.arguments.map(({ mask, shift }) => (opcode & mask) >> shift);

  // Return an object containing the instruction id and arguments
  const { id } = instruction;
  return { id, args }
}