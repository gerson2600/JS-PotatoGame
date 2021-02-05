# To-do
* Functions to interact with factories
    - [x] Upgrade 
        - [x] Upgrade Check (if has money for it and if it doesnt exceed max upgrade level) 
    - [x] Productivity
        - [x] UpdateProductivity
    - [x] Work
        - [x] Run progress bar and add
        - [x] AutoWork Clause
        - [x] Work dependant on products of last factory
    - [x] Add other factories/make run
    - [x] Add Factory Unlock Mechanism/Logic
        - [x] Unlock Cost 
    - [x] Create real values for factory objects
        - [ ] Adjust values umtil desired gameplay is achieved
    - [ ] Add easteregg? o.O

# Important
- [x] Product RequirementCost increment with productivity
- [ ] Add The golden potato

### End Changes (these can be the last changes and "should" be quick and easy to do)
- [x] Start in Home Tab
- [ ] Make up a name for this ~~Scheiße~~ Wonderful Game

#
### Init Value Table
| Value // Factory          | Mine          | Forge     | Components    | Computers     |
|------------------------   |-----------    |-------    |------------   |------------   |
| Product                   | Rocks         | Metal     | Parts         | Computers     |
| Unlocked                  | FALSE         | FALSE     | FALSE         | FALSE         |
| UnlockCost                | 10            | 2000      | 50000         | 250000        |
| ProductQuant              | 100           | 0         | 0             | 0             |
| ProductValue              | 1             | 15        | 400           | 25000         |
| RequirementFactory        | FALSE         | Mine      | Forge         | Components    |
| ReqBaseCost               | 0             | 10        | 20            | 50            |
| ReqCost                   | 0             | 10        | 20            | 50            |
| WorkTime (ms)             | 1000          | 2000      | 3000          | 5000          |
| Workers                   | 0             | 0         | 0             | 0             |
| WorkerUnitProductivity    | 15            | 5         | 3             | 1             |
| MaxWorkers                | 100           | 100       | 100           | 100           |
| Productivity              | 1             | 1         | 1             | 1             |
| UpgradeCost(1)            | 20            | 100       | 1500          | 30000         |
| UpgradeCost(5)            | 100           | 500       | 7500          | 150000        |
| AutoWork                  | FALSE         | FALSE     | FALSE         | FALSE         |
| AutoWorkCost              | 1000          | 5000      | 75000         | 1500000       |

### Bug List/Changes to-do
- [x] Pressing work several times and req products wasting away with only 1 work process being done
- [x] Money Stackoverflow because JS has a tiny number size (probably solved)