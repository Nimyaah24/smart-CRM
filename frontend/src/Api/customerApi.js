

// customer API base URL store cheyyunnu
const baseURL = "https://smart-crm-pcys.onrender.com/api/customer"

// ella customers fetch cheyyan GET API function create cheyyunnu
export const getCustomers = async () => {

    // backend-il ninn customer data fetch cheyyunnu
    const res = await fetch(`${baseURL}/all`, { credentials: "include" })

    // response JSON aayi return cheyyunnu
    return res.json()
}

// new customer add cheyyan POST API function create cheyyunnu
export const addCustomer = async (data) => {

    // customer data backend-il save cheyyan request ayakkunnu
    const res = await fetch(`${baseURL}/add`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data)
        }
    )

    // response JSON aayi return cheyyunnu
    return res.json()
}

// customer delete cheyyan DELETE API function create cheyyunnu
export const deleteCustomer = async (id) => {

    // selected customer delete cheyyan request ayakkunnu
    const res = await fetch(`${baseURL}/delete/${id}`,
        {
            method: "DELETE",
            credentials: "include"
        }
    )

    // response JSON aayi return cheyyunnu
    return res.json()
}

// customer update cheyyan PUT API function create cheyyunnu
export const updateCustomer = async (id, data) => {

    // updated customer data backend-il save cheyyan request ayakkunnu
    const res = await fetch(`${baseURL}/update/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data)
        }
    )

    // response JSON aayi return cheyyunnu
    return res.json()
}