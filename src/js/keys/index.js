const keyMap = [
  '1', '2', '3', '4',
  'q', 'w', 'e', 'r', 
  'a', 's', 'd', 'f', 
  'z', 'x', 'c', 'v'
];

/**
 * Creates a data structure to keep track of the pressed keys during the emulation
 * and provides the callback functions to handle keyup/keydown events
 * @returns { Object } The keys data structure, onKeyDown and onKeyUp callbacks
 */
export default function create() {
  /*
    A data structure to keep track of the currently pressed keys and
    the last pressed key
   */
  const keys = {
    pressed: [
      0, 0, 0, 0,
      0, 0, 0, 0, 
      0, 0, 0, 0, 
      0, 0, 0, 0
    ],
    lastPressed: -1
  };

  /**
   * Callback to handle key down events.
   * If the pressed key is one of the accepted by Chip-8, it is
   * stored in memory as pressed
   * @param {Object} event keyDown event
   */
  function onKeyDown(event) {
    const { key } = event;
    const index = keyMap.indexOf(key);
    if (index > -1) {
      keys.pressed[index] = 1;
      keys.lastPressed = index;
    };
  }

  /**
   * Callback to handle key up events.
   * If the released key is one of the accepted by Chip-8, it is
   * stored in memory as released
   * @param {Object} event keyDown event
   */
  function onKeyUp(event) {
    const { key } = event;
    const index = keyMap.indexOf(key);
    if (index > -1) {
      keys.pressed[index] = 0;
      keys.lastPressed = -1;
    };
  }

  return { keys, onKeyDown, onKeyUp };
}