import React from 'react';

const asyncAll = () => {
  asyncAll([doSomething, soOtherThing], function(results) {
    console.log('all done', results);
  })

  // using forEach
  function asyncAll(tasks, done) {
    var count = tasks.length;
    var results = new Array(count);
    tasks.forEach(function(task, i) {
      task(function(result) {
        results[i] = result;
        count -= 1;
        if (count === 0) {
          done(results);
        }
      })
    })
  }

  // using IIFE (immediatly invoked function expression)
  function asyncAll(tasks, done) {
    var count = tasks.length;
    var results = new Array(count);
    for (var i = 0, len = count; i < len; i++) {
      (function(i) {
        task[i](function(result) {
          results[i] = result;
          count -= 1;
          if (count === 0) {
            done(results);
          }
        })
      })()
    }
  }
  return '';
}

export default asyncAll;