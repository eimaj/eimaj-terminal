import { helpFlags } from './help';
import markdown from '../../content';
import fourOhFour from '../errors/fourOhFour';

/**
 * pages - An Array of available pages to print.
 *
 * @return {Array}
 */
const pages = Object.keys(markdown);

/**
 * printHelp - The help message for the `print` command.
 *
 * @return {String}
 */
export const printHelp = `print   Prints requested page content in the console.
        Usage:  print [page]
        Options:
            -h, --help    Prints help for print`;

/**
 * helpResponse - Returns the help message for the render command.
 *
 * @return {Object}   Contains only { message: String }
 */
const helpResponse = {
  message: `${printHelp}
        Available pages:
${pages.map(page => (`            ${page}
`)).join('')}`,
};

/**
 * printPage - Creates a response for a page if the page is valid.
 *
 * @param  {String}  payload   The page requested by the user.
 * @return {Object}            The response Object.
 */
const printPage = (payload) => {
  if (!pages.includes(payload)) { return {}; }

  return {
    message: markdown[payload],
  };
};

/**
 * render - Handles the render action submitted by the user. Include page rendering
 * and the help command for render.
 *
 * @param  {String}  payload   The page requested by the user, default: ''
 * @return {Object}            The response Object.
 */
const print = (payload = '') => {
  const pageResponse = printPage(payload);

  if (Object.keys(pageResponse).length > 0) {
    return pageResponse;
  }

  if (helpFlags.includes(payload)) {
    return helpResponse;
  }

  return fourOhFour('print');
};

export default print;
