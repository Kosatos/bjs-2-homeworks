function cachingDecoratorNew(func) {
  let cache = [];
  
  return function (...args) {
    const hash = args.toString();  
    let idx = cache.findIndex(item => item.hash === hash); 
    if (idx !== -1 ) { 
      return `Из кэша: ${cache[idx].result}`;
    } 
    let result = func.call(this, ...args); 
    cache.push({hash, result}) ; 
    cache.length > 5 ? cache.shift() : false; 
    return `Вычисляем: ${result}`;  
  }
}


function debounceDecoratorNew(func, ms) {
  let flag = false;
  let timeout = null;
  return function(...args) {
    if(timeout) {
      clearTimeout(timeout);
    }
    
    if (!flag) {
      func.call(this, ...args);
      flag = true;
    }

    timeout = setTimeout(() => {
      flag = false;
      func.call(this, ...args);
    }, ms);
  }
}

function debounceDecoratorNew2(func, ms) {
  let flag = false;
  let timeout = null;
  wrapper.count = 0;
  function wrapper(...args) {
    if(timeout) {
      clearTimeout(timeout);
    }
    
    if (!flag) {
      func.call(this, ...args);
      wrapper.count++;
      flag = true;
    }

    timeout = setTimeout(() => {
      flag = false;
      func.call(this, ...args);
      wrapper.count++;
    }, ms);
  }

  return wrapper;
}

