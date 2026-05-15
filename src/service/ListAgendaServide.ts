import prismaClient from "../prisma/index.js";

export class ListAgendaService {
    async execute() {
        
        const agendamentos = await prismaClient.agends.findMany();
        
        return agendamentos;

    }

}