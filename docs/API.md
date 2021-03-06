### GET achievements

Request: 

`/achievements`

Possible filters:

`date`, `start_date`, `end_date`, `name`

Example requests: 

`/achievement/?date=20210306`
`/achievement/?start_date=20200306&end_date=20210306`
`/achievement/?name=Ada+Lovelace`

Example response:
```json
 "achievements" : [
     {
         "id": "unique id of achievement in our database",
         "achievement": "short sentence describing achievement",
         "name": "name of person/achiever",
         "year": "year of achievement as integer",
         "month": "month of achievement as integer",
         "day": "day of achievement as int",
         "category": "Science, Technology, Engineering, or Math",
         "description": "some paragraphs describing achievement",
         "image_url": "url link to person's image",
         "links": [
             "urllink1", "urllink2",
         ],
     },
 ]
```
