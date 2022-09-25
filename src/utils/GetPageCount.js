export default function getPageCount(total, limit) {
  return Math.ceil(total / limit)
}
