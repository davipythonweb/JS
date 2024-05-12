// Salvar no localStorage
const saveToLocalStorage = (key: string,value: any) => {
    localStorage.setItem(key, value);
};

// Recuperar do localStorage
const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};