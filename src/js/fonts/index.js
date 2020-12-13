import fonts from './font-set';

export default function load(memory) {
  for (let i = 0; i < fonts.length; i++) {
    memory[i] = fonts[i]; // fontSprite stored in memory
  }
} 