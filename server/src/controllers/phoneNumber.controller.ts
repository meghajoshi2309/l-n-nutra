import { Request, Response } from 'express';
import * as phoneNumberService from '../services/phoneNumber.service';
import { PhoneNumberSchema, UpdatePhoneNumberSchema } from '../validators/phoneNumber.validation';

export const createPhoneNumber = async (req: Request, res: Response) => {
    const validation = PhoneNumberSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json(validation.error.errors);
        return
    }
    const phoneNumber = await phoneNumberService.createPhoneNumber(validation.data);
    res.status(201).json(phoneNumber);
};

export const getPhoneNumber = async (req: Request, res: Response) => {
    const phoneNumber = await phoneNumberService.getPhoneNumber(Number(req.params.id));
    if (phoneNumber) {
        res.json(phoneNumber);
    } else {
        res.status(404).send('Phone number not found');
    }
};

export const updatePhoneNumber = async (req: Request, res: Response) => {
    const validation = UpdatePhoneNumberSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json(validation.error.errors);
        return
    }
    const phoneNumber = await phoneNumberService.updatePhoneNumber(Number(req.params.id), validation.data);
    res.json(phoneNumber);
};

export const deletePhoneNumber = async (req: Request, res: Response) => {
    await phoneNumberService.deletePhoneNumber(Number(req.params.id));
    res.status(204).send();
};