import _ from "lodash";

export const handlePageDatas = (data, perPage, page) => {
  const startIndex = (page - 1) * perPage;
  const perPageData = _(data).slice(startIndex).take(perPage).value();
  return perPageData;
};
