import render from './render';
import help from './help';

/**
 * commands: A compiled Object of imported commands.
 *
 * @return {Object}
 */
const commands = {
  render,
  help,
};


/**
 * commandKeys - An Array of keys from the commands Object. Used for
 * determining if a command is available.
 */
const commandKeys = Object.keys(commands)

/**
 * notFoundResponse - The default response when a command is not found.
 */
const notFoundResponse = { message: 'Command not found' };


/**
 * execute - Parses the command submitted by the user and returns a response Object.
 *
 * @param  {String} command   The command submitted by the user, default: ''
 * @return {Object}           The response generated by the action, always uncludes a message
 */
const execute = (command = '') => {
  // Parse the action from the payload on the first space.
  let action = command.substr(0, command.indexOf(' '));
  let payload = command.substr(command.indexOf(' ') + 1);

  // If the action is blank, that means there was no payload, set action to payload.
  if (!action) {
    action = payload;
    payload = '';
  }

  // Determine if the action is valid with findIndex.
  const keyIndex = commandKeys.findIndex(key => key === action);

  // If the action was not found, return the notFoundResponse.
  if (keyIndex === -1) {
    return notFoundResponse;
  }

  // The action exists, send it the payload.
  return commands[action](payload);
};

export default execute;
