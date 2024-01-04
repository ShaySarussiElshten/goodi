import { io } from 'socket.io-client';
import { URLS } from './enum';


export const socket = io(URLS.BASE_URL_SERVER, {
    transports: ['websocket'],
    secure: true
});