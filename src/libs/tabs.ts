// TODO: Decoupling Chrome instance by https://github.com/mozilla/webextension-polyfill

const getCurrentTab = (): TabInfo => {
    if (!chrome.tabs) return;

    let tabInfo = new TabInfo();
    const queryInfo = {
        active: true,
        currentWindow: true,
    };
    chrome.tabs.query(queryInfo, tabs => {
        tabInfo = {
            id: tabs[0].id,
            title: tabs[0].title,
            url: tabs[0].url,
        };
    });

    return tabInfo;
};

const createTab = (domain: string) => {
    chrome.tabs.create({ active: true, url: `http://${domain}` }, tab => {
        console.log(tab);
    });
};

const insertCSS = (id: number, cssFilePath: string) => {
    chrome.tabs.insertCSS(id, {
        file: cssFilePath,
        runAt: 'document_start',
    });
};

const tabs = {
    getCurrentTab: getCurrentTab,
    createTab: createTab,
    insertCSS: insertCSS,
};

class TabInfo {
    id: number;
    title: string;
    url: string;
}

export { TabInfo };
export { tabs };
