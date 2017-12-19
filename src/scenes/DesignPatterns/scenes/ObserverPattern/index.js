import React from 'react';

const Subject = function() {
  this.observers = [];
  return {
    subscribeObserver: observer => this.observers.push(observer),
    unsubscribeObserver: observer => {
      let index = this.observers.indexOf(observer);
      if(index > -1)
        this.observers.splice(index, 1);
    },
    notifyObserver: observer => {
      let index = this.observers.indexOf(observer);
      if(index > -1)
        this.observers[index].notify(index);
    },
    notifyAllObservers: () => {
      for(var i = 0, len = this.observers.length; i < len; i++){
        this.observers[i].notify(i);
      };
      // or FASTER
      // let j = this.observers.length;
      // while (j--) {
      //   this.observers[j].notify(j);
      // }
    }
  };
};

const Observer = function() {
  return {
    notify: function(index) {
      console.log("Observer " + index + " is notified!");
    }
  }
}

const MyObserver = () => {
  const subject = new Subject();
  const observer1 = new Observer();
  const observer2 = new Observer();
  const observer3 = new Observer();

  subject.subscribeObserver(observer1);
  subject.subscribeObserver(observer2);
  subject.subscribeObserver(observer3);
  console.log('Notify observer created in second:')
  subject.notifyObserver(observer2); // Observer 2 is notified!
  console.log('Notify all:')
  subject.notifyAllObservers();
  return '';
}
const pattern = () => (
  <div>
    <MyObserver/>
  </div>
);

export default pattern;