import type { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteAgendaService } from '../service/DeleteAgendaService.js';

export class DeleteAgendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };
        const findAgenda = new DeleteAgendaService();
        
        const agenda = await findAgenda.execute({ id });
        reply.send(agenda);
    }
}