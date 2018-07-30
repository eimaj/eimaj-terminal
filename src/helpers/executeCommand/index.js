import render from './render';
import help from './help';

// Canned responses:
const notFound = { message: 'Command not found' };

// Valid commands:
const commands = {
  render,
  help,
};
const commandKeys = Object.keys(commands)

const execute = (command = '') => {
  let action = command.substr(0, command.indexOf(' '));
  let payload = command.substr(command.indexOf(' ') + 1);

  if (!action) {
    action = payload;
    payload = '';
  }

  const keyIndex = commandKeys.findIndex(key => key === action);

  if (keyIndex === -1) {
    return notFound;
  }

  const key = commandKeys[keyIndex];

  return commands[key](payload);
};

export default execute;
