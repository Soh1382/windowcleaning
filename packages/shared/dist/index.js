import { z } from 'zod';
export const WORKSPACE = 'aquamarine';
// Enums
export var UserRole;
(function (UserRole) {
    UserRole["CUSTOMER"] = "CUSTOMER";
    UserRole["STAFF"] = "STAFF";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole || (UserRole = {}));
export var QuoteStatus;
(function (QuoteStatus) {
    QuoteStatus["NEW"] = "NEW";
    QuoteStatus["SENT"] = "SENT";
    QuoteStatus["ACCEPTED"] = "ACCEPTED";
    QuoteStatus["DECLINED"] = "DECLINED";
})(QuoteStatus || (QuoteStatus = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["SCHEDULED"] = "SCHEDULED";
    JobStatus["EN_ROUTE"] = "EN_ROUTE";
    JobStatus["COMPLETED"] = "COMPLETED";
    JobStatus["CANCELLED"] = "CANCELLED";
})(JobStatus || (JobStatus = {}));
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
