import { z } from 'zod';

export const WORKSPACE = 'aquamarine';

// Enums
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  STAFF = 'STAFF',
  ADMIN = 'ADMIN'
}

export enum QuoteStatus {
  NEW = 'NEW',
  SENT = 'SENT',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED'
}

export enum JobStatus {
  SCHEDULED = 'SCHEDULED',
  EN_ROUTE = 'EN_ROUTE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Schemas
export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1),
  phone: z.string().optional()
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export const quoteRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  addressLine1: z.string().min(1, "Address is required"),
  postcode: z.string().min(1, "Postcode is required"),
  propertyType: z.enum(["TERRACED", "SEMI_DETACHED", "DETACHED", "BUNGALOW", "COMMERCIAL"]),
  serviceTypes: z.array(z.string()).min(1, "Select at least one service"),
  frequency: z.enum(["ONE_OFF", "WEEKLY_4", "WEEKLY_8"]),
  notes: z.string().optional()
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
