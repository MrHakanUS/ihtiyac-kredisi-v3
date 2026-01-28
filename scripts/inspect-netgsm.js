import { Netgsm } from '@netgsm/sms';

const combinations = [
    { usercode: 'test', password: 'test' },
    { username: 'test', password: 'test' },
    { user: 'test', password: 'test' },
    { credential: { usercode: 'test', password: 'test' } }
];

for (const creds of combinations) {
    try { 
        const sms = new Netgsm(creds); 
        break;
    } catch (e) { 
    }
}
