import { Request, Response } from 'express';
import * as addressService from '../services/address.service';
import { AddressInput } from '../validators/address.validation';
import { log } from 'console';

export const createAddress = async (req: Request, res: Response) => {
  try {
    const data: AddressInput = req.body;
    const address = await addressService.createAddress(data);
    res.status(201).json(address);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAddressesByUserId = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const addresses = await addressService.getAddressesByUserId(userId);
    res.status(200).json(addresses);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAddressById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const address = await addressService.getAddressById(id);
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(404).json({ error: 'Address not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateAddress = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const data: Partial<AddressInput> = req.body;
    const address = await addressService.updateAddress(id, data);
    res.status(200).json(address);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteAddress = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await addressService.deleteAddress(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};