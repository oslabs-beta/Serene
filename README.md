![serene](https://github.com/oslabs-beta/Serene/assets/112911565/95f391d2-3d11-419e-9b61-385d743fa57e)

# SERENE

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

⭐️ Star us on GitHub! ⭐️

Visit our website at **COMING SOON**.

Serene is building an exciting developer tool to help monitor AWS lambda resources and prevent cold start latency delays. 

## Features

### Metric Visualization
For AWS users and web developers, it is incredibly important to be able to monitor the health of their Lambda functions. Unfortunately, the current state of the AWS UI/UX makes it tedious for the user to access these metrics. With Serene, the user is able to view these metrics in neat displays with ease. Simply select the function you want to view from the sidebar and navigate to the 'Metrics' tab. The user is then able to toggle the sorting data based on start date, period, and data in ascending or descending order. Our goal was to make this experience much cleaner for the user without sacrificing any of the important data they may seek.

### CloudWatch Logs
CloudWatch log data is another tool for analyzing Lambda functions (though a user can view logs on many other AWS entities as well). Once again, Serene has taken out any requirement for over-navigation. By selecting a Lambda function to view and navigating to the 'View Logs' tab, Serene will display any log streams associated with that function. By clicking into one of the streams, a display of all the events in that stream will render. These events will provide insight into the Lambda function's performance and can assist in any troubleshooting the user may have to do.

### Version History and Aliases
Often times, developers will edit the code on their Lambda functions, creating different versions. They will also assign aliases (which point at Lambda function versions) with the option of pointing it at multiple versions and weighing the traffic to them differently (ex. v1: 70%, v2: 30%). This entire process can be hard to follow at times, but not with Serene. Serene includes a display of all the versions of a given Lambda function as well as any aliases pointing to those versions, with the proper weight included. Finally, the user is able to click a link to download their alias' code and view their Lambda function without having to deal with the cumbersome AWS console.

### Lambda Function Warming
The final problem Serene tackles is that of cold start latency. When they go unused for enough time, Lambda functions will go 'cold' and take longer to begin running again as desired. With Serene, a user is able to schedule invocations for their Lambda functions to help prevent this latency and optimize their performance.


## Potential Iteration Ideas
1. Add functionality to kill warming functionality early if the user wants
2. Improved modularity in cloudWatchMetricsController.ts
3. Improved TypeScript on backend -- there are 3 'any' types left in the backend (in order of file/method/variable):
    a. versionHistoryController.ts:
         i. viewVersionList: versions
    b. cloudWatchLogsController.ts:
         i. viewStreamInfo: eventList
    c. cloudWatchMetricsController.ts:
         i. getMetrics: metricObj
4. Create a desktop app
5. Incorperate Oauth
6. Backend testing reads 91% but it says 4/5 testing suites fail -- fixing this would be great and would bump the testing coverage even higher
    a. Also fixing the testing so that it will work with TypeScript (we tested before converting JS to TS)
7. Persisting state on the frontend is sometimes buggy (potential solution could be converting frontend to Redux)
8. Price estimation calculator/graphics
9. Be able to display code for each version of the functions
    a. We were only able to grab a download link to the code form AWS that could open in notepad or some other text editor but we could         not display the actual code from there

## Meet the Team
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
