import prisma from '../utils/prisma.js';
import { hashPassword, comparePassword, generateTokens, verifyRefreshToken } from '../utils/auth.js';
import { UserRole } from '@aquamarine/shared';
export class AuthService {
    async register(data) {
        const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
        if (existingUser)
            throw new Error('User already exists');
        const hashedPassword = await hashPassword(data.password);
        // Transaction to create User and Customer profile
        const user = await prisma.$transaction(async (tx) => {
            const newUser = await tx.user.create({
                data: {
                    email: data.email,
                    passwordHash: hashedPassword,
                    role: UserRole.CUSTOMER
                }
            });
            await tx.customer.create({
                data: {
                    userId: newUser.id,
                    name: data.name,
                    phone: data.phone
                }
            });
            return newUser;
        });
        return generateTokens(user.id, user.role);
    }
    async login(data) {
        const user = await prisma.user.findUnique({ where: { email: data.email } });
        if (!user)
            throw new Error('Invalid credentials');
        const isValid = await comparePassword(data.password, user.passwordHash);
        if (!isValid)
            throw new Error('Invalid credentials');
        return generateTokens(user.id, user.role);
    }
    async refresh(refreshToken) {
        const decoded = verifyRefreshToken(refreshToken);
        const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
        if (!user)
            throw new Error('User not found');
        return generateTokens(user.id, user.role);
    }
}
