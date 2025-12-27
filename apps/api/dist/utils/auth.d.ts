import { Response } from 'express';
export declare const hashPassword: (password: string) => Promise<string>;
export declare const comparePassword: (password: string, hash: string) => Promise<boolean>;
export declare const generateTokens: (userId: string, role: string) => {
    accessToken: string;
    refreshToken: string;
};
export declare const setRefreshTokenCookie: (res: Response, token: string) => void;
export declare const verifyAccessToken: (token: string) => {
    userId: string;
    role: string;
};
export declare const verifyRefreshToken: (token: string) => {
    userId: string;
    role: string;
};
//# sourceMappingURL=auth.d.ts.map