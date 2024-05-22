const channelID = '2555630';
const readAPIKey = 'B1XRRDRXCFNW2DL3'; // Optional if your channel is public

async function fetchData() {
    const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?results=1&api_key=${readAPIKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const channelData = data.channel;
        const feedsData0 = data.feeds[0];
        for (let index = 1; index <= 4; index++) {
            if (feedsData0[`field${index}`] !== null) {
                document.getElementById(channelData[`field${index}`].replaceAll(" ","_")).innerText = feedsData0[`field${index}`];
            }
            
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

setInterval(fetchData, 2000);
fetchData();
