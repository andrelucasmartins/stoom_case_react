
# Stoom Case React

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Api mock

```
cd api; json-server -p 3001 db.json
```

Runs the app in the mock api pizza<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

#### db.json

```json
{
  "mass": [
    {
      "id": 1,
      "name": "Pan"
    },
    {
      "id": 2,
      "name": "Normal" },
    { "id": 3, "name": "Cream Cracker" }
  ],
  "size": [
    { "id": 1, "type": 4 },
    { "id": 2, "type": 8 },
    { "id": 3, "type": 12 },
    { "id": 4, "type": 16 }
  ],
  "filling": [
    { "id": 1, "name": "Calabresa" },
    { "id": 2, "name": "Lombo" },
    { "id": 3, "name": "Atum" },
    { "id": 4, "name": "Tomate" },
    { "id": 5, "name": "Parmesão" },
    { "id": 6, "name": "Gorganzola" },
    { "id": 7, "name": "Queijo Cheddar" },
    { "id": 8, "name": "Azeitonas" },
    { "id": 9, "name": "Cebola" }
  ],
  "pizzas": [
    {"id": 1, "name": "Calabre"},
    {"id": 2, "name": "Atum"},  
    {"id": 3, "name": "Alite"},    
    {"id": 4, "name": "4 Queijos"},    
    {"id": 5, "name": "2 Queijos"},     
    {"id": 6, "name": "Parmesão"},     
    {"id": 7, "name": "Escalora"}
  ],
  "points": [10]
}
```


