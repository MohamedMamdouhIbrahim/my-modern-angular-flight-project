export interface AppConfig {
    baseUrl: string;
    endpoints: {
        booking: string;
    };
    featureFlag: {
        enableNewBookingFlow: boolean;
    }
}