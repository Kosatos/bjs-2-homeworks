const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3); 

// const sendSignal = () => console.log('Сигнал послан'); 
// const upgradedSendSignal = debounceDecoratorNew(sendSignal,2000);
// setTimeout(upgradedSendSignal()); 
// setTimeout(upgradedSendSignal(),300); 
// setTimeout(upgradedSendSignal(),900); 
// setTimeout(upgradedSendSignal(),1200);
// setTimeout(upgradedSendSignal(),2300);
// setTimeout(upgradedSendSignal(),4400);
// setTimeout(upgradedSendSignal(),4500);

const sendSignal = () =>
  console.log(
    `Сигнал послан в ${new Date().getMinutes()} : ${new Date().getSeconds()} : ${new Date().getMilliseconds()}`,
  );
const upgradedSendSignal = debounceDecoratorNew2(sendSignal, 2000);
setTimeout(upgradedSendSignal);
setTimeout(() => {
  console.error('посылаю сигнал через 300мс');
  upgradedSendSignal();
}, 300);
setTimeout(() => {
  console.error('посылаю сигнал через 900мс');
  upgradedSendSignal();
}, 900);
setTimeout(() => {
  console.error('посылаю сигнал через 1200мс');
  upgradedSendSignal();
}, 1200);
setTimeout(() => {
  console.error('посылаю сигнал через 2300мс');
  upgradedSendSignal();
}, 2300);
setTimeout(() => {
  console.log('посылаю сигнал через 4400мс');
  upgradedSendSignal();
}, 4400);
setTimeout(() => {
  console.error('посылаю сигнал через 4500мс');
  upgradedSendSignal();
}, 4500);