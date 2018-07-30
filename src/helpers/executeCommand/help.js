const helpResponse = { message: `Eimaj CLI, v1.0. A fun way to intereact with my website.

Available commands:

render  Renders requested page content.
        Usage:  render [page]
        Options:
            -h, --help    Prints help for render

help    Prints this helpful text.
        Usage:  help`
};

const help = (payload = '') => {
  return helpResponse;
};

export default help;
