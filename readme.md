# Middle-Request-Handler
## API Relay Service – Your CORS-Free Gateway

A streamlined middleware service that acts as a secure bridge between your client and any external server. When browser-based requests are blocked due to CORS (Cross-Origin Resource Sharing) restrictions, this service steps in to relay your API calls—receiving requests from the client, forwarding them to the target server, and returning the response seamlessly.

By abstracting away CORS concerns, this service enables developers to communicate with any server without modifying backend policies or running into browser limitations. Simply route your requests through the service and let it handle the rest.

## How To Use

### 🟢 Making a GET Request
If you want to make a `GET` request to an API that requires specific headers and query parameters, but you’re blocked due to CORS policy, this service can help.

#### ✅ Example API Details:
- API URL:  
`https://my-api-url.com/api/list?page=2&limit=10`

- Headers:  
    ```json
    {
      "Authorization": "Bearer mytoken",
      "Cookie": "my-cookie"
    }
    ```


#### 🛠️ How to Use This Service
Make a request to the SERVICE_URL and include the following custom headers:

```js
const headers = {
  "req_url": "https://my-api-url.com/api/list",     // Base URL without query
  "req_params": "page=2&limit=10",                  // Query parameters
  "req_headers": JSON.stringify({                   // Headers as a JSON string
    "Authorization": "Bearer mytoken",
    "Cookie": "my-cookie"
  })
};

fetch(SERVICE_URL, {
  method: "GET",
  headers
})
.then(response => response.text())
.then(data => console.log(data))
.catch(err => console.error("Error:", err));
```

### 🟢 Making a POST Request
If you want to make a `POST` request to an API.

#### ✅ Example API Details:
- API URL:  
`https://my-api-url.com/api/update?key=abc&type=json`

- Headers:  
    ```json
    {
      "Authorization": "Bearer mytoken",
      "Cookie": "my-cookie"
    }
    ```

- Body:  
    ```json
    {
      "email": "johndoe@email.com",
      "password": "john123"
    }
    ```


#### 🛠️ How to Use This Service
Make a request to the SERVICE_URL and include the following custom headers:

```js
const headers = {
  "req_url": "https://my-api-url.com/api/update",     // Base URL without query
  "req_params": "key=abc&type=json",                  // Query parameters
  "req_headers": JSON.stringify({                   // Headers as a JSON string
    "Authorization": "Bearer mytoken",
    "Cookie": "my-cookie"
  })
};

const body = {
  "email": "johndoe@email.com",
  "password": "john123"
}


fetch(SERVICE_URL, {
  method: "GET",
  headers,
  body                                          // JSON body
})
.then(response => response.text())
.then(data => console.log(data))
.catch(err => console.error("Error:", err));
```


> 📝 Note:
>   - Make sure req_headers is a stringified JSON object
