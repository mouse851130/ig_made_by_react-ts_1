試做以React-Redux搭配TypeScript管理追蹤狀態之Instagram
以react-create-app為基礎，使用Tailwind跟styledcss為調整，再以mock data去模擬使用者在首頁他人狀態，亦會帶到追蹤列表，並能以Redux紀錄追蹤狀態。

## 測試API格式

```
file: db.json


{
  "posts": [
    {
      "id": 1,
      "location": "布魯斯前端",
      "account": "bruce_1234",
      "avatar": "/images/avatars/a1.png",
      "photo": "/images/posts/main1.png",
      "likes": 999,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "1 HOURS AGO"
    },
    {
      "id": 2,
      "location": "7-11你好門市",
      "account": "__0831_xxx__",
      "avatar": "/images/avatars/a2.png",
      "photo": "/images/posts/main2.png",
      "likes": 333,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "5 HOURS AGO"
    },
    {
      "id": 3,
      "location": "Taipei",
      "account": "gogogo_0214",
      "avatar": "/images/avatars/a3.png",
      "photo": "/images/posts/main3.png",
      "likes": 777,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "6 HOURS AGO"
    },
    {
      "id": 4,
      "location": "信義區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a4.png",
      "photo": "/images/posts/main4.png",
      "likes": 824,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "7 HOURS AGO"
    },
    {
      "id": 5,
      "location": "南港區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a5.png",
      "photo": "/images/posts/main5.png",
      "likes": 98,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "10 HOURS AGO"
    }
  ],
  "stories": [
    {
      "id": 1,
      "name": "bruce_fe",
      "avatar": "/images/avatars/a1.png"
    },
    {
      "id": 2,
      "name": "max",
      "avatar": "/images/avatars/a2.png"
    },
    {
      "id": 3,
      "name": "fm",
      "avatar": "/images/avatars/a3.png"
    },
    {
      "id": 4,
      "name": "joanne",
      "avatar": "/images/avatars/a4.png"
    },
    {
      "id": 5,
      "name": "focus",
      "avatar": "/images/avatars/a5.png"
    },
    {
      "id": 6,
      "name": "louis",
      "avatar": "/images/avatars/a6.png"
    },
    {
      "id": 7,
      "name": "alvin",
      "avatar": "/images/avatars/a7.png"
    },
    {
      "id": 8,
      "name": "grace",
      "avatar": "/images/avatars/a8.png"
    },
    {
      "id": 9,
      "name": "rance",
      "avatar": "/images/avatars/a9.png"
    },
    {
      "id": 10,
      "name": "bruce_fe",
      "avatar": "/images/avatars/a10.png"
    }
  ]
}


```