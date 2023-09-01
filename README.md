![serene](https://github.com/oslabs-beta/Serene/assets/112911565/95f391d2-3d11-419e-9b61-385d743fa57e)

# SERENE

### Built With
![image](https://github.com/kenniford/kenniford/assets/112911565/f5bf3a2c-f5a4-4360-84af-d1c3f5b59c8c)
![image](https://github.com/kenniford/kenniford/assets/112911565/a3ab678f-8ecc-460a-800a-933654c18518)
![image](https://github.com/kenniford/kenniford/assets/112911565/d06bebbb-fc67-446c-9679-4d8d2c90c225)
![image](https://github.com/kenniford/kenniford/assets/112911565/e66a8697-f64c-41a2-b9eb-8f6a4c10d2eb)
![image](https://github.com/kenniford/kenniford/assets/112911565/dfd73ccd-ad7f-4e64-8c84-ab7dbfe5186b)
![image](https://github.com/kenniford/kenniford/assets/112911565/872b446f-d32a-4d8d-90f7-4b9baa3612e5)
![image](https://github.com/kenniford/kenniford/assets/112911565/bb566f14-f92e-4fec-b2b8-b322a42c40a8)
![image](https://github.com/kenniford/kenniford/assets/112911565/dc1a4122-08d2-49f0-ab52-9d2bf068cf01)
![image](https://github.com/kenniford/kenniford/assets/112911565/c9f534ca-9f6c-4021-94a2-74bc8eaf065b)
![image](https://github.com/kenniford/kenniford/assets/112911565/1a37a7f1-1ce7-41f0-9e54-26b157d70661)
![image](https://github.com/kenniford/kenniford/assets/112911565/2cf1a2f1-ac00-492c-8ccb-733e9e6e2ed6)
![image](https://github.com/kenniford/kenniford/assets/112911565/fff446e4-8b75-4c8f-98a1-24b1a3ae33c4)
![image](https://github.com/kenniford/kenniford/assets/112911565/e6eec745-adb1-4d24-a19e-8766b0644d6b)
![image](https://github.com/kenniford/kenniford/assets/112911565/9e360dcd-27c0-4683-ab76-d67d882d3abc)
![image](https://img.shields.io/badge/Tailwind-%231DA1F2.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bcrypt](https://img.shields.io/badge/BCRYPT-grey?style=for-the-badge&logo=letsencrypt)
![chartJS](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![MUI](https://github-production-user-asset-6210df.s3.amazonaws.com/112911565/260816206-93a8a824-92b6-44c0-b2b7-ef47e6a9ba98.png)

⭐️ Star us on GitHub! ⭐️

Visit our website at **COMING SOON**.

Serene is building an exciting developer tool to help monitor AWS lambda resources and prevent cold start latency delays. 

If you are looking to contribute to Serene, please visit <a target="_blank" href="https://github.com/oslabs-beta/Serene/blob/main/READMEDEV.md">READMEDEV.md</a> to learn how to get started! Feel free to check out our 'Potential Iteration Ideas' near the bottom of the page for some ideas on what can still be done.

## How to Use Serene

### On the Website 
1. Navigate to <a target="_blank" href="http://serene-prod.eba-gk55uvf7.us-east-1.elasticbeanstalk.com/">serenelambda.com</a> and select 'Sign Up'
2. Create a username and password and the select 'Connect Your AWS Account'
3. This will open a window in AWS prompting you to create a pre-made CloudFormation stack titled 'SereneStack'
4. Click to create the stack and wait a moment for AWS to build it
5. Once created, select the 'Resources' tab on your SereneStack and you should see a link to something named SereneStack-SereneRole-[uniqueNumsAndCharacters]. This is the IAM Role the Stack has created for you
6. Click into that Role, copy the ARN for it, and paste that into the Serene signup page
7. All that's left is selecting the corresponding region to your Lambda functions and creating your account
8. You will be directed to the Serene homepage and you're ready to use Serene!
9. Enjoy ;)

![Animated GIF](https://github.com/oslabs-beta/Serene/blob/main/client/src/assets/signupdemo.gif)


### On Your Local Machine
1. Fork and clone this repository on GitHub
2. From there, you will need to run a few commands to install the proper dependencies
3. Open a terminal and type <code>cd client</code>, then <code>npm install</code>, and finally <code>npm run build</code>
4. This will create a <code>dist</code> folder in the <code>client</code> directory
5. Move the <code>dist</code> folder to the <code>server</code> folder and type <code>cd ..</code>, then <code>cd server</code> to enter the server directory
6. Next, you will need to run <code>npm install</code>
7. Finally, you can run <code>npm start</code> to start the server (which is serving the bundled frontend)
8. In your browser, navigate to <link>http://localhost:3000</link> and you will be able to use Serene just like you would on the website!

## Features

### Metric Visualization
It is extremly important for AWS Lambda developers to monitor the health of their Lambda functions. However, AWS Cloudwatch can be tedious and cumbersome for developers to navigate. Serene allows developers to view their AWS Lambda metrics with ease. Simply select the function you want to view from the sidebar and navigate to the 'Metrics' tab. The user is then able to sort the data based on start date, period, and data in ascending or descending order. 

![Animated GIF](https://github.com/oslabs-beta/Serene/blob/main/client/src/assets/metricsdemo.gif)

### CloudWatch Logs
CloudWatch Logs is another tool for analyzing Lambda functions (though developers can view logs on many other AWS entities as well). Serene removes any over complication in this process as well. Simply select a Lambda function to view and navigate to the 'View Logs' tab. Serene will then display log streams associated with that function. By clicking into one of the streams, a display of all the events in that stream will render. These events will provide insight into the Lambda function's performance and can assist in troubleshooting.

![Animated GIF](https://github.com/oslabs-beta/Serene/blob/main/client/src/assets/logsdemo.gif)

### Version History and Aliases
Often times, developers will edit the code on their Lambda functions, creating different versions. They will also assign aliases (which point at Lambda function versions) with the option of pointing it at multiple versions and weighing the traffic to them differently (ex. v1: 70%, v2: 30%). This entire process can be hard to follow at times, but not with Serene. Serene includes a display of all the versions of a given Lambda function as well as any aliases pointing to those versions, with the proper weight included. Finally, the user is able to click a link to download their alias' code and view their Lambda function without having to deal with the cumbersome AWS console.

![Animated GIF](https://github.com/oslabs-beta/Serene/blob/main/client/src/assets/versionsdemo.gif)

### Lambda Function Warming
The final problem Serene tackles is that of cold start latency. When they go unused for enough time, Lambda functions will go 'cold' and take longer to begin running again as desired. With Serene, a user is able to schedule invocations for their Lambda functions to help prevent this latency and optimize their performance.

![Animated GIF](https://github.com/oslabs-beta/Serene/blob/main/client/src/assets/warmingdemo.gif)


## Potential Iteration Ideas
1. Add functionality to kill warming functionality early if the user wants
2. Improved modularity in cloudWatchMetricsController.ts
3. Improved TypeScript on backend -- there are 3 'any' types left in the backend (in order of file/method/variable):

   a. versionHistoryController.ts:

   	- viewVersionList: versions

   b. cloudWatchLogsController.ts:

   	- viewStreamInfo: eventList

   c. cloudWatchMetricsController.ts:

      - getMetrics: metricObj
4. Create a desktop app
5. Incorperate Oauth
6. Backend testing reads 91% but it says 4/5 testing suites fail -- fixing this would be great and would bump the testing coverage even higher
   
    a. Also fixing the testing so that it will work with TypeScript (we tested before converting JS to TS)
7. Persisting state on the frontend is sometimes buggy (potential solution could be converting frontend to Redux)
8. Price estimation calculator/graphics
9. Be able to display code for each version of the functions
    a. We were only able to grab a download link to the code form AWS that could open in notepad or some other text editor but we could not display the actual code from there
10. Compatability with mobile devices

## Meet the Team
#### Whether you have questions about contributing, using Serene, or just want to chat, feel free to connect with us on LinkedIn and GitHub!
<table align="center">
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/135382120?v=4" width="100"/>
      <br />
      <sub><b>Arianna Nguyen</b></sub>
      <br />
      <a href="https://www.linkedin.com/in/ariannanguyen/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" width="20"/></a>
      <a href="https://github.com/dahliarianna" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20"/></a>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/110702444?v=4" width="100"/>
      <br />
      <sub><b>Kyle Nguyen</b></sub>
      <br />
      <a href="https://www.linkedin.com/in/kylehng/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" width="20"/></a>
      <a href="https://github.com/khnguyen07" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20"/></a>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/112911565?v=4" width="100"/>
      <br />
      <sub><b>Kenny Kim</b></sub>
      <br />
      <a href="https://www.linkedin.com/in/kenniford/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" width="20"/></a>
      <a href="https://github.com/kenniford" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20"/></a>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/125922315?v=4" width="100"/>
      <br />
      <sub><b>Wade Chadwick</b></sub>
      <br />
      <a href="https://www.linkedin.com/in/wade-chadwick/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" width="20"/></a>
      <a href="https://github.com/WadeChadwick" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="20"/></a>
    </td>
  </tr>
</table>
