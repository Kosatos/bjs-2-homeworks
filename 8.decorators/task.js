function cachingDecoratorNew(func) {
  let cache = [];
  
  return function (...args) {
    const hash = args.toString();  
    let idx = cache.findIndex(item => item.hash === hash); 
    if (idx !== -1 ) { 
      return `Из кэша: ${cache[idx].result}`;
    } else {
      let result = func.call(this, ...args); 
      cache.push({hash, result}) ; 
      if (cache.length > 5) { 
        cache.shift(); 
      }
      return `Вычисляем: ${result}`;  
    }
  }
}


function debounceDecoratorNew(func, ms) {
  let isDelayed = false;

  return function(...args) {
    if (!isDelayed) {
      func.call(this, ...args);
      isDelayed = true;

      setTimeout(() => {
        isDelayed = false;
      }, ms);
    }
  }
}

function debounceDecoratorNew2(func, ms) {
  let isDelayed = false;
  let count = 0;

  return function wrapper(...args) {
    wrapper.count = count++;
 
    if (!isDelayed) {
      func.call(this, ...args);
      isDelayed = true;

      setTimeout(() => {
        isDelayed = false;
      }, ms);
    }
  }
}

