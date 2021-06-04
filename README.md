# Project-2-Reboot-Academy

# Check-in App

## Routes

### User

All routes start with /api

|METHOD|ENDPOINT|TOKEN|ADMIN|DESCRIPTION|POST PARAMS|RETURNS|
|------|--------|-----|-----|-----------|-----------|-------|
|GET|/user/me|Yes|No|Search my user|-|User info|
|PUT|/user/me|Yes|No|Update my user|-|User updated info|
|GET|/user/:userId|Yes|Yes|Search one specific user|-|User info|
|GET|/user|Yes|Yes|Search all user|-|All users|
|DEL|/user/:userId|Yes|Yes|Delete one specific user|-|User deleted successfully|

