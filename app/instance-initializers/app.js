export function initialize(applicationInstance) {
  const app = applicationInstance.lookup('service:app');
  app.initDarkMode();
}

export default {
  initialize,
};
