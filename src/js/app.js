const stats = [];

export default function orderByProps(obj, [prop1, prop2]) {
  // перебор свойств объекта и их запись в массив (за исключением двух):
  for (const prop in obj) {
    if ({}.hasOwnProperty.call(obj, prop)) {
      if (obj.hasOwnProperty.call(obj, prop)) {
        if ((prop !== prop1) && (prop !== prop2)) {
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

  // добавление двух оставшихся свойств в начало массива
  stats.unshift({ key: prop1, value: obj[prop1] }, { key: prop2, value: obj[prop2] });

  return stats;
}
