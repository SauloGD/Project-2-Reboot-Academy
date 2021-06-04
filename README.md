# Project-2-Reboot-Academy

# Check-in App

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

