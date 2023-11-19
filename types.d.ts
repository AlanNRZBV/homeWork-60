export interface IMessagesItem {
  message: string;
  author: string;
  _id?: string;
  datetime?: string;
}
export interface IMessages {
  messages: IMessagesItem[];
}

export interface IMessageForm {
  url: string;
}
