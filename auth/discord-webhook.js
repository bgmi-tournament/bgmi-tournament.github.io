function sendToDiscordWebhook(data) {
    const webhookURL = 'https://discord.com/api/webhooks/1155837717805023292/YLPqu0ctRm-Kk4I7RPwG5cb9D4F4MbLFUUIX1cDssEhfyEAC_D-Mh2zEYWZ4nPnzenvj';

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: data }),
    })
    .then((response) => {
        if (response.ok) {
            console.log('MESSAGE SENT ADMIN.');
        } else {
            console.error('Failed.');
        }
    })
    .catch((error) => {
        console.error(error);
    });
}
