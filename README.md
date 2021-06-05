# Project-2-Reboot-Academy

# Check-in Back-End
This proyect tries to solve the problem of the increassing personal identification required by the Law, Official Registers, Covid Prevention, Terrorism prevetion and even nominative booking resells.
We have designed a BackEnd API to automate and add this data before check-in, send the info requiered to Official Registers and obey the law. 

# Install
To use this repository you have to:

- Fork it.
- npm i
- npm run dev
- and enjoy the app :)

## Model


<a href="https://ibb.co/jWRX6BM"><img src="https://i.ibb.co/NmSBVQj/Reboot-Proyect-2-Model.png" alt="Reboot-Proyect-2-Model" border="0"></a>

### User Collection
  
| Field                 | Type     | Required | Validation | Default | Description              |
|-----------------------|----------|----------|------------|---------|--------------------------|
| userId                | ObjectId |    yes   |      -     |    -    |          User Id         |
| userName              |  string  |    yes   |      -     |    -    |         User Name        |
| userSurname           |  string  |    yes   |      -     |    -    |       User Surname       |
| userPwd               |  String  |    yes   |      -     |    -    |       User Password      |
| userDNI               |  String  |    yes   |      -     |    -    |         User DNI         |
| userDNIExpirationDate |   date   |    yes   |      -     |    -    | User DNI Expiration date |
| userEmail             |  string  |    yes   |      -     |    -    |        User Email        |
| phoneNumber           |  number  |    yes   |      -     |    -    |     User Phone Number    |
| COVIDPassport         |  Boolean |    yes   |      -     |    -    |    User Covid Passport   |
| nationality           |  string  |    yes   |      -     |    -    |        Nationality       |
| dateOfBirth           |   date   |    yes   |      -     |    -    |       Date of Birth      |
| adress                |  string  |    yes   |      -     |    -    |        User Adress       |
| gender                |  string  |    yes   |      -     |    -    |        User Gender       |
| photo                 |  string  |    no    |      -     |   link  |        User Photo        |
| admin                 |  boolean |    yes   |      -     |  FALSE  |  User Admin (true/false) |

### Establishment Collection

| Field                               | Type            | Required | Validation | Default | Description        |
|-------------------------------------|-----------------|----------|------------|---------|--------------------|
| establishmentId                     | ObjectId        | yes      | -          | -       | Establishment Id   |
| estabishmentName                    | String          | yes      | -          | -       | Establishment Name |
| category (embebida de la categoría) | Array (Embebed) | yes      | -          | -       | Category           |
| fiscalId                            | ObjectId        | yes      | -          | -       | Fiscal Id          |
| location                            | String          | yes      | -          | -       | Location           |
| capacity                            | Number          | yes      | -          | -       | Capacity           |
| phoneNumber                         | Number          | yes      | -          | -       | Phone Number       |
| contacPerson                        | String          | yes      | -          | -       | Contact Person     |
| schedule                            | String          | yes      | -          | -       | Schedule           |
|                                     |                 |          |            |         |                    


### Booking Collection

| Field           | Type     | Required | Validation | Default | Description        |
|-----------------|----------|----------|------------|---------|--------------------|
| bokingId        | ObjectId | yes      | -          | -       | Booking Id         |
| establishmentId | ObjectId | yes      | -          | -       | Establishment      |
| date            | Date     | yes      | -          | -       | Booking Date       |
| email           | String   | yes      | -          | -       | Booking email      |
| userID          | ObjectId | yes      | -          | -       | User Id            |
| covid test      | String   | no       | -          | -       | Covid Test         |
| checkInComplete | Boolean  | no       | -          | -       | Check In Completed |
|                 |          |          |            |         |                    |

### Official Register Collection

| Field        | Type     | Required | Validation | Default | Description                     |
|--------------|----------|----------|------------|---------|---------------------------------|
| bookings     | ObjectId | yes      | -          | -       | Bookings                        |
| dataSent     | String   | yes      | -          | -       | Data Sent                       |
| peopleNumber | Number   | yes      | -          | -       | Number of people in the Booking |
| date         | Date     | yes      | -          | -       | date                            |
| policeOficce | String   | yes      | -          | -       | Police Office                   |
|              |          |          |            |         |                                 |

### Promotion Collection

| Field                 | Type     | Required | Validation | Default | Description             |
|-----------------------|----------|----------|------------|---------|-------------------------|
| establishmentId       | ObjectId | yes      | -          | -       | Establishment Id        |
| PromotionType         | String   | yes      | -          | -       | Promotion Type          |
| promotionDiscount     | String   | yes      | -          | -       | Promotion Discount      |
| promotionMaturityDate | Date     | yes      | -          | -       | Promotion Maturity Date |
|                       |          |          |            |         |                         |


### Category Collection

| Field        | Type   | Required | Validation | Default | Description | enum        |
|--------------|--------|----------|------------|---------|-------------|-------------|
| categoryType | string |   yes   | -          | -       | -           | hotel       |
|              |        |          |            |         |             | stadiums    |
|              |        |          |            |         |             | theaters    |
|              |        |          |            |         |             | parties     |
|              |        |          |            |         |             | cinema      |
|              |        |          |            |         |             | gyms        |
|              |        |          |            |         |             | restaurants |
|              |        |          |            |         |             |             |
| tags         | string | -        | -          | -       | -           | -           |
| description  | string | -        | -          | -       | -           | -           |
|              |        |          |            |         |             |             |

## Routes

All routes starts with /api

### User

|METHOD|ENDPOINT|TOKEN|ADMIN|DESCRIPTION|POST PARAMS|RETURNS|
|------|--------|-----|-----|-----------|-----------|-------|
|GET|/user/me|Yes|No|Search my user|-|User info|
|PUT|/user/me|Yes|No|Update my user|-|User updated info|
|GET|/user/:userId|Yes|Yes|Search one specific user|-|User info|
|GET|/user|Yes|Yes|Search all user|-|All users|
|DEL|/user/:userId|Yes|Yes|Delete one specific user|-|"User deleted successfully"|


### Establishment

|METHOD|ENDPOINT|TOKEN|ADMIN|DESCRIPTION|POST PARAMS|RETURNS|
|------|--------|-----|-----|-----------|-----------|-------|
|GET|/establishment/:establishmentId|Yes|No|Search one specific establishment|-|Establishment info|
|GET|/establishment|Yes|No|Search all establishment|-|All establishment|
|GET|/establishment/filterL|Yes|No|Filter establishment by location, type and tags|-|Establishment that fit with the query|
|POST|/establishment|Yes|Yes|Create an establishment|establishmentName, category, fiscalId, location, capacity, phoneNumber, contactPerson, schedule|Created establishment|
|DEL|/establishment/:establishmentId|Yes|Yes|Delete one specific establishment|-|"Establishment deleted successfully"|
|PUT|/establishment/:establishmentId|Yes|Yes|Update one specific establishment|-|Establishment updated|


### Booking

|METHOD|ENDPOINT|TOKEN|ADMIN|DESCRIPTION|POST PARAMS|RETURNS|
|------|--------|-----|-----|-----------|-----------|-------|
|GET|/booking/me/:bookingId|Yes|No|Search one specific booking|-|Booking info|
|GET|/booking/me|Yes|No|Search all user bookings|-|All user bookings|
|GET|/booking/filterIC|Yes|No|Filter booking by date and checkInComplete|-|Bookings that fit with the query|
|GET|/booking/filterIC|Yes|No|Filter booking by date and checkInComplete|-|Bookings that fit with the query|
|GET|/booking/filter|Yes|No|Filter booking by date|-|Bookings that fit with the query|
|POST|/booking|Yes|Yes|Create a booking|establishmentId, date, email, userId, covidTest, checkInComplete|Created booking|
|DEL|/booking/:bookingId|Yes|Yes|Delete one specific booking|-|"Booking deleted successfully"|
|GET|/booking/:bookingId|Yes|Yes|Search one specific establishment|-|Bookings info|
|GET|/booking|Yes|Yes|Search all booking|-|All booking|
|PUT|/booking/:bookingId|Yes|Yes|Update one specific booking|-|Booking updated|


### Official Register

|METHOD|ENDPOINT|TOKEN|ADMIN|DESCRIPTION|POST PARAMS|RETURNS|
|------|--------|-----|-----|-----------|-----------|-------|
|GET|/oficialRegister/:oficialRegisterId|Yes|Yes|Search one specific oficial register|-|Oficial registers info|
|GET|/oficialRegister|Yes|Yes|Search all oficial registers|-|All oficial registers|
|PUT|/oficialRegister/:oficialRegisterId|Yes|Yes|Update one specific oficial register|-|Oficial register updated|
|DEL|/oficialRegister/:oficialRegisterId|Yes|Yes|Delete one specific oficial register|-|"Oficial register deleted successfully"|
|POST|/oficialRegister|Yes|Yes|Create a booking|bookingId, dataSent, peopleNumber, policeOffice|Created oficial register|


### Promotion

|METHOD|ENDPOINT|TOKEN|ADMIN|DESCRIPTION|POST PARAMS|RETURNS|
|------|--------|-----|-----|-----------|-----------|-------|
|GET|/promotion/me/promotionId|Yes|No|Search one specific promotion|-|Promotion info|
|GET|/promotion/me|Yes|No|Search all user promotion|-|All user promotion|
|GET|/promotion/:promotionId|Yes|Yes|Search one specific promotion|-|Promotions info|
|GET|/promotion|Yes|Yes|Search all promotion|-|All promotions|
|PUT|/promotion/:promotionId/user/:userId|Yes|Yes|Add one promotion to one user|-|User with promotion added|
|DEL|/promotion/:promotionId|Yes|Yes|Delete one specific promotion|-|"Promotion deleted successfully"|
|POST|/promotion|Yes|Yes|Create a promotion|establishmentId, promotionType, promotionDiscount, promotionMaturityDate, description|Created promotion|

