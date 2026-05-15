import prismaClient from "../prisma/index.js";

interface DeleteAgendaProps {
    id: string;
}

export class DeleteAgendaService {
    async execute({ id }: DeleteAgendaProps){

        if(!id) {
            throw new Error("Informe um ID valido para deletar o agendamento");
        }

        const findAgenda = await prismaClient.agends.findFirst({
            where: {
            id: id,
            }
        });

        if(!findAgenda) {
        throw new Error("Agendamento não encontrado");
        }

        await prismaClient.agends.delete({
            where: {
                id: findAgenda.id
            }
        });

        return {
            message: "Agendamento deletado com sucesso"
        };

    }    
}