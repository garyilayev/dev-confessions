import Confession from '../models/confession.js';
import mongoose from 'mongoose';

export const getConfessions = async (req, res) => {
    try {
        const confessions = await Confession.find();

        res.status(200).json(confessions);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const createConfession = async (req, res) => {
    const confession = req.body;

    const newConfession = new Confession(confession);

    try {
        await newConfession.save();
        res.status(201).json(newConfession);
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
};

export const updateConfession = async (req, res) => {
    const { id:_id } = req.params;
    const confession = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No confession with that id');

    const updatedConfession = await Confession.findByIdAndUpdate(_id, {...confession, _id}, { new: true });

    res.status(204).json(updateConfession);
};

export const deleteConfession = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No confession with that id');

    await Confession.findByIdAndDelete(id);

    res.status(204).json({ message: 'Confession deleted successfully'});
};