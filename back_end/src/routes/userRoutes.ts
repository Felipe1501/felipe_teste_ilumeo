import { Router } from "express";
import prisma from '../prisma/client'; 
import { validateUser } from "../middlewares/validateUser";


const router = Router();

router.post('/users', validateUser, async (req, res) => {
  const { name, email } = req.body;
  try {
      const user = await prisma.user.create({
          data: {
              name,
              email,
          },
      });
      res.status(201).json(user);
  } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Opa! Erro ao criar um usuário!' });
  }
});

router.get('/users', async (req, res) => {
  try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Opa! Erro ao buscar usuários!' });
  }
});

router.get('/shifts/summary/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const shifts = await prisma.shift.findMany({
      where: { userId: Number(userId) },
    });

    const totalHours = shifts.reduce((acc, shift) => {
      if (shift.startTime && shift.endTime) {
        const start = new Date(shift.startTime);
        const end = new Date(shift.endTime);
        const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
        return acc + diff;
      }
      return acc;
    }, 0);

    res.status(200).json({ userId, totalHours });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao calcular horas trabalhadas!" });
  }
});

export default router;
