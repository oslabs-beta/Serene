INSTRUCTIONS FOR FUTURE SERENE DEVS/ITERATORS

This Readme provides insutrctions on how to set up your AWS environment so that you can allow users to utilize Serene.

1. AWS Account Setup:
  a. Create an AWS account if you don't have one already.

2. IAM (Identity and Access Management) Setup:
  a. Create a New Policy:
    - Navigate to the IAM service in AWS and click on "Policies" in the sidebar.
    - Create a custom policy allowing certain actions:
      - Service: AWS Security Token Service (STS)
        - Actions allowed: Write/AssumeRole
        - Resources: All resources
        - Click next
    - Under Policy name, type 'SerenePolicy'
    - Click 'Create policy'

  b. Create a New User:
    - Navigate back to the IAM service in AWS and click on "Users" in the sidebar.
    - Create a new IAM user
      - Name your user 'SereneUserParent'
    - Attach SerenePolicy you created to SereneUserParent

  c. Generate Access Key:
    - Navigate back to the IAM service in AWS and click on "Users" in the sidebar.
    - Click into SereneUserParent
    - Generate an access key for the user by clicking 'Create access key' on the top right hand side of Summary section. Select 'Application running outside AWS'.Provide a tag value of SereneAccessKey. click on 'Create access key' to finalize. This key will be used for programmatic access.
      - **WARNING: Save the secret access key provided upon creation, as you will not be able to access this again**

  d. Storing Keys and User Information:
    - Store the access key and secret access key in a .env file for application use. 
    - The secret key and secret access key are being directly accessed by only the STSController

  e. Update SereneTemplate with User ARN:
    - Add the ARN of the new user to the CloudFormation template named "SereneTemplate."
      - This template can be found under SereneTemplate in the root directory of Serene
      - Change the value of AWS to newly created SereneUserParent ARN 
      - We won't be using this yet. We will need to upload this json onto our S3 bucket in the following steps.

3. S3 Bucket Setup:
  a. Navigate to S3 in your AWS console
    - Select 'Create bucket'
  b. Create an S3 bucket to store files.
    - Name bucket 'serenetemplate'
    - turn OFF block all public access
  c. Upload Template and Set Permissions:
    - Select newly created 'serenetemplate' under Amazon s3 buckets
    - Upload the "SereneTemplate" to the S3 bucket.
    - Navigate back to "Permissions" for the serenetemplate bucket
    - Under Bucket Policy, select 'Edit'
      - Copy and paste the below object. Input the sernepolicy Bucket ARN as the value for Resource
          {
            "Version": "2012-10-17",
              "Statement": [
                {
                  "Effect": "Allow",
                  "Principal": "*",
                  "Action": "s3:GetObject",
                  "Resource": "arn:aws:s3:::serenetemplate/*"
                }
              ]
          }

4. URL Generation for AWS CloudFormation:
  a. Generate a URL with parameters for quick stack creation using AWS CloudFormation.
  b. Nagivate to AWS CloudFormation
    - Select 'Create stack' 
    - Copy and paste s3 URL
      - This can be found in the serenetemplate bucket
        - Click into the SereneTemplate.json 
        - Copy the Object URL
    - Name the stack 'SereneStack'
    - Click 'Next' and then 'Submit'
    - While your stack is being created, fill our the below url to test out your stack once it is completed
  b. https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stacks/quickcreate?templateURL=${templateURL}&stackName=${stackName}
    - eg: https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateURL=https://serenetemplate.s3.amazonaws.com/SereneTemplate.json&stackName=SereneStack
  c. The above URL is in the sign up component and is prompted to the user during sign up. This will allow them to create a quick stack based on the SereneTemplate. 
  https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateURL=https://serene-admin-bucket.s3.amazonaws.com/SereneTemplate.json&stackName=SereneStack