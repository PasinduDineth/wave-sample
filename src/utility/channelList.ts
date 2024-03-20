
import { IChannel } from "../interfaces/ChannelInterface";
 
  const channel: IChannel[] = [
    { id: 1, name: 'Website', code: 'website' },
    { id: 2, name: 'Email', code: 'email' },
    { id: 3, name: 'Phone', code: 'phone' },
    { id: 4, name: 'Word-of-mouth', code: 'word-of-mouth' },
    { id: 5, name: 'Other', code: 'other' },
    { id: 6, name: 'Unknown', code: 'unknown' }
  ];
  
  export function getChannels(): IChannel[] {
    return channel;
  }
  