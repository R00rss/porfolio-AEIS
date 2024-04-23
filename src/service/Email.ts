const URL = 'http://localhost:3000/send-email';


interface EmailData {
    name: string;
    email: string;
    message: string;
}

export async function sendEmail(data: EmailData, url: string = URL): Promise<boolean> {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) return false
        const json = await response.json();
        console.log({ json })
        // TODO MEJORAR MANEJO DE ERRORES
        return true
    } catch (err) {
        console.error(err);
        return false
    }

}