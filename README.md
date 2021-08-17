# API-practices

實際練習 API

## 尋找 API 接口

## 20210816

### Dog

使用： https://dog.ceo 找到取得隨機狗狗圖片的方法，
做出一個網頁，在每次重新整理時，都能取得新的狗狗圖片！

---

### Make new friends

https://randomuser.me/ 這個網站提供了快速產生使用者假資料的 API
製作一個簡單的網頁，每當點擊按鈕時，就會跑出一筆隨機的使用者資料
此專案排版結合

**bootstrap 的使用：**

- button
- card

**API 使用資料：**

- name
- picture
- email

---

### Make new friends Advanced version

Make new friends 進階版
**增加需求：**

- 每點一次按鈕會產生 3 筆資料
- 只需要女性使用者
- 再次點擊按鈕時，原本的資料不會消失，網頁上會再追加 3 筆資料

_產生 3 筆資料_

using the results parameter.
https://randomuser.me/api/`?results=3`

_只需要女性使用者_

Specifying a gender
generated by adding the gender
https://randomuser.me/api/`?gender=female`

_原本的資料不會消失，網頁上會再追加資料_

## `+=`

---

### Adele Song List

_為 Adele 的「25」這張專輯，做一個歌詞網站。_

當你點擊左欄的歌曲名稱時，就會發送請求給 lyric-api-403c0.firebaseio.com，

並且將回傳的歌曲顯示在右欄

**備註**

結合運用結合運用 bootstrap 排版，再加上一些些漸層調整
