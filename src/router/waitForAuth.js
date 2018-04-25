import firebase from 'firebase';

export default (to, from, next) => {
    firebase.auth().onAuthStateChanged(user => {
        console.log('auth change', user);
        if (user) {
            next();
        }
    });
};
