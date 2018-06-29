import Storage from './Storage';

class Session {

  static SESSION = '__lucunas_session__';
  static USE_SESSION_STORAGE = true;
  static ONE_HOUR_SESSION_TIMEOUT_IN_MILLISECONDS = 3600000;

  static createSession () {
    let createTime = (new Date()).getTime();
    Storage.set(Session.SESSION, createTime, Session.USE_SESSION_STORAGE);
    return createTime;
  }

  static getSessionKey () {
    let sessionKey = Storage.get(Session.SESSION, Session.USE_SESSION_STORAGE);
    if(!Session.isValidSessionKey(sessionKey)) {
      sessionKey = Session.createSession();
    }
    return sessionKey;
  }

  static isValidSessionKey(sessionKey) {
    return ((new Date()).getTime() - sessionKey) <= Session.ONE_HOUR_SESSION_TIMEOUT_IN_MILLISECONDS;
  }
}

export default Session;