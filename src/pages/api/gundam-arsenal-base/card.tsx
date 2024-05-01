import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    id: Number,
    cardType: String,
    msType: String,
    plType: String,
    parallel: Boolean,
    cost: Number,
    rarity: String,
    mobility: Number,
    longRange: Number,
    shortRange: Number,
    hp: Number,
    earthMod: String,
    spaceMod: String,
    desertMod: String,
    waterMod: String,
    series: String,
    mainWeapon: String,
    subWeapon: String,
    msAbility: String,
    msTargetType: String,
    msAbilityCost: Number,
    msActiveCondition: String,
    spAbilityDamage: Number,
    spAbilityCost: Number,
    spTargetTypeL: String,
    link: [],
    set: String,
    idSet: String,
    suitCode: String
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
){

}