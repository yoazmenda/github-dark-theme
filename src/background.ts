import { config, isEmpty, storage } from './libs';

function activateGithubDarkTheme() {
    storage.sync
        .get('domainList')
        .then(data => (isEmpty(data) ? config.defaultDomainList : (data as string[])))
        .then(domainList => {
            storage.sync.set({ ...domainList });
            return domainList;
        })
        .then(domainList => {
            chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
                domainList.forEach(url => {
                    let regex = new RegExp(url, 'g');

                    if (tab.url.match(regex)) {
                        chrome.tabs.insertCSS(tabId, {
                            file: 'app/app.css',
                            runAt: 'document_start',
                        });
                    }
                });
            });
        });
}

activateGithubDarkTheme();
