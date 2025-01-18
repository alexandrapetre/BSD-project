const API_BASE_URL = "http://localhost:8080";

export async function getUser(): Promise<any> {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${API_BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }

    return response.json();
}

export async function addNewSpending(
    userId: number,
    category: string,
    amount: number,
    date: string
): Promise<any> {
    const token = localStorage.getItem("authToken");

    if (!token) {
        throw new Error("Authentication token is missing.");
    }

    const response = await fetch(`${API_BASE_URL}/spendings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            user: { id: userId },
            category,
            amount,
            date,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to add new spending: ${response.statusText}`);
    }

    return response.json();
}

export async function getSpendings(userId: number): Promise<any> {
    const token = localStorage.getItem("authToken");

    if (!token) {
        throw new Error("Authentication token is missing.");
    }

    const response = await fetch(`${API_BASE_URL}/spendings/user/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }

    return response.json();
}

export async function addNewSaving(
    userId: number,
    goalName: string,
    targetAmount: number
): Promise<any> {
    const token = localStorage.getItem("authToken");

    if (!token) {
        throw new Error("Authentication token is missing.");
    }

    const response = await fetch(`${API_BASE_URL}/savings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            user: { id: userId },
            goalName,
            targetAmount,
            savedAmount: 0,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to add new spending: ${response.statusText}`);
    }

    return response.json();
}

export async function contributeToSaving(
    savingsId: number,
    contribution: number,
): Promise<any> {
    const token = localStorage.getItem("authToken");

    if (!token) {
        throw new Error("Authentication token is missing.");
    }

    const response = await fetch(`${API_BASE_URL}/savings/contribute/${savingsId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            contribution,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to add new spending: ${response.statusText}`);
    }

    return response.json();
}

export async function getSavings(userId: number): Promise<any> {
    const token = localStorage.getItem("authToken");

    if (!token) {
        throw new Error("Authentication token is missing.");
    }

    const response = await fetch(`${API_BASE_URL}/savings/user/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }

    return response.json();
}