export const getIndex = (page: number, itemsPerPage: number, index: number) => {
  return (page - 1) * itemsPerPage + index + 1
}
