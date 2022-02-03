# Who's In Town

### Mission:

- Allow the user to search for an artist (Using this [API](https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0))
    - Upon a good search result:
- Display artist meta-data: name, image
- Display a list of events that are related to the artist - Upon selecting an event:
- Display the following data: - Event metadata
- Event venue information
- Special offers related to event
- “Add to favorites” \ “Remove from favorites” button:
  Upon clicking this button - add \ remove this event to\from the favorites list. - Show favorites list section:
- Should show all the events that the user chose to add to the favorites. - This section is decoupled from the search
  results (the favorites list can contain events from multiple artists).
- The user can remove an event from the favorites list. Bonus: Not a must, but will give you extra points ;)
- Persist the favorites section, so that when the user refreshes he will see it again

## How to Use

In your terminal, run the following commands:

### Run dev mode

```bash
npm run dev
```

### Run prod mode

1. ```bash
   npm build
    ```
2. ```bash
   npm start
    ```

### Run Jest Tests

```bash
npm test
```
