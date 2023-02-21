export const getBooleanSavedValueFromLocalStorage = (key, defaultValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    return savedValue || defaultValue;
};