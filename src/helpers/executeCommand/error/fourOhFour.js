/**
 * notFoundResponse - Returns a message for Page Not Found (404) error.
 *
 * @return {Object}   Contains only { message: String }
 */
const notFoundResponse = (command) => ({
  message: `404: Page not found, try '${command} --help' for help.`
});

export default notFoundResponse;
