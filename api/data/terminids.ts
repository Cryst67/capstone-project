type BugData = {
  name: string;
  appearance: string;
  tactics: string;
  image?: string; // Add image property
};

export const terminids: Record<string, BugData> = {
  Scavenger: {
    name: 'Scavenger',
    appearance: `The lowliest of the Terminids, the Scavenger embodies mindless aggression and blind obedience to the hive's
         insatiable appetite for destruction. With a physique reminiscent of a prehistoric nightmare, this insectoid menace 
         scuttles forth with reckless abandon, its presence heralded by a shrill shriek that beckons its brethren to swarm and
          overwhelm any who dare oppose the hive.`,
    tactics: `Don't underestimate their numbers. Whether you're facing Basic Scavengers, Juvenile Bile Spitters, 
        or agile Hoppers, swift elimination is key. Focus your fire to prevent being overwhelmed and secure victory for Super Earth!`,

        image: require('../../assets/terminids/scavenger.png'),
  },
  Warrior: {
    name: `Warrior`,
    appearance: `Warriors embody a relentless pursuit of mindless expansion and destruction. Their presence and armored
        exoskeletons evoke primal fear, serving as a chilling testament to the savagery of the Terminid swarm. With razor-sharp
        claws and menacing stature, they loom ominously over the battlefield, instilling terror in all who dare oppose their
        insatiable hunger for conquest.`,
    tactics: `Precision is paramount. Aim for weak spots beneath their armor or target their distinctive features for maximum effect.
        Employ shotguns or armor-piercing weapons to strip away defenses and expose vulnerabilities. And always be prepared for the
        explosive demise of a Bile Warrior, avoiding the resulting bile blast at all costs.`,

        image: require('../../assets/terminids/warrior.png'),
  },
  Hunter: {
    name: `Hunter`,
    appearance: `The elusive Hunters epitomize the relentless pursuit of prey within the Terminid swarm. Agile and cunning, 
        these formidable adversaries employ swift leaps and evasive maneuvers to outmaneuver their targets with unparalleled efficiency.
         Despite their diminutive size, their relentless pursuit and formidable agility make them a formidable threat on the battlefield.`,
    tactics: `Keep your distance and use rapid-firing weapons or explosives to take down Hunters swiftly. Prioritize eliminating them
         early in engagements to prevent them from overwhelming your squad with their relentless pursuit and debilitating bile attacks.`,

         image: require('../../assets/terminids/hunter.png'),
  },
  Stalker: {
    name: `Stalker`,
    appearance: `Stalkers epitomize stealth and subterfuge within the Terminid ranks, lurking in the shadows and striking with lethal
        precision. Camouflaged amidst the darkness, these formidable adversaries blend seamlessly into their surroundings, making them
        notoriously difficult to detect.`,
    tactics: `These ferocious beasts might think they are cloaked, but a keen eye will spot them from a mile away. Upon sight
        prioritise finding their hideout, heading towards the direction they came from. Killing them only goes so far when their backup
        is ready on speed dial.`,

        image: require('../../assets/terminids/stalker.png'),
  },
  BileSpewer: {
    name: `Bile Spewer`,
    appearance: `The grotesque Bile Spewer is a product of catastrophic chemical spills on Terminid E-710 farms, its bloated thorax 
        brimming with corrosive acids ready to unleash upon encountering the forces of Democracy. These repugnant adversaries exude an
        aura of toxicity, their vile bile capable of dissolving even the hardiest of armor.`,
    tactics: `Neutralize Bile Spewers swiftly by targeting their vulnerable spots with explosives or aiming for their heads.
        Be wary of their corrosive attacks and mortar mode from a distance`,

        image: require('../../assets/terminids/bile-spewer.png'),
  },
  Charger: {
    name: `Charger`,
    appearance: `The Charger presents a formidable threat on the battlefield, boasting a meter-thick exoskeleton that renders it
        nearly impervious to conventional weaponry. Its hulking frame and swift movements make it a daunting adversary, capable of
        unleashing devastating charges against unsuspecting Helldivers. There are two variants of the Charger, believed to be a male
        and female variants, but no mating patterns have been observed. The "bull" appears to be more heavily armored, but in practice
        they are equal in resillience, strength, and intelligence.`,
    tactics: `Their armor is next to impenetrable, but as is customary with bugs, their biggest weakness is their head. 
        A well aim shot of heavy artillery will instantly take them out. Otherwise target their legs with heavy armor-piercing weapons or
        explosives to reveal their weak spots. Keep your distance, use obstacles, and coordinate with your squadmates to outmaneuver
        these armored behemoths.`,

        image: require('../../assets/terminids/charger.png'),
  },
  BroodCommander: {
    name: `Brood Commander`,
    appearance: `Behold, the Brood Commander - a towering monstrosity of armored menace, leading the Terminid horde with a ruthless
        determination to crush democracy beneath its spiky claws. With its imposing presence and commanding aura, it strikes fear into
        the hearts of even the most battle-hardened Helldivers.`,
    tactics: `These armored giants may be slower, but they bring a swarm of critters ready to wreak havoc. Target their vulnerable
        limbs to slow their advance, but stay wary - even headless, they're dangerous. Keep your distance, keep moving, and rain down
        firepower until they're down for the count.`,

        image: require('../../assets/terminids/brood-commander.png'),
  },
  BileTitan: {
    name: `Bile Titan`,
    appearance: `Prepare yourselves, Helldivers, for the ultimate test of courage and firepower - the monstrous Bile Titan.
        This towering bug, resembling a grotesque amalgamation of arachnid and nightmare, strides across the battlefield on four
        enormous legs, casting a sinister shadow over all who dare to oppose it. Its chitinous exoskeleton gleams with a sickly
        sheen, adorned with jagged spikes that serve as a grim reminder of its deadly capabilities.`,
    tactics: `These massive bugs are no joke, with acid attacks that can melt through anything in their path. Stay back,
        coordinate with your team, and use the terrain to your advantage. Aim for its mouth and vulnerable sacs to deal
        maximum damage.`,

        image: require('../../assets/terminids/bile-titan.png'),
  },
  Shrieker: {
    name: `Shrieker`,
    appearance: `Just as our research had foretold, we've detected flying bugs. These monstrosities are incredibly territorial and
        will hunt down anyone daring to get close to their outcoves. Their large wings make them easy, yet fast moving, targets, so
        stay on the look out.`,
    tactics: `These demonic bugs hide out in their nests until they sense their pray nearby. Luckily these nests can be spotted 
        from the other side of the planet, sticking out like a Christmas tree on a beach holiday. Long distance heavy weaponary will
        demolish their homes before they hunt you down.

        When you do come close to their nests they release their inhabitants in droves, hoping to overwhelm you. But as it happens
        the weak flesh of these bugs is no match to even the lightest bullets. Aim for their wings to quickly take them out of the skies.
        Arm yourselves with weaponry capable of mowing down hordes, and you'll make short work of these nasty creatures.
        But watch out, their limp bodies still pack a punch as they hit the ground.
        
        If push comes to shove, we'll deploy a Hellbomb at the base of their nests, blasting them to kingdom come in one fiery 
        explosion that signals that Democracy will always prevail.`,

        image: require('../../assets/terminids/shrieker.png'),
  },
};
