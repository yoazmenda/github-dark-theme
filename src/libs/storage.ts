// TODO: Decoupling Chrome instance by https://github.com/mozilla/webextension-polyfill

// sync
const syncGet = (keys: string | Object | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.sync.get(keys, items => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve(items);
            }
        });
    });
    return promise;
};
const syncSet = (items: Object): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.sync.set(items, () => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};
const syncGetBytesInUse = (keys: string | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.sync.getBytesInUse(keys, items => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve(items);
            }
        });
    });
    return promise;
};
const syncRemove = (keys: string | string[]) => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.sync.remove(keys, () => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};
const syncClear = () => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.sync.clear(() => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};

// local
const localGet = (keys: string | Object | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.local.get(keys, items => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve(items);
            }
        });
    });
    return promise;
};
const localSet = (items: Object): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.local.set(items, () => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};
const localGetBytesInUse = (keys: string | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.local.getBytesInUse(keys, items => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve(items);
            }
        });
    });
    return promise;
};
const localRemove = (keys: string | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.local.remove(keys, () => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};
const localClear = (): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.local.clear(() => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};

// managed
const managedGet = (keys: string | Object | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.managed.get(keys, items => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve(items);
            }
        });
    });
    return promise;
};
const managedSet = (items: Object): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.managed.set(items, () => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};
const managedGetBytesInUse = (keys: string | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.managed.getBytesInUse(keys, items => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve(items);
            }
        });
    });
    return promise;
};
const managedRemove = (keys: string | string[]): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.managed.remove(keys, () => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};
const managedClear = (): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.managed.clear(() => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return promise;
};

// onChanged
const onChangedAddListener = (): Promise<any> => {
    let promise = new Promise((resolve, reject) => {
        chrome.storage.onChanged.addListener((changes, areaName) => {
            let err = chrome.runtime.lastError;
            if (err) {
                reject(err);
            } else {
                resolve({ changes, areaName });
            }
        });
    });
    return promise;
};

const storage = {
    sync: {
        get: syncGet,
        set: syncSet,
        getBytesInUse: syncGetBytesInUse,
        remove: syncRemove,
        clear: syncClear,
    },
    local: {
        get: localGet,
        set: localSet,
        getBytesInUse: localGetBytesInUse,
        remove: localRemove,
        clear: localClear,
    },
    managed: {
        get: managedGet,
        set: managedSet,
        getBytesInUse: managedGetBytesInUse,
        remove: managedRemove,
        clear: managedClear,
    },
    onChanged: {
        addListener: onChangedAddListener,
    },
};

export { storage };
