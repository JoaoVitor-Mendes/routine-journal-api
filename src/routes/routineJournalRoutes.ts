import { Router } from 'express';
import * as routineJournalController from '../controllers/routineJournalController';
import authMiddleware from '../middleware/authMiddleware';

const routineJournalRouter = Router();

// Rotas para o CRUD de Diário de Rotina
routineJournalRouter.post('/routines-journals', authMiddleware, routineJournalController.createRoutineJournal);
routineJournalRouter.get('/routines-journals', authMiddleware, routineJournalController.getAllRoutineJournals);
routineJournalRouter.get('/routines-journals/:id', authMiddleware, routineJournalController.getRoutineJournalById);
routineJournalRouter.put('/routines-journals/:id', authMiddleware, routineJournalController.updateRoutineJournal);
routineJournalRouter.delete('/routines-journals/:id', authMiddleware, routineJournalController.deleteRoutineJournal);

export default routineJournalRouter;
