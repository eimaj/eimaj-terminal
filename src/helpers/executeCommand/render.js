// Valid payload:
const pages = ['home', 'cv', 'pixel'];
const help = ['--help', '-h'];

// Canned responses:
const notFoundResponse = {
  message: `Page not found, available pages include: [${pages.map((page) => page).join(', ')}]`
};
const helpResponse = { message: `Usage: render [page]
  Renders requested page content.

  Available pages:
${pages.map(page => (`    ${page}
`)).join('')}`
};

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

const render = (payload = '') => {
  const pageResponse = renderPage(payload);

  if (Object.keys(pageResponse).length > 0) {
    return pageResponse;
  }

  if (help.includes(payload)) {
    return helpResponse;
  }

  return notFoundResponse;
};

export default render;
