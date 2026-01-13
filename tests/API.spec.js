const { test, expect } = require("@playwright/test")
var userid;


// GET Method

test('Get Data [GET]', async ({ request }) => {

    const response = await request.get("https://restful-api.dev/");
    console.log(await response.json());
    expect(response.status()).toBe(200);


})


// POST Method

test('Create Data [POST]', async ({ request }) => {

    const response = await request.post("https://api.restful-api.dev/objects",
        {
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }, headers: {
                "Accept": "application/json"
            }
        })

    const res = await response.json();
    console.log(res);

    expect(response.status()).toBe(200);
    userid = res.id;
})



// PUT Method

test('Update Data [PUT]', async ({ request }) => {

    const response = await request.put("https://api.restful-api.dev/objects/"+'ff8081819782e69e019b9093ebfb51ef',
        {
            data: {
                "name": "Samsung 16",
                "data": {
                    "year": 2026,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }, headers: {
                "Accept": "application/json"
            }
        })

    const res = await response.json();
    console.log(res);

    expect(response.status()).toBe(200);
    
})



// DELETE Method

test.only('Delete Data [DELETE]', async ({ request }) => {

    const response = await request.delete("https://api.restful-api.dev/objects/"+'ff8081819782e69e019b9093ebfb51ef')
    expect(response.status()).toBe(200);

})