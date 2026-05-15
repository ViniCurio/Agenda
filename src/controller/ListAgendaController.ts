import type { FastifyReply, FastifyRequest } from 'fastify';
import { ListAgendaService } from '../service/ListAgendaServide.js';

export class ListAgendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listaAgendamentos = new ListAgendaService();
        
        const agendamentos = await listaAgendamentos.execute();
        
        reply.send(agendamentos);
    
    }

}