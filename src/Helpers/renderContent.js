const renderContent = (
  loading,
  loadingComponent,
  error,
  errorComponent,
  renderComponent
) => {
  if (loading) {
    return loadingComponent;
  } else if (error) {
    return errorComponent;
  } else {
    return renderComponent;
  }
};

export default renderContent;