// ==========================================
// ABYSSAL ARCHON: GAME DATABASE Definitions (Localized)
// ==========================================

const RESOURCES = {
  evil_intent: {
    name: { en: "Evil Intent", ua: "Злий Намір" },
    icon: "✥",
    category: "ethereal",
    desc: { en: "The raw cognitive impulse of malice, siphoned from sleeping souls.", ua: "Первинний ментальний імпульс злості, викачаний із сплячих душ." },
    lore: { en: "It floats like dark static in the ether, representing the fundamental building block of demonic manifestation.", ua: "Він ширяє у ефірі як темні перешкоди, представляючи основну цеглину демонічної матеріалізації." }
  },
  anguish: {
    name: { en: "Anguish", ua: "Страждання" },
    icon: "😭",
    category: "ethereal",
    desc: { en: "Pure distress harvested from weeping mortal spirits.", ua: "Чистий розпач, зібраний з ридаючих смертних душ." },
    lore: { en: "A heavy, crimson vapor that solidifies when exposed to demonic iron.", ua: "Важка багряна пара, яка твердне при взаємодії з демонічним залізом." }
  },
  nightmares: {
    name: { en: "Nightmares", ua: "Кошмари" },
    icon: "👁",
    category: "ethereal",
    desc: { en: "Condensed terror drawn from mortal slumber.", ua: "Конденсований жах, витягнутий зі сну смертних." },
    lore: { en: "It pulses with a quiet panic, used as cognitive fuel to construct advanced minions.", ua: "Він пульсує тихою панікою, використовується як ментальне паливо для створення вищих приплічників." }
  },
  chaos_essence: {
    name: { en: "Chaos Essence", ua: "Есенція Хаосу" },
    icon: "🌀",
    category: "ethereal",
    desc: { en: "Unstable energy pulled from the deepest Void.", ua: "Нестабільна енергія, витягнута з найглибшої Безодні." },
    lore: { en: "It warps the physical matter around it, humming with the power of entropic decay.", ua: "Вона викривляє фізичну матерію навколо себе, гудучи силою ентропійного розпаду." }
  },
  divine_essence: {
    name: { en: "Divine Essence", ua: "Божественна Есенція" },
    icon: "✦",
    category: "ethereal",
    desc: { en: "Stolen holy light corrupted into unholy static.", ua: "Вкрадене святе світло, осквернене в нечестиві перешкоди." },
    lore: { en: "Pulsing with a blinding golden-red glow, it resists the darkness of the pit, making it highly valuable.", ua: "Пульсуючи сліпучим золотисто-червоним сяйвом, вона опирається темряві підземелля, що робить її надзвичайно цінною." }
  },
  souls: {
    name: { en: "Souls", ua: "Душі" },
    icon: "👻",
    category: "ethereal",
    desc: { en: "The ultimate currency of the cosmic scales.", ua: "Остаточна валюта космічних терезів." },
    lore: { en: "Whispering continuously of their past mortal lives, they fuel the Archon's ultimate ascent.", ua: "Вони безперервно шепочуть про свої минулі смертні життя, живлячи остаточне сходження Архонта." }
  },
  sulfur: {
    name: { en: "Sulfur", ua: "Сірка" },
    icon: "🌋",
    category: "geological",
    desc: { en: "Yellow brimstone dust mined from active lava vents.", ua: "Жовтий сірчаний пил, видобутий з активних лавових джерел." },
    lore: { en: "Choking and toxic to mortals, it acts as an alchemical fuel in the underworld.", ua: "Задушлива й токсична для смертних, вона служить алхімічним паливом у підземному світі." }
  },
  obsidian: {
    name: { en: "Obsidian", ua: "Обсидіан" },
    icon: "💎",
    category: "geological",
    desc: { en: "Super-hard volcanic glass quarried from basalt cracks.", ua: "Надтверде вулканічне скло, видобуте з базальтових тріщин." },
    lore: { en: "Brittle but incredibly sharp, it holds curses better than any metal.", ua: "Крихкий, але неймовірно гострий, він утримує прокляття краще за будь-який метал." }
  },
  hellfire: {
    name: { en: "Hellfire", ua: "Пекельний Вогонь" },
    icon: "🔥",
    category: "geological",
    desc: { en: "Condensed thermal energy extracted from flowing lava.", ua: "Конденсована теплова енергія, видобута з гарячої лави." },
    lore: { en: "It burns without wood or coal, sustained by the elemental heat of the core.", ua: "Він горить без дров чи вугілля, підтримуваний стихійним теплом ядра." }
  },
  styx_clay: {
    name: { en: "Styx Clay", ua: "Глина Стіксу" },
    icon: "🏺",
    category: "geological",
    desc: { en: "Death-infused soil dredged from the River Styx.", ua: "Насичений смертю мул, видобутий з дна річки Стікс." },
    lore: { en: "Damp and smelling of silt, it forms the physical shells of gargoyles and minor monsters.", ua: "Вогка і пахне мулом, вона формує фізичні оболонки для гаргулій та дрібних чудовиськ." }
  },
  volcanic_ash: {
    name: { en: "Volcanic Ash", ua: "Вулканічний Попіл" },
    icon: "🌪️",
    category: "geological",
    desc: { en: "Carbonized ash rich in mineral catalysts.", ua: "Обвуглений попіл, багатий на мінеральні каталізатори." },
    lore: { en: "Acts as a perfect filtering agent in dark alchemical solutions.", ua: "Служить ідеальним фільтром у темних алхімічних розчинах." }
  },
  iron_ore: {
    name: { en: "Iron Ore", ua: "Залізна Руда" },
    icon: "🪨",
    category: "geological",
    desc: { en: "Mortal iron ore plundered from borderlands.", ua: "Залізна руда смертних, захоплена на прикордонних землях." },
    lore: { en: "Unrefined steel, waiting to be bent and corrupted by hellfire.", ua: "Неочищена сталь, що чекає, поки її викривить і розбестить пекельний вогонь." }
  },
  demonic_blood: {
    name: { en: "Demonic Blood", ua: "Демонічна Кров" },
    icon: "🩸",
    category: "biological",
    desc: { en: "Congealed life-force obtained through dark sacrifices.", ua: "Згущена життєва сила, отримана через темні ритуали самопожертви." },
    lore: { en: "It binds the physical to the spiritual, breathing life into stone constructs.", ua: "Вона пов'язує фізичне з духовним, вдихаючи життя в кам'яні конструкції." }
  },
  flesh: {
    name: { en: "Flesh", ua: "Плоть" },
    icon: "🥩",
    category: "biological",
    desc: { en: "Raw mortal meat plundered from border raids.", ua: "Сире м'ясо смертних, викрадене під час прикордонних набігів." },
    lore: { en: "Used to feed savage beasts like hellhounds or to build muscular frames for abominations.", ua: "Використовується для годування диких звірів, таких як пекельні гончаки, або для побудови м'язових каркасів потвор." }
  },
  ectoplasm: {
    name: { en: "Ectoplasm", ua: "Ектоплазма" },
    icon: "🧪",
    category: "biological",
    desc: { en: "Spectral residue extracted from the river of death.", ua: "Спектральний осад, видобутий з річки смерті." },
    lore: { en: "Used to anchor stray souls onto physical items.", ua: "Використовується для закріплення блукаючих душ на фізичних предметах." }
  },
  gold: {
    name: { en: "Gold Coins", ua: "Золоті Монети" },
    icon: "🪙",
    category: "mortal",
    desc: { en: "Mortal money plundered from border villages.", ua: "Гроші смертних, викрадені з прикордонних сіл." },
    lore: { en: "Worthless to higher demons, but useful to bribe mortal black-market merchants.", ua: "Не мають цінності для вищих демонів, але корисні для підкупу смертних торговців чорного ринку." }
  },
  abyssal_iron: {
    name: { en: "Abyssal Iron", ua: "Безодневе Залізо" },
    icon: "🛡",
    category: "crafted",
    desc: { en: "A black metal alloy smelted with sulfur and lava.", ua: "Сплав чорного металу, виплавлений з сіркою та лавою." },
    lore: { en: "Extremely heavy and resistant to holy magic. The core component of hellish tools.", ua: "Надзвичайно важкий і стійкий до святої магії. Основний компонент пекельних інструментів." }
  },
  brimstone_brand: {
    name: { en: "Brimstone Brand", ua: "Клеймо Бримстоуну" },
    icon: "🔱",
    category: "crafted",
    desc: { en: "An equipped brand that glows with heat. Grants passive: -10.0% physical action duration (Extraction & Forge).", ua: "Екіпіроване тавро, що світиться жаром. Дає пасивно: -10.0% тривалості фізичних дій (Видобуток та Кузня)." },
    lore: { en: "Engraved with runes of harvest, it vibrates in the presence of raw sulfur.", ua: "Вигравіруване рунами збору, воно вібрує в присутності сирої сірки." }
  },
  obsidian_sigil: {
    name: { en: "Obsidian Sigil", ua: "Обсидіановий Сигіл" },
    icon: "🧿",
    category: "crafted",
    desc: { en: "A pocket accessory that channels void energy. Grants passive: -10.0% magic action duration (Veil Tearing).", ua: "Кишеньковий аксесуар, який направляє енергію пустоти. Дає пасивно: -10.0% тривалості магічних дій (Розрив Завіси)." },
    lore: { en: "Carved with complex mathematical geometries that channel the void's energy.", ua: "Вирізаний зі складними математичними геометріями, які направляють енергію порожнечі." }
  },
  corrosive_acid: {
    name: { en: "Corrosive Acid", ua: "Їдка Кислота" },
    icon: "☣",
    category: "crafted",
    desc: { en: "A powerful alchemical solvent.", ua: "Потужний алхімічний розчинник." },
    lore: { en: "Dissolves anything except obsidian. Crucial for heavy refining.", ua: "Розчиняє все, крім обсидіану. Необхідна для важкого очищення." }
  },
  unholy_elixir: {
    name: { en: "Unholy Elixir", ua: "Нечестивий Еліксир" },
    icon: "🧪",
    category: "crafted",
    desc: { en: "Protective brew that shields demons during holy raids.", ua: "Захисне зілля, що прикриває демонів під час набігів на святині." },
    lore: { en: "Tastes like ash and poison, but temporarily thickens demonic skin.", ua: "На смак як попіл і отрута, але тимчасово робить демонічну шкіру стійкішою." }
  },
  hellhound: {
    name: { en: "Hellhound", ua: "Пекельний Гончак" },
    icon: "🐕",
    category: "companion",
    desc: { en: "A flame-breathing beast. Grants passive: +5.0% Brutality experience training rate.", ua: "Вогнедишний звір. Дає пасивно: +5.0% швидкості отримання досвіду Жорстокості." },
    lore: { en: "Fiercely loyal to whoever feeds them flesh, they track down resources.", ua: "Неймовірно вірний кожному, хто годує його плоттю, допомагає вистежувати здобич." }
  },
  gargoyle: {
    name: { en: "Gargoyle", ua: "Гаргулья" },
    icon: "🦇",
    category: "companion",
    desc: { en: "A stony sentinel. Grants passive: +10.0% Resilience (reduces resource losses on raid failures).", ua: "Кам'яний вартовий. Дає пасивно: +10.0% Стійкості (знижує втрату ресурсів при невдалих набігах)." },
    lore: { en: "Stands motionless for centuries, absorbing kinetic attacks to shield its master.", ua: "Століттями стоїть нерухомо, поглинаючи кінетичні атаки для захисту свого господаря." }
  },
  imp: {
    name: { en: "Minor Imp", ua: "Малий Імп" },
    icon: "😈",
    category: "companion",
    desc: { en: "A lesser demon. Grants passive: +1 Sulfur yield when chiseling sulfur vents.", ua: "Дрібний демон. Дає пасивно: +1 до збору Сірки при видовбуванні сірчаних джерел." },
    lore: { en: "It grumbles continuously, but fears the brimstone whip.", ua: "Він постійно бурчить, але боїться батога з преісподньої." }
  }
};

const CHARACTERISTICS = {
  malice: {
    name: { en: "Malice", ua: "Злість" },
    desc: { en: "Increases ethereal resource yields.", ua: "Збільшує приріст ефірних ресурсів." },
    formula: { en: "+1.0% Ethereal yields per level", ua: "+1.0% ефірного приросту за рівень" },
    lore: { en: "Your capacity for dark thoughts. The more malice you harbor, the more easily the void bends to your command.", ua: "Ваша здатність мислити темно. Чим більше злості у вас, тим легше порожнеча підкоряється вашим наказам." }
  },
  brutality: {
    name: { en: "Brutality", ua: "Жорстокість" },
    desc: { en: "Reduces duration of physical activities.", ua: "Скорочує тривалість фізичних дій." },
    formula: { en: "-0.5% physical duration per level", ua: "-0.5% тривалості фізичних дій за рівень" },
    lore: { en: "Raw physical force. Leveling it allows you to crush brimstone and hammer iron in a fraction of the time.", ua: "Груба фізична сила. Підвищення рівня дозволяє вам трощити сірку та кувати залізо за частку секунди." }
  },
  guile: {
    name: { en: "Guile", ua: "Підступність" },
    desc: { en: "Increases gold/plunder yields and critical success chances.", ua: "Збільшує здобич золота та шанси критичного успіху." },
    formula: { en: "+1.5% gold yields & +0.5% double yield chance per level", ua: "+1.5% здобичі золота та +0.5% шансу подвійного збору за рівень" },
    lore: { en: "Your capacity for deception. Unlocks rich rewards and unexpected shortcuts.", ua: "Ваша здатність до обману. Відкриває багаті нагороди та несподівані лазівки." }
  },
  devotion: {
    name: { en: "Devotion", ua: "Відданість" },
    desc: { en: "Reduces resource costs for Rites & Summons.", ua: "Зменшує витрати ресурсів на Ритуали та Призови." },
    formula: { en: "-0.4% Summoning/Rites cost per level (max -40%)", ua: "-0.4% вартості Призовів/Ритуалів за рівень (макс. -40%)" },
    lore: { en: "Commitment to the old codes of the Pit. The dark gods reward your service with cheaper rites.", ua: "Відданість древнім законам Безодні. Темні боги винагороджують вашу службу дешевшими ритуалами." }
  },
  corruption: {
    name: { en: "Corruption", ua: "Корупція" },
    desc: { en: "Increases experience gain across all activities.", ua: "Збільшує отримання досвіду у всіх діях." },
    formula: { en: "+0.8% experience gain globally per level", ua: "+0.8% отримання досвіду глобально за рівень" },
    lore: { en: "The spiritual taint spreading from your core. It accelerates your mastery of all dark skills.", ua: "Духовна скверна, що розходиться від вашого ядра. Вона прискорює ваше освоєння всіх темних навичок." }
  },
  willpower: {
    name: { en: "Willpower", ua: "Сила Волі" },
    desc: { en: "Reduces raid failure chances and increases minion slots.", ua: "Зменшує шанси провалу набігів та збільшує кількість слотів супутників." },
    formula: { en: "-1.5% raid fail chance per level. +1 Companion Slot every 20 levels (Max 2)", ua: "-1.5% шансу провалу набігів за рівень. +1 слот супутника кожні 20 рівнів (Макс. 2)" },
    lore: { en: "Your mental fortitude. Allows you to command multiple minions and navigate hazardous invasions safely.", ua: "Ваша душевна стійкість. Дозволяє керувати багатьма міньйонами та безпечно проходити небезпечні вторгнення." }
  },
  infernal: {
    name: { en: "Infernal Power", ua: "Пекельна Сила" },
    desc: { en: "Increases forge speeds and reduces smelting fuel costs.", ua: "Збільшує швидкість кування та знижує витрати палива на плавлення." },
    formula: { en: "+1.0% forge speed & -1.0% hellfire fuel cost per level", ua: "+1.0% швидкості кування та -1.0% витрат палива (Пекельного Вогню) за рівень" },
    lore: { en: "Your mastery over volcanic flames. Perfects your metallurgy and siphoning efficiency.", ua: "Ваша влада над вулканічним вогнем. Удосконалює вашу металургію та ефективність відбору тепла." }
  },
  resilience: {
    name: { en: "Resilience", ua: "Стійкість" },
    desc: { en: "Reduces resource losses when raids fail.", ua: "Зменшує втрату ресурсів у разі провалу набігів." },
    formula: { en: "+2.0% protection from raid failure resource losses per level (max 90%)", ua: "+2.0% захисту від втрати ресурсів при провалі набігу за рівень (макс. 90%)" },
    lore: { en: "Your ability to withstand blowback. Shields your vaults and minions when plans collapse.", ua: "Ваша здатність витримувати віддачу. Захищає ваші сховища та міньйонів, коли плани руйнуються." }
  },
  sorcery: {
    name: { en: "Sorcery", ua: "Чаклунство" },
    desc: { en: "Increases magic channeling speeds and alchemical yields.", ua: "Збільшує швидкість магічного збору та алхімічний вихід." },
    formula: { en: "+1.0% magic speed & +1.5% elixir yields per level", ua: "+1.0% швидкості магії та +1.5% виходу еліксирів за рівень" },
    lore: { en: "Spiritual control over the elemental static. Speeds up transmutations and brewing.", ua: "Духовний контроль над стихійними перешкодами. Прискорює трансмутацію та пивоваріння." }
  },
  avarice: {
    name: { en: "Avarice", ua: "Жадібність" },
    desc: { en: "Increases general item drop rates and reduces shop costs.", ua: "Збільшує шанси випадіння предметів та знижує витрати." },
    formula: { en: "+1.5% loot drop rates per level", ua: "+1.5% шансу випадіння предметів за рівень" },
    lore: { en: "The insatiable hunger for hoard. Forces the world to yield more items whenever you extract or plunder.", ua: "Ненаситний голод до накопичення. Змушує світ давати більше предметів кожного разу, коли ви добуваєте чи грабуєте." }
  }
};

const ACTIVITIES = [
  // CATEGORY A: Brimstone Extraction (Physical Gathering)
  {
    id: "chisel_sulfur",
    name: { en: "Chisel Sulfur Vents", ua: "Видовбувати Сірчані Венти" },
    category: "extraction",
    levelReq: 1,
    baseTime: 2000,
    cost: {},
    yield: { sulfur: 2 },
    statsTrained: [
      { key: "brutality", xp: 12 },
      { key: "avarice", xp: 6 }
    ],
    lore: { en: "Tap the smoking crust of the second circle to scrape raw, brittle sulfur dust.", ua: "Пробийте димлячу кору другого кола пекла, щоб зішкребти сирий, крихкий сірчаний пил." },
    codex: { en: "A fundamental physical task. Yields Sulfur. Trains Brutality (speeds up) and Avarice (increases yield).", ua: "Базове фізичне завдання. Дає Сірку. Тренує Жорстокість (прискорює дію) та Жадібність (збільшує вихід)." }
  },
  {
    id: "quarry_obsidian",
    name: { en: "Quarry Obsidian", ua: "Добувати Обсидіан" },
    category: "extraction",
    levelReq: 10,
    baseTime: 3500,
    cost: {},
    yield: { obsidian: 1 },
    statsTrained: [
      { key: "brutality", xp: 20 },
      { key: "resilience", xp: 10 }
    ],
    lore: { en: "Break deep basalt layers to harvest razor-sharp blocks of volcanic glass.", ua: "Руйнуйте глибокі базальтові шари, щоб зібрати гострі як бритва блоки вулканічного скла." },
    codex: { en: "Requires Extraction Skill Lv.10. Yields Obsidian. Trains Brutality and Resilience.", ua: "Потребує рівня Видобутку 10. Дає Обсидіан. Тренує Жорстокість та Стійкість." }
  },
  {
    id: "siphon_lava",
    name: { en: "Siphon Lava Flows", ua: "Відбирати Потоки Лави" },
    category: "extraction",
    levelReq: 15,
    baseTime: 4000,
    cost: {},
    yield: { hellfire: 1 },
    statsTrained: [
      { key: "infernal", xp: 25 },
      { key: "resilience", xp: 15 }
    ],
    lore: { en: "Channel raw magma streams into iron thermal wells to condense liquid Hellfire.", ua: "Спрямуйте потоки сирої магми в залізні термальні колодязі, щоб згустити рідкий Пекельний Вогонь." },
    codex: { en: "Requires Extraction Skill Lv.15. Yields Hellfire (fuel). Trains Infernal Power and Resilience.", ua: "Потребує рівня Видобутку 15. Дає Пекельний Вогонь. Тренує Пекельну Силу та Стійкість." }
  },
  {
    id: "dredge_styx",
    name: { en: "Dredge River Styx", ua: "Очищати річку Стікс" },
    category: "extraction",
    levelReq: 25,
    baseTime: 5000,
    cost: {},
    yield: { styx_clay: 2, ectoplasm: 0.1 },
    statsTrained: [
      { key: "guile", xp: 35 },
      { key: "willpower", xp: 20 }
    ],
    lore: { en: "Scoop the mud of the dead from the banks of the Styx, filtering for stray ectoplasm.", ua: "Збирайте бруд мертвих з берегів Стіксу, виловлюючи випадкову ектоплазму." },
    codex: { en: "Requires Extraction Skill Lv.25. Yields Styx Clay and 10% chance of Ectoplasm. Trains Guile and Willpower.", ua: "Потребує рівня Видобутку 25. Дає Глину Стіксу та 10% шанс на Ектоплазму. Тренує Підступність та Силу Волі." }
  },
  {
    id: "gather_ash",
    name: { en: "Gather Volcanic Ash", ua: "Збирати Вулканічний Попіл" },
    category: "extraction",
    levelReq: 30,
    baseTime: 3000,
    cost: {},
    yield: { volcanic_ash: 3 },
    statsTrained: [
      { key: "brutality", xp: 30 },
      { key: "malice", xp: 15 }
    ],
    lore: { en: "Shovel high-stability carbon ash from volcanic fallout fields.", ua: "Згрібайте лопатою стабільний вуглецевий попіл з вулканічних полів." },
    codex: { en: "Requires Extraction Skill Lv.30. Yields Volcanic Ash. Trains Brutality and Malice.", ua: "Потребує рівня Видобутку 30. Дає Вулканічний Попіл. Тренує Жорстокість та Злість." }
  },

  // CATEGORY B: Veil Tearing (Ethereal Channeling)
  {
    id: "whisper_cruelty",
    name: { en: "Whisper Cruelty", ua: "Шепотіти Жорстокість" },
    category: "veil",
    levelReq: 1,
    baseTime: 3000,
    cost: {},
    yield: { evil_intent: 3 },
    statsTrained: [
      { key: "malice", xp: 15 },
      { key: "guile", xp: 8 }
    ],
    lore: { en: "Project your malice into the dreams of weak mortal rulers to stimulate evil acts.", ua: "Проектуйте свою злість у сни слабких смертних правителів, щоб підштовхнути їх до злих дій." },
    codex: { en: "Primary magical task. Yields Evil Intent. Trains Malice and Guile.", ua: "Першочергове магічне завдання. Дає Злий Намір. Тренує Злість та Підступність." }
  },
  {
    id: "harvest_agony",
    name: { en: "Harvest Agony", ua: "Збирати Агонію" },
    category: "veil",
    levelReq: 8,
    baseTime: 4500,
    cost: {},
    yield: { anguish: 2 },
    statsTrained: [
      { key: "malice", xp: 25 },
      { key: "sorcery", xp: 12 }
    ],
    lore: { en: "Siphon the spiritual cries of suffering mortals into congealing red orbs of Anguish.", ua: "Перетворюйте духовні крики страждаючих смертних у червоні сфери Страждання." },
    codex: { en: "Requires Veil Tearing Skill Lv.8. Yields Anguish. Trains Malice and Sorcery.", ua: "Потребує рівня Розриву Завіси 8. Дає Страждання. Тренує Злість та Чаклунство." }
  },
  {
    id: "infiltrate_dreams",
    name: { en: "Infiltrate Dreams", ua: "Проникати в Сни" },
    category: "veil",
    levelReq: 12,
    baseTime: 5000,
    cost: {},
    yield: { nightmares: 1 },
    statsTrained: [
      { key: "guile", xp: 30 },
      { key: "sorcery", xp: 15 }
    ],
    lore: { en: "Feed on the deep fears of sleeping mortal scholars to compile Nightmares.", ua: "Харчуйтеся глибокими страхами сплячих смертних вчених, щоб збирати Кошмари." },
    codex: { en: "Requires Veil Tearing Skill Lv.12. Yields Nightmares. Trains Guile and Sorcery.", ua: "Потребує рівня Розриву Завіси 12. Дає Кошмари. Тренує Підступність та Чаклунство." }
  },
  {
    id: "channel_chaos",
    name: { en: "Channel Chaos", ua: "Направляти Хаос" },
    category: "veil",
    levelReq: 20,
    baseTime: 6000,
    cost: {},
    yield: { chaos_essence: 1 },
    statsTrained: [
      { key: "sorcery", xp: 40 },
      { key: "corruption", xp: 20 }
    ],
    lore: { en: "Tear a small rift directly into the raw Void, capturing unstable chaos energies.", ua: "Розірвіть маленьку тріщину прямо у порожнечу, захоплюючи нестабільну енергію хаосу." },
    codex: { en: "Requires Veil Tearing Skill Lv.20. Yields Chaos Essence. Trains Sorcery and Corruption.", ua: "Потребує рівня Розриву Завіси 20. Дає Есенцію Хаосу. Тренує Чаклунство та Корупцію." }
  },
  {
    id: "siphon_faith",
    name: { en: "Siphon Faith", ua: "Висмоктувати Віру" },
    category: "veil",
    levelReq: 35,
    baseTime: 7500,
    cost: {},
    yield: { divine_essence: 1 },
    statsTrained: [
      { key: "corruption", xp: 55 },
      { key: "willpower", xp: 30 }
    ],
    lore: { en: "Desecrate the prayers of mortal clerics to capture and corrupt Divine Essence.", ua: "Оскверняйте молитви смертних священників, щоб захопити та розбестити Божественну Есенцію." },
    codex: { en: "Requires Veil Tearing Skill Lv.35. Yields Divine Essence. Trains Corruption and Willpower.", ua: "Потребує рівня Розриву Завіси 35. Дає Божественну Есенцію. Тренує Корупцію та Силу Волі." }
  },

  // CATEGORY C: Hellfire Forge (Crafting & Refinement)
  {
    id: "smelt_iron",
    name: { en: "Smelt Abyssal Iron", ua: "Плавити Безодневе Залізо" },
    category: "forge",
    levelReq: 1,
    baseTime: 4000,
    cost: { sulfur: 3, iron_ore: 2, hellfire: 1 },
    yield: { abyssal_iron: 1 },
    statsTrained: [
      { key: "infernal", xp: 20 },
      { key: "brutality", xp: 10 }
    ],
    lore: { en: "Fuse iron ore with brimstone sulfur and superheat it in a forge to create Abyssal Iron.", ua: "Сплавляйте залізну руду з сіркою та сильно розігрівайте в кузні, щоб отримати Безодневе Залізо." },
    codex: { en: "Smelting task. Consumes 3 Sulfur, 2 Iron Ore, and 1 Hellfire. Yields 1 Abyssal Iron. Trains Infernal Power and Brutality.", ua: "Завдання плавлення. Витрачає 3 Сірки, 2 Залізної Руди та 1 Пекельний Вогонь. Дає 1 Безодневе Залізо. Тренує Пекельну Силу та Жорстокість." }
  },
  {
    id: "forge_brand",
    name: { en: "Forge Brimstone Brand", ua: "Кувати Клеймо Бримстоуну" },
    category: "forge",
    levelReq: 10,
    baseTime: 6000,
    cost: { abyssal_iron: 2, sulfur: 5 },
    yield: { brimstone_brand: 1 },
    statsTrained: [
      { key: "infernal", xp: 35 },
      { key: "avarice", xp: 15 }
    ],
    lore: { en: "Hammer abyssal iron into a glowing, volcanic tool to speed up manual mining operations.", ua: "Викуйте з безодневого заліза гарячий вулканічний інструмент для прискорення видобутку." },
    codex: { en: "Requires Forge Skill Lv.10. Consumes 2 Abyssal Iron and 5 Sulfur. Yields 1 Brimstone Brand. Trains Infernal Power and Avarice.", ua: "Потребує рівня Кування 10. Витрачає 2 Безодневого Заліза та 5 Сірки. Дає 1 Клеймо Бримстоуну. Тренує Пекельну Силу та Жадібність." }
  },
  {
    id: "sculpt_sigil",
    name: { en: "Sculpt Obsidian Sigils", ua: "Різьбити Обсидіанові Сигіли" },
    category: "forge",
    levelReq: 15,
    baseTime: 5000,
    cost: { obsidian: 2, volcanic_ash: 1 },
    yield: { obsidian_sigil: 1 },
    statsTrained: [
      { key: "sorcery", xp: 30 },
      { key: "devotion", xp: 15 }
    ],
    lore: { en: "Carve geometric runes into volcanic obsidian glass to focus magical flow.", ua: "Вирізайте геометричні руни на вулканічному обсидіановому склі, щоб сфокусувати магічні потоки." },
    codex: { en: "Requires Forge Skill Lv.15. Consumes 2 Obsidian and 1 Volcanic Ash. Yields 1 Obsidian Sigil. Trains Sorcery and Devotion.", ua: "Потребує рівня Кування 15. Витрачає 2 Обсидіану та 1 Вулканічний Попіл. Дає 1 Обсидіановий Сигіл. Тренує Чаклунство та Відданість." }
  },
  {
    id: "distill_acid",
    name: { en: "Distill Acid", ua: "Дистилювати Кислоту" },
    category: "forge",
    levelReq: 25,
    baseTime: 5500,
    cost: { sulfur: 4, hellfire: 1 },
    yield: { corrosive_acid: 1 },
    statsTrained: [
      { key: "sorcery", xp: 35 },
      { key: "willpower", xp: 20 }
    ],
    lore: { en: "Boil sulfuric minerals in magma retorts to form a highly concentrated corrosive acid.", ua: "Кип'ятіть сірчані мінерали в магмових колбах, щоб отримати висококонцентровану їдку кислоту." },
    codex: { en: "Requires Forge Skill Lv.25. Consumes 4 Sulfur and 1 Hellfire. Yields 1 Corrosive Acid. Trains Sorcery and Willpower.", ua: "Потребує рівня Кування 25. Витрачає 4 Сірки та 1 Пекельний Вогонь. Дає 1 Їдку Кислоту. Тренує Чаклунство та Силу Волі." }
  },

  // CATEGORY D: Rites & Summons
  {
    id: "concoct_elixir",
    name: { en: "Concoct Unholy Elixir", ua: "Приготувати Нечестивий Еліксир" },
    category: "rites",
    levelReq: 5,
    baseTime: 5000,
    cost: { demonic_blood: 1, volcanic_ash: 2 },
    yield: { unholy_elixir: 1 },
    statsTrained: [
      { key: "sorcery", xp: 22 },
      { key: "devotion", xp: 10 }
    ],
    lore: { en: "Steep demonic blood in volcanic ash catalyst to create a warding elixir.", ua: "Настоюйте демонічну кров на вулканічному попелі, щоб створити захисний еліксир." },
    codex: { en: "Requires Rites Skill Lv.5. Consumes 1 Demonic Blood and 2 Volcanic Ash. Yields 1 Unholy Elixir. Trains Sorcery and Devotion.", ua: "Потребує рівня Ритуалів 5. Витрачає 1 Демонічну Кров та 2 Вулканічного Попелу. Дає 1 Нечестивий Еліксир. Тренує Чаклунство та Відданість." }
  },
  {
    id: "blood_rite",
    name: { en: "Conduct Blood Rite", ua: "Провести Ритуал Крові" },
    category: "rites",
    levelReq: 12,
    baseTime: 7000,
    cost: { evil_intent: 100 },
    yield: { demonic_blood: 2 },
    statsTrained: [
      { key: "devotion", xp: 30 },
      { key: "corruption", xp: 15 }
    ],
    lore: { en: "Shed the congealed life of the Abyss to create pure, concentrated Demonic Blood.", ua: "Пролийте згорнуте життя Безодні, щоб створити чисту, концентровану Демонічну Кров." },
    codex: { en: "Requires Rites Skill Lv.12. Consumes 100 Evil Intent. Yields 2 Demonic Blood. Trains Devotion and Corruption.", ua: "Потребує рівня Ритуалів 12. Витрачає 100 Злого Наміру. Дає 2 Демонічної Крові. Тренує Відданість та Корупцію." }
  },
  {
    id: "summon_hellhound",
    name: { en: "Summon Hellhounds", ua: "Призвати Пекельних Гончаків" },
    category: "rites",
    levelReq: 18,
    baseTime: 8000,
    cost: { flesh: 3, hellfire: 2 },
    yield: { hellhound: 1 },
    statsTrained: [
      { key: "devotion", xp: 40 },
      { key: "brutality", xp: 20 }
    ],
    lore: { en: "Animate fire-spirits within organic cages of raw flesh to summon a loyal hunting Hellhound.", ua: "Оживіть духів вогню всередині плоті, щоб призвати вірного мисливського Гончака." },
    codex: { en: "Requires Rites Skill Lv.18. Consumes 3 Flesh and 2 Hellfire. Yields 1 Hellhound. Trains Devotion and Brutality.", ua: "Потребує рівня Ритуалів 18. Витрачає 3 Плоті та 2 Пекельних Вогні. Дає 1 Пекельного Гончака. Тренує Відданість та Жорстокість." }
  },
  {
    id: "animate_gargoyle",
    name: { en: "Animate Gargoyles", ua: "Оживити Гаргулій" },
    category: "rites",
    levelReq: 30,
    baseTime: 10000,
    cost: { obsidian: 5, demonic_blood: 3 },
    yield: { gargoyle: 1 },
    statsTrained: [
      { key: "devotion", xp: 55 },
      { key: "resilience", xp: 30 }
    ],
    lore: { en: "Carve clay and obsidian into a heavy gargoyle frame and bind it with demonic blood.", ua: "Виріжте з глини та обсидіану важке тіло гаргульї та скріпіть його демонічною кров'ю." },
    codex: { en: "Requires Rites Skill Lv.30. Consumes 5 Obsidian and 3 Demonic Blood. Yields 1 Gargoyle. Trains Devotion and Resilience.", ua: "Потребує рівня Ритуалів 30. Витрачає 5 Обсидіану та 3 Демонічної Крові. Дає 1 Гаргулью. Тренує Відданість та Стійкість." }
  },
  {
    id: "summon_imp",
    name: { en: "Summon Minor Imp", ua: "Призвати Малого Імпа" },
    category: "rites",
    levelReq: 1,
    baseTime: 4000,
    cost: { evil_intent: 100 },
    yield: { imp: 1 },
    statsTrained: [
      { key: "devotion", xp: 10 },
      { key: "corruption", xp: 5 }
    ],
    lore: { en: "Conjure a minor imp out of raw cruelty and sulfur vapors.", ua: "Створіть малого імпа з чистої жорстокості та випарів сірки." },
    codex: { en: "Creates 1 Minor Imp. Consumes 100 Evil Intent. Basic step of the Awakening milestone.", ua: "Створює 1 Малого Імпа. Витрачає 100 Злого Наміру. Базовий крок першого етапу." }
  },

  // CATEGORY E: Abyssal Conquest (Invasions - High Risk)
  {
    id: "raid_hamlets",
    name: { en: "Raid Border Hamlets", ua: "Набіги на Прикордонні Селища" },
    category: "conquest",
    levelReq: 1,
    baseTime: 6000,
    cost: {},
    yield: { flesh: 2, gold: 50, iron_ore: 2, souls: 0.05 },
    statsTrained: [
      { key: "guile", xp: 25 },
      { key: "brutality", xp: 15 }
    ],
    failChance: 15,
    lore: { en: "Send shadow waves to plunder border towns. Harvests mortal flesh, gold, and iron ore.", ua: "Надсилайте тіньові хвилі для пограбування прикордонних селищ. Збирайте плоть, золото та залізну руду." },
    codex: { en: "Requires Conquest Skill Lv.1. Has base 15% Failure Rate. Yields Flesh, Gold, Iron Ore, and 5% chance of Soul. Trains Guile and Brutality.", ua: "Потребує рівня Завоювання 1. Базовий шанс провалу 15%. Дає Плоть, Золото, Залізну Руду та 5% шанс на Душу. Тренує Підступність та Жорстокість." }
  },
  {
    id: "plunder_cathedral",
    name: { en: "Plunder Cathedrals", ua: "Грабувати Собори" },
    category: "conquest",
    levelReq: 20,
    baseTime: 9000,
    cost: { unholy_elixir: 2 },
    yield: { souls: 2, divine_essence: 1 },
    statsTrained: [
      { key: "corruption", xp: 45 },
      { key: "malice", xp: 25 }
    ],
    failChance: 25,
    lore: { en: "Infiltrate holy walls shielded by unholy elixirs to harvest raw human souls.", ua: "Проникайте у святі стіни, захистившись еліксирами, щоб зібрати свіжі людські душі." },
    codex: { en: "Requires Conquest Skill Lv.20. Consumes 2 Unholy Elixirs on start. Base 25% Failure Rate. Success yields 2 Souls and 1 Divine Essence. Trains Corruption and Malice.", ua: "Потребує рівня Завоювання 20. Витрачає 2 Нечестивих Еліксири на старті. Базовий шанс провалу 25%. Дає 2 Душі та 1 Божественну Есенцію. Тренує Корупцію та Злість." }
  },
  {
    id: "subjugate_city",
    name: { en: "Subjugate Mortal Cities", ua: "Підкорювати Смертні Міста" },
    category: "conquest",
    levelReq: 40,
    baseTime: 12000,
    cost: { hellhound: 1, gargoyle: 1 },
    yield: { souls: 5, flesh: 5, gold: 200 },
    statsTrained: [
      { key: "willpower", xp: 75 },
      { key: "infernal", xp: 45 }
    ],
    failChance: 40,
    lore: { en: "Direct a full assault to bind a city to the void, sacrificing a gargoyle and hellhound.", ua: "Спрямуйте повномасштабний штурм, щоб прив'язати місто до безодні, пожертвувавши гаргульєю та гончаком." },
    codex: { en: "Requires Conquest Skill Lv.40. Consumes 1 Hellhound and 1 Gargoyle on start. Base 40% Failure Rate. Success yields 5 Souls, 5 Flesh, and 200 Gold. Trains Willpower and Infernal Power.", ua: "Потребує рівня Завоювання 40. Витрачає 1 Гончака та 1 Гаргулью на старті. Шанс провалу 40%. Дає 5 Душ, 5 Плоті та 200 Золота. Тренує Силу Волі та Пекельну Силу." }
  }
];

const MILESTONES = [
  {
    index: 0,
    title: { en: "Awakening of the Archon", ua: "Пробудження Архонта" },
    goals: [
      { type: "resource", key: "evil_intent", target: 1000, label: { en: "Accumulate 1,000 Evil Intent", ua: "Накопичити 1 000 Злого Наміру" } },
      { type: "crafted", key: "imp", target: 1, label: { en: "Summon 1 Imp (under Companions)", ua: "Призвати 1 Імпа (у супутниках)" } }
    ],
    loreText: {
      en: `Out of the shifting ashes of the Abyssal Pit, your consciousness coalesces. A spark of pure Malice strikes the brimstone. An Imp, mewling and smelling of sulfur, crawls out of the portal and bows. Your dominion has begun.`,
      ua: `З мінливого попелу Безодні виникає ваша свідомість. Іскра чистої Злості вдаряє в бримстоун. Маленький імп, що жалібно пищить і тхне сіркою, виповзає з порталу і кланяється. Ваше володіння розпочалося.`
    }
  },
  {
    index: 1,
    title: { en: "Smelting the Gatekeeper", ua: "Виплавлення Брамника" },
    goals: [
      { type: "crafted", key: "brimstone_brand", target: 1, label: { en: "Forge 1 Brimstone Brand", ua: "Викувати 1 Клеймо Бримстоуну" } },
      { type: "characteristic", key: "brutality", target: 10, label: { en: "Reach Level 10 Brutality", ua: "Досягти 10 рівня Жорстокості" } }
    ],
    loreText: {
      en: `The heat of the Hellfire Forge is blinding, but your resolve is harder than the iron. With a final strike, the Brimstone Brand is quenched in blood. As you lift the glowing tool, the minor demons cow in terror. Your Brutality is recognized.`,
      ua: `Жар Пекельної Кузні сліпить очі, але ваша рішучість міцніша за залізо. Останнім ударом молота Клеймо Бримстоуну гартується в крові. Коли ви піднімаєте палаючий інструмент, дрібні демони щуляться від жаху. Ваша Жорстокість визнана.`
    }
  },
  {
    index: 2,
    title: { en: "Breaching the Veil", ua: "Прорив Завіси" },
    goals: [
      { type: "resource", key: "unholy_elixir", target: 5, label: { en: "Amass 5 Unholy Elixirs in Vault", ua: "Накопичити 5 Нечестивих Еліксирів у Сховищі" } },
      { type: "characteristic", key: "sorcery", target: 15, label: { en: "Reach Level 15 Sorcery", ua: "Досягти 15 рівня Чаклунства" } }
    ],
    loreText: {
      en: `You inhale the dark vapor of the Unholy Elixirs. In your mind, the barriers between the Abyss and the mortal world begin to fray. You hear the sweet, terrified prayers of humanity. The Veil is brittle. It is time to hunt.`,
      ua: `Ви вдихаєте темні випари Нечестивих Еліксирів. У вашому розумі бар'єри між Безоднею та світом смертних починають розсипатися. Ви чуєте солодкі, сповнені жаху молитви людства. Завіса тонка. Час полювати.`
    }
  },
  {
    index: 3,
    title: { en: "The Mortal Raid", ua: "Смертельний Набіг" },
    goals: [
      { type: "raid_success", key: "hamlet", target: 10, label: { en: "Successfully Raid Border Hamlets 10 times", ua: "Успішно пограбувати прикордонні селища 10 разів" } },
      { type: "equipped", key: "hellhound", target: 1, label: { en: "Equip 1 Hellhound in Companion Slots", ua: "Екіпірувати 1 Гончака в слоти супутників" } }
    ],
    loreText: {
      en: `The screams of the border guards ring out as your Hellhounds tear through the wooden palisade. Mortal flesh and gold are loaded into your vaults. The high heavens may watch, but they are too slow to stop you. Your name is whispered in fear.`,
      ua: `Крики прикордонників лунають повсюди, коли ваші Пекельні Гончаки прориваються крізь дерев'яний частокіл. Смертна плоть і золото завантажуються у ваші сховища. Високі небеса спостерігають, але вони надто повільні, щоб зупинити вас. Ваше ім'я шепочуть із жахом.`
    }
  },
  {
    index: 4,
    title: { en: "Subjugation of the Realm (The Grand Ascent)", ua: "Підкорення Королівства (Велике Сходження)" },
    goals: [
      { type: "raid_success", key: "city", target: 1, label: { en: "Subjugate 1 Mortal City", ua: "Підкорити 1 Смертне Місто" } },
      { type: "resource", key: "souls", target: 100, label: { en: "Accumulate 100 Souls", ua: "Накопичити 100 Душ" } },
      { type: "characteristic", key: "corruption", target: 30, label: { en: "Reach Level 30 Corruption", ua: "Досягти 30 рівня Корупції" } },
      { type: "characteristic", key: "willpower", target: 30, label: { en: "Reach Level 30 Willpower", ua: "Досягти 30 рівня Сили Волі" } }
    ],
    loreText: {
      en: `A thunderous crack echoes across the sky as the central cathedral of the mortal city collapses. Ethereal chains of pure Corruption drag the entire metropolis into the yawning void. Hundreds of souls scream in unison as they are bound to your throne. You are no longer a mere demon—you are the Archon of the Ascended Abyss!`,
      ua: `Громовий тріск лунає в небі, коли центральний собор смертного міста руйнується. Ефірні ланцюги чистої Корупції затягують весь мегаполіс у позіхаючу безодню. Сотні душ кричать в унісон, коли їх приковують до вашого трону. Ви більше не простий демон — ви Архонт Воскреслої Безодні!`
    }
  }
];

// ==========================================
// TRANSLATION DICTIONARY (Static UI Elements)
// ==========================================

const LOCALIZATION = {
  en: {
    game_title: "ABYSSAL ARCHON",
    subtitle: "Overlord of the Pit",
    active_conquest: "ACTIVE CONQUEST",
    active_focus: "ACTIVE FOCUS",
    save_status: "💾",
    export: "Export",
    import: "Import",
    reset: "Reset",
    paths_header: "Abyssal Paths",
    path_extraction: "Brimstone Extraction",
    path_veil: "Veil Tearing",
    path_forge: "Hellfire Forge",
    path_rites: "Rites & Summons",
    path_conquest: "Abyssal Conquest",
    dominion_header: "Dominion",
    path_inventory: "Vault & Armory",
    quick_slots_header: "Companions & Gear",
    slot_companion_1: "Companion 1",
    slot_companion_2: "Companion 2",
    slot_tool: "Tool Slot",
    slot_accessory: "Accessory",
    title_extraction: "Brimstone Extraction",
    desc_extraction: "Quarry minerals, tap geothermal lava, and gather Abyssal materials.",
    title_veil: "Veil Tearing",
    desc_veil: "Tear open dimensional rifts to harvest Evil Intent, Anguish, and Chaos Essence.",
    title_forge: "Hellfire Forge",
    desc_forge: "Smelt raw ore into Abyssal steel and craft tools, sigils, and amulets of power.",
    title_rites: "Rites & Summons",
    desc_rites: "Brew dark elixirs, conduct sacrifices, and summon minions to serve in your slots.",
    title_conquest: "Abyssal Conquest",
    desc_conquest: "Raid mortal boundaries. High yields but carries failure risks. Level Willpower to stay safe.",
    title_inventory: "Vault & Armory",
    desc_inventory: "Your stored resources, artifacts, companions, and crafting materials.",
    panel_attributes: "Archon Attributes",
    codex_title: "Abyssal Codex",
    empty: "Empty",
    none: "None",
    locked_minion: "Locked (Need Willpower 20)"
  },
  ua: {
    game_title: "АРХОНТ БЕЗОДНІ",
    subtitle: "Володар Безодні",
    active_conquest: "АКТИВНЕ ЗАВОЮВАННЯ",
    active_focus: "АКТИВНИЙ ФОКУС",
    save_status: "💾",
    export: "Експорт",
    import: "Імпорт",
    reset: "Скидання",
    paths_header: "Шляхи Безодні",
    path_extraction: "Видобуток Сірки",
    path_veil: "Розрив Завіси",
    path_forge: "Кузня Пекельного Вогню",
    path_rites: "Ритуали та Призови",
    path_conquest: "Завоювання Безодні",
    dominion_header: "Володіння",
    path_inventory: "Сховище та Арсенал",
    quick_slots_header: "Супутники та Спорядження",
    slot_companion_1: "Супутник 1",
    slot_companion_2: "Супутник 2",
    slot_tool: "Слот Інструменту",
    slot_accessory: "Аксесуар",
    title_extraction: "Видобуток Сірки",
    desc_extraction: "Видобувайте мінерали, відбирайте геотермальну лаву та збирайте матеріали Безодні.",
    title_veil: "Розрив Завіси",
    desc_veil: "Розривайте просторові тріщини, щоб зібрати Злий Намір, Страждання та Есенцію Хаосу.",
    title_forge: "Кузня Пекельного Вогню",
    desc_forge: "Плавіть руду в безодневу сталь та куйте пекельні знаряддя, сигіли та амулети.",
    title_rites: "Ритуали та Призови",
    desc_rites: "Варіть темні зілля, здійснюйте жертвоприношення та призивайте слуг у слоти.",
    title_conquest: "Завоювання Безодні",
    desc_conquest: "Робіть набіги на кордони смертних. Великі нагороди, але є ризики провалу. Тренуйте Силу Волі.",
    title_inventory: "Сховище та Арсенал",
    desc_inventory: "Ваші збережені ресурси, артефакти, супутники та ковальні матеріали.",
    panel_attributes: "Атрибути Архонта",
    codex_title: "Кодекс Безодні",
    empty: "Порожньо",
    none: "Немає",
    locked_minion: "Заблоковано (Потрібна Воля 20)"
  }
};

// ==========================================
// GAME STATE DEFINITIONS
// ==========================================

let isSimulatingOffline = false;

const GENERATED_IMAGES = new Set([
  "chisel_sulfur",
  "quarry_obsidian",
  "siphon_lava",
  "dredge_styx",
  "gather_ash",
  "whisper_cruelty",
  "smelt_iron",
  "forge_brand",
  "sculpt_sigil",
  "sculpt_sigils",
  "distill_acid",
  "concoct_elixir",
  "prologue_banner",
  "milestone1_banner",
  "milestone2_banner",
  "milestone3_banner",
  "milestone4_banner",
  "milestone5_banner"
]);

const ACTIVITY_IMAGE_MAP = {
  // Category A
  chisel_sulfur: "chisel_sulfur",
  quarry_obsidian: "quarry_obsidian",
  siphon_lava: "siphon_lava",
  dredge_styx: "dredge_styx",
  gather_ash: "gather_ash",
  
  // Category B
  whisper_cruelty: "whisper_cruelty",
  harvest_agony: "whisper_cruelty",
  infiltrate_dreams: "whisper_cruelty",
  channel_chaos: "dredge_styx",
  siphon_faith: "sculpt_sigil",
  
  // Category C
  smelt_iron: "smelt_iron",
  forge_brand: "forge_brand",
  sculpt_sigil: "sculpt_sigil",
  distill_acid: "distill_acid",
  
  // Category D
  concoct_elixir: "concoct_elixir",
  blood_rite: "concoct_elixir",
  summon_hellhound: "siphon_lava",
  animate_gargoyle: "quarry_obsidian",
  summon_imp: "chisel_sulfur",
  
  // Category E
  raid_hamlets: "smelt_iron",
  plunder_cathedral: "forge_brand",
  subjugate_city: "forge_brand"
};

function getSystemDefaultLanguage() {
  if (typeof navigator !== 'undefined') {
    const locale = navigator.language || navigator.userLanguage || "en";
    const code = locale.toLowerCase();
    if (code.startsWith("uk") || code.startsWith("ua")) {
      return "ua";
    }
  }
  return "en";
}

let state = {
  lang: getSystemDefaultLanguage(), // Localization setting
  resources: {},
  skillXP: { extraction: 0, veil: 0, forge: 0, rites: 0, conquest: 0 },
  skillLevels: { extraction: 1, veil: 1, forge: 1, rites: 1, conquest: 1 },
  statXP: {},
  statLevels: {},
  activeActivity: null,
  activeProgress: 0,
  milestoneIndex: 0,
  equipment: { tool: null, accessory: null },
  minions: [null, null],
  completedRaidsCount: { hamlet: 0, cathedral: 0, city: 0 },
  isPaused: false,
  prologueShown: false,
  activeModalType: null, // Track currently active popup context ("prologue" | "milestone")
  lastSaveTime: Date.now()
};

// Initialize empty counts
Object.keys(RESOURCES).forEach(key => {
  state.resources[key] = 0;
});
Object.keys(CHARACTERISTICS).forEach(key => {
  state.statXP[key] = 0;
  state.statLevels[key] = 1;
});

// Translation Resolver Helper
function t(obj) {
  if (obj && typeof obj === 'object') {
    return obj[state.lang] || obj['en'] || "";
  }
  return obj || "";
}

// Localize page structure
function translateUI() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const localizedText = LOCALIZATION[state.lang][key];
    if (localizedText) {
      // Preserve inner html tags (like icon spans inside buttons)
      if (el.querySelector("span") || el.innerHTML.includes("<span")) {
        // Just replace the text content part or target inner span
        const innerSpan = el.querySelector("[data-i18n]");
        if (innerSpan) {
          innerSpan.innerText = localizedText;
        } else {
          // Fallback, replace text nodes
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
              node.nodeValue = localizedText;
            }
          });
        }
      } else {
        el.innerText = localizedText;
      }
    }
  });
  
  // Update toggle button text
  const langBtn = document.getElementById("btn-lang");
  if (langBtn) {
    langBtn.innerText = `🌐 ${state.lang === 'en' ? 'En' : 'Ua'}`;
  }
  const modalLangBtn = document.getElementById("btn-modal-lang");
  if (modalLangBtn) {
    modalLangBtn.innerText = `🌐 ${state.lang === 'en' ? 'En' : 'Ua'}`;
  }
}

// ==========================================
// CORE GAME MECHANICS & CALCULATIONS
// ==========================================

function getXPNeededForLevel(level) {
  return Math.round(100 * Math.pow(1.15, level - 1));
}

function getStatXPNeededForLevel(level) {
  return Math.round(100 * Math.pow(1.12, level - 1));
}

// Characteristics Multipliers
function getMaliceModifier() {
  return 1 + (state.statLevels.malice * 0.01);
}

function getBrutalityModifier() {
  return 1 / (1 + (state.statLevels.brutality * 0.005));
}

// Multipliers
function getGuileGoldModifier() {
  return 1 + (state.statLevels.guile * 0.015);
}

function getGuileDoubleChance() {
  return state.statLevels.guile * 0.005;
}

function getDevotionModifier() {
  const reduction = state.statLevels.devotion * 0.004;
  return Math.max(0.6, 1 - reduction);
}

function getCorruptionXPModifier() {
  return 1 + (state.statLevels.corruption * 0.008);
}

function getWillpowerFailMitigation() {
  return state.statLevels.willpower * 0.015;
}

function getWillpowerMinionSlots() {
  return 1 + Math.floor(state.statLevels.willpower / 20);
}

function getInfernalSpeedModifier() {
  return 1 / (1 + (state.statLevels.infernal * 0.01));
}

function getInfernalFuelModifier() {
  const reduction = state.statLevels.infernal * 0.01;
  return Math.max(0.2, 1 - reduction);
}

function getResilienceLossMitigation() {
  let reduction = state.statLevels.resilience * 0.02;
  if (hasMinionEquipped("gargoyle")) {
    reduction += 0.10; // +10% resilience loss reduction from Gargoyle
  }
  return Math.max(0.1, 1 - reduction);
}

function calculateActivityYield(activity, resourceKey, amount) {
  let finalAmt = amount;
  
  // Flat modifiers first
  if (resourceKey === "sulfur" && hasMinionEquipped("imp")) {
    finalAmt += 1;
  }
  
  // Multipliers
  if (RESOURCES[resourceKey].category === "ethereal") {
    finalAmt = Math.round(finalAmt * getMaliceModifier());
  } else if (RESOURCES[resourceKey].category === "mortal") {
    finalAmt = Math.round(finalAmt * getGuileGoldModifier());
  } else if (RESOURCES[resourceKey].category === "crafted" && resourceKey === "unholy_elixir") {
    finalAmt = Math.round(finalAmt * getSorceryElixirModifier());
  } else if (RESOURCES[resourceKey].category === "geological") {
    finalAmt = Math.round(finalAmt * getAvariceLootModifier());
  }
  
  return finalAmt;
}

function getSorcerySpeedModifier() {
  return 1 / (1 + (state.statLevels.sorcery * 0.01));
}

function getSorceryElixirModifier() {
  return 1 + (state.statLevels.sorcery * 0.015);
}

function getAvariceLootModifier() {
  return 1 + (state.statLevels.avarice * 0.015);
}

function calculateDuration(activity) {
  let mult = 1;
  if (activity.category === "extraction") {
    mult *= getBrutalityModifier();
    if (state.equipment.tool === "brimstone_brand") mult *= 0.90;
  } else if (activity.category === "veil") {
    mult *= getSorcerySpeedModifier();
    if (state.equipment.accessory === "obsidian_sigil") mult *= 0.90;
  } else if (activity.category === "forge") {
    mult *= getInfernalSpeedModifier();
    if (state.equipment.tool === "brimstone_brand") mult *= 0.90;
  } else if (activity.category === "rites") {
    mult *= getSorcerySpeedModifier();
  } else if (activity.category === "conquest") {
    mult *= 1 / (1 + (state.statLevels.willpower * 0.005));
  }
  return Math.round(activity.baseTime * mult);
}

function canAfford(activity) {
  if (!activity.cost) return true;
  
  let scale = 1;
  if (activity.category === "rites") scale = getDevotionModifier();
  if (activity.category === "forge") scale = getInfernalFuelModifier();
  
  for (const [key, amount] of Object.entries(activity.cost)) {
    let cost = amount;
    if (activity.category === "rites" && RESOURCES[key].category === "ethereal") {
      cost = Math.max(1, Math.round(amount * scale));
    }
    if (activity.category === "forge" && (key === "hellfire" || key === "sulfur")) {
      cost = Math.max(1, Math.round(amount * scale));
    }
    if ((state.resources[key] || 0) < cost) return false;
  }
  return true;
}

function deductCost(activity) {
  if (!activity.cost) return;
  
  let scale = 1;
  if (activity.category === "rites") scale = getDevotionModifier();
  if (activity.category === "forge") scale = getInfernalFuelModifier();
  
  for (const [key, amount] of Object.entries(activity.cost)) {
    let cost = amount;
    if (activity.category === "rites" && RESOURCES[key].category === "ethereal") {
      cost = Math.max(1, Math.round(amount * scale));
    }
    if (activity.category === "forge" && (key === "hellfire" || key === "sulfur")) {
      cost = Math.max(1, Math.round(amount * scale));
    }
    state.resources[key] -= cost;
  }
}

// ==========================================
// EXPERIENCE LOGIC LOOPS
// ==========================================

function addSkillXP(category, amount) {
  const xpGained = Math.round(amount * getCorruptionXPModifier());
  state.skillXP[category] += xpGained;
  
  const currentLvl = state.skillLevels[category];
  const needed = getXPNeededForLevel(currentLvl);
  
  if (state.skillXP[category] >= needed) {
    state.skillLevels[category]++;
    state.skillXP[category] -= needed;
    const localizedSkill = LOCALIZATION[state.lang][`path_${category}`] || category;
    const msg = state.lang === "en" ? 
      `🌋 Skill Level Up! Your ${localizedSkill} skill is now Level ${state.skillLevels[category]}!` :
      `🌋 Рівень навички підвищено! Ваша навичка ${localizedSkill} тепер на рівні ${state.skillLevels[category]}!`;
    showNotification(msg);
    renderWorkspace();
  }
}

function addStatXP(statKey, amount) {
  let scale = 1;
  if (statKey === "brutality" && hasMinionEquipped("hellhound")) {
    scale += 0.05;
  }
  
  const xpGained = Math.round(amount * getCorruptionXPModifier() * scale);
  state.statXP[statKey] += xpGained;
  
  const currentLvl = state.statLevels[statKey];
  const needed = getStatXPNeededForLevel(currentLvl);
  
  if (state.statXP[statKey] >= needed) {
    state.statLevels[statKey]++;
    state.statXP[statKey] -= needed;
    const msg = state.lang === "en" ? 
      `🔥 Attribute Grew! ${t(CHARACTERISTICS[statKey].name)} has ascended to Level ${state.statLevels[statKey]}!` :
      `🔥 Атрибут зріс! ${t(CHARACTERISTICS[statKey].name)} тепер на рівні ${state.statLevels[statKey]}!`;
    showNotification(msg);
    renderStatsPanel();
  }
}

function hasMinionEquipped(minionKey) {
  return state.minions.includes(minionKey);
}

function payoutRewards(activity) {
  const isDouble = Math.random() < getGuileDoubleChance();
  let multiplier = isDouble ? 2 : 1;
  
  for (const [key, amount] of Object.entries(activity.yield)) {
    let finalAmount = calculateActivityYield(activity, key, amount);
    if (amount < 1 && finalAmount < 1) {
      const roll = Math.random();
      if (roll > finalAmount) continue;
      finalAmount = 1;
    }
    
    finalAmount *= multiplier;
    state.resources[key] += finalAmount;
    
    // Spawn floating gain indicators on screen
    spawnGainIndicator(`+${finalAmount} ${t(RESOURCES[key].name)}`, RESOURCES[key].icon);
    
    if (isDouble) {
      const msg = state.lang === "en" ? `✦ Cunning Strike! Doubled yields on ${t(RESOURCES[key].name)}!` : `✦ Підступний удар! Подвоєно збір ${t(RESOURCES[key].name)}!`;
      showNotification(msg);
    }
  }

  const baseSkillXP = Math.round(activity.baseTime / 100);
  addSkillXP(activity.category, baseSkillXP);
  activity.statsTrained.forEach(stat => {
    addStatXP(stat.key, stat.xp);
  });
  
  checkMilestoneProgress();
}

function executeRaid(activity) {
  const baseFail = activity.failChance || 0;
  const mitigation = getWillpowerFailMitigation();
  const finalFailChance = Math.max(0, baseFail * (1 - mitigation));
  const roll = Math.random() * 100;
  
  if (roll < finalFailChance) {
    let lossMsg = state.lang === "en" ? "Conquest Failed! Your dark forces were repelled." : "Завоювання провалилося! Ваші темні сили були відкинуті.";
    const lossMultiplier = getResilienceLossMitigation();
    
    if (activity.id === "subjugate_city" && Math.random() < 0.5 * lossMultiplier) {
      if (state.resources.hellhound > 0) {
        state.resources.hellhound--;
        lossMsg += state.lang === "en" ? " A backup Hellhound was lost in the chaos." : " Резервний Гончак загинув у хаосі.";
      }
    }
    showNotification(`☠ ${lossMsg}`, "danger");
  } else {
    if (activity.id === "raid_hamlets") state.completedRaidsCount.hamlet++;
    if (activity.id === "plunder_cathedral") state.completedRaidsCount.cathedral++;
    if (activity.id === "subjugate_city") state.completedRaidsCount.city++;
    
    payoutRewards(activity);
    const msg = state.lang === "en" ? `⚔ Conquest Successful! Plundered mortal lands.` : `⚔ Завоювання успішне! Землі смертних розграбовано.`;
    showNotification(msg);
  }
}

// ==========================================
// STORY MILESTONE TRACKER & PROLOGUE
// ==========================================

function showPrologue() {
  state.isPaused = true;
  state.activeModalType = "prologue";
  const title = document.getElementById("modal-title");
  const banner = document.getElementById("modal-banner");
  if (banner) {
    if (GENERATED_IMAGES.has("prologue_banner")) {
      banner.style.backgroundImage = "url('assets/images/prologue_banner.jpg')";
    } else {
      banner.style.backgroundImage = "";
    }
  }
  const content = document.getElementById("modal-body-content");
  const actionBtn = document.getElementById("btn-modal-action");
  
  if (state.lang === "en") {
    title.innerText = "THE ASCENT OF THE ABYSS";
    content.innerHTML = `
      <p>For eons, you slumbered in the lowest pit of the Abyss, a formless consciousness bound by ancient seals. But today, the celestial barriers have cracked.</p>
      <blockquote>"You awake to find a realm of raw brimstone and volcanic winds. The mortal realm above is rich with souls and ripe for conquest, but you are weak."</blockquote>
      <p>You must gather your malice, command your servants, and ascend. Your first task is to project your evil intent onto the mortal mind and conjure a vessel to do your bidding...</p>
      <h3 style="color:#ffd23f; margin:16px 0 6px 0; font-family:'Cinzel'; font-size:1rem;">Your Opening Goals:</h3>
      <ul>
        <li>🔴 Direct your thoughts to <strong>Veil Tearing &gt; Whisper Cruelty</strong> to amass <strong>1,000 Evil Intent</strong>.</li>
        <li>🔴 Summon <strong>1 Imp</strong> (available in your companion slots) to begin automated mining.</li>
      </ul>
    `;
    actionBtn.innerText = "Awaken the Archon";
  } else {
    title.innerText = "СХОДЖЕННЯ З БЕЗОДНІ";
    content.innerHTML = `
      <p>Віками ви дрімали v найглибшому підземеллі Безодні, безтілесна свідомість, зв'язана древніми печатками. Але сьогодні небесні бар'єри дали тріщину.</p>
      <blockquote>"Ви прокидаєтеся і бачите царство брудної сірки та вулканічних вітрів. Світ смертних нагорі повний душ і готовий до завоювання, але ви слабкі."</blockquote>
      <p>Ви повинні зібрати свою злість, підпорядкувати слуг і здійснити сходження. Ваше перше завдання — спрямувати свій злий намір на розум смертних та призвати міньйона...</p>
      <h3 style="color:#ffd23f; margin:16px 0 6px 0; font-family:'Cinzel'; font-size:1rem;">Ваша перша мета:</h3>
      <ul>
        <li>🔴 Спрямуйте думки на <strong>Розрив Завіси &gt; Шепотіти Жорстокість</strong>, щоб зібрати <strong>1 000 Злого Наміру</strong>.</li>
        <li>🔴 Прикличте <strong>1 Імпа</strong> (доступно в ритуалах), щоб почати автоматичний видобуток.</li>
      </ul>
    `;
    actionBtn.innerText = "Пробудити Архонта";
  }
  
  document.getElementById("modal-overlay").classList.add("open");
}

function triggerMilestonePopup(milestone) {
  state.isPaused = true;
  state.activeModalType = "milestone";
  const title = document.getElementById("modal-title");
  const banner = document.getElementById("modal-banner");
  if (banner) {
    const key = `milestone${milestone.index + 1}_banner`;
    if (GENERATED_IMAGES.has(key)) {
      banner.style.backgroundImage = `url('assets/images/${key}.jpg')`;
    } else {
      banner.style.backgroundImage = "";
    }
  }
  const content = document.getElementById("modal-body-content");
  const actionBtn = document.getElementById("btn-modal-action");
  
  title.innerText = state.lang === "en" ? `CONQUEST REACHED: ${t(milestone.title).toUpperCase()}` : `ЗАВОЮВАННЯ: ${t(milestone.title).toUpperCase()}`;
  content.innerHTML = `
    <blockquote>"${t(milestone.loreText)}"</blockquote>
    <p style="color:#ffd23f; text-align:center; font-family:'Cinzel'; margin-top:20px;">
      ${state.lang === "en" ? "Your dark influence expands deeper into the Abyssal core..." : "Ваш темний вплив проникає глибше в ядро Безодні..."}
    </p>
  `;
  actionBtn.innerText = state.lang === "en" ? "Claim Dominion" : "Заявити Права";
  
  document.getElementById("modal-overlay").classList.add("open");
}

function checkMilestoneProgress() {
  if (state.milestoneIndex >= MILESTONES.length) return;
  
  const milestone = MILESTONES[state.milestoneIndex];
  let allDone = true;
  
  milestone.goals.forEach(goal => {
    if (!isGoalComplete(goal)) {
      allDone = false;
    }
  });
  
  if (allDone) {
    triggerMilestonePopup(milestone);
    state.milestoneIndex++;
    if (state.milestoneIndex >= MILESTONES.length) {
      const msg = state.lang === "en" ? "🏆 ASCENSION COMPLETE! You have conquered the mortal realm!" : "🏆 СХОДЖЕННЯ ЗАВЕРШЕНО! Ви завоювали світ смертних!";
      showNotification(msg);
    }
    saveGame();
    renderTopBar();
  }
}

function isGoalComplete(goal) {
  if (goal.type === "resource") {
    return (state.resources[goal.key] || 0) >= goal.target;
  }
  if (goal.type === "characteristic") {
    return (state.statLevels[goal.key] || 1) >= goal.target;
  }
  if (goal.type === "crafted") {
    if (goal.key === "imp") {
      return (state.resources.imp || 0) >= goal.target || hasMinionEquipped("imp");
    }
    if (goal.key === "brimstone_brand") {
      return (state.resources.brimstone_brand || 0) >= goal.target || state.equipment.tool === "brimstone_brand";
    }
    if (goal.key === "obsidian_sigil") {
      return (state.resources.obsidian_sigil || 0) >= goal.target || state.equipment.accessory === "obsidian_sigil";
    }
    return (state.resources[goal.key] || 0) >= goal.target;
  }
  if (goal.type === "raid_success") {
    return (state.completedRaidsCount[goal.key] || 0) >= goal.target;
  }
  if (goal.type === "equipped") {
    return hasMinionEquipped(goal.key);
  }
  return false;
}

// ==========================================
// UI RENDERING AND TRIGGERS
// ==========================================

function switchTab(tabId) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-tab") === tabId) btn.classList.add("active");
  });
  
  document.querySelectorAll(".tab-content").forEach(view => {
    view.classList.remove("active");
  });
  
  const targetView = document.getElementById(`tab-${tabId}`);
  if (targetView) targetView.classList.add("active");
  
  renderWorkspace();
}

function renderTopBar() {
  const tracker = document.getElementById("active-milestone-name");
  const goalsContainer = document.getElementById("active-milestone-goals");
  
  if (state.milestoneIndex >= MILESTONES.length) {
    tracker.innerText = state.lang === "en" ? "Ascension Achieved!" : "Сходження Досягнуто!";
    goalsContainer.innerHTML = `<span class="goal-item text-glow-yellow">✦ ${state.lang === 'en' ? 'You are the ultimate Ruler of the Pit.' : 'Ви — остаточний Володар Безодні.'}</span>`;
  } else {
    const milestone = MILESTONES[state.milestoneIndex];
    tracker.innerText = `${state.lang === 'en' ? 'Milestone' : 'Етап'} ${state.milestoneIndex + 1}: ${t(milestone.title)}`;
    
    goalsContainer.innerHTML = "";
    milestone.goals.forEach(goal => {
      const isDone = isGoalComplete(goal);
      
      let current = 0;
      if (goal.type === "resource") current = state.resources[goal.key] || 0;
      else if (goal.type === "characteristic") current = state.statLevels[goal.key] || 1;
      else if (goal.type === "crafted") {
        if (goal.key === "imp") current = (state.resources.imp || 0) + (hasMinionEquipped("imp") ? 1 : 0);
        else current = state.resources[goal.key] || 0;
      }
      else if (goal.type === "raid_success") current = state.completedRaidsCount[goal.key] || 0;
      else if (goal.type === "equipped") current = hasMinionEquipped(goal.key) ? 1 : 0;
      
      const goalItem = document.createElement("div");
      goalItem.className = `goal-item ${isDone ? 'done' : ''}`;
      goalItem.innerHTML = `
        <span class="goal-checkbox">${isDone ? '✓' : '✗'}</span>
        <span>${t(goal.label)} (${current}/${goal.target})</span>
      `;
      goalsContainer.appendChild(goalItem);
    });
  }

  const activeDisplay = document.getElementById("active-task-display");
  const activeName = document.getElementById("active-task-name");
  
  if (state.activeActivity) {
    const act = ACTIVITIES.find(a => a.id === state.activeActivity);
    activeName.innerText = act ? t(act.name) : (state.lang === "en" ? "Idle..." : "Бездіяльність...");
    activeDisplay.classList.add("text-glow-yellow");
  } else {
    activeName.innerText = state.lang === "en" ? "Idle..." : "Бездіяльність...";
    activeDisplay.classList.remove("text-glow-yellow");
  }
  
  // Update sidebar levels badges
  const categories = ["extraction", "veil", "forge", "rites", "conquest"];
  categories.forEach(cat => {
    const el = document.getElementById(`nav-lvl-${cat}`);
    if (el) {
      el.innerText = `Lv. ${state.skillLevels[cat] || 1}`;
    }
  });
  
  renderQuickSlots();
}

function updateActiveSkillHeaderProgress(tabId) {
  if (tabId === "inventory") return;
  const lvlInfo = document.getElementById(`lvl-info-${tabId}`);
  if (lvlInfo) {
    const lvl = state.skillLevels[tabId] || 1;
    const xp = state.skillXP[tabId] || 0;
    const needed = getXPNeededForLevel(lvl);
    const pct = (xp / needed * 100).toFixed(1);
    
    const xpLabel = state.lang === 'en' ? 'XP' : 'Досвід';
    lvlInfo.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; font-size:0.8rem; color:var(--color-yellow);">
        <span>${state.lang === 'en' ? 'Rank' : 'Ранг'} ${lvl}</span>
        <span>${xp} / ${needed} ${xpLabel} (${pct}%)</span>
      </div>
      <div style="background:rgba(0,0,0,0.6); height:4px; border-radius:2px; overflow:hidden; margin-top:4px; border: 1px solid rgba(255, 62, 62, 0.08);">
        <div style="background-color:var(--color-yellow); height:100%; width:${pct}%;"></div>
      </div>
    `;
  }
}

function renderWorkspace() {
  const activeTabBtn = document.querySelector(".nav-btn.active");
  if (!activeTabBtn) return;
  const tabId = activeTabBtn.getAttribute("data-tab");
  
  if (tabId === "inventory") {
    renderInventory();
    return;
  }
  
  updateActiveSkillHeaderProgress(tabId);
  
  const container = document.getElementById(`grid-${tabId}`);
  if (!container) return;
  
  container.innerHTML = "";
  
  const tabActivities = ACTIVITIES.filter(a => a.category === tabId);
  const userLvl = state.skillLevels[tabId] || 1;
  
  tabActivities.forEach(act => {
    const isLocked = userLvl < act.levelReq;
    const isActive = state.activeActivity === act.id;
    const duration = calculateDuration(act);
    const durationSec = (duration / 1000).toFixed(1);
    
    const fallbackIcons = {
      extraction: "⛏",
      veil: "🌌",
      forge: "⚒",
      rites: "🩸",
      conquest: "⚔"
    };
    const fallbackIcon = fallbackIcons[act.category] || "✦";
    
    const card = document.createElement("div");
    card.className = `activity-card ${isActive ? 'active-action' : ''} ${isLocked ? 'locked' : ''}`;
    card.id = `card-${act.id}`;
    
    const helpBtn = `<button class="btn-help-inline" data-id="${act.id}" data-type="activity">?</button>`;
    
    let costHTML = "";
    if (act.cost && Object.keys(act.cost).length > 0) {
      let scale = 1;
      if (act.category === "rites") scale = getDevotionModifier();
      if (act.category === "forge") scale = getInfernalFuelModifier();
      
      costHTML = `<div class="card-cost-info"><span class="card-label">${state.lang === 'en' ? 'Consumes:' : 'Витрачає:'}</span><span class="card-value">`;
      costHTML += Object.entries(act.cost).map(([key, amount]) => {
        let finalCost = amount;
        if (act.category === "rites" && RESOURCES[key].category === "ethereal") {
          finalCost = Math.max(1, Math.round(amount * scale));
        }
        if (act.category === "forge" && (key === "hellfire" || key === "sulfur")) {
          finalCost = Math.max(1, Math.round(amount * scale));
        }
        const hasEnough = (state.resources[key] || 0) >= finalCost;
        const color = hasEnough ? "#3eff51" : "#ff3e51";
        return `<span style="color: ${color}; white-space: nowrap;">${RESOURCES[key].icon} ${finalCost} ${t(RESOURCES[key].name)}</span>`;
      }).join(", ");
      costHTML += `</span></div>`;
    } else {
      costHTML = `<div class="card-cost-info"><span class="card-label">${state.lang === 'en' ? 'Consumes:' : 'Витрачає:'}</span><span class="card-value" style="color:#3eff51;">${state.lang === 'en' ? 'Free' : 'Безкоштовно'}</span></div>`;
    }
    
    let yieldHTML = `<div class="card-yield-info"><span class="card-label">${state.lang === 'en' ? 'Yields:' : 'Дає:'}</span><span class="card-value">`;
    yieldHTML += Object.entries(act.yield).map(([key, amount]) => {
      let finalAmt = calculateActivityYield(act, key, amount);
      let displayAmt = finalAmt;
      if (amount < 1 && finalAmt < 1) {
        displayAmt = `${(finalAmt * 100).toFixed(0)}%`;
      }
      return `${RESOURCES[key].icon} ${displayAmt} ${t(RESOURCES[key].name)}`;
    }).join(", ");
    yieldHTML += `</span></div>`;
    
    if (isLocked) {
      const localizedSkill = LOCALIZATION[state.lang][`path_${tabId}`] || tabId;
      card.innerHTML = `
        <div class="card-header">
          <h4 class="card-title">${state.lang === 'en' ? 'Locked Activity' : 'Заблоковано'}</h4>
          <span class="card-level-req">${state.lang === 'en' ? 'Requires' : 'Потребує'} ${localizedSkill} ${state.lang === 'en' ? 'Level' : 'Рівень'} ${act.levelReq}</span>
        </div>
        <div class="activity-card-image" style="background-image: url('assets/images/${ACTIVITY_IMAGE_MAP[act.id] || act.id}.jpg')">
          <div class="activity-image-fallback">${fallbackIcon}</div>
          <div class="activity-image-overlay"></div>
        </div>
        <div class="card-details">
          <p class="view-description">${t(act.lore)}</p>
        </div>
      `;
    } else {
      const activeBtnLabel = isActive ? 
        (state.lang === 'en' ? 'Pause Focus' : 'Призупинити') : 
        (state.lang === 'en' ? 'Begin Focus' : 'Сфокусуватись');
        
      card.innerHTML = `
        ${helpBtn}
        <div class="card-header">
          <h4 class="card-title">${t(act.name)}</h4>
          <span class="card-level-req" style="color:var(--color-text-secondary)">${state.lang === 'en' ? 'Level' : 'Рівень'} ${act.levelReq}</span>
        </div>
        <div class="activity-card-image" style="background-image: url('assets/images/${ACTIVITY_IMAGE_MAP[act.id] || act.id}.jpg')">
          <div class="activity-image-fallback">${fallbackIcon}</div>
          <div class="activity-image-overlay"></div>
        </div>
        <div class="card-details">
          <p class="view-description" style="margin-bottom:8px;">${t(act.lore)}</p>
          ${yieldHTML}
          ${costHTML}
          <div class="card-time-info">
            <span class="card-label">${state.lang === 'en' ? 'Duration:' : 'Тривалість:'}</span>
            <span class="card-value">⏳ ${durationSec}s</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar" id="progress-${act.id}" style="width: ${isActive ? (state.activeProgress / duration * 100) : 0}%"></div>
          </div>
        </div>
        <button class="card-action-btn mt-2" data-id="${act.id}">${activeBtnLabel}</button>
      `;
    }
    container.appendChild(card);
  });
  
  container.querySelectorAll(".card-action-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const actId = e.target.getAttribute("data-id");
      toggleActivity(actId);
    });
  });
  
  container.querySelectorAll(".btn-help-inline").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = e.target.getAttribute("data-id");
      openCodex(id, "activity");
    });
  });
}

function renderStatsPanel() {
  const container = document.getElementById("characteristics-grid");
  if (!container) return;
  container.innerHTML = "";
  
  Object.entries(CHARACTERISTICS).forEach(([key, stat]) => {
    const lvl = state.statLevels[key] || 1;
    const xp = state.statXP[key] || 0;
    const needed = getStatXPNeededForLevel(lvl);
    const fillPercent = (xp / needed * 100).toFixed(1);
    
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <button class="btn-help-inline" data-id="${key}" data-type="stat">?</button>
      <div class="stat-header">
        <span class="stat-title">${t(stat.name)}</span>
        <span class="stat-level">Lv. ${lvl}</span>
      </div>
      <div class="stat-xp-bar">
        <div class="stat-xp-fill" style="width: ${fillPercent}%"></div>
      </div>
      <div class="stat-bonus">${t(stat.formula)}</div>
    `;
    
    card.querySelector(".btn-help-inline").addEventListener("click", (e) => {
      e.stopPropagation();
      openCodex(key, "stat");
    });
    container.appendChild(card);
  });
}

function renderInventory() {
  const container = document.getElementById("inventory-grid");
  if (!container) return;
  container.innerHTML = "";
  
  Object.entries(RESOURCES).forEach(([key, res]) => {
    const count = state.resources[key] || 0;
    const hasCount = count > 0;
    
    const itemCell = document.createElement("div");
    itemCell.className = `inventory-item ${hasCount ? 'has-count' : ''}`;
    
    let actionOverlay = "";
    if (hasCount) {
      const btnLabel = state.lang === 'en' ? 'Equip' : 'Екіпірувати';
      if (res.category === "companion") {
        actionOverlay = `<div class="item-action-overlay"><button class="btn-item-action btn-sm" data-id="${key}" data-action="equip-minion">${btnLabel}</button></div>`;
      } else if (res.category === "crafted" && (key === "brimstone_brand" || key === "obsidian_sigil")) {
        actionOverlay = `<div class="item-action-overlay"><button class="btn-item-action btn-sm" data-id="${key}" data-action="equip-gear">${btnLabel}</button></div>`;
      }
    }
    
    itemCell.innerHTML = `
      <button class="btn-help-inline" data-id="${key}" data-type="resource">?</button>
      <span class="item-icon">${res.icon}</span>
      <span class="item-name">${t(res.name)}</span>
      <span class="item-count">${count}</span>
      ${actionOverlay}
    `;
    
    itemCell.querySelector(".btn-help-inline").addEventListener("click", (e) => {
      e.stopPropagation();
      openCodex(key, "resource");
    });
    
    const actionBtn = itemCell.querySelector(".btn-item-action");
    if (actionBtn) {
      actionBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const action = e.target.getAttribute("data-action");
        const itemId = e.target.getAttribute("data-id");
        if (action === "equip-minion") equipMinion(itemId);
        if (action === "equip-gear") equipGear(itemId);
      });
    }
    container.appendChild(itemCell);
  });
}

function getSlotTooltipContent(id, slotType) {
  if (!id) {
    return state.lang === "en" ? 
      `<div class="slot-tooltip-empty">Empty Slot<br>Equip gear/companions from Vault.</div>` :
      `<div class="slot-tooltip-empty">Порожній Слот<br>Екіпіруйте спорядження чи супутників зі Сховища.</div>`;
  }
  
  const res = RESOURCES[id];
  let effectText = "";
  
  if (id === "imp") {
    effectText = state.lang === "en" ? 
      "Increases Sulfur yields by +1 when chiseling vents." :
      "Збільшує збір Сірки на +1 при видовбуванні.";
  } else if (id === "hellhound") {
    effectText = state.lang === "en" ? 
      "Increases Brutality experience training speed by +5%." :
      "Збільшує швидкість отримання досвіду Жорстокості на +5%.";
  } else if (id === "gargoyle") {
    effectText = state.lang === "en" ? 
      "Increases Resilience by +10% (protects resources during failures)." :
      "Збільшує Стійкість на +10% (захищає ресурси при провалах).";
  } else if (id === "brimstone_brand") {
    effectText = state.lang === "en" ? 
      "Reduces physical action duration (Extraction & Forge) by -10%." :
      "Скорочує час фізичних дій (Видобуток та Кузня) на -10%.";
  } else if (id === "obsidian_sigil") {
    effectText = state.lang === "en" ? 
      "Reduces magic action duration (Veil Tearing) by -10%." :
      "Скорочує час магічних дій (Розрив Завіси) на -10%.";
  }
  
  return `
    <div class="slot-tooltip-name">${res.icon} ${t(res.name)}</div>
    <div class="slot-tooltip-effect">${effectText}</div>
  `;
}

function renderQuickSlots() {
  const companion1 = document.getElementById("val-slot-minion-1");
  const companion2 = document.getElementById("val-slot-minion-2");
  const tool = document.getElementById("val-slot-tool");
  const accessory = document.getElementById("val-slot-accessory");
  
  const slotsAvailable = getWillpowerMinionSlots();
  
  if (slotsAvailable < 2) {
    document.getElementById("slot-minion-2").style.opacity = "0.35";
    document.getElementById("slot-minion-2").style.pointerEvents = "none";
    companion2.innerText = LOCALIZATION[state.lang].locked_minion;
    companion2.className = "slot-value";
  } else {
    document.getElementById("slot-minion-2").style.opacity = "1";
    document.getElementById("slot-minion-2").style.pointerEvents = "auto";
  }
  
  companion1.innerText = state.minions[0] ? t(RESOURCES[state.minions[0]].name) : LOCALIZATION[state.lang].empty;
  companion1.className = state.minions[0] ? "slot-value equipped" : "slot-value";
  
  if (slotsAvailable >= 2) {
    companion2.innerText = state.minions[1] ? t(RESOURCES[state.minions[1]].name) : LOCALIZATION[state.lang].empty;
    companion2.className = state.minions[1] ? "slot-value equipped" : "slot-value";
  }
  
  tool.innerText = state.equipment.tool ? t(RESOURCES[state.equipment.tool].name) : LOCALIZATION[state.lang].none;
  tool.className = state.equipment.tool ? "slot-value equipped" : "slot-value";
  
  accessory.innerText = state.equipment.accessory ? t(RESOURCES[state.equipment.accessory].name) : LOCALIZATION[state.lang].none;
  accessory.className = state.equipment.accessory ? "slot-value equipped" : "slot-value";
  
  // Render tooltips
  document.getElementById("tip-slot-minion-1").innerHTML = getSlotTooltipContent(state.minions[0], "minion");
  document.getElementById("tip-slot-minion-2").innerHTML = slotsAvailable >= 2 ? getSlotTooltipContent(state.minions[1], "minion") : getSlotTooltipContent(null, "minion");
  document.getElementById("tip-slot-tool").innerHTML = getSlotTooltipContent(state.equipment.tool, "tool");
  document.getElementById("tip-slot-accessory").innerHTML = getSlotTooltipContent(state.equipment.accessory, "accessory");
}

// ==========================================
// SUMMON & EQUIPMENT HANDLERS
// ==========================================

function equipMinion(minionId) {
  if (state.resources[minionId] <= 0) return;
  const slotsCount = getWillpowerMinionSlots();
  
  if (state.minions[0] === minionId || (slotsCount >= 2 && state.minions[1] === minionId)) {
    const msg = state.lang === "en" ? "This companion is already active!" : "Цей супутник уже активний!";
    showNotification(msg, "danger");
    return;
  }
  
  if (state.minions[0] === null) {
    state.minions[0] = minionId;
    state.resources[minionId]--;
    const msg = state.lang === "en" ? `🐕 Equipped ${t(RESOURCES[minionId].name)} to slot 1.` : `🐕 Призвано ${t(RESOURCES[minionId].name)} у слот 1.`;
    showNotification(msg);
  } else if (slotsCount >= 2 && state.minions[1] === null) {
    state.minions[1] = minionId;
    state.resources[minionId]--;
    const msg = state.lang === "en" ? `🐕 Equipped ${t(RESOURCES[minionId].name)} to slot 2.` : `🐕 Призвано ${t(RESOURCES[minionId].name)} у слот 2.`;
    showNotification(msg);
  } else {
    const oldMinion = state.minions[0];
    state.minions[0] = minionId;
    state.resources[minionId]--;
    if (oldMinion) state.resources[oldMinion]++;
    const msg = state.lang === "en" ? `Swapped companion: Equipped ${t(RESOURCES[minionId].name)}.` : `Замінено супутника: Призвано ${t(RESOURCES[minionId].name)}.`;
    showNotification(msg);
  }
  
  saveGame();
  renderTopBar();
  renderInventory();
  renderWorkspace();
}

function equipGear(gearId) {
  if (state.resources[gearId] <= 0) return;
  
  let slot = gearId === "brimstone_brand" ? "tool" : "accessory";
  const oldGear = state.equipment[slot];
  state.equipment[slot] = gearId;
  state.resources[gearId]--;
  
  if (oldGear) {
    state.resources[oldGear]++;
  }
  
  const msg = state.lang === "en" ? `🔱 Equipped ${t(RESOURCES[gearId].name)}.` : `🔱 Одягнено ${t(RESOURCES[gearId].name)}.`;
  showNotification(msg);
  saveGame();
  renderTopBar();
  renderInventory();
  renderWorkspace();
}

function unequipMinion(slotIdx) {
  const minionId = state.minions[slotIdx];
  if (!minionId) return;
  
  state.minions[slotIdx] = null;
  state.resources[minionId]++;
  const msg = state.lang === "en" ? `Unequipped ${t(RESOURCES[minionId].name)}. Returned to Vault.` : `Знято ${t(RESOURCES[minionId].name)}. Повернуто у сховище.`;
  showNotification(msg);
  saveGame();
  renderTopBar();
  renderInventory();
  renderWorkspace();
}

function unequipGear(slot) {
  const gearId = state.equipment[slot];
  if (!gearId) return;
  
  state.equipment[slot] = null;
  state.resources[gearId]++;
  const msg = state.lang === "en" ? `Unequipped ${t(RESOURCES[gearId].name)}. Returned to Vault.` : `Знято ${t(RESOURCES[gearId].name)}. Повернуто у сховище.`;
  showNotification(msg);
  saveGame();
  renderTopBar();
  renderInventory();
  renderWorkspace();
}

document.getElementById("slot-minion-1").addEventListener("click", () => unequipMinion(0));
document.getElementById("slot-minion-2").addEventListener("click", () => unequipMinion(1));
document.getElementById("slot-tool").addEventListener("click", () => unequipGear("tool"));
document.getElementById("slot-accessory").addEventListener("click", () => unequipGear("accessory"));

// ==========================================
// ACTIONS AND TASK STATE CHANGERS
// ==========================================

function toggleActivity(id) {
  const act = ACTIVITIES.find(a => a.id === id);
  if (!act) return;
  
  if (state.activeActivity === id) {
    state.activeActivity = null;
    state.activeProgress = 0;
    const msg = state.lang === "en" ? "Focus paused." : "Фокус призупинено.";
    showNotification(msg);
  } else {
    const userLvl = state.skillLevels[act.category];
    if (userLvl < act.levelReq) {
      const msg = state.lang === "en" ? "You lack the power to unlock this path yet." : "Вам не вистачає сил для розблокування цього шляху.";
      showNotification(msg, "danger");
      return;
    }
    
    if (!canAfford(act)) {
      const msg = state.lang === "en" ? "Insufficient resources to begin this focus." : "Недостатньо ресурсів для початку фокусу.";
      showNotification(msg, "danger");
      return;
    }
    
    state.activeActivity = id;
    state.activeProgress = 0;
    
    if (act.category === "conquest") {
      deductCost(act);
    }
    const msg = state.lang === "en" ? `✥ Focus directed: ${t(act.name)}` : `✥ Направлено фокус: ${t(act.name)}`;
    showNotification(msg);
  }
  
  saveGame();
  renderTopBar();
  renderWorkspace();
}

// ==========================================
// THE HELP SYSTEM & CODEX ENGINE
// ==========================================

function openCodex(id, type) {
  const panel = document.getElementById("codex-panel");
  const title = document.getElementById("codex-title");
  const body = document.getElementById("codex-body");
  panel.classList.add("open");
  
  if (type === "resource") {
    const res = RESOURCES[id];
    title.innerText = t(res.name).toUpperCase();
    const producers = ACTIVITIES.filter(a => a.yield && a.yield[id]);
    const consumers = ACTIVITIES.filter(a => a.cost && a.cost[id]);
    
    let prodLabel = state.lang === "en" ? "Produced By" : "Видобувається у";
    let consLabel = state.lang === "en" ? "Consumed By" : "Використовується у";
    let noneLabel = state.lang === "en" ? "None" : "Немає";
    
    let producerHTML = producers.map(p => `<li>🌋 ${t(p.name)} (Base: ${(p.baseTime/1000).toFixed(1)}s)</li>`).join("") || `<li>${noneLabel}</li>`;
    let consumerHTML = consumers.map(c => `<li>⚙ ${t(c.name)}</li>`).join("") || `<li>${noneLabel}</li>`;
    
    body.innerHTML = `
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Category' : 'Категорія'}</h4>
        <span style="text-transform:uppercase; font-size:0.8rem; color:var(--color-red); font-weight:600;">${res.category}</span>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Description' : 'Опис'}</h4>
        <p style="font-size:0.85rem; line-height:1.4;">${t(res.desc)}</p>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Lore' : 'Історія'}</h4>
        <p class="codex-lore">"${t(res.lore)}"</p>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${prodLabel}</h4>
        <ul style="font-size:0.8rem; padding-left:12px; list-style-type:square;">${producerHTML}</ul>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${consLabel}</h4>
        <ul style="font-size:0.8rem; padding-left:12px; list-style-type:square;">${consumerHTML}</ul>
      </div>
    `;
  }
  
  else if (type === "stat") {
    const stat = CHARACTERISTICS[id];
    const lvl = state.statLevels[id];
    const xp = state.statXP[id];
    const needed = getStatXPNeededForLevel(lvl);
    title.innerText = t(stat.name).toUpperCase();
    
    const trainers = ACTIVITIES.filter(a => a.statsTrained.some(s => s.key === id));
    let trainerHTML = trainers.map(tActivity => {
      const xpVal = tActivity.statsTrained.find(s => s.key === id).xp;
      return `<li>✥ ${t(tActivity.name)} (+${xpVal} Base XP)</li>`;
    }).join("") || "<li>None</li>";
    
    body.innerHTML = `
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Current Rank' : 'Поточний ранг'}</h4>
        <span class="text-glow-yellow" style="font-weight:bold; font-size:1.1rem; font-family:'Cinzel';">Level ${lvl}</span>
        <span style="font-size:0.75rem; color:var(--color-text-dark); margin-left:8px;">(${xp} / ${needed} XP)</span>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Impact On Gameplay' : 'Вплив на гру'}</h4>
        <p style="font-size:0.85rem; line-height:1.4;">${t(stat.desc)}</p>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Lore' : 'Історія'}</h4>
        <p class="codex-lore">"${t(stat.lore)}"</p>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Active Formula modifier' : 'Формула модифікатора'}</h4>
        <div class="codex-formula">${t(stat.formula)}</div>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Trained By' : 'Тренується у'}</h4>
        <ul style="font-size:0.8rem; padding-left:12px; list-style-type:square;">${trainerHTML}</ul>
      </div>
    `;
  }
  
  else if (type === "activity") {
    const act = ACTIVITIES.find(a => a.id === id);
    title.innerText = t(act.name).toUpperCase();
    const duration = calculateDuration(act);
    
    let costText = act.cost && Object.keys(act.cost).length > 0 ? 
      Object.entries(act.cost).map(([k, v]) => `${RESOURCES[k].icon} ${v} ${t(RESOURCES[k].name)}`).join(", ") : 
      (state.lang === 'en' ? 'Free' : 'Безкоштовно');
      
    let yieldText = Object.entries(act.yield).map(([k, v]) => {
      let finalV = v;
      if (v < 1) finalV = `${(v*100).toFixed(0)}%`;
      return `${RESOURCES[k].icon} ${finalV} ${t(RESOURCES[k].name)}`;
    }).join(", ");
    
    body.innerHTML = `
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Path Class' : 'Клас дії'}</h4>
        <span style="text-transform:uppercase; font-size:0.8rem; color:var(--color-red); font-weight:600;">${act.category}</span>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Description' : 'Опис'}</h4>
        <p style="font-size:0.85rem; line-height:1.4;">${t(act.lore)}</p>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Codex Information' : 'Кодексна інформація'}</h4>
        <p class="codex-lore">"${t(act.codex)}"</p>
      </div>
      <div class="codex-section">
        <h4 class="codex-section-title">${state.lang === 'en' ? 'Stats Formulas' : 'Формули значень'}</h4>
        <div class="codex-stat-grid">
          <div class="codex-stat-row"><span>${state.lang === 'en' ? 'Base Duration:' : 'Базова тривалість:'}</span><span>${(act.baseTime/1000).toFixed(1)}s</span></div>
          <div class="codex-stat-row"><span>${state.lang === 'en' ? 'Current Duration:' : 'Поточна тривалість:'}</span><span class="text-glow-yellow">${(duration/1000).toFixed(2)}s</span></div>
          <div class="codex-stat-row"><span>${state.lang === 'en' ? 'Unlocked Level:' : 'Рівень доступу:'}</span><span>${act.levelReq}</span></div>
          <div class="codex-stat-row"><span>${state.lang === 'en' ? 'Costs:' : 'Витрати:'}</span><span>${costText}</span></div>
          <div class="codex-stat-row"><span>${state.lang === 'en' ? 'Yields:' : 'Нагороди:'}</span><span>${yieldText}</span></div>
        </div>
      </div>
    `;
  }
}

document.getElementById("btn-close-codex").addEventListener("click", () => {
  document.getElementById("codex-panel").classList.remove("open");
});

// ==========================================
// SAVE SYSTEM & LOCAL STORAGE
// ==========================================

function saveGame() {
  const data = {
    lang: state.lang,
    resources: state.resources,
    skillXP: state.skillXP,
    skillLevels: state.skillLevels,
    statXP: state.statXP,
    statLevels: state.statLevels,
    activeActivity: state.activeActivity,
    milestoneIndex: state.milestoneIndex,
    equipment: state.equipment,
    minions: state.minions,
    completedRaidsCount: state.completedRaidsCount,
    prologueShown: state.prologueShown,
    timestamp: Date.now()
  };
  localStorage.setItem("abyssal_archon_save", JSON.stringify(data));
  
  const status = document.getElementById("save-status");
  if (status) {
    status.classList.remove("idle-icon");
    status.classList.add("saved-confirm");
    status.innerText = state.lang === "en" ? "Saved!" : "Збережено!";
    setTimeout(() => {
      status.classList.remove("saved-confirm");
      status.classList.add("idle-icon");
      status.innerText = LOCALIZATION[state.lang].save_status;
    }, 2000);
  }
}

function loadGame() {
  const saved = localStorage.getItem("abyssal_archon_save");
  if (!saved) {
    state.lang = getSystemDefaultLanguage();
    showPrologue();
    state.prologueShown = true;
    translateUI();
    return;
  }
  
  try {
    const data = JSON.parse(saved);
    state.lang = data.lang || getSystemDefaultLanguage();
    translateUI();
    
    Object.keys(data.resources || {}).forEach(k => {
      if (state.resources.hasOwnProperty(k)) state.resources[k] = data.resources[k];
    });
    Object.keys(data.skillXP || {}).forEach(k => {
      state.skillXP[k] = data.skillXP[k];
    });
    Object.keys(data.skillLevels || {}).forEach(k => {
      state.skillLevels[k] = data.skillLevels[k];
    });
    Object.keys(data.statXP || {}).forEach(k => {
      if (state.statXP.hasOwnProperty(k)) state.statXP[k] = data.statXP[k];
    });
    Object.keys(data.statLevels || {}).forEach(k => {
      if (state.statLevels.hasOwnProperty(k)) state.statLevels[k] = data.statLevels[k];
    });
    
    state.activeActivity = data.activeActivity;
    state.milestoneIndex = data.milestoneIndex || 0;
    state.equipment = data.equipment || { tool: null, accessory: null };
    state.minions = data.minions || [null, null];
    state.completedRaidsCount = data.completedRaidsCount || { hamlet: 0, cathedral: 0, city: 0 };
    state.prologueShown = data.prologueShown || false;
    
    if (!state.prologueShown) {
      showPrologue();
      state.prologueShown = true;
    }
    
    if (data.timestamp && state.activeActivity) {
      const offlineTime = Date.now() - data.timestamp;
      if (offlineTime > 5000) {
        simulateOfflineProgress(offlineTime);
      }
    }
  } catch (e) {
    console.error("Save load failed", e);
  }
}

function simulateOfflineProgress(ms) {
  const act = ACTIVITIES.find(a => a.id === state.activeActivity);
  if (!act) return;
  
  isSimulatingOffline = true;
  
  const simulatedMs = Math.min(ms, 43200000);
  const duration = calculateDuration(act);
  let completions = 0;
  
  let timeSpent = 0;
  while (timeSpent + duration <= simulatedMs) {
    if (!canAfford(act)) break;
    deductCost(act);
    if (act.category === "conquest") {
      executeRaid(act);
    } else {
      payoutRewards(act);
    }
    completions++;
    timeSpent += duration;
  }
  
  isSimulatingOffline = false;
  
  if (completions > 0) {
    const hours = (simulatedMs / 3600000).toFixed(1);
    const msg = state.lang === "en" ? 
      `⏳ Returned! Simulating ${hours}h of offline progress. Completed ${completions} tasks.` :
      `⏳ Повернення! Зімітовано ${hours}г офлайн-прогресу. Завершено ${completions} завдань.`;
    showNotification(msg);
  }
}

document.getElementById("btn-hard-reset").addEventListener("click", () => {
  const confirmMsg = state.lang === "en" ? 
    "☠ WARNING! This will completely erase your Abyssal progression. Are you sure?" :
    "☠ УВАГА! Це повністю видалить ваш прогрес у грі. Ви впевнені?";
  if (confirm(confirmMsg)) {
    localStorage.removeItem("abyssal_archon_save");
    location.reload();
  }
});

document.getElementById("btn-export-save").addEventListener("click", () => {
  const saveString = btoa(JSON.stringify(state));
  const promptMsg = state.lang === "en" ? "Copy this save string code:" : "Скопіюйте цей код збереження:";
  prompt(promptMsg, saveString);
});

document.getElementById("btn-import-save").addEventListener("click", () => {
  const promptMsg = state.lang === "en" ? "Paste your export save string code here:" : "Вставте ваш код збереження сюди:";
  const saveStr = prompt(promptMsg);
  if (saveStr) {
    try {
      const decoded = atob(saveStr);
      localStorage.setItem("abyssal_archon_save", decoded);
      location.reload();
    } catch(e) {
      const errorMsg = state.lang === "en" ? "Invalid save code string!" : "Невірний код збереження!";
      alert(errorMsg);
    }
  }
});

// Toggle Language Button handler
document.getElementById("btn-lang").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "ua" : "en";
  translateUI();
  renderTopBar();
  renderWorkspace();
  renderStatsPanel();
  saveGame();
});

// ==========================================
// SYSTEM INITIALIZATION AND LOOPS
// ==========================================

function showNotification(msg, type = "success") {
  if (isSimulatingOffline) return;
  const existing = document.querySelector(".game-notification");
  if (existing) existing.remove();
  
  const notify = document.createElement("div");
  notify.className = `game-notification show`;
  if (type === "danger") notify.style.borderColor = "#ff3e3e";
  
  const icon = type === "danger" ? "☠" : "✦";
  notify.innerHTML = `
    <span class="notification-icon" style="color:${type === 'danger' ? '#ff3e3e' : '#ffd23f'}">${icon}</span>
    <span class="notification-message">${msg}</span>
  `;
  document.body.appendChild(notify);
  
  setTimeout(() => {
    notify.classList.remove("show");
    setTimeout(() => notify.remove(), 300);
  }, 4000);
}

function spawnGainIndicator(text, icon) {
  if (isSimulatingOffline) return;
  const container = document.getElementById("floating-gain-container");
  if (!container) return;
  
  const indicator = document.createElement("div");
  indicator.className = "floating-gain-item";
  indicator.innerHTML = `<span class="gain-icon">${icon}</span> <span class="gain-text">${text}</span>`;
  container.appendChild(indicator);
  
  setTimeout(() => {
    indicator.classList.add("fade-up");
  }, 20);
  
  setTimeout(() => {
    indicator.style.opacity = "0";
    setTimeout(() => {
      indicator.remove();
    }, 400);
  }, 1200);
}

function tick() {
  if (state.isPaused) {
    state.lastSaveTime = Date.now();
    return;
  }
  
  const now = Date.now();
  const dt = now - state.lastSaveTime;
  state.lastSaveTime = now;
  
  if (state.activeActivity) {
    const act = ACTIVITIES.find(a => a.id === state.activeActivity);
    if (!act) {
      state.activeActivity = null;
      return;
    }
    
    const duration = calculateDuration(act);
    state.activeProgress += dt;
    
    const progressBar = document.getElementById(`progress-${act.id}`);
    if (progressBar) {
      const pct = Math.min(100, (state.activeProgress / duration) * 100);
      progressBar.style.width = `${pct}%`;
    }
    
    if (state.activeProgress >= duration) {
      state.activeProgress = 0;
      
      if (act.category === "conquest") {
        executeRaid(act);
        if (!canAfford(act)) {
          state.activeActivity = null;
          const msg = state.lang === "en" ? "Focus stopped: Ran out of resources to sustain conquest." : "Фокус зупинено: Недостатньо ресурсів для завоювання.";
          showNotification(msg, "danger");
          renderTopBar();
          renderWorkspace();
        } else {
          deductCost(act);
        }
      } else {
        if (canAfford(act)) {
          deductCost(act);
          payoutRewards(act);
          if (!canAfford(act)) {
            state.activeActivity = null;
            const msg = state.lang === "en" ? "Focus stopped: Ran out of resources." : "Фокус зупинено: Закінчилися ресурси.";
            showNotification(msg, "danger");
            renderTopBar();
            renderWorkspace();
          }
        } else {
          state.activeActivity = null;
          const msg = state.lang === "en" ? "Focus stopped: Ran out of resources." : "Фокус зупинено: Закінчилися ресурси.";
          showNotification(msg, "danger");
          renderTopBar();
          renderWorkspace();
        }
      }
      
      renderTopBar();
      renderStatsPanel();
      updateActiveSkillHeaderProgress(act.category); // Update active skill progress in real time
      const currentTab = document.querySelector(".nav-btn.active").getAttribute("data-tab");
      if (currentTab === "inventory") {
        renderInventory();
      } else {
        renderWorkspace();
      }
    }
  }
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");
    switchTab(tabId);
  });
});

document.getElementById("btn-modal-action").addEventListener("click", () => {
  document.getElementById("modal-overlay").classList.remove("open");
  state.isPaused = false;
  state.activeModalType = null; // Clear active popup context
  state.lastSaveTime = Date.now();
});

// Modal Language Toggle Button Handler
document.getElementById("btn-modal-lang").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "ua" : "en";
  translateUI();
  
  // Re-render active modal contents
  if (state.activeModalType === "prologue") {
    showPrologue();
  } else if (state.activeModalType === "milestone") {
    triggerMilestonePopup(MILESTONES[state.milestoneIndex - 1]);
  }
  
  renderTopBar();
  renderWorkspace();
  renderStatsPanel();
  saveGame();
});

function initGlobalTooltip() {
  const tooltip = document.getElementById("global-tooltip");
  if (!tooltip) return;
  
  const updatePosition = (card) => {
    const tipDiv = card.querySelector(".slot-tooltip");
    if (!tipDiv || !tipDiv.innerHTML.trim()) return;
    
    const rect = card.getBoundingClientRect();
    const width = tooltip.offsetWidth || 220;
    const height = tooltip.offsetHeight || 120;
    
    if (window.innerWidth <= 992) {
      // Position above the card, centered horizontally
      let left = rect.left + rect.width / 2 - width / 2;
      left = Math.max(10, Math.min(window.innerWidth - width - 10, left));
      let top = rect.top - height - 10;
      if (top < 10) {
        top = rect.bottom + 10;
      }
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    } else {
      // Position to the right of the card
      let left = rect.right + 10;
      if (left + width > window.innerWidth) {
        left = rect.left - width - 10;
      }
      let top = rect.top + rect.height / 2 - height / 2;
      top = Math.max(10, Math.min(window.innerHeight - height - 10, top));
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    }
  };

  document.querySelectorAll(".slot-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      const tipDiv = card.querySelector(".slot-tooltip");
      if (!tipDiv || !tipDiv.innerHTML.trim()) return;
      
      tooltip.innerHTML = tipDiv.innerHTML;
      tooltip.style.display = "block";
      updatePosition(card);
    });
    
    card.addEventListener("mousemove", () => {
      updatePosition(card);
    });
    
    card.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
}

window.onload = () => {
  loadGame();
  renderTopBar();
  renderWorkspace();
  renderStatsPanel();
  initGlobalTooltip();
  
  setInterval(tick, 50);
  setInterval(saveGame, 10000);
};
