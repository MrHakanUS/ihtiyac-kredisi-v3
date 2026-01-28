import { Netgsm } from '@netgsm/sms';

export const smsService = {
    /**
     * Sends an OTP code to the specified phone number using Netgsm.
     * @param {string} phone - The phone number (e.g., 5551234567).
     * @param {string} otp - The OTP code to send.
     * @returns {Promise<any>} - The response from Netgsm.
     */
    sendOtp: async (phone, otp) => {
        // Basic validation
        if (!process.env.NETGSM_USERNAME || !process.env.NETGSM_PASSWORD) {
            console.error('Missing Netgsm credentials in env');
            throw new Error('SMS servisi yapılandırılmamış.');
        }

        const netgsm = new Netgsm({
            username: process.env.NETGSM_USERNAME,
            password: process.env.NETGSM_PASSWORD,
        });

        try {
            // The payload structure typically required by Netgsm (and likely the wrapper)
            // verify the specific keys 
            const payload = {
                msgheader: process.env.NETGSM_HEADER || 'AkGirismYzl', // Fallback if header not set
                msg: `Doğrulama kodunuz: ${otp}`,
                no: phone,
            };
 

            const response = await netgsm.sendOtpSms(payload);
            return response;
        } catch (error) {
            console.error('Netgsm Send Error:', error);
            throw error;
        }
    },
};
