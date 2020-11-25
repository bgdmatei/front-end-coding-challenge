# Forestreet Front-end Coding Challenge #

When completing this coding challenge, please organise your code as if it were going into production, then send us a link to the hosted repository (e.g. Github, Bitbucket...).

### Functional Spec ###

Create a simple, single page app (SPA) that allows a user to view [U.K Carbon Intensity data](https://carbon-intensity.github.io/api-definitions/?shell#get-intensity-date-date-period) in a graph. The data will be requested from the National Grid Carbon
Intensity public API.

The user should be able to:

- Open the SPA in their browser.
- See a loading spinner when they land on the page. In the background you'll make a request to get data from the carbon intensity REST API.
- After the data has been loaded from the API, a graph with appear showing a range of carbon intensity data between two dates.

### UI/UX Design ###

The UI/UX is completely up to you. Be as creative as you want while considering the user's experience, but be prepared to explain your design decisions.
You may add additional features if you think the users will find it useful!

### Technical Spec ###

The architecture for this app will feature only the web front-end. Instructions on how to access the U.K Carbon Intensity REST API for obtaining data can be found below under the Back-end heading.

### Front-end ###
The front-end should be a single page app built using React. Take this opportunity to demonstrate your HTML and CSS knowledge.

There are a number of React charting libraries. Here are a few to get you started:

- Nivo
- Victory
- ESNet React Timeseries Charts
- Carbon Design System Data Visualization

### Back-end ###
The Carbon Intensity REST API is open to developers and accessible without registering for an account. You can read the API documentation here: [U.K Carbon Intensity data](https://carbon-intensity.github.io/api-definitions/?shell#get-intensity-date-date-period).

Retrieving a range of data can be done through the /intensity endpoint, by specifying two dates as URL path parameters. The documentation covers this in further detail: https://carbon-intensity.github.io/api-definitions/?shell#get-intensity-from-to

This will output a JSON response that looks like (below is a subset of the output):

```
{
    "data": [
        {
            "from": "2018-08-25T12:30Z",
            "to": "2018-08-25T13:00Z",
            "intensity": {
                "forecast": 142,
                "actual": 184,
                "index": "moderate"
            }
        },
        {
            "from": "2018-08-25T13:00Z",
            "to": "2018-08-25T13:30Z",
            "intensity": {
                "forecast": 141,
                "actual": 185,
                "index": "moderate"
            }
        }

```

### Hosting ###
When you're done, host it somewhere (e.g. on Amazon EC2, Heroku, Google AppEngine, etc.) and provide us with the link to your hosted application when you submit.

### How We Review ###
We value quality over feature-completeness. It is fine to leave things aside provided you explain your reasoning. You should consider this code ready for final review with your colleague, i.e. this would be the last step before deploying to production.
