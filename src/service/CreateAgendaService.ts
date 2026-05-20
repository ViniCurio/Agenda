import prismaClient from "../prisma/index.js";
import type { Agendamentos } from "../agendamentos.js";
import { error } from "node:console";

export class CreateAgendaService {
    async execute({nome, data, hora, observacoes}: Agendamentos) {


        if(!nome || !data || !hora){
           throw new Error("Preencha todos os campos!")
       }
        
     
     const novoAgendamento = await prismaClient.agends.create({
        data: {
            nome,
            data,
            hora,
            observacoes,
        }
     });

        return novoAgendamento;
    }
 
}
