import express from 'express';

import { getDoctorsBySearch, getDoctors, createDoctor, updateDoctor, deleteDoctor } from '../controllers/doctors.js';

const router = express.Router();

router.get('/', getDoctors);
router.get('/search', getDoctorsBySearch);
router.post('/', createDoctor);
router.patch('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

export default router;