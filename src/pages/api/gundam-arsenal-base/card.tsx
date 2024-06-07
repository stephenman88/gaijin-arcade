import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ResponseData = {
    id: Number,
    name: String,
    cardType: String,
    msType: String|null,
    plType: String|null,
    parallel: Boolean,
    cost: Number,
    rarity: String,
    mobility: Number,
    longRange: Number,
    shortRange: Number,
    hp: Number,
    earthMod: String|null,
    spaceMod: String|null,
    desertMod: String|null,
    waterMod: String|null,
    series: String,
    mainWeapon: String|null,
    mainWeaponRange: Number|null,
    mainWeaponType: String|null,
    subWeapon: String|null,
    subWeaponRange: Number|null,
    subWeaponType: String|null,
    msAbility: String|null,
    msTargetType: String|null,
    msAbilityCost: Number|null,
    msActiveCondition: String|null,
    msAbilityRange: Number|null,
    msAbilityDesc: String|null,
    spAbilityName: String|null,
    spAbilityTargetType: String|null,
    spAbilityRange: Number|null,
    spAbilityDamage: Number|null,
    spAbilityCost: Number|null,
    spAbilityDesc: String|null,
    linkIds: Array<Object>,
    set: String,
    setNum: String,
    suitCode: String|null,
    plAbilityName: String|null,
    plAbilityActiveCondition: String|null,
    plAbilityDesc: String|null,
    imageUrlFront: String,
    imageUrlBack: String
}   

async function Handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
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