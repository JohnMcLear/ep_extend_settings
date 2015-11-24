# Apply additional settings

Want to commit your settings.json but not include your database user/pass?

Create a ``credentials.json`` in your Etherpad root folderand include your database settings for example

```
{
  "dbType" : "mysql",
  "dbSettings" : {
    "user"    : "root",
    "host"    : "localhost",
    "password": "CHANGEMEH",
    "database": "store"
  }
}
```

## Settings
Specificy ``settings.extendedSettings`` to specify the path to the file you want to use
