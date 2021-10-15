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
        const findId = this.alarmCollection.find(item => item.id === id);

        if (!findId) {
            return console.error('Звонка с таким id не существует')
        }
        
        this.alarmCollection.splice(this.alarmCollection.indexOf(findId), 1);

        return console.log('Звонок удален')
    }

    getCurrentFormattedTime = () => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

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

