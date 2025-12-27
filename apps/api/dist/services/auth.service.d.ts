import { RegisterInput, LoginInput } from '@aquamarine/shared';
export declare class AuthService {
    register(data: RegisterInput): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(data: LoginInput): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map