import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
import authRoutes from './routes/auth.routes.js';
import quoteRoutes from './routes/quote.routes.js';
import jobRoutes from './routes/job.routes.js';
import invoiceRoutes from './routes/invoice.routes.js';
app.use('/api/auth', authRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/invoices', invoiceRoutes);
app.get('/', (_req, res) => {
    res.json({ message: 'Aquamarine API V1' });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
