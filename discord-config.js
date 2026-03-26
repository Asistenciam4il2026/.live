// Configuración centralizada para Discord
export const DISCORD_CONFIG = {
    webhookURL:"https://discord.com/api/webhooks/1482497872288288968/Iyp1UlIiqT8xOKgWVjXY0lwiNqJmg1-IT5NzpFeL3fMZXsztKHpxjXN70kXvBRsa9dxa"};

// Función helper para enviar mensajes a Discord
export async function sendToDiscord(payload) {
    try {
        const response = await fetch(DISCORD_CONFIG.webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        return response;
    } catch (error) {
        console.error("Error enviando a Discord:", error);
        throw error;
    }
}