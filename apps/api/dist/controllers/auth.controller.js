import { AuthService } from '../services/auth.service.js';
import { setRefreshTokenCookie } from '../utils/auth.js';
import { registerSchema, loginSchema } from '@aquamarine/shared';
import { ZodError } from 'zod';
const authService = new AuthService();
export const register = async (req, res) => {
    try {
        const data = registerSchema.parse(req.body);
        const tokens = await authService.register(data);
        setRefreshTokenCookie(res, tokens.refreshToken);
        res.json({ accessToken: tokens.accessToken });
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        res.status(400).json({ message: error.message });
    }
};
export const login = async (req, res) => {
    try {
        const data = loginSchema.parse(req.body);
        const tokens = await authService.login(data);
        setRefreshTokenCookie(res, tokens.refreshToken);
        res.json({ accessToken: tokens.accessToken });
    }
    catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        res.status(401).json({ message: error.message });
    }
};
export const refresh = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
        return res.status(401).json({ message: 'No refresh token' });
    try {
        const tokens = await authService.refresh(refreshToken);
        setRefreshTokenCookie(res, tokens.refreshToken);
        res.json({ accessToken: tokens.accessToken });
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid refresh token' });
    }
};
export const logout = (_req, res) => {
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out' });
};
