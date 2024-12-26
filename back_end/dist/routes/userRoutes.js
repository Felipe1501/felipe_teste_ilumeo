"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = __importDefault(require("../../prisma/client"));
const validateUser_1 = require("../../middlewares/validateUser");
const router = (0, express_1.Router)();
router.post('/users', validateUser_1.validateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const user = yield client_1.default.user.create({
            data: {
                name,
                email,
            },
        });
        res.status(201).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Opa! Erro ao criar um usuário!' });
    }
}));
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield client_1.default.user.findMany();
        res.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Opa! Erro ao buscar usuários!' });
    }
}));
router.post('/shifts/start', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        const shift = yield client_1.default.shift.create({
            data: {
                userId,
                startTime: new Date(),
            },
        });
        res.status(201).json(shift);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Opa! Erro ao iniciar o turno!' });
    }
}));
router.patch('/shifts/end', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const shift = yield client_1.default.shift.update({
            where: { id },
            data: {
                endTime: new Date(),
            },
        });
        res.status(200).json(shift);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Opa! Erro ao finalizar o turno!' });
    }
}));
router.get('/shifts/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const shifts = yield client_1.default.shift.findMany({
            where: { userId: Number(userId) },
            orderBy: { startTime: 'desc' },
        });
        res.status(200).json(shifts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Opa! Erro ao buscar turnos!' });
    }
}));
exports.default = router;
