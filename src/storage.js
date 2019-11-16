import localforage from 'localforage';
import * as sessionStorageDriver from 'localforage-driver-session-storage';

localforage.defineDriver(sessionStorageDriver);
localforage.setDriver(sessionStorageDriver._driver);

localforage.config({ name: 'jstldr', version: 1.0 });

export default localforage;
