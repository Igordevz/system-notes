## Informações do usuário ["SECRET"]
[x] - Id ['ID']

[ ] - Name ['string']
[ ] - email ['string']
[ ] - Token ['string'] // login frontend
[ ] - useActive ['Bolean'] # Ignore
[ ] - password ['CRYPT']
[ ] - notes ['Array']:

### Example

```json
{
  "id": "123123-23123123-123123sd",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "useActive": true,
  "password": "$2b$10$abc123...",
  "notes": [
    {
      "id": "1",
      "content": "This is a note",
      "userId": "user-id-123"
    }
  ]
}
```

## informação da nota
[x] - title ['']
[x] - content ['messageUser']
[x] - userId ['ID']

### Example:

```json
{
  "id": "1110kd-wdmwdin11-21233",
  "content": "This is a note",
  "userId": "user-id-123"
}
```
# system-notes
