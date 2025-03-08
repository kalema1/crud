export function useLocalStorage(key) {
  const setItems = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItems = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  };

  return { setItems, getItems };
}
