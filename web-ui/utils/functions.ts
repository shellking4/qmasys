export const addMonths = (date: any, months: number) => {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
}

export const addHours = (date: any, hours: number) => {
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    return date;
}

export const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

export const readOutLoud = (message: string, lang: any) => {
  var synth = window.speechSynthesis;
  var speech = new SpeechSynthesisUtterance();
  // Set the text and voice attributes.
  speech.text = message;
  speech.volume = 10;
  speech.rate = 0.8;
  speech.pitch = 1;
  speech.lang = lang
  synth.speak(speech);
}

function pagination(c: any, m: any) {
  var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || i >= left && i < right) {
          range.push(i);
      }
  }

  for (let i of range) {
      if (l) {
          if (i - l === 2) {
              rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
              rangeWithDots.push('...');
          }
      }
      rangeWithDots.push(i);
      l = i;
  }

  return rangeWithDots;
}


export const JustADate = (initDate: any) => {
  var utcMidnightDateObj: any = null
  // if no date supplied, use Now.
  if (!initDate)
    initDate = new Date();

  // if initDate specifies a timezone offset, or is already UTC, just keep the date part, reflecting the date _in that timezone_
  if (typeof initDate === "string" && initDate.match(/((\+|-)\d{2}:\d{2}|Z)$/gm)) {
    utcMidnightDateObj = new Date(initDate.substring(0, 10) + 'T00:00:00Z');
  } else {
    // if init date is not already a date object, feed it to the date constructor.
    if (!(initDate instanceof Date))
      initDate = new Date(initDate);
    // Vital Step! Strip time part. Create UTC midnight dateObj according to local timezone.
    utcMidnightDateObj = new Date(Date.UTC(initDate.getFullYear(), initDate.getMonth(), initDate.getDate()));
  }

  return {
    toISOString: () => utcMidnightDateObj.toISOString(),
    getUTCDate: () => utcMidnightDateObj.getUTCDate(),
    getUTCDay: () => utcMidnightDateObj.getUTCDay(),
    getUTCFullYear: () => utcMidnightDateObj.getUTCFullYear(),
    getUTCMonth: () => utcMidnightDateObj.getUTCMonth(),
    setUTCDate: (arg: any) => utcMidnightDateObj.setUTCDate(arg),
    setUTCFullYear: (arg: any) => utcMidnightDateObj.setUTCFullYear(arg),
    setUTCMonth: (arg: any) => utcMidnightDateObj.setUTCMonth(arg),
    addDays: (days: any) => {
      utcMidnightDateObj.setUTCDate(utcMidnightDateObj.getUTCDate + days)
    },
    toString: () => utcMidnightDateObj.toString(),
    toLocaleDateString: (locale?: any, options?: any) => {
      options = options || {};
      options.timeZone = "UTC";
      locale = locale || "en-EN";
      return utcMidnightDateObj.toLocaleDateString(locale, options)
    }
  }
}

export const getOnlyDate = (date: any) => {
  return JustADate(date).toLocaleDateString()
}

export const arraysEqual = (a: any, b: any) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export const getArraysDifference = (array1: any, array2: any) => {
  return array1.filter((object1: any) => {
    return !array2.some((object2: any) => {
      return object1.id === object2.id;
    });
  });
}

export const callTicket = (ticket: any) => {
  readOutLoud(`Ticket ${ticket.counter_call_nbr}`, "fr-FR")
  readOutLoud(`${ticket.agent.office_name}`, "fr-FR")
  readOutLoud(`Ticket ${ticket.counter_call_nbr}`, "en-US")
  readOutLoud(`${ticket.agent.office_name.replace("Caisse N°", "Counter number")}`, "en-US")
}


