export function findById(data: any[], id: number): any {
  for (const item of data) {
    if (Array.isArray(item)) {
      for (const arr of item) {
        const foundItem = findById(arr.value, id);
        if (foundItem != null) {
          return { item: foundItem, parent: arr };
        }
      }
    } else if (item.value === id) {
      return item;
    }
  }
  return null;
}

export function findByIdKey(data: any[], id: number): any {
  for (const item of data) {
    if (item.children) {
      const foundItem = findByIdKey(item.children, id);
      if (foundItem != null) {
        return { item: foundItem, parent: item };
      }
    } else if (item.value === id) {
      return item;
    }
  }
  return null;
}
