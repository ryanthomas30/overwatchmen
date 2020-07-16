import app from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyAXnWVUqZ2XcUrmhtXkX94hdZh47UYoetI',
	authDomain: 'overwatchmen-8e34c.firebaseapp.com',
	databaseURL: 'https://overwatchmen-8e34c.firebaseio.com',
	projectId: 'overwatchmen-8e34c',
	storageBucket: 'overwatchmen-8e34c.appspot.com',
	messagingSenderId: '776451748115',
	appId: '1:776451748115:web:08e268f578dca709c1aae6',
	measurementId: 'G-0NHK94G08Z',
}

class Firebase {
	auth: app.auth.Auth;
	googleProvider: app.auth.GoogleAuthProvider

	constructor() {
		app.initializeApp(firebaseConfig)

		this.auth = app.auth()

		this.googleProvider = new app.auth.GoogleAuthProvider()
	}

	createUserWithEmailAndPassword(email: string, password: string) {
		return this.auth.createUserWithEmailAndPassword(email, password)
	}

	signInWithEmailAndPassword(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	googleSignIn() {
		return this.auth.signInWithPopup(this.googleProvider)
	}

	signOut() {
		return this.auth.signOut()
	}

	sendPasswordResetEmail(email: string) {
		return this.auth.sendPasswordResetEmail(email)
	}

	updatePassword(password: string) {
		if (this.auth.currentUser) return this.auth.currentUser.updatePassword(password)
	}

	getToken() {
		return this.auth.currentUser?.getIdToken(true)
	}

}
export default Firebase
