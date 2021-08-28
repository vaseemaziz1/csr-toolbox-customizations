var gettext = window.gettext;

csrConfig.i18n = {
      defaultLanguage: 'es-CO',
      debug: false,
      defaultCountry: 'CO',
      translatableLanguages: [
             'en','es-CO'
      ],
      'timezone': 'UTC-4:00',
      'locale': 'es-co',
      'currencySymbolBeforeAmount': true,
      'currencySymbolBeforeBalance': true
};


window.csrConfig.agreementItems.status  = {
    'all': gettext('All'),
    'active': gettext('Active'),
    'pending': gettext('Pending'),
    'terminated': gettext('Terminated'),
    'suspended': gettext('Suspended')
};

window.csrConfig.eligibilityRejectMessages = {
    'ERR_SUBSCRIPTION_STATUS_NOT_ACTIVE': gettext('Subscription is not active'),
    'ERR_MSISDN_CHANGE_LIMIT_EXCEEDED': gettext('Max number of MSISDN changes in given period exceeded'),
    'ERR_SUBSCRIPTION_PORTIN_CRITERIA': gettext('Port-in was done less that 135 days ago'),
    'ERR_SUBSCRIPTION_PENDING_PORTOUT': gettext('There is ongoing port out operation'),
    'ERR_SUBSCRIPTION_STATUS_DEBTS_INVALID': gettext('MSISN change not allowed for subscription with debt'),
    'ERR_SUBSCRIPTION_STATUS_FRAUD_INVALID': gettext('SIM card replacement is not allowed for subscription ' +
    'suspended because of fraud'),
    'ERR_SUBSCRIPTION_STATUS_DEBT_INVALID': gettext('SIM card replacement is not allowed for subscription ' +
    'suspended because of debt'),
    'ERR_SUBSCRIPTION_STATUS_PORTOUT_INVALID': gettext('SIM card replacement is not allowed for ported-out ' +
    'subscription or subscription with ongoing port-out'),
    'ERR_SUBSCRIPTION_STATUS_TERMINATED': gettext('SIM card replacement is not allowed for terminated ' +
    'subscription'),
    'ERR_CUSTOMER_NOT_ELIGIBLE_FOR_THE_PLAN': gettext('Subscription has Tarifa Solidaria plan but the new owner ' +
    'is not eligible for Tarifa Solidaria because she/he is not registered as handicapped '),
    'ERR_CUSTOMER_HAS_PLAN_ALREADY': gettext('Subscription has Tarifa Solidaria plan but the new owner is ' +
    'not eligible for Tarifa Solidaria because she/he has already a Tarifa Solidaria plan'),
    'ERR_DEVICE_BLACKLISTED': gettext('Device is already registered and in blacklisted status.'),
    'ERR_DEVICE_ALREADY_REGISTERED': gettext('Device is already registered.')
};

window.csrConfig.search.excludedTypes = ['business-identity-code',
                                    'social-security-number',
                                    'serial-number'];

window.csrConfig.search.searchTypes = [
    {
        id: 'customer',
        name: gettext('Customer name'),
        icon: 'fa fa-users',
        placeholder: gettext('Type Customer name'),
        requestHandlerBy: 'formatted-name',
        redirectTo: 'overview'
    },
    {
        id: 'customer-account',
        name: gettext('Customer account ID'),
        icon: 'fa fa-id-card-o',
        placeholder: gettext('Type Customer account ID'),
        requestHandlerBy: 'customer-account-id',
        redirectTo: 'overview'
    },
    {
        id: 'CC',
        name: gettext('National ID'),
        icon: 'fa fa-id-card-o',
        placeholder: gettext('Type National ID'),
        requestHandlerBy: 'identification-id',
        redirectTo: 'overview'
    },
    {
        id: 'DE',
        name: gettext('Foreigner ID'),
        icon: 'fa fa-id-card-o',
        placeholder: gettext('Type Foreigner ID'),
        requestHandlerBy: 'identification-id',
        redirectTo: 'overview'
    },
    {
        id: 'PP',
        name: gettext('Passport'),
        icon: 'fa fa-id-card-o',
        placeholder: gettext('Type Passport ID'),
        requestHandlerBy: 'identification-id',
        redirectTo: 'overview'
    },
    {
        id: 'IT',
        name: gettext('Tax Payer ID'),
        icon: 'fa fa-id-card-o',
        placeholder: gettext('Type Tax Payer ID'),
        requestHandlerBy: 'identification-id',
        redirectTo: 'overview'
    },
    {
        id: 'agreement',
        name: gettext('Agreements'),
        icon: 'fa fa-files-o',
        placeholder: gettext('Type Agreement ID'),
        requestHandlerBy: 'agreements-reference-number',
        redirectTo: 'basic-agreements'
    },
    {
        id: 'invoice',
        name: gettext('Invoices'),
        icon: 'fa fa-file-text-o',
        placeholder: gettext('Type Invoice ID'),
        requestHandlerBy: 'invoice-id',
        redirectTo: 'invoice'
    },
    {
        id: 'msisdn',
        name: gettext('Phone Number'),
        icon: 'fa fa-lg fa-mobile',
        placeholder: gettext('Type Phone number'),
        requestHandlerBy: 'msisdn',
        redirectTo: 'basic-agreement-item'
    },
    {
        id: 'sim',
        name: gettext('SIM card'),
        icon: 'fa fa-lg fa-mobile',
        placeholder: gettext('Type SIM card ICC'),
        requestHandlerBy: 'sim',
        redirectTo: 'basic-agreement-item'
    },
    {
        id: 'mobile-device',
        name: gettext('Mobile device'),
        icon: 'fa fa-lg fa-mobile',
        placeholder: gettext('Type mobile device IMEI'),
        requestHandlerBy: 'imei',
        redirectTo: 'basic-agreement-item'
    },
    {
        id: 'thing',
        name: gettext('Things name'),
        icon: 'fa fa-desktop',
        placeholder: gettext('Type Things name'),
        requestHandlerBy: 'things-formatted-name',
        redirectTo: 'overview'
    },
    {
        id: 'serial-number',
        name: gettext('Things serial-number'),
        icon: 'fa fa-id-card-o',
        placeholder: gettext('Type Things serial-number'),
        requestHandlerBy: 'things-identification-id',
        redirectTo: 'overview'
    },
    {
        id: 'TI',
        name: gettext('Tigold identification'),
        icon: 'fa fa-id-card-o',
        placeholder: gettext('Type Tigold identification'),
        requestHandlerBy: 'identification-id',
        redirectTo: 'overview'
    }
];

window.csrConfig.basicDetails.identificationTypes = {
    organization: {
        'NIT': gettext('NIT')
    },
    individual: {
        'CC': gettext('National ID'),
        'PP': gettext('Passport'),
        'DE': gettext('Foreigner ID'),
        'IT': gettext('Tax Payer ID'),
        'FB': gettext('Facebook'),
        'TW': gettext('Twitter'),
        'IN': gettext('Instagram'),
        'DB': gettext('Disability ID'),
        'TI': gettext('Tigold identification'),
        'EC': gettext('National Electoral Court')
    }
};

window.csrConfig.basicDetails.identificationValidations = {
    'IT': ['number', 'minlength=13', 'maxlength=13']
};

window.csrConfig.basicDetails.language.selectableLanguages = ['eng', 'spa'];

window.csrConfig.basicDetails.language.languageFlags = {'eng': 'gb.svg', 'spa': 'co.svg'};

window.csrConfig.changeSim.replaceSimReasons = {
    malfunctioning: gettext('Malfunctioning'),
    upgrade: gettext('Upgrade from 3G to 4G'),
};

window.csrConfig.customerInfo = {
    identificationTypes: {
        'personal-identity-code': gettext('Personal identity code'),
        'social-security-number': gettext('Social security number'),
        'foreigner-id-number': gettext('Foreigner id number'),
        'passport': gettext('Passport')
    },
    roles: {
        'procurement-person': gettext('Procurement Person'),
        'power-of-attorney': gettext('Power Of Attorney'),
        'customer': gettext('Customer'),
        'user': gettext('User'),
        'contact': gettext('Contact'),
        'employee': gettext('Employee'),
        'trustee': gettext('Trustee'),
        'parent': gettext('Parent'),
        'member': gettext('Member'),
        'partner': gettext('Partner'),
        'guardian': gettext('Guardian'),
        'signatory': gettext('Signatory'),
        'internal': gettext('Internal')
    }
};

window.csrConfig.productsTab.devices.registerDevice = {
    showInfoText: true,
    infoText: gettext('To use mobile devices in TIGO network, they need to be registered.\n' +
        'The device can be registered for one customer only.'),
    imeiInputId: 'CH_IMEI'
};

window.csrConfig.subscriptionUnblockReasons = {
    'PO_Suspend_Customer': gettext('Customer initiated unblocking'),
    'PO_Suspend_Fraud': gettext('Operator initiated unblocking (fraud)'),
    'PO_Suspend_Debt': gettext('Operator initiated unblocking (debt)')
};

window.csrConfig.subscriptionBlockReasons = {
    'PO_Suspend_Customer': gettext('Customer initiated blocking (lost)'),
    'PO_Suspend_Fraud': gettext('Operator initiated blocking (fraud)'),
    'PO_Suspend_Debt': gettext('Operator initiated blocking (debt)')
};
