import { Response } from 'express';
import { UserRequest } from '../middleware/authMiddleware';  // Interface para tipar req.user
import { RoutineJournal } from '../models/routineJournal';// Modelo de RoutineJournal (Sequelize ou qualquer outro ORM)

// Criar um novo diário de rotina
export const createRoutineJournal = async (req: UserRequest, res: Response): Promise<any> => {
  try {
    const { date, description } = req.body;  // Dados do diário de rotina enviados no corpo da requisição
    const userId = req.user?.userId;  // Obtém o userId do usuário autenticado

    if (!userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    // Verifica se a data de diário de rotina foi fornecida
    if (!date) {
      return res.status(400).json({ error: 'Data do diário de rotina é obrigatória.' });
    }

    // Verifica se a descrição do diário de rotina foi fornecida
    if (!description) {
      return res.status(400).json({ error: 'Descrição do diário de rotina é obrigatória.' });
    }

    // Cria o diário de rotina no banco de dados
    const routineJournal = await RoutineJournal.create({
      userId,
      date,
      description
    });

    res.status(201).json(routineJournal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar o diário de rotina.' });
  }
};

// Obter todos os diário de rotinas do usuário
export const getAllRoutineJournals = async (req: UserRequest, res: Response): Promise<any> => {
  try {
    const userId = req.user?.userId;  // Obtém o userId do usuário autenticado

    if (!userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    // Busca todos os diário de rotinas do usuário autenticado
    const routineJournals = await RoutineJournal.findAll({
      where: { userId }
    });

    res.status(200).json(routineJournals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar diário de rotinas.' });
  }
};

// Obter um diário de rotina específico
export const getRoutineJournalById = async (req: UserRequest, res: Response): Promise<any> => {
  try {
    const { id } = req.params;  // ID do diário de rotina a ser buscado
    const userId = req.user?.userId;  // Obtém o userId do usuário autenticado

    if (!userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    // Busca o diário de rotina no banco de dados
    const routineJournal = await RoutineJournal.findOne({
      where: { id, userId }
    });

    if (!routineJournal) {
      return res.status(404).json({ error: 'Diário de rotina não encontrado.' });
    }

    res.status(200).json(routineJournal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar o diário de rotina.' });
  }
};

// Atualizar um diário de rotina existente
export const updateRoutineJournal = async (req: UserRequest, res: Response): Promise<any> => {
  try {
    const { id } = req.params;  // ID do diário de rotina a ser atualizado
    const { date, description } = req.body;  // Dados a serem atualizados
    const userId = req.user?.userId;  // Obtém o userId do usuário autenticado

    if (!userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    // Busca o diário de rotina no banco de dados
    const routineJournal = await RoutineJournal.findOne({
      where: { id, userId }
    });

    if (!routineJournal) {
      return res.status(404).json({ error: 'Diário de rotina não encontrado.' });
    }

    // Atualiza os dados do diário de rotina
    routineJournal.date = date ?? routineJournal.date;
    routineJournal.description = description ?? routineJournal.description;
    await routineJournal.save();

    res.status(200).json(routineJournal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao atualizar o diário de rotina.' });
  }
};

// Deletar um diário de rotina
export const deleteRoutineJournal = async (req: UserRequest, res: Response): Promise<any> => {
  try {
    const { id } = req.params;  // ID do diário de rotina a ser deletado
    const userId = req.user?.userId;  // Obtém o userId do usuário autenticado

    if (!userId) {
      return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    // Busca o diário de rotina no banco de dados
    const routineJournal = await RoutineJournal.findOne({
      where: { id, userId }
    });

    if (!routineJournal) {
      return res.status(404).json({ error: 'Diário de rotina não encontrado.' });
    }

    // Deleta o diário de rotina
    await routineJournal.destroy();

    res.status(200).json({ message: 'Diário de rotina deletado com sucesso.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar o diário de rotina.' });
  }
};
