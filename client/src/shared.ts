export const mockFuncDetails = [
    { id: 1, name: 'lambdaFunc1', description: 'something1', versHist: "version1", metric: "metric1", warmData: "warmingdata1" },
    { id: 2, name: 'lambdaFunc2', description: 'something2', versHist: "version2", metric: "metric2", warmData: "warmingdata2" },
    { id: 3, name: 'lambdaFunc3', description: 'something3', versHist: "version3", metric: "metric3", warmData: "warmingdata3" }
];

export const mockFunctions = [
{
    name : 'thirdFunction',
    description: 'This is my 3rd function',
    arn: 'arn:aws:lambda:us-east-1:097265058099:function:thirdFunction'
  },
  {
    name: 'secondFunction',
    description: 'This is my 2nd function',
    arn: 'arn:aws:lambda:us-east-1:097265058099:function:secondFunction'
  },  
  {
    name: 'firstFunction',
    description: 'This is my 1st function',
    arn: 'arn:aws:lambda:us-east-1:097265058099:function:secondFunction'
  }
]


export const test = "Ari is a smarticle Particle"

export const mockEvents = [
    {
      eventId: '37716204980707188425686310081372457587611692846764130304',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'INIT_START Runtime Version: nodejs:18.v9\tRuntime Version ARN: arn:aws:lambda:us-east-1::runtime:7d5f06b69c951da8a48b926ce280a9daf2e8bb1a74fc4a2672580c787d608206\n',
      timestamp: '2023-08-05T16:32:03.828Z'
    },
    {
      eventId: '37716204984453713619039454769150458257416617579768840193',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'START RequestId: 1d8e286c-5701-44e2-a269-23907f7594c5 Version: $LATEST\n',
      timestamp: '2023-08-05T16:32:03.996Z'
    },
    {
      eventId: '37716204984654420325826230377424279721870452833322663938',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'END RequestId: 1d8e286c-5701-44e2-a269-23907f7594c5\n',
      timestamp: '2023-08-05T16:32:04.005Z'
    },
    {
      eventId: '37716204984654420325826230377424279721870452833322663939',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'REPORT RequestId: 1d8e286c-5701-44e2-a269-23907f7594c5\tDuration: 6.65 ms\tBilled Duration: 7 ms\tMemory Size: 128 MB\tMax Memory Used: 66 MB\tInit Duration: 167.83 ms\t\n',
      timestamp: '2023-08-05T16:32:04.005Z'
    },
    {
      eventId: '37716205003543151508981668178305033098803615028888076292',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'START RequestId: d930d090-96e1-406b-ad6b-cfab4574eb40 Version: $LATEST\n',
      timestamp: '2023-08-05T16:32:04.852Z'
    },
    {
      eventId: '37716205003587752999378729424588104535348911751900037125',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'END RequestId: d930d090-96e1-406b-ad6b-cfab4574eb40\n',
      timestamp: '2023-08-05T16:32:04.854Z'
    },
    {
      eventId: '37716205003587752999378729424588104535348911751900037126',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'REPORT RequestId: d930d090-96e1-406b-ad6b-cfab4574eb40\tDuration: 1.21 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 66 MB\t\n',
      timestamp: '2023-08-05T16:32:04.854Z'
    },
    {
      eventId: '37716205023390814735673922774271822361460656769210646535',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'START RequestId: ad3ad117-e68a-4724-9d27-36ecac1fc536 Version: $LATEST\n',
      timestamp: '2023-08-05T16:32:05.742Z'
    },
    {
      eventId: '37716205023435416226070984020554893798005953492222607368',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'END RequestId: ad3ad117-e68a-4724-9d27-36ecac1fc536\n',
      timestamp: '2023-08-05T16:32:05.744Z'
    },
    {
      eventId: '37716205023435416226070984020554893798005953492222607369',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'REPORT RequestId: ad3ad117-e68a-4724-9d27-36ecac1fc536\tDuration: 1.41 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 67 MB\t\n',
      timestamp: '2023-08-05T16:32:05.744Z'
    },
    {
      eventId: '37716205040027170653777767637857468192856334452672036874',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'START RequestId: d1342983-e52b-46cc-8869-0477f2d8effb Version: $LATEST\n',
      timestamp: '2023-08-05T16:32:06.488Z'
    },
    {
      eventId: '37716205040071772144174828884140539629401631175683997707',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'END RequestId: d1342983-e52b-46cc-8869-0477f2d8effb\n',
      timestamp: '2023-08-05T16:32:06.490Z'
    },
    {
      eventId: '37716205040071772144174828884140539629401631175683997708',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'REPORT RequestId: d1342983-e52b-46cc-8869-0477f2d8effb\tDuration: 1.46 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 67 MB\t\n',
      timestamp: '2023-08-05T16:32:06.490Z'
    },
    {
      eventId: '37716205057488654144227245557679935600340001511854702605',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'START RequestId: 1b823be7-6a08-4d57-ac42-ec764931bcbd Version: $LATEST\n',
      timestamp: '2023-08-05T16:32:07.271Z'
    },
    {
      eventId: '37716205057533255634624306803963007036885298234866663438',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'END RequestId: 1b823be7-6a08-4d57-ac42-ec764931bcbd\n',
      timestamp: '2023-08-05T16:32:07.273Z'
    },
    {
      eventId: '37716205057533255634624306803963007036885298234866663439',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'REPORT RequestId: 1b823be7-6a08-4d57-ac42-ec764931bcbd\tDuration: 1.39 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 67 MB\t\n',
      timestamp: '2023-08-05T16:32:07.273Z'
    },
    {
      eventId: '37716205073567491432367824842727188474919470157666582544',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'START RequestId: ea3174bb-82a8-43e6-9570-fbb1fb162dd6 Version: $LATEST\n',
      timestamp: '2023-08-05T16:32:07.992Z'
    },
    {
      eventId: '37716205073589792177566355465868724193192118519172562961',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'END RequestId: ea3174bb-82a8-43e6-9570-fbb1fb162dd6\n',
      timestamp: '2023-08-05T16:32:07.993Z'
    },
    {
      eventId: '37716205073589792177566355465868724193192118519172562962',
      ingestionTime: '2023-08-05T16:32:09.301Z',
      message: 'REPORT RequestId: ea3174bb-82a8-43e6-9570-fbb1fb162dd6\tDuration: 1.23 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 67 MB\t\n',
      timestamp: '2023-08-05T16:32:07.993Z'
    }
  ]
  