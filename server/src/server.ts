import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import router from './routes.js';

const app=express(); const port=Number(process.env.PORT||5000); const mongoUri=process.env.MONGODB_URI;
app.disable('x-powered-by'); app.use(helmet()); app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173',credentials:true})); app.use(express.json({limit:'32kb'}));
app.use(session({name:'mystery.sid',secret:process.env.SESSION_SECRET||'development-only-change-me',resave:false,saveUninitialized:false,store:mongoUri?MongoStore.create({mongoUrl:mongoUri,collectionName:'sessions'}):undefined,cookie:{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',maxAge:1000*60*60*24*7}}));
app.use('/api/v1',rateLimit({windowMs:15*60*1000,limit:60,standardHeaders:'draft-7',legacyHeaders:false}),router);
app.use((err:any,_req:express.Request,res:express.Response,_next:express.NextFunction)=>{const status=err?.status|| (err instanceof mongoose.Error.ValidationError?400:500); if(status>=500) console.error('Request failed:',err?.message); res.status(status).json({success:false,error:status<500?err.message:'The request could not be completed. Please try again.'});});
async function start(){ if(!mongoUri) throw new Error('MONGODB_URI is required. Copy server/.env.example to server/.env and configure it.'); if(!process.env.SESSION_SECRET) throw new Error('SESSION_SECRET is required. Copy server/.env.example to server/.env and configure it.'); await mongoose.connect(mongoUri); app.listen(port,()=>console.log(`AI Mystery Room API listening on ${port}`)); }
start().catch((err)=>{console.error(err.message);process.exit(1);});
