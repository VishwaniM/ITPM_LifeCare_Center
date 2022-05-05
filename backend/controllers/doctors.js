import mongoose from 'mongoose';
import doctorMessage from "../models/doctorMessage.js";

export const getDoctors = async (req, res)=>{
    try {
        const doctorMessages = await doctorMessage.find();

        res.status(200).json(doctorMessages);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}


export const getDoctorsBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const fullName = new RegExp(searchQuery, "i");
        const speciality = new RegExp(searchQuery, "i");
        const hospital = new RegExp(searchQuery, "i");

        const doctors = await doctorMessage.find({ $or: [ { fullName },{ speciality },{hospital} ]});

        res.json({ data: doctors });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const createDoctor = async (req, res) => {
    const doctor = req.body;

    const newDoctor = new doctorMessage(doctor);

    try {

        await newDoctor.save();

        res.status(201).json(newDoctor);
        
    } catch (error) {

        res.status(409).json({ message: error.message});
        
    }
}

export const updateDoctor = async (req, res) => {
    const { id: _id } = req.params;
    const doctor = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Doctor with that id');
    const updatedDoctor = await doctorMessage.findByIdAndUpdate(_id,{ ...doctor, _id}, {new: true});

    res.json(updatedDoctor);
}

export const deleteDoctor = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Doctor with that id');

    await doctorMessage.findByIdAndRemove(id);

    console.log('DELETE!');

    res.json ({ message: 'Doctor deleted Successfully '});


}