# UI lab results

Tool parts that I chose: Robot Framework (Part 3) and Cypress (Part 4)

## Part 0

- Step 0.1, Chrome version: 157.0.8103.79
- Step 0.3, ChromeDriver version: 157.0.8103.79
- Step 0.4, locator of Pizza, Please!: CSS `button[name="pizza-please"]`
- Step 0.4, locator of Excluded tools: XPath `//label[normalize-space()='Excluded tools']/following-sibling::select`
- Step 0.4, locator of Must be vegetarian: CSS `input#default-checkbox`
- Step 0.4, locator of Custom Pizza Name: CSS `input#pizza-name`
- Step 0.5, pizza name, tool and calories of the run by hand: `Lab Pizza 20261121-143000`; tool: `Scissors`; calories per slice: `350`.

| Step | Actual result | Pass or fail |
|------|---------------|--------------|
| 1    | Home page displayed "Looking to break out of your pizza routine?" | Pass |
| 2    | Advanced fields appeared and were available to fill in. | Pass |
| 3    | Entered 600, selected Knife, ticked vegetarian, and entered the pizza name. | Pass |
| 4    | Recommendation showed the pizza name, Scissors and 350 calories per slice. | Pass |
| 5    | Clicking Love it! while logged out displayed a message asking the user to log in first. | Pass |
| 6    | Admin page displayed "Latest pizza recommendations". | Pass |
| 7    | Pizza appeared in the list with `Scissors`, matching the recommendation. | Pass |

## Part 3: Robot Framework

- robot --version: Robot Framework 7.5.1 (Python 3.11.5 on win32)
- Step 3.2, failure message for the wrong title: `Title should have been 'Web Form' but was 'Web form'.`
- Step 3.8, run 1, result, elapsed time and pizza name: PASS (1 test); suite elapsed time 9.976 seconds; `Lab Pizza 20261122-005705`.
- Step 3.8, run 2, result, elapsed time and pizza name: PASS (1 test); suite elapsed time 9.717 seconds; `Lab Pizza 20261122-005813`.

## Part 4: Cypress

- node --version, npm --version and npx cypress version: Node.js v24.13.0; npm 11.6.2; Cypress package and binary 16.2.1. Cypress verification passed.
- Step 4.3, failure message for the wrong title: `Timed out retrying after 10000ms`; actual title `'Web form'`, expected `'Web Form'`.
- Step 4.6, tool and calories in the answer of POST /api/pizza: `Pizza cutter` and `650` calories, observed in Chrome DevTools for the manual request (default maximum: 1000).
- Step 4.7, the line of the admin list that shows your pizza: `Lab Pizza 20261122-213332 (tool=Scissors, ingredients_number=5)`.
- Step 4.8, run 1, result, duration and pizza name: PASS (2 specs); pizza spec 9 seconds, web form spec 21 seconds, total 31 seconds; `Lab Pizza 20261122-213740`.
- Step 4.8, run 2, result, duration and pizza name: PASS (2 specs); pizza spec 10 seconds, web form spec 14 seconds, total 24 seconds; `Lab Pizza 20261122-214043`.
- Step 4.9 (optional), browser and result:

## Part B

1.
2.
3.
4.
5.
6.
7.
