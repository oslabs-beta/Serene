INSTRUCTIONS FOR KOMODO DEVS

IAM
1. Configure master user for all future users
   - komodoUser1
     - Set to KomodoPolicy (created on step 1)
   - Create Access Key/Secret Key for komodoUser1 (stored in .env and inputted
     in credentials object in stsController)

2. Create a new policy (Customer Managed)
   - KomodoPolicy
     - STS: AssumeRole

S3 
3. Create S3 Bucket 
  - Attach policy template (permissions for each user will be stored under Policies) 
    - this will include actions that are used in controllers 
- ARN for komodoUser1 (master user) gets stored within Principal object

4. URL for client to create stack
   - policy template URL need to be included in URL
