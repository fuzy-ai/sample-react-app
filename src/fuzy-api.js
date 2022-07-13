import {v4 as uuidv4} from 'uuid';

export const sendAnalyticsEvent = async (userId, eventType) => {
    await fetch(`https://api.fuzy.ai/v3/event`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.REACT_APP_FUZY_AI_API_TOKEN,
        },
        body: JSON.stringify({
            eventType,
            timestamp: (new Date()).toISOString(),
            eventId: uuidv4(),
            user: { userId },
        }),
    });

    console.log("sent event:" + JSON.stringify(eventType) + " with userId: " + userId);
}