
export const defaultConfiguration = {
    titleClosed: 'Need help?',
    titleOpen: 'How may we assist you?',
    closedStyle: 'chat', // button or chat
    closedChatAvatarUrl: '', // only used if closedStyle is set to 'chat'
    cookieExpiration: 1, // in days. Once opened, closed chat title will be shown as button (when closedStyle is set to 'chat')
    introMessage: 'Hello! How can we help you? (Once you have started the chat, please do not leave or refresh the page or your session will get closed.)',
    autoResponse: 'Looking for the first available admin (It might take a minute). Please do not leave or refresh the page in the meantime.',
    autoNoResponse: 'It seems that no one is available to answer right now. Please send us a message ' +
    'to support@gunthy.zendesk.com and we will get back to you as soon as we can.',
    placeholderText: 'Send a message...',
    displayMessageTime: true,
    mainColor: '#1f8ceb',
    alwaysUseFloatingButton: false,
    desktopHeight: 450,
    desktopWidth: 370
};
