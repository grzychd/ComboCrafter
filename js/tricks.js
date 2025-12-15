/* ---------- FOOT POSITION CONSTANTS ---------- */
const pos1 = "Front foot inside",
      pos2 = "Back foot inside",
      pos3 = "Front foot outside",
      pos4 = "Back foot outside";

/* ---------- TRICKS DATA ---------- */
const tricks = [
  {
  /* ---------- Crankflips / Flip + Spins ---------- */
    name: "Crankflip",
    category: ["Flip"],
    description: "While riding, jump into the air and force the cranks to move one revolution forwards with both feet leaving the pedals. Land with both feet on the pedals or cranks.",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Double crankflip",
    category: ["Flip"],
    description: "Perform a crankflip but make the cranks flip twice.",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 2},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Triple crankflip",
    category: ["Flip"],
    description: "Perform a crankflip but make the cranks flip three times.",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Quad crankflip",
    category: ["Flip"],
    description: "Perform a crankflip but make the cranks flip four times.",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Quint crankflip",
    category: ["Flip"],
    description: "Perform a crankflip but make the cranks flip five times.",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 5},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Six crankflip",
    category: ["Flip"],
    description: "Perform a crankflip but make the cranks flip six times.",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 6},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Hick flip",
    category: ["Flip", "Spin"],
    description: "Perform a 180 unispin and crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 180},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3] }
  },
  {
    name: "Hick double flip",
    category: ["Flip", "Spin"],
    description: "Perform a 180 unispin and double crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 2, spin: 180},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3] }
  },
  {
    name: "Hick triple flip",
    category: ["Flip", "Spin"],
    description: "Perform a 180 unispin and triple crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3, spin: 180},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3] }
  },
  {
    name: "Hick quad flip",
    category: ["Flip", "Spin"],
    description: "Perform a 180 unispin and quad crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 180},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3] }
  },
  {
    name: "Hick quint flip",
    category: ["Flip", "Spin"],
    description: "Perform a 180 unispin and quint crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 5, spin: 180},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3] }
  },
  {
    name: "Hick six flip",
    category: ["Flip", "Spin"],
    description: "Perform a 180 unispin and six crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 6, spin: 180},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3] }
  },
  {
    name: "Hick flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 90 unispin and crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 90},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Hick double flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 90 unispin and double crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 2, spin: 90},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Hick triple flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 90 unispin and triple crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 90},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Hick quad flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 90 unispin and quad crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 90},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Hick quint flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 90 unispin and quint crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 5, spin: 90},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Trey flip",
    category: ["Flip", "Spin"],
    description: "Perform a 360 unispin and crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 360},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Trey double flip",
    category: ["Flip", "Spin"],
    description: "Perform a 360 unispin and double crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3, spin: 360},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Trey triple flip",
    category: ["Flip", "Spin"],
    description: "Perform a 360 unispin and triple crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3, spin: 360},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Trey quad flip",
    category: ["Flip", "Spin"],
    description: "Perform a 360 unispin and quad crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 360},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Trey quint flip",
    category: ["Flip", "Spin"],
    description: "Perform a 360 unispin and quint crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 5, spin: 360},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Trey six flip",
    category: ["Flip", "Spin"],
    description: "Perform a 360 unispin and six crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 6, spin: 360},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Trey flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 270 unispin and crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 270},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Trey double flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 270 unispin and double crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 2, spin: 270},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Trey triple flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 270 unispin and triple crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 270},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Trey quad flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 270 unispin and quad crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 270},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Trey quint flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 270 unispin and quint crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 5, spin: 270},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Fifth flip",
    category: ["Flip", "Spin"],
    description: "Perform a 540 unispin and crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 540},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Fifth double flip",
    category: ["Flip", "Spin"],
    description: "Perform a 540 unispin and double crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3, spin: 540},
    footPosition: { start: [pos1], end: [pos1, pos2] }
  },
  {
    name: "Fifth triple flip",
    category: ["Flip", "Spin"],
    description: "Perform a 540 unispin and triple crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3, spin: 540},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Fifth quad flip",
    category: ["Flip", "Spin"],
    description: "Perform a 540 unispin and quad crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 540},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Fifth quint flip",
    category: ["Flip", "Spin"],
    description: "Perform a 360 unispin and quint crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 5, spin: 360},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Fifth six flip",
    category: ["Flip", "Spin"],
    description: "Perform a 540 unispin and six crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 6, spin: 540},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Fifth flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 450 unispin and crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 450},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Fifth double flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 450 unispin and double crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 2, spin: 450},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Fifth triple flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 450 unispin and triple crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 450},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Fifth quad flip - tire",
    category: ["Flip", "Spin", "Tire"],
    description: "Perform a 450 unispin and quad crankflip simultaneously. Land on the tire",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 450},
    footPosition: { start: [pos1], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Sej flip",
    category: ["Flip", "Spin"],
    description: "Perform a 720 unispin and crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 720},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Sej double flip",
    category: ["Flip", "Spin"],
    description: "Perform a 720 unispin and double crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 2, spin: 720},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Sej triple flip",
    category: ["Flip", "Spin"],
    description: "Perform a 720 unispin and triple crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3, spin: 720},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Sej quad flip",
    category: ["Flip", "Spin"],
    description: "Perform a 720 unispin and quad crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 4, spin: 720},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Ninth flip",
    category: ["Flip", "Spin"],
    description: "Perform a 900 unispin and crankflip simultaneously",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 900},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Ninth double flip",
    category: ["Flip", "Spin"],
    description: "Perform a 900 unispin and double crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 2, spin: 900},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Ninth triple flip",
    category: ["Flip", "Spin"],
    description: "Perform a 900 unispin and triple crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 3, spin: 900},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Tenth flip",
    category: ["Flip", "Spin"],
    description: "Perform a 1080 unispin and crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 1080},
    footPosition: { start: [pos1], end: [pos2] }
  },
  {
    name: "Twelfth flip",
    category: ["Flip", "Spin"],
    description: "Perform a 1260 unispin and crankflip simultaneously",
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: null,
    middleWeight: null,
    endWeight: null,
    skillLimits: {flip: 1, spin: 1260},
    footPosition: { start: [pos1], end: [pos2] }
  },
  /* ---------- Unispins ---------- */
  {
    name: "180 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 180 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {spin: 180},
    footPosition: { start: [pos1, pos2, pos3], end: [pos1, pos2] }
  },
  {
    name: "360 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 360 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {spin: 360},
    footPosition: { start: [pos1, pos2, pos3], end: [pos1, pos2] }
  },
  {
    name: "540 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 540 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {spin: 540},
    footPosition: { start: [pos1, pos2, pos3], end: [pos1, pos2] }
  },
  {
    name: "720 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 720 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: false,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {spin: 720},
    footPosition: { start: [pos1, pos2, pos3], end: [pos1, pos2] }
  },
  {
    name: "900 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 900 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {spin: 900},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2] }
  },
  {
    name: "1080 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 1080 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {spin: 1080},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2] }
  },
  {
    name: "1260 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 1260 degrees, typically towards your front foot. Just like Eli or Marcus",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {spin: 1260},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2] }
  },
  {
    name: "1440 Unispin",
    category: ["Spin"],
    description: "Jump into the air and spin the unicycle 1440 degrees, typically towards your front foot. Be the first to do it",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {spin: 1440},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2] }
  },
  {
    name: "90 Unispin",
    category: ["Spin", "Tire"],
    description: "Jump into the air and spin the unicycle 90 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: true,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: null,
    skillLimits: {spin: 90},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "270 Unispin",
    category: ["Spin", "Tire"],
    description: "Jump into the air and spin the unicycle 270 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: true,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: null,
    skillLimits: {spin: 270},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "450 Unispin",
    category: ["Spin", "Tire"],
    description: "Jump into the air and spin the unicycle 450 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: true,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: null,
    skillLimits: {spin: 450},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "630 Unispin",
    category: ["Spin", "Tire"],
    description: "Jump into the air and spin the unicycle 630 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: true,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: null,
    skillLimits: {spin: 630},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "810 Unispin",
    category: ["Spin", "Tire"],
    description: "Jump into the air and spin the unicycle 810 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {spin: 810},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "990 Unispin",
    category: ["Spin", "Tire"],
    description: "Jump into the air and spin the unicycle 990 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {spin: 990},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "1170 Unispin",
    category: ["Spin", "Tire"],
    description: "Jump into the air and spin the unicycle 1170 degrees, typically towards your front foot",
    startCombo: true,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: null,
    endWeight: null,
    skillLimits: {spin: 1170},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
    /* ---------- Rolls ---------- */
  {
    name: "Rolling wrap",
    category: ["Roll"],
    description: ["While hopping on the cranks, remove your back foot and place it onto the tire in-front of the frame. Roll the unicycle forward one half revolution. ",
        "Place your back foot onto the back crank and pass the seat behind your back to your other hand. Remove your front foot from the front crank and ",
        "allow your momentum to roll forward another half revolution to complete the roll"
        ].join("<br>"),
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {roll: 1},
    footPosition: { start: [pos1, pos3], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Back roll",
    category: ["Roll"],
    description: ["While hopping on the cranks, remove your back foot and place it onto the tire behind the frame. Roll the unicycle back one half revolution. ",
        "Place your foot back at the top of the tire and jump with both feet while rolling the unicycle one half revolution backwards to complete the roll"
        ].join("<br>"),
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {roll: 1},
    footPosition: { start: [pos2], end: [pos2, pos4] }
  },
  {
    name: "Varial roll",
    category: ["Roll"],
    description: ["While hopping on the cranks, remove your back foot and place it on the tire in front of the frame. Roll the unicycle one half revolution ",
        "forwards, and twist your foot around the tire 180 degrees. Place your foot onto the crank and allow your momentum to roll the unicycle one half ",
        "revolution to finish the roll"
        ].join("<br>"),
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {roll: 1},
    footPosition: { start: [pos1, pos2, pos3], end: [pos1, pos2, pos3, pos4] }
  },
  {
    name: "Outside roll",
    category: ["Roll"],
    description: ["Start with what is usually your back foot on the outside of the front crank. Push the tire half a revolution forward ",
        "with the other foot, then another half revolution to complete the roll"
        ].join("<br>"),
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {roll: 1},
    footPosition: { start: [pos1, pos2, pos3], end: [pos1, pos3] }
  }
  /* ---------- Tires ---------- */
  {
    name: "Monkey flip",
    category: ["Spin", "Tire", "Flip"],
    description: ["While hopping on the tire, jump into the air and flip the tire 1 revolution",
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {spin: 90, flip: 1},
    footPosition: { start: [pos1, pos2, pos3], end: [pos1, pos2, pos3, pos4] }
  },
  /* ---------- Coasts ---------- */
  {
    name: "Scuff coast",
    category: ["Coast"],
    description: ["Place one of your feet on the frame (right foot on right side of the frame, left foot on left [preferably ",
        "the foot that is in back when you hop]). Grip the seat with both hands however is comfortable, and place the other ",
        "foot on the wheel against the back of the frame. Then push the wheel backward with your foot, and extend your leg ",
        "to balance. Your foot may not touch the wheel after the initial push. You must coast for a minimum of 1 revolution, and can be more."
        ].join("<br>"),
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {coast:3},
    footPosition: { start: [pos2], end: [pos1, pos2] }
  },
  /* ---------- Sides ---------- */
  {
    name: "Side jump",
    category: ["Side"],
    description: ["Typically riding with your seat in front and backward, jump off of the pedals and wrap your leg around "
        "your seat in the air. Then land seat in with both feet on pedals or cranks."
        ].join("<br>"),
    startCombo: true,
    middleCombo: false,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {},
    footPosition: { start: [pos2, pos3], end: [pos2] }
  },
  /* ---------- Body Varials ---------- */
  {
    name: "Body varial",
    category: ["Body varial"],
    description: ["Typically while riding, jump off of your unicycle with both feet leaving the pedals, and twist your "
        "body 180° while leaving the unicycle in place. Land with both feet on either pedals or cranks."
        ].join("<br>"),
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {body varial: 180},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  /* ---------- Jams ---------- */
  {
    name: "Inside Jam",
    category: ["Jam"],
    description: ["Place one of your feet on the tire against the crown with the other foot not touching the pedals or "
        "crank. Be sure the inside of your foot that is on the tire is touching the frame"
        ].join("<br>"),
    startCombo: true,
    middleCombo: true,
    endCombo: true,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  /* ---------- Revs ---------- */
  {
    name: "Rev",
    category: ["Rev"],
    description: ["While riding, jump into the air and rotate the cranks 1 full revolution with your feet remaining on the pedals"
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {rev: 1},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  /* ---------- Twist ---------- */
  {
    name: "180 hoptwist",
    category: ["twist"],
    description: ["While riding, jump into the air and rotate your body and unicycle 180 degrees"
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {twist: 180},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
  /* ---------- Other ---------- */
  {
    name: "Temp",
    category: ["Other"],
    description: ["This is a test object for the other category. Please ignore"]
    startCombo: false,
    middleCombo: false,
    endCombo: false,
    defaultWeight: 20,
    userWeight: 20,
    startWeight: 20,
    middleWeight: 20,
    endWeight: 20,
    skillLimits: {},
    footPosition: { start: [pos1, pos2, pos3, pos4], end: [pos1, pos2, pos3, pos4] }
  },
];

// userSettings is assumed to be an object storing the max values from settings.html
// Example:
// userSettings = { flip: 6, spin: 360, roll: 3, coast: 5, bodyVarial: 360, rev: 3, twist: 540 };

function getAllowedTricks(tricksArray, userSettings) {
    return tricksArray.filter(trick => {
        for (const key in trick.skillLimits) {
            // Skip if the skillLimit key does not exist in userSettings
            if (!userSettings.hasOwnProperty(key)) continue;

            // If trick requires more than user's setting, exclude it
            if (trick.skillLimits[key] > userSettings[key]) return false;
        }
        return true;
    });
}

// Example usage:
// const allowedTricks = getAllowedTricks(tricks, userSettings);

// ---------- UTILITY FUNCTIONS ----------

// Get a trick by name
function getTrickByName(name) {
    return tricks.find(trick => trick.name.toLowerCase() === name.toLowerCase()) || null;
}

// Filter tricks by search term
function searchTricks(term) {
    term = term.toLowerCase();
    return tricks.filter(trick => trick.name.toLowerCase().includes(term) || trick.description.toLowerCase().includes(term));
}

// Filter tricks by categories with AND / OR logic
function filterTricksByCategories(selectedCategories, requireAll = false) {
    if (!selectedCategories.length) return tricks;
    return tricks.filter(trick => {
        const matchCount = trick.categories.filter(cat => selectedCategories.includes(cat)).length;
        return requireAll ? matchCount === selectedCategories.length : matchCount > 0;
    });
}

// ---------- COMBO GENERATOR HELPERS ----------

// Generate a random trick within filter options
function generateRandomTrick(options = {}) {
    const { categories = [], requireAll = false, maxSpins = 1440, maxFlips = 6, maxRollDifficulty = 5, maxCoastDifficulty = 5, maxRevs = 3, maxTwist = 720 } = options;

    let filteredTricks = filterTricksByCategories(categories, requireAll);

    filteredTricks = filteredTricks.filter(trick => {
        return (!trick.spins || trick.spins <= maxSpins) &&
               (!trick.flips || trick.flips <= maxFlips) &&
               (!trick.rollDifficulty || trick.rollDifficulty <= maxRollDifficulty) &&
               (!trick.coastDifficulty || trick.coastDifficulty <= maxCoastDifficulty) &&
               (!trick.revs || trick.revs <= maxRevs) &&
               (!trick.twist || trick.twist <= maxTwist);
    });

    if (!filteredTricks.length) return null;

    const randomIndex = Math.floor(Math.random() * filteredTricks.length);
    return filteredTricks[randomIndex];
}

// ---------- DOM INTERACTIONS ----------

// Populate trick search results
function renderTrickSearchResults(term, container) {
    container.innerHTML = '';
    const results = searchTricks(term);

    results.forEach(trick => {
        const div = document.createElement('div');
        div.className = 'trick-result';
        div.textContent = trick.name;
        div.addEventListener('click', () => showTrickDetails(trick));
        container.appendChild(div);
    });

    if (!results.length) {
        const noResult = document.createElement('div');
        noResult.textContent = 'No tricks found.';
        container.appendChild(noResult);
    }
}

// Show trick details with preference slider
function showTrickDetails(trick) {
    const detailContainer = document.getElementById('trick-detail');
    detailContainer.innerHTML = '';

    const nameEl = document.createElement('h3');
    nameEl.textContent = trick.name;

    const descEl = document.createElement('p');
    descEl.textContent = trick.description;

    const sliderLabel = document.createElement('label');
    sliderLabel.textContent = 'Preference: ';
    sliderLabel.className = 'setting-label';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 0;
    slider.max = 100;
    slider.value = trick.preference ?? 20;
    slider.addEventListener('input', () => {
        trick.preference = parseInt(slider.value);
    });

    sliderLabel.appendChild(slider);

    detailContainer.appendChild(nameEl);
    detailContainer.appendChild(descEl);
    detailContainer.appendChild(sliderLabel);
}

// ---------- EVENT LISTENERS ----------

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('trick-search');
    const searchContainer = document.getElementById('trick-search-results');

    if (searchInput && searchContainer) {
        searchInput.addEventListener('input', () => {
            const term = searchInput.value;
            renderTrickSearchResults(term, searchContainer);
        });
    }
});
