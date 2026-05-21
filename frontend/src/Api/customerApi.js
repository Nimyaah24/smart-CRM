

// backend url
const baseURL =
    "http://localhost:5000/api/customer"


// GET CUSTOMERS

export const getCustomers = async () => {
    const res = await fetch(`${baseURL}/all`, { credentials: "include" }
    )
    return res.json()
}


// ADD CUSTOMER

export const addCustomer = async (data) => {

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
    return res.json()

}


// DELETE CUSTOMER

export const deleteCustomer = async (id) => {

    const res = await fetch(`${baseURL}/delete/${id}`,
        {
            method: "DELETE",
            credentials: "include"
        }

    )

    return res.json()

}


// UPDATE CUSTOMER

export const updateCustomer = async (id, data) => {

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

    return res.json()

}