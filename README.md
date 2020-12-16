# Chip-8

## Description

A Chip-8 implementation in JavaScript.

## Instructions

### Dev server

```
npm start
```

### Build the project for production

```
npm run build
```

### Run unit tests

```
npm test
```

## Pending tasks
- ~Add public domain ROMs to the project~
- ~Add instructions for each pre-loaded game~
- Unit tests
- Implement sound
- Double check if the speed for operation cycles is correct or not 

## Motivation
I have been always intrigued by how emulators work. Emulate software from different platforms and hardware always felt like magic to me. Because of this, I decided to start learning and implement one by myself.

I chosed Chip-8 because of its simplicity and because the web is full of documentation about it. It looked like a good start to me.

## Resources

- [Writing an Emulator in JavaScript (Chip-8)](https://www.taniarascia.com/writing-an-emulator-in-javascript-chip8/) by Tania Rascia 
- [Chip8.js](https://github.com/taniarascia/chip8) by Tania Rascia
- [Cowgod's Chip-8 Technical Reference](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM) by Thomas P. Greene
- [How to write an emulator (CHIP-8 interpreter)](http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/) by Laurence Muller
- [David Winter's CHIP-8 emulation page](http://pong-story.com/chip8/) by David Winter
- [Chip-8 Wikipedia](https://en.wikipedia.org/wiki/CHIP-8)

## Thanks

I wanted to thank to [Tania Rascia](https://github.com/taniarascia) because her project (and her article) was very helpful to me. Specially regarding to the way she defined the instructions set and its masks to perform the operations decode. It was the most confusing part for me at the beginning of this project and her implementation helped me a lot.

## License
MIT