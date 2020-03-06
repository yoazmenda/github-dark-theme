const config = {
    cssFilePath: 'app/app.css',
    storageDomainList: 'domainList',
    domainList: [],
    defaultDomainList: ['github.com', 'gist.github.com'],
    excludeUrlList: ['github.com/marketplace'],
    useSystemPrefersScheme: false,
    uninstallQuestionnaire:
        'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__c9PL4pURTlJSFdFUzZUSzNBNUs4N0JaQlhEUkRBTy4u',
} as Config;

interface Config {
    cssFilePath: string;
    storageDomainList: string;
    domainList: string[];
    defaultDomainList: string[];
    excludeUrlList: string[];
    useSystemPrefersScheme: boolean;
    uninstallQuestionnaire: string;
}

export { config, Config };
