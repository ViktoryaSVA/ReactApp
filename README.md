## React-App

## Running the app

```bash
You have to use this REST API: https://github.com/ViktoryaSVA/API_React_App.git
```

# Examples of requests REST API
# Create report
### POST

### http://localhost:8000/api/create/report
``` bash 
{
    "userAgent": "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",
    "category": "category 58",
    "countryid": "it",
    "creationdate": 1651281626947,
    "id": "408f10d8-62a3-40bc-a65d-51c511bd78fa",
    "clientid": "2f4cbf92-ca71-4f2f-ae0b-8d9a4f8b8d13",
    "subcategory": "subcategory 01"
}
```
# Get all reports
### GET
### http://localhost:8000/api/reports

# Login
### POST
### http://localhost:8000/apo/clients/login
``` bash 
{
    "email": "user343@user.com",
    "password": "33432423"
}
```

# Registration
### POST
### http://localhost:8000/api/clients/create
``` bash 
{
    "email": "password@gmail",
    "username": "vika",
    "password": "password"
}
```
