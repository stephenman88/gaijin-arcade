import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const set = await prisma.GundamArsenalBaseSet.createMany({
        data: [
            {name: "Season:01", shortName: "AB01"},
            {name: "Season:02", shortName: "AB02"},
            {name: "Season:03", shortName: "AB03"},
            {name: "Season:04", shortName: "AB04"},
            {name: "Linxtage Season:01", shortName: "LX01"},
            {name: "Linxtage Season:02", shortName: "LX02"},
            {name: "Linxtage Season:03", shortName: "LX03"},
            {name: "Linxtage Season:04", shortName: "LX04"},
            {name: "Unitribe Season:01", shortName: "UT01"},
            {name: "Unitribe Season:02", shortName: "UT02"},
            {name: "Arsenal Rare Season 1", shortName: "AR01"},
            {name: "Arsenal Rare Season 2", shortName: "AR02"},
            {name: "Arsenal Rare Season 3", shortName: "AR03"},
            {name: "Arsenal Rare Season 4", shortName: "AR04"},
            {name: "Linxtage Rare Season 1", shortName: "LXR01"},
            {name: "Linxtage Rare Season 2", shortName: "LXR02"},
            {name: "Linxtage Rare Season 3", shortName: "LXR03"},
            {name: "Linxtage Rare Season 4", shortName: "LXR04"},
            {name: "Unitribe Rare Season 1", shortName: "UTB01"},
            {name: "Starter Deck: Mobile Suit Gundam SEED", shortName: "ST01"},
            {name: "Starter Deck: Mobile Suit Gundam SEED Vol 2", shortName: "ST03"},
            {name: "Starter Deck: Mobile Suit Gundam Iron-Blooded Orphans", shortName: "ST02"},
            {name: "Booster Pack: Mobile Suit Gundam SEED series", shortName: "BP01"},
            {name: "Promotion", shortName: "PR"},
            {name: "Location Test", shortName: "TEST"}
        ]
    })
    const link = await prisma.GundamArsenalBaseLink.createMany({
        data:[
            {linkAbility: "Mobile Suit Gundam", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "The 08th MS Team", linkEffect: "[Long Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "MS IGLOO", linkEffect: "[Short Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Mobile Suit Gundam Gaiden", linkEffect: "[Short Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Mobile Suit Gundam: Cucuruz Doan's Island", linkEffect: "[Short Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Thunderbolt", linkEffect: "[Long Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "MSV", linkEffect: "[Long Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "THE BLUE DESTINY", linkEffect: "[Short Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "U.C. ENGAGE", linkEffect: "[Mobility] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Mobile Suit Gundam 0080: War in the Pocket", linkEffect: "[HP] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Gundam 0083", linkEffect:"[Mobiliity] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Mobile Suit Zeta Gundam", linkEffect: "[Long Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Mobile Suit Gundam ZZ", linkEffect: "[HP] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Char's Counterattack", linkEffect: "[Long Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Mobile Suit Gundam F91", linkEffect: "[Mobility] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Gundam UC", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Across The Sky", linkEffect: "[Mobility] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "G Gundam", linkEffect: "[Short Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Gundam Wing", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "After War Gundam X", linkEffect: "[Long Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Gundam SEED", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "SEED DESTINY", linkEffect: "[HP] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "SEED FREEDOM", linkEffect: "[Mobiblity] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "SEED ASTRAY", linkEffect: "[Short Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "STARGAZER", linkEffect: "[Long Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Gundam 00", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Gundam AGE", linkEffect: "[Long Range Atk] increases slightly",  requirement: "3 or more in deck"},
            {linkAbility: "Iron-Blooded Orphans", linkEffect: "[Short Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Urdr-Hunt", linkEffect: "[Short Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Witch of Mercury", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Build Fighters", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "TRY", linkEffect: "[HP] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Build Divers", linkEffect: "[HP] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Re:RISE", linkEffect: "[Long Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Build Metaverse", linkEffect: "[HP] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "N-EXTREME", linkEffect: "[HP] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Psycho-Frame User", linkEffect: "[Long Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "It's Name Is Gundam", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Newtype's Potential", linkEffect: "[Mobility] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Veteran's Skill", linkEffect: "[Short Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Resilient Iron Flower", linkEffect: "[Short Range Atk] increases slightly", requirement: "3 or more in deck"},
            {linkAbility: "Skillful Tactics", linkEffect: "[Long Range Atk] increases slightly", requirement: "2 or more in deck"},
            {linkAbility: "Black Tri-Stars", linkEffect: "[Long Range Atk][Short Range Atk] increases slightly", requirement: "3 or more in deck"},
            
        ]
    })
}