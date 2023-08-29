import bcrypt from 'bcrypt'
import passport from '../passport'
import User from '../models/user'
import { RequestHandler } from 'express'

const join: RequestHandler = async