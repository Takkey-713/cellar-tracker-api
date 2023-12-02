export const factoryPagination = (page: number, perPage: number, totalData: number) => {
  const totalPages = Math.ceil(totalData / perPage)

  const result = {
    page: page,
    perpage: perPage,
    totalPages: totalPages,
  }
  return result
}
