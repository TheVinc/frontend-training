// const _data = [];
// const AnimalStore = {
//   add: item => _data.push(item),
//   get: id => _data.find(d => d.id === id)
// }
// Object.freeze(AnimalStore);
// export default AnimalStore;

class AnimalStore {
  constructor(){
    if(!AnimalStore.instance){
      this._data = [];
      AnimalStore.instance = this;
    }

    return AnimalStore.instance;
   }

  add(id, item){
    this._data.push({id, item});
  }

  change(id, item) {
    this._data.forEach(d => {
      if (d.id === id) {
        d.item = item;
      }
    });
  }

  get(id){
    return this._data.find(d => d.id === id).item;
  }
}

const instance = new AnimalStore();
Object.freeze(instance);

export default instance;