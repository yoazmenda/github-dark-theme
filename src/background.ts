import { config } from './config';
import { isEmpty, fetchDomainString, fetchUrlString, isUrlInList, storage, tabs, runtime } from './libs';

const initGithubDarkTheme = (domainList: string[]) => {
    console.table('Domain List', domainList);
    const tab = tabs.getCurrentTab();

    if (!tab) return;
    if (!tab.url) return;
    if (isUrlInList(fetchUrlString(tab.url), config.excludeUrlList)) return;
    if (isUrlInList(fetchDomainString(tab.url), domainList)) tabs.insertCSS(tab.id, 'app/app.css');
};

const addDomainListener = () => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (!tab) return;
        if (!tab.url) return;
        if (isUrlInList(fetchUrlString(tab.url), config.excludeUrlList)) return;

        storage.sync.get(config.storage.nameOfDomainList).then(data => {
            console.table('Domain List', data.domainList);
            if (isUrlInList(fetchDomainString(tab.url), data.domainList)) tabs.insertCSS(tab.id, 'app/app.css');
        });
    });
};

(function() {
    runtime.setUninstallURL(config.uninstallQuestionnaire);
    storage.sync
        .get(config.storage.nameOfDomainList)
        .then(data => {
            if (isEmpty(data)) {
                data = { domainList: config.defaultDomainList };
                storage.sync.set(data);
            }
            return data.domainList as string[];
        })
        .then(initGithubDarkTheme)
        .finally(addDomainListener);
})();
