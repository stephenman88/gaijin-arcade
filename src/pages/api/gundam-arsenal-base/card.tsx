import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    console.log(req.query);

    if(req.method === 'GET'){
        if(!req.query){
            try{
            const cards = await prisma.gundamArsenalBaseCard.findMany({
                include:{
                    linkIds: true
                }
            });
            res.status(200).send(cards);
            }catch(error){
                res.status(404);
            }finally{
                await prisma.$disconnect();
            }
        }else{
            try{
                let query = {};
                Object.keys(req.query).forEach((key, index) =>{
                    if(key === "id" || key === "cost" || key === "mobility" || key === "longRange" || key === "shortRange" || key === "hp" || key === "subWeaponRange" || key === "mainWeaponRange" || key === "msAbilityRange" || key === "msAbilityCost" || key === "spAbilityRange" || key === "spAbilityCost" || key === "spAbilityDamage" || key === "set"){
                        query = {
                            ...query,
                            [key]: Number(req.query[key])
                        }
                    }else if(key === "parallel"){
                        query = {
                            ...query,
                            [key]: Boolean(req.query[key])
                        }
                    }else{
                        query = {
                            ...query,
                            [key]: req.query[key]
                        }
                    }
                })

                const card = await prisma.gundamArsenalBaseCard.findMany({
                    where: {
                        ...query
                    },
                    include: {
                        linkIds: true
                    }
                })
                res.status(200).send(card)
            }catch(error){
                res.status(404);
            }finally{
                await prisma.$disconnect();
            }
        }
    }
}

export default Handler;