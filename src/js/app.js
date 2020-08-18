export default function orderByProps(obj, arr) {
  const stats = [];

  // перебор свойств объекта и их запись в массив:
  for (const prop in obj) {
    if ({}.hasOwnProperty.call(obj, prop)) {
      if (obj.hasOwnProperty.call(obj, prop)) {
        if (arr.indexOf(prop) === -1) {
          stats.push({ key: prop, value: obj[prop] });
        }
      }
      // сортировка по алфавиту:
      stats.sort((a, b) => {
        if (a.key < b.key) {
          return -1;
        } if (a.key > b.key) {
          return 1;
        }
      });
    }
  }

  // добавление оставшихся свойств в начало массива:
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    stats.unshift({ key: arr[i], value: obj[arr[i]] })
  }

  return stats;
}
