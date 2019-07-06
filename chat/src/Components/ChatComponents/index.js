import React from 'react';
import Text from './Text';
import Select from './Select';
import ChatState from './ChatState';

import './style.scss';

export const getChatComponent = message => {
    let ChatComponent;

    switch (message.type) {
        case "text/plain":
            ChatComponent = Text;
            break;
        case "application/vnd.lime.select+json":
            ChatComponent = Select;
            break;
        case "application/vnd.lime.chatstate+json":
            ChatComponent = ChatState;
            break;
        default:
            return false;
    }

    return <ChatComponent key={message.id} {...message} />;
};

export default {
    Text,
    Select
};