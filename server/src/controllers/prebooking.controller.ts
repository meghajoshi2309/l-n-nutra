import { Request, Response } from 'express';
import * as prebookingService from '../services/prebooking.service';

// Get the current prebooking count
export const getPrebookingCount = async (req: Request, res: Response) => {
    try {
        const prebookingCount = await prebookingService.getPrebookingCount();
        res.json(prebookingCount);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch prebooking count' });
    }
};

// Increment the prebooking count
export const incrementPrebookingCount = async (req: Request, res: Response) => {
    try {
        const updatedCount = await prebookingService.incrementPrebookingCount();
        res.json(updatedCount);
    } catch (error) {
        res.status(500).json({ message: 'Failed to increment prebooking count' });
    }
};

// Create a new prebooking
export const createPrebooking = async (req: Request, res: Response) => {
    const { userId } = req.body;
    if (!userId) {
        res.status(400).json({ message: 'User ID is required' });
        return
    }
    try {
        const prebooking = await prebookingService.createPrebooking(userId);
        res.status(201).json(prebooking);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create prebooking' });
    }
};

// Get all prebookings
export const getAllPrebookings = async (req: Request, res: Response) => {
    try {
        const prebookings = await prebookingService.getAllPrebookings();
        res.json(prebookings);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch prebookings' });
    }
};


export const checkDiscountEligibility = async (req: Request, res: Response) => {
    const { userId } = req.body;

    if (!userId) {
        res.status(400).json({ message: 'User ID is required' });
        return
    }

    try {
        // Get the current prebooking count
        const prebookingCount = await prebookingService.getPrebookingCount();

        // Check if the prebooking count is less than 100
        if (prebookingCount && prebookingCount.count >= 100) {
            res.json({ eligible: false });
            return
        }

        // Check if the user has an entry in the Prebooking table
        const userPrebooking = await prebookingService.getPrebookingByUserId(userId);
        if (userPrebooking) {
            res.json({ eligible: false });
            return
        }

        // If both conditions are met, the user is eligible
        res.json({ eligible: true });
    } catch (error) {
        res.status(500).json({ message: 'Failed to check discount eligibility' });
    }
};