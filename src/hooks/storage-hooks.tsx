export const getSearchQuery = () => {
  const queryItem = localStorage.getItem("searchQuery");
  const queryItemParsed = (queryItem && queryItem.toString()) || "";
  const sort = "relevance";
  return `?query=${encodeURIComponent(queryItemParsed)}&sort=${sort}`;
};
