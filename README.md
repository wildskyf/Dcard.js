# DcardJS
```
  _____     ______     ______     ______     _____       __     ______
 /\  __-.  /\  ___\   /\  __ \   /\  == \   /\  __-.    /\ \   /\  ___\
 \ \ \/\ \ \ \ \____  \ \  __ \  \ \  __<   \ \ \/\ \  _\_\ \  \ \___  \  
  \ \____-  \ \_____\  \ \_\ \_\  \ \_\ \_\  \ \____- /\_____\  \/\_____\
   \/____/   \/_____/   \/_/\/_/   \/_/ /_/   \/____/ \/_____/   \/_____/

```
Install
======
![npm info](https://nodei.co/npm/dcard.png?downloads=true)

```
$ npm install dcard
```
Description
===========
Simple data retriever of Dcard for nodeJS  
dcardJS makes you retrieve data from Dcard easily.  

**Supported features:**  
- Get an array of posts information of Dcard by forum name and page number of a forum  
- Get an array of hot posts information ID of Dcard by forum name and page number of forum  
- Get posts title and content of Dcard by a specified ID.
- Get an array of global hot posts information of Dcard by page number
- Get an array of posts content of Dcard by a given page number and forum.  


How to Use?
========
Get Hot Post Array by given page number
```
var Dcard = require('dcard');
var dcard = new Dcard();

/**
 * Get Dcard Hot Posts ID by forum page number
 * @param {Number} forum page number
 * @return {Arr} arr[index].id, arr[index].likeCount, arr[index].comment, arr[index].gender, arr[index].department, arr[index].title, arr[index].content, arr[index].school, arr[index].createdAt, arr[index].updatedAt, arr[index].forumName, arr[index].rawObject(original object from Dcard)
 */

dcard.getHotPostId(2, function(err, postArr) {
  if (!err) {
    for (var i = 0, len = postArr.length; i < len; i++) {
      console.log('[Title] ' + postArr[i].title + ', [gender] ' + postArr[i].gender + ', [school] ' + postArr[i].school + ', [department] ' + postArr[i].department);
    }
  } else {
    console.log(err);
  }
});
```

Get an title content by a Post ID

```
var Dcard = require('dcard');
var dcard = new Dcard();

/**
 * Get Dcard Posts title and content
 * @param {Number} post id
 * @return {String} title, content of post.
 * @return {object} raw object of a post.
 */
dcard.getContentByPostID(328484, function(err, post) {
  if (!err) {
    console.log('Title: ' + post.title);
    console.log('Content: ' + post.content);
    console.log('POST URL: ' + post.url);
    console.log('Raw Contect Obj ' + post.rawObject);
  }
});

```
Get Post List by forum name and page number

```
var DcardJS = require('dcard');
var dcardDataGetter = new DcardJS();

/**
 * Get Dcard Posts ID by forum name and forum page number
 * @param {String} forum name
 * @param {Number} forum page number
 * @return {Arr} arr[index].id, arr[index].likeCount, arr[index].comment, arr[index].gender, arr[index].department, arr[index].title, arr[index].content, arr[index].school, arr[index].createdAt, arr[index].updatedAt, arr[index].forumName, arr[index].rawObject(original object from Dcard)
 */

dcardDataGetter.getPostIdByForum ('funny', 4, function(err, postArr) {
  if (!err) {
    for (var i = 0, len = postArr.length; i < len; i++) {
      console.log('[Title] ' + postArr[i].title + ', [gender] ' + postArr[i].gender + ', [school] ' + postArr[i].school + ', [department] ' + postArr[i].department);
    }
  } else {
    console.log(err);
  }
});

```
Get List of Posts By Forum name and page number  
If you specified the third param. with **HOT_WITH_FORUM**, it will give you a list of hot posts according to given forum and page number.  
If **HOT** is specified, it will give you a list of global hot posts.  
If **DEFAULT** is specified, it will give you a list of latest posts according to given forum and page number.
```
var DcardJS = require('dcard');
var dcardDataGetter = new DcardJS();

/**
 * Get Dcard Posts title and content
 * @param {Number} page number
 * @param {String} forum name
 * @param {String} HOT, HOT_WITH_FORUM, DEFAULT
 * @return {Arr} arr[index].id, arr[index].likeCount, arr[index].comment, arr[index].gender, arr[index].department, arr[index].title, arr[index].content, arr[index].school, arr[index].createdAt, arr[index].updatedAt, arr[index].forumName, arr[index].rawObject(original object from Dcard)
 */

dcardDataGetter.getFullPostsByPageNumAndForum(5, 'sex', 'HOT_WITH_FORUM', function(err, postList) {
  if (!err) {
    console.log('[*]' + postList.length + ' posts');
    for (var i = 0, len = postList.length; i < len; i++) {
      console.log(postList[i].title + ', createdAt: ' + postList[i].rawObject.createdAt + ', like:' + postList[i].rawObject.likeCount);
    }
  }else {
    console.log(err);
  }
});
```
See more sample code snippets in the [example folder](https://github.com/lockys/DcardJS/tree/master/example).

A simple demo prgoram using DcardJS
===================================
[Dcard image helper](https://github.com/lockys/Dcard-Image-helper)

Contribute
==============
Feel free to pull request, open issues or give us suggestions to make this project better :-)

Dcard API list
==============
Please, see the [Wiki page](https://github.com/lockys/Dcard-Parser/wiki)


Collaborators
============
[lockys](https://github.com/lockys), [John-Lin](https://github.com/John-Lin)
