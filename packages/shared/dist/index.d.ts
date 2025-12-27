import { z } from 'zod';
export declare const WORKSPACE = "aquamarine";
export declare enum UserRole {
    CUSTOMER = "CUSTOMER",
    STAFF = "STAFF",
    ADMIN = "ADMIN"
}
export declare enum QuoteStatus {
    NEW = "NEW",
    SENT = "SENT",
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED"
}
export declare enum JobStatus {
    SCHEDULED = "SCHEDULED",
    EN_ROUTE = "EN_ROUTE",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    phone?: string | undefined;
}, {
    email: string;
    password: string;
    name: string;
    phone?: string | undefined;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const quoteRequestSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    addressLine1: z.ZodString;
    postcode: z.ZodString;
    propertyType: z.ZodEnum<["TERRACED", "SEMI_DETACHED", "DETACHED", "BUNGALOW", "COMMERCIAL"]>;
    serviceTypes: z.ZodArray<z.ZodString, "many">;
    frequency: z.ZodEnum<["ONE_OFF", "WEEKLY_4", "WEEKLY_8"]>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    postcode: string;
    propertyType: "TERRACED" | "SEMI_DETACHED" | "DETACHED" | "BUNGALOW" | "COMMERCIAL";
    serviceTypes: string[];
    frequency: "ONE_OFF" | "WEEKLY_4" | "WEEKLY_8";
    notes?: string | undefined;
}, {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    postcode: string;
    propertyType: "TERRACED" | "SEMI_DETACHED" | "DETACHED" | "BUNGALOW" | "COMMERCIAL";
    serviceTypes: string[];
    frequency: "ONE_OFF" | "WEEKLY_4" | "WEEKLY_8";
    notes?: string | undefined;
}>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
//# sourceMappingURL=index.d.ts.map