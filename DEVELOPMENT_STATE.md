# Demonic Idle Progression Game - Development State

This document outlines the core architecture, active designs, characteristics, activities, and resources of the demonic idle progression game. It is loaded automatically at the start of each session.

## Core Game Loop (Melvor-Idle Focus System)
1. **Single Action Queue**: The player can only have **one active activity** running at any given time.
2. **Ticking Progress**: When active, a progress bar fills over a specific duration (e.g., 2.0s to 10.0s). Upon completion, it loops and gives rewards (resources, experience, and character stats).
3. **Stat Synergy**: Gaining levels/XP in activities contributes points to **10 Demonic Characteristics**. These characteristics provide global passive multipliers that speed up activities, reduce costs, or increase yields.

---

## 10 Demonic Characteristics (Stats)
Each characteristic increases through specific activities and applies passive boosts:

1. **Malice**
   - *Impact*: +1% Ethereal resource yields per level.
   - *Trained By*: Whisper Cruelty, Harvest Agony, Plunder Cathedrals.
2. **Brutality**
   - *Impact*: -0.5% duration for physical gathering/smithing actions per level.
   - *Trained By*: Chisel Sulfur Vents, Quarry Obsidian, Gather Volcanic Ash, Forge Brimstone Brand.
3. **Guile**
   - *Impact*: +1% stealth/raid rewards and activity crit chance per level.
   - *Trained By*: Dredge River Styx, Whisper Cruelty, Infiltrate Dreams, Raid Border Hamlets.
4. **Devotion**
   - *Impact*: -0.4% resource cost for Rites & Summons per level.
   - *Trained By*: Sculpt Obsidian Sigils, Concoct Elixirs, Conduct Blood Rite, Summon Hellhounds.
5. **Corruption**
   - *Impact*: +0.8% experience gain globally per level.
   - *Trained By*: Channel Chaos, Siphon Faith, Conduct Blood Rite, Plunder Cathedrals.
6. **Willpower**
   - *Impact*: -0.5% fatigue/cooldowns and increases maximum active minions.
   - *Trained By*: Dredge River Styx, Siphon Faith, Distill Acid, Subjugate Mortal Cities.
7. **Infernal Power**
   - *Impact*: +1% forging speed and -0.5% fuel cost per level.
   - *Trained By*: Siphon Lava, Smelt Abyssal Iron, Forge Brimstone Brand, Subjugate Mortal Cities.
8. **Resilience**
   - *Impact*: +1.5% protection from accident damage or raid failures.
   - *Trained By*: Quarry Obsidian, Siphon Lava, Animate Gargoyles, Raid Border Hamlets.
9. **Sorcery**
   - *Impact*: +1% magic channeling speed and +1.5% transmutation yield.
   - *Trained By*: Harvest Agony, Infiltrate Dreams, Channel Chaos, Sculpt Obsidian Sigils, Concoct Elixirs.
10. **Avarice**
    - *Impact*: +1.5% general resource drop rates and -0.5% market cost.
    - *Trained By*: Chisel Sulfur Vents, Forge Brimstone Brand, Raid Border Hamlets.

---

## Resources
The game uses a wide array of demonic, physical, and crafted resources:

* **Currency**:
  - `Gold Coins` (gold): The primary medium of exchange, acquired by selling items or raiding mortal cities.
* **Ethereal**:
  - `Evil Intent`: Primary magical fuel.
  - `Anguish`: Extracted from suffering.
  - `Nightmares`: Extracted from mortal dreams.
  - `Chaos Essence`: Power of the raw Void.
  - `Divine Essence`: Stolen holy energy.
  - `Souls`: High-value currency for elite progression.
  - `Screams`: Echoes of terror harvested from souls.
  - `Shadow Mercury` / `Dark Mercury`: Liquid alchemical conductor.
  - `Chaos Sparks`: Volatile discharges from rift cultivation.
  - `Nebula Shards`: Stellar dust drawn from alignment.
  - `Pride Essence`, `Desire`, `Wrath Shards`: Pure distillates of human sins.
* **Physical & Geological**:
  - `Sulfur`: Basic brimstone mineral.
  - `Obsidian`: Sturdy volcanic glass.
  - `Hellfire`: Condensed liquid lava.
  - `Styx Clay`: Eerie soil from the river of death.
  - `Volcanic Ash`: Carbonized volcanic dust.
  - `Iron Ore`: Raw metal.
  - `Abyssal Iron`: Smelted demonic steel.
  - `Bone Dust`: Reanimated remains.
  - `Void Crystals`: Shards of rift core minerals.
* **Biological**:
  - `Demonic Blood`: Used in blood rites.
  - `Flesh`: Meat used to sustain hounds or create constructs.
  - `Ectoplasm`: Ethereal slime.
  - `Blood Roses` / `Doomshade`: Toxic flora grown in crops.
  - `Venom` / `Rot`: Extracted from insect plagues.
* **Crafted Items**:
  - `Brimstone Brand`: Demonic tool increasing physical speed.
  - `Obsidian Sigil`: Protective amulet.
  - `Corrosive Acid`: Powerful solvent.
  - `Unholy Elixir`: Temporary buffs/concoctions.

## 120 Demonic Activities & 15 Abyssal Paths
Only one activity can be active at a time. Progress loops automatically on cycle completion.

The game features exactly **15 progressive paths**, each containing exactly **8 progressive activities** (a total of 120 activities) with level requirements ranging from 1 to 90:

1. **Brimstone Extraction** (extraction)
   - *Focus*: Basic physical mining and geothermal extraction.
   - *Yields*: Sulfur, Obsidian, Hellfire, Styx Clay, Volcanic Ash, Iron Ore, etc.
   - *Trains*: Brutality, Resilience, Guile, Willpower, Infernal Power, Malice, Avarice.
2. **Veil Tearing** (veil)
   - *Focus*: Tearing dimensional rifts to siphon ethereal energies.
   - *Yields*: Evil Intent, Anguish, Nightmares, Chaos Essence, Divine Essence.
   - *Trains*: Malice, Sorcery, Guile, Corruption, Willpower.
3. **Hellfire Forge** (forge)
   - *Focus*: Smelting raw metals and crafting tools and sigils.
   - *Yields*: Abyssal Iron, Brimstone Brand, Obsidian Sigil, Corrosive Acid.
   - *Trains*: Infernal Power, Brutality, Avarice, Sorcery, Devotion, Willpower.
4. **Rites & Summons** (rites)
   - *Focus*: Conducting sacrifices, brewing unholy elixirs, and summoning helpers.
   - *Yields*: Unholy Elixir, Demonic Blood, Hellhounds, Gargoyles, Souls.
   - *Trains*: Sorcery, Devotion, Corruption, Brutality, Resilience.
5. **Abyssal Conquest** (conquest)
   - *Focus*: Plundering mortal settlements and cities. High yields but carries failure risks.
   - *Yields*: Flesh, Gold, Iron Ore, Souls, Divine Essence.
   - *Trains*: Guile, Brutality, Corruption, Malice, Willpower, Infernal Power.
6. **Soul Torture** (torture)
   - *Focus*: Extraction of Screams from mortal souls.
   - *Yields*: Screams.
   - *Trains*: Malice, Willpower.
7. **Shadow Alchemy** (alchemy)
   - *Focus*: Distillation and transmutation of volatile alchemical extracts.
   - *Yields*: Vitriol, Dark Mercury.
   - *Trains*: Sorcery, Corruption.
8. **Necromancy** (necromancy)
   - *Focus*: Reanimating undead and gathering necrotic remains.
   - *Yields*: Bone Dust, Phantoms.
   - *Trains*: Sorcery, Devotion.
9. **Abyssal Agriculture** (agriculture)
   - *Focus*: Cultivating hellish crops in sulfuric fields.
   - *Yields*: Doomshade, Blood Roses.
   - *Trains*: Brutality, Devotion.
10. **Blood Sorcery** (blood)
    - *Focus*: Refining crimson life force into catalysts.
    - *Yields*: Blood Catalysts, Sanguine Crystals.
    - *Trains*: Sorcery, Malice.
11. **Chaos Cultivation** (chaos)
    - *Focus*: Harvesting rift power from entropic cracks.
    - *Yields*: Chaos Sparks, Chaos Shards.
    - *Trains*: Sorcery, Corruption.
12. **Void Excavation** (void)
    - *Focus*: Deep exploration of rifts.
    - *Yields*: Void Crystals, Decayed Relics.
    - *Trains*: Brutality, Avarice.
13. **Plague Breeding** (plague)
    - *Focus*: Raising insect swarms to generate toxins.
    - *Yields*: Venom, Plague Rot.
    - *Trains*: Brutality, Guile.
14. **Astral Alignment** (astral)
    - *Focus*: Aligning cosmic space nodes.
    - *Yields*: Nebula Shards, Astral Stardust.
    - *Trains*: Sorcery, Guile.
15. **Tormenting Sins** (sins)
    - *Focus*: Extracting crystallizations of human sins.
    - *Yields*: Pride Essence, Desire, Wrath Shards.
    - *Trains*: Willpower, Infernal Power.

---

## Game Progression Milestones
The game features 5 consecutive story milestones. The player can see their active milestone objectives at the top of the interface. When a milestone is reached, a modal popup halts the game to display atmospheric lore, and unlocks the next milestone.

### Game Start: The Abyssal Prologue
When loading the game for the first time (or starting a new run), the gameplay is paused and a prologue modal overlay appears detailing the lore introduction and the first milestone's goals:
* **Prologue Lore Text**:
  > *"For eons, you slumbered in the lowest pit of the Abyss, a formless consciousness bound by ancient seals. But today, the celestial barriers have cracked. You awake to find a realm of raw brimstone and volcanic winds. The mortal realm above is rich with souls and ripe for conquest, but you are weak. You must gather your malice, command your servants, and ascend. Your first task is to project your evil intent onto the mortal mind and conjure a vessel to do your bidding..."*
* **Prologue Objectives Summary**:
  - Direct your thoughts to **Whisper Cruelty** to amass **1,000 Evil Intent**.
  - Summon **1 Imp** to begin automating the extraction of sulfur.

---

### Milestone 1: Awakening of the Archon
* **Objectives**: Accumulate **1,000 Evil Intent** AND summon **1 Imp**.
* **Focus**: Introduces ethereal energy harvesting and basic companion summoning.
* **Lore Text**:
  > *"Out of the shifting ashes of the Abyssal Pit, your consciousness coalesces. A spark of pure Malice strikes the brimstone. An Imp, mewling and smelling of sulfur, crawls out of the portal and bows. Your dominion has begun."*

### Milestone 2: Smelting the Gatekeeper
* **Objectives**: Craft **1 Brimstone Brand** AND reach **Level 10 in Brutality**.
* **Focus**: Introduces physical mining (Sulfur), smelting metal, crafting equipment at the Forge, and leveling core characteristics.
* **Lore Text**:
  > *"The heat of the Hellfire Forge is blinding, but your resolve is harder than the iron. With a final strike, the Brimstone Brand is quenched in blood. As you lift the glowing tool, the minor demons cow in terror. Your Brutality is recognized."*

### Milestone 3: Breaching the Veil
* **Objectives**: Craft/Brew **5 Unholy Elixirs** AND reach **Level 15 in Sorcery**.
* **Focus**: Introduces advanced harvesting (Nightmares, Blood Rites), alchemy (Elixir brewing), and high-level magical stats.
* **Lore Text**:
  > *"You inhale the dark vapor of the Unholy Elixirs. In your mind, the barriers between the Abyss and the mortal world begin to fray. You hear the sweet, terrified prayers of humanity. The Veil is brittle. It is time to hunt."*

### Milestone 4: The Mortal Raid
* **Objectives**: Successfully complete **10 Border Hamlet Raids** AND equip **1 Hellhound** companion.
* **Focus**: Introduces risk/failure mechanics (Abyssal Conquest), minion equipment slots, and Willpower (minion capacity management).
* **Lore Text**:
  > *"The screams of the border guards ring out as your Hellhounds tear through the wooden palisade. Mortal flesh and gold are loaded into your vaults. The high heavens may watch, but they are too slow to stop you. Your name is whispered in fear."*

### Milestone 5: Subjugation of the Realm (The Grand Ascent)
* **Objectives**: Subjugate **1 Mortal City** AND accumulate **100 Souls** AND reach **Level 30 in Corruption** AND reach **Level 30 in Willpower**.
* **Focus**: The ultimate challenge. Requires managing high-risk cities, sacrificing minions (Hellhounds and Gargoyles), farming souls from Cathedrals, and training advanced spiritual stats.
* **Lore Text**:
  > *"A thunderous crack echoes across the sky as the central cathedral of the mortal city collapses. Ethereal chains of pure Corruption drag the entire metropolis into the yawning void. Hundreds of souls scream in unison as they are bound to your throne. You are no longer a mere demon—you are the Archon of the Ascended Abyss!"*

---


## The Help System (The Abyssal Codex)
To make every element of the game transparent and understandable, a contextual help system is integrated:
1. **Interactive Help Modals (The "?" Trigger)**:
   - Next to every major element (each of the 10 characteristics, 21 activities, and 16+ resources/items), there is a glowing crimson `?` icon.
   - Clicking this icon opens the **Abyssal Codex Overlay** on the right side of the screen.
2. **Abyssal Codex Content Structure**:
   - **Name & Flavor Description**: High-quality atmospheric lore.
   - **Functional Details**:
     - *For Resources*: Lists what activities produce it, and what crafting, summoning, or raids consume it.
     - *For Characteristics*: Shows the current level, current bonus percentage, the exact math formula, and a list of activities that train it.
     - *For Activities*: Base duration, unlock requirements, exact drop rate percentage for secondary items, and detailed failure conditions (if conquest).
     - *For Items/Minions*: Equipped stats, craft requirements, and passive modifier details.
3. **Hover Tooltips**:
   - Quick hovers on resource counts in the inventory or requirements on activity cards show light-weight tooltips listing the base item name and its basic source.

---

## Localization Support (En / Ua)
To support multi-language play, the game is localizable:
1. **Dynamic Language Selector**:
   - A language toggle button `🌐 En` or `🌐 Ua` in the top bar controls section allows swapping language instantly on any view.
2. **Translation Architecture**:
   - The databases (`RESOURCES`, `CHARACTERISTICS`, `ACTIVITIES`, `MILESTONES`) store their text attributes (names, descriptions, lore, codex info) as translation objects containing both `{ en, ua }` keys.
   - A global translation utility `t(obj)` dynamically reads active state `state.lang` ("en" or "ua") and resolves strings.
   - Static elements (e.g. sidebar navigation headers, labels, inventory slots headers, save messages) are mapped to a `LOCALIZATION` dictionary in `app.js` and updated via a `translateUI()` trigger.
3. **Persisted Preference**:
   - The active language choice is saved in local storage and reloaded on start.

---

## Upgrades Store & Item Selling Marketplace
1. **Vault Item Selling**:
   - Each resource in the Vault (inventory tab) displays its unit sell price.
   - Players can sell any quantity of resource using **Sell 1**, **Sell 10**, or **Sell All** buttons.
   - Sold items are converted into **Gold Coins** at the designated rate.
2. **Abyssal Upgrade Store**:
   - Upgrades can be purchased from the store tab using gold and resources.
   - Premium upgrades grant permanent multipliers to action speed, yield modifiers, and experience gain across all stats.

---

## Technical Stack & Layout Intent
* **Stack**: Core HTML5, Vanilla CSS3 (with Glassmorphism and pulsing fire glow elements), Vanilla JS (state machine for looping action bar, saving/loading, and character calculations).
* **Layout sections**:
  - `Left Sidebar`: Lists skills with their level/progress.
  - `Characteristics Grid`: Displays the 10 core attributes and their current bonuses.
  - `Central Workspace`: Detailed action panel for the selected skill category, containing action cards with progress bars and activation buttons.
  - `Inventory & Equipment`: Grid showing current quantities of all resources and active equipment slots.
  - `Abyssal Codex Panel`: A toggleable right-hand side panel that slides out, showing help content for whatever item/activity/stat "?" button was clicked.



