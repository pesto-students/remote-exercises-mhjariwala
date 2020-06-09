class Cycled {
    constructor(array) {
        this.list = Array.isArray(array) ? [...array] : [];
        this.index = 0;
  
        function next() {
            const list = this.list;
            const index = this.index;
    
            return {
                done: false,
                value: list[index]
            };
        }
  
        this[Symbol.iterator] = function() {
            const iterator = {
                next: next.bind(this)
            };
            this.iterator = iterator;
    
            return iterator;
        }.bind(this);
    }
  
    initializeIterator() {
        if (this.iterator) {
            return;
        }

        this[Symbol.iterator]();
    }
    
    get index() {
        return this._index;
    }

    set index(index) {
        if(index < 0 || index > this.list.length){
            return;
        }

        this._index = index;
    }

    resetIndex() {
        this.index = 0;
    }
  
    lastElementIndex() {
        return this.list.length - 1;
    }
  
    setLastIndex() {
        this.index = this.list.length - 1;
    }
    
    indexOf(element) {
        return this.list.indexOf(element);
    }

    next() {
        this.initializeIterator();
        
        if (this.index >= this.lastElementIndex()) {
            this.resetIndex();
        } else {
            this.index++;
        }
        
        const value = this.iterator.next().value;
        return value;
    }
  
    previous() {
        this.initializeIterator();
    
        if (this.index <= 0) {
            this.setLastIndex();
        } else {
            this.index--;
        }

        const value = this.iterator.next().value;
    
        return value;
    }
  
    reversed() {
        this.initializeIterator()
        this.resetIndex();
        this.list.reverse();
        
        return this.iterator;
    }
  
    current() {
        this.initializeIterator();
  
        const value = this.iterator.next().value;
        return value;
    }
  
    step(number) {
        this.initializeIterator();
        let newIndex = this.index + number;
    
        if (newIndex < 0 || newIndex >= this.list.length) {
            newIndex = 0;
        }
    
        this.index = newIndex;
        const value = this.iterator.next().value;
        return value;
    }
  }
  
  export {
    Cycled
  };