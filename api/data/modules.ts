type ModuleData = {
    name: string;
    common: number;
    rare: number;
    super: number;
    requisition: number;
    effect: string;
};

export const modules: Record<string, ModuleData> = {
    DonationAccessLicense: {
        name: `Donation Access Liscense`,
        common: 60,
        rare: 0,
        super: 0,
        requisition: 0,
        effect: 'Support Weapons deploy with full ammo.'
    },

    StreamlinedRequestProcess: {
        name: `Streamlined Request Process`,
        common: 80,
        rare: 40,
        super: 0,
        requisition: 0,
        effect: `Decreases Support Weapon stratagem cooldowns by 10%.`,
    },

    HandCarts: {
        name: `Hand Carts`,
        common: 80,
        rare: 60,
        super: 15,
        requisition: 0,
        effect: `Decreases cooldown of all Backpack stratagems by 10%.`,
    },

    SuperiorPackingMethodology: {
        name: `Superior Packing Methodology`,
        common: 150,
        rare: 150,
        super: 15,
        requisition: 20000,
        effect: `Resupply boxes refill Support Weapons with the maximum number of carriable magazines`,
    },

    ExplodingShrapnel: {
        name: `Exploding Shrapnel`,
        common: 100,
        rare: 0,
        super: 0,
        requisition: 0,
        effect: `Reduces damage falloff from the center of explosions caused by orbital stratagems.`,
    },

    MoreGuns: {
        name: `More Guns`,
        common: 80,
        rare: 60,
        super: 0,
        requisition: 0,
        effect: `Barrage orbitals fire 1 additional salvo per barrage.`,
    },

    ZeroGBreechLoading: {
        name: `Zero-G Breech Loading`,
        common: 80,
        rare: 80,
        super: 10,
        requisition: 0,
        effect: `Orbital stratagem cooldown time reduced by 10%.`,
    },

    AtmosphericMonitoring: {
        name: `Atmospheric Monitoring`,
        common: 200,
        rare: 150,
        super: 15,
        requisition: 25000,
        effect: `Orbital HE barrage spread reduced by 15%`,
    },

    LiquidVentilatedCockpit: {
        name: `Liquid-Ventilated Cockpit`,
        common: 80,
        rare: 0,
        super: 0,
        requisition: 0,
        effect: `Eagle stratagem cooldown time reduced by 50% (15 seconds to 7.5 seconds. Doesn't affect Rearm time. This cooldown is shared among all active Eagle stratagems).`,
    },

    PitCrewHazardPay: {
        name: `Pit Crew Hazard Pay`,
        common: 80,
        rare: 40,
        super: 0,
        requisition: 0,
        effect: `Reduces Eagle Rearm time by 20%. (When Eagle stratagems' limited uses are consumed, the Eagle must rearm before more can be deployed. This upgrade reduces Rearm time from 2:30 to 2:00.)`
    },

    ExpandedWeaponsBay: {
        name: `Expanded Weapons Bay`,
        common: 80,
        rare: 80,
        super: 10,
        requisition: 0,
        effect: `Increases Eagle stratagems uses per Rearm by 1.`
    },

    XXLWeaponsBay: {
        name: `XXL Weapons Bay`,
        common: 150,
        rare: 150,
        super: 15,
        requisition: 25000,
        effect: `Eagle stratagems that drop multiple bombs will drop 1 additional bomb(s).`,
    },

    TargetingSoftwareUpgrade: {
        name: `Targeting Software Upgrade`,
        common: 60,
        rare: 0,
        super: 0,
        requisition: 0,
        effect: `Reduces deployment time for Orbital stratagems by 1 second(s).`,
    },

    NuclearRadar: {
        name: `Nuclear Radar`,
        common: 80,
        rare: 40,
        super: 0,
        requisition: 0,
        effect: `Increases enemy ping radius on minimap by 50 meters.`,
    },

    PowerSteering: {
        name: `Power Steering`,
        common: 80,
        rare: 80,
        super: 10,
        requisition: 0,
        effect: `Improves steering for Helldivers during Hellpod deployment.`,
    },

    EnhancedCombustion: {
        name: `Enhanced Combustion`,
        common: 200,
        rare: 150,
        super: 15,
        requisition: 25000,
        effect: `Fire damage from Stratagems increased by 25%.`,
    },

    SyntheticSupplementation: {
        name: `Synthetic Supplementation`,
        common: 60,
        rare: 10,
        super: 0,
        requisition: 0,
        effect: `Reduces cooldown time for Sentry, Emplacement, and Resupply stratagems by 10%.`,
    },

    AdvancedConstruction: {
        name: `Advanced Construction`,
        common: 80,
        rare: 60,
        super: 5,
        requisition: 0,
        effect: `Increases health of Sentry stratagems by 50%.`,
    },

    RapidLaunchSystem: {
        name: `Rapid Launch System`,
        common: 80,
        rare: 80,
        super: 10,
        requisition: 0,
        effect: `Removes deployment time for Emplacement stratagems.`,
    },

    CircuitExpansion: {
        name: `Circuit Expansion`,
        common: 200,
        rare: 150,
        super: 20,
        requisition: 20000,
        effect: `Lightning arcs, fired from weapons and turrets, jump to one additional enemy.`,
    },

    DynamicTracking: {
        name: `Dynamic Tracking`,
        common: 60,
        rare: 20,
        super: 0,
        requisition: 0,
        effect: `Reduces deployment time for all Sentry stratagems [by 3 seconds].`,
    },

    ShockAbsorptionGel: {
        name: `Shock Absorption Gel`,
        common: 80,
        rare: 40,
        super: 5,
        requisition: 0,
        effect: `Increases ammo for Sentry stratagems by 50%.`,
    },

    HighQualityLubricant: {
        name: `High-Quality Lubricant`,
        common: 80,
        rare: 80,
        super: 10,
        requisition: 0,
        effect: `Sentries rotate towards new targets more quickly.`,
    },

    BlastAbsorption: {
        name: `Blast Absorption`,
        common: 150,
        rare: 150,
        super: 20,
        requisition: 25000,
        effect: `Sentries take 50% less damage from explosions.`,
    },
};