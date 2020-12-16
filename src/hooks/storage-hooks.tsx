const getSearchQuery = (searchQuery: string) => {
  const queryItem = localStorage.getItem('searchQuery');
  const queryItemParsed = (searchQuery && searchQuery) || (queryItem && queryItem.toString()) || '';
  const sort = 'relevance';
  return `?query=${encodeURIComponent(queryItemParsed)}&sort=${sort}`;
};

export default getSearchQuery;
