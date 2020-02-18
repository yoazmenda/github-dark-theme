import { config } from './config';
import { isEmpty, fetchDomainString, fetchUrlString, isUrlInList, storage, tabs, runtime } from './libs';

const initGithubDarkTheme = (domainList: string[]) => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (!tab) return;
        if (!tab.url) return;
        if (isUrlInList(fetchUrlString(tab.url), config.excludeUrlList)) return;
        if (isUrlInList(fetchDomainString(tab.url), domainList)) tabs.insertCSS(tab.id, config.cssFilePath);
    });
};

(function() {
    runtime.setUninstallURL(config.uninstallQuestionnaire);
    storage.misc.showStorageOnConsole('domainList');
    storage.sync
        .get(config.storageDomainList)
        .then(data => {
            if (isEmpty(data)) {
                data = { domainList: config.defaultDomainList };
                storage.sync.set(data);
            }
            return data.domainList as string[];
        })
        .then(initGithubDarkTheme);
})();
