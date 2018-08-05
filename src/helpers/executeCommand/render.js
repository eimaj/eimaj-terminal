import { helpFlags } from './help';
import fourOhFour from './error/fourOhFour';
import markdown from '../../content';

/**
 * pages - An Array of available pages to render.
 *
 * @return {Array}
 */
const pages = Object.keys(markdown);

/**
 * renderHelp - The help message for the `render` command.
 *
 * @return {String}
 */
export const renderHelp = `render  Renders requested page content.
        Usage:  render [page]
        Options:
            -h, --help    Prints help for render`;

/**
 * helpResponse - Returns the help message for the render command.
 *
 * @return {Object}   Contains only { message: String }
 */
const helpResponse = {
  message: `${renderHelp}
        Available pages:
${pages.map(page => (`            ${page}
`)).join('')}`,
};

/**
 * renderPage - Creates a response for a page if the page is valid.
 *
 * @param  {String}  payload   The page requested by the user.
 * @return {Object}            The response Object.
 */
const renderPage = (payload) => {
  if (!pages.includes(payload)) { return {}; }

  const response = {};

  response['render'] = `/${payload}`;
  response['message'] = `Rendering ${payload}`;

  if (payload === 'home') {
    response['render'] = '/';
  }

  return response;
};

/**
 * render - Handles the render action submitted by the user. Include page rendering
 * and the help command for render.
 *
 * @param  {String}  payload   The page requested by the user, default: ''
 * @return {Object}            The response Object.
 */
const render = (payload = '') => {
  const pageResponse = renderPage(payload);

  if (Object.keys(pageResponse).length > 0) {
    return pageResponse;
  }

  if (helpFlags.includes(payload)) {
    return helpResponse;
  }

  return fourOhFour('render');
};

export default render;
