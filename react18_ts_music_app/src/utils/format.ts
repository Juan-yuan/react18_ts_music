export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万' // Math.floor()函数，去除小数点
  } else {
    return count
  }
}
