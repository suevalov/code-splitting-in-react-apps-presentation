if (window.location.pathname === '/feed') {
  showLoadingState();
  require.ensure([], function() {
    hideLoadingState();
    require('./feed').show();
  });
} else if (window.location.pathname === '/profile') {
  showLoadingState();
  require.ensure([], function() {
    hideLoadingState();
    require('./profile').show();
  });
}