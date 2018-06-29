import Storage from './Storage';

class Session {

  static SESSION = '__lucunas_session__';
  static USE_SESSION_STORAGE = true;
  static ONE_HOUR_SESSION_TIMEOUT_IN_MILLISECONDS = 3600000;

  static createSession () {
    Storage.set(Session.SESSION, (new Date()).getTime(), Session.USE_SESSION_STORAGE);
  }

  static getSessionKey () {
    return Storage.get(Session.SESSION, Session.USE_SESSION_STORAGE);
  }

  static hasValidSession() {
    let sessionCreateTime = Session.getSessionKey();
    return ((new Date()).getTime() - sessionCreateTime) <= Session.ONE_HOUR_SESSION_TIMEOUT_IN_MILLISECONDS;
  }
}

export default Session;