import version from '../../version';

import { resizeHelp } from '../resizeContent';
import { printHelp } from './print';
import { renderHelp } from './render';

/**
 * helpMessage - The help message for the `help` command.
 *
 * @return {String}
 */
const helpMessage = `help    Prints this helpful text.
        Usage:  help`;

/**
 * helpFlags (export) - A list of flags for commands that can trigger a help message.
 */
export const helpFlags = ['--help', '-h'];

/**
 * help - The method that is called when the help command it submitted.
 *
 * @return {Object}   Contains only { message: String }
 */
const help = () => {
  return {
    message: `Eimaj CLI, v${version} - A fun way to intereact with my website

Available commands:

${renderHelp}

${printHelp}

${resizeHelp}

${helpMessage}`
  };
};

export default help;
