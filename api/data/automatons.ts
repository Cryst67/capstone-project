type RobotData = {
    name: string;
    appearance: string;
    tactics: string;
};

export const Terminids: Record<string, RobotData> = {
    Trooper: {
        name: `Trooper`,
        appearance: `Troopers epitomize the heartless fusion of man and machine, a grotesque testament to the Automaton faction's 
        relentless pursuit of destruction. Standing tall in their cold, mechanical exoskeletons, they resemble twisted mockeries
        of human soldiers, their once-human forms now encased in cold steel and unfeeling circuits. Their expressionless visages
        betray no emotion, their lifeless eyes scanning the battlefield with ruthless efficiency. Armed with sleek assault rifles,
        they move with mechanical precision, each step a symphony of calculated violence.`,
        tactics: `Target their exposed heads for maximum damage and intercept their calls for backup to maintain the upper hand.
        Use the environment to your advantage, taking cover and employing guerrilla tactics to outsmart them. Grenades are your best
        friend for disrupting clusters of Troopers and causing chaos.`,
    },
    Commissar: {
        name: `Commissar`,
        appearance: `The Commissar embodies a crude imitation of military leadership, its mechanical form augmented with slightly 
        faster processing and a rudimentary command subroutine. Standing apart from the frontline combat, it exudes an air of despicable 
        cowardice, devoid of any semblance of sentience.`,
        tactics: `When spotting a group of Automatons try to spot the Commissar before engaging. Taking them out early is vital in 
        preventing them from calling in reinforcements. Beware its agile jetpack and lethal blades in combat.`,
    },
    ScoutStrider: {
        name: `Scout Strider`,
        appearance: `A walking fortress operated by a lesser machine, guided by the crude intelligence of an Automaton Trooper. 
        Towering above the battlefield, its boxy armor plating serves as a formidable barrier against enemy fire, concealing the 
        Trooper within as it rains death upon its foes with relentless efficiency. Despite its imposing presence, the Scout Strider 
        is but another futile attempt by the Automaton faction to grasp true intelligence, a twisted reflection of their ceaseless 
        pursuit of dominance.`,
        tactics: `Target the Trooper manning the turret or dismantle the legs to immobilize them. Coordinate with your team to unleash 
        coordinated assaults and exploit their vulnerabilities. Their slow turning speed is easily exploited when working together.`,
    },
    Berserker: {
        name: `Berserker`,
        appearance: `A primitive actualization of barbarity, the Berserker epitomizes the Automaton faction's relentless pursuit of 
        brutality. Each chainsaw arm houses a CPU programmed with a singular objective: to close the space between saw and target with 
        ruthless efficiency. Towering over the battlefield, its mechanical form exudes an aura of primal aggression, its movements driven 
        by an insatiable hunger for destruction.`,
        tactics: `Keep your distance to evade their brutal melee assaults, while peppering them with ranged firepower to weaken their 
        armor. Target their head or exposed belly with precision strikes to maximize damage. Focus on disabling their chainsaw arms to
        neutralize their primary threat.`,
    },
    Devastator: {
        name: `Devastator`,
        appearance: `The ironclad Devastator embodies the relentless might of the Automaton faction, a formidable adversary armed with 
        a diverse array of heinous weaponry. From arm-cannons to arm-shields, arm-machine guns, and shoulder-mounted multiple rocket 
        launchers, it stands as a formidable sentinel of the Automatons' totalitarian worldview. Clad in medium armor, its mechanical 
        form exudes an aura of unyielding aggression, each movement a testament to its unwavering dedication to crushing all opposition.`,
        tactics: `Despite their slow pace, they pack a punch with heavy weaponry. Target their weak points, like their heads or their 
        legs, with high-caliber weapons to take them down quickly. Disrupt their offensive by aiming for their limbs.`,
    },
    Hulk: {
        name: `Hulk`,
        appearance: `As with all Automaton units, the plodding Hulk epitomizes brute force and relentless aggression, its towering form 
        bristling with heavy weaponry designed for maximum destruction. From autocannons and rocket launchers to flamethrowers and 
        buzzsaws, it stands as a formidable sentinel of the Automatons' relentless pursuit of dominance. Clad in heavy armor plating, 
        its mechanical form exudes an aura of unyielding aggression, each step a thunderous proclamation of its unwavering dedication 
        to crushing all opposition.`,
        tactics: `Target their weak spots with high-caliber ordnance to breach their armor. Focus on their exposed craniums for swift 
        incapacitation. Disrupt their offensive capabilities by targeting their appendages. If all else fails, bring the big guns!`,
    },
    Tank: {
        name: `Tank`,
        appearance: `Modeled after Super Earth tank designs, the Automaton Annihilator Tank stands as a crude imitation of its Super 
        Earth counterpart, albeit plainly inferior in numerous aspects. Its bulky frame and slow-turning turret evoke a sense of outdated 
        menace, a relic of a bygone era repurposed for the Automatons' relentless pursuit of domination.`,
        tactics: `Target it's engines and vents to inflict maximum damage. Their slow speed and reaction times makes them vulnerable to 
        coordinated attacks. Draw out their fire by ducking in and out of cover.`,
    },
    Gunship: {
        name: `Gunship`,
        appearance: `After weeks of relentless attempts at aerial supremacy, the Automatons have finally made a breakthrough: the 
        dropships are UAVs armed to the teeth with rockets, cannons, and other artillery. They patrol overhead, guarding their 
        fabricators with relentless ferocity and are capable of reinforcing the Automaton ground forces, creating an impenetrable wall 
        of firepower.`,
        tactics: `Coordinate with your team to split up their attention and draw their fire, allowing positional advances onto the base 
        of the fabricator. Once in position, call in Hellbomb, run for the hills, and watch the sparks fly.`,
    },
    Dropship: {
        name: `Dropship`,
        appearance: `Packed to the brim with robotic infantry, Dropships serve as the vanguard of the Automatons' relentless assault, 
        conducting rapid deployment of advanced and mechanized units to reinforce their positions on the battlefield. These imposing 
        vessels loom ominously over the battlefield, their sleek and streamlined design hinting at the formidable firepower they 
        carry within.`,
        tactics: `Target their thrusters with high-caliber weaponry to ground them swiftly, but beware of the ensuing explosion.`,
    },
};