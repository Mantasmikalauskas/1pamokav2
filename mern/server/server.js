import express from 'express';
import dotenv from 'dotenv';
import pratimaiRoutes from './routes/pratimai.js'
import userRoutes from './routes/user.js'
import mongoose from 'mongoose';

dotenv.config();

const app = express();

mongoose.connect(process.env.URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT);
    });
});

app.use(express.json());
app.use('/api/pratimai', pratimaiRoutes);
app.use('/api/user', userRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app!'});
})