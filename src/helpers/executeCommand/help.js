/**
 * renderMessage - The help message for the `render` command.
 *
 * @return {String}
 */
const renderMessage = `render  Renders requested page content.
        Usage:  render [page]
        Options:
            -h, --help    Prints help for render`;

/**
 * helpMessage - The help message for the `help` command.
 *
 * @return {String}
 */
const helpMessage = `help    Prints this helpful text.
        Usage:  help`;

/**
 * helpResponses (export) - A compiled Object of all available command help messages.
 *
 * @return {Object}
 */
export const helpResponses = {
  render: renderMessage,
  help: helpMessage,
}

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
    message: `Eimaj CLI, v1.0. A fun way to intereact with my website.

Available commands:

${renderMessage}
${helpMessage}`
  };
};

export default help;
