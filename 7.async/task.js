class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock = (time, callback, id) => {
        const findId = this.alarmCollection.find(item => item.id === id);

        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        } else if (findId) {
            return console.error('Звонок с таким id уже существует')
        }
        
        this.alarmCollection.push({id: id, time: time, callback: callback});
    }

    removeClock = (id) => {
        const oldAlarmCollection = this.alarmCollection;
        this.alarmCollection = this.alarmCollection.filter(item => item.id === !id);

        if (oldAlarmCollection.length <= this.alarmCollection.length) {
            return console.error('Звонка с таким id не существует');
        } else {  
            return console.log('Звонок удален');
        }
    }

    getCurrentFormattedTime = () => {
        const currentDate = new Date();
        const hours = 
            currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = 
            currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        
        return `${hours}:${minutes}`
    }

    start = () => {
        const checkClock = (alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.callback();
            }
        }

        if (this.timerId === undefined) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(checkClock);
            })
        } else {
            return console.warn('Таймер уже запущен');
        }
    }

    stop = () => {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        } else {
            return console.warn('Таймер не запущен')
        }
    }

    printAlarms = () => {
        const printAlarm = (alarm) => {
            console.log(alarm.id, alarm.time);
        }
        this.alarmCollection.forEach(printAlarm);
    }

    clearAlarms = () => {
        this.stop();
        this.alarmCollection = [];
    }
}

