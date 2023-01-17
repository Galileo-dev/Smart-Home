# Requirements for the product:

## Frontend Website:

### Needs

- Needs to be able to communicate with the embedded system
- Retrieve data on page load from embedded system
- Send commands to the embedded system such as (turn off light or turn on light)
- Update UI when new data is received

### Wants

- Keep the system away from the cloud to reduce costs and also dependence on outside services.

## Backend embedded system :

### Needs

- Needs to be able to communicate with the website
- Send data to the frontend
- Carry out commands given such as (turn off light or turn on light)
- Respond to the frontend with new data when changed

### Wants

- record data such as power consumption or time light is on
- Using a database to record data that is shown to the frontend could reduce data response times as checking every gpio pin may be slow in big home wide automation
