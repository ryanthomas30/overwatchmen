import app from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {

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

}
export default Firebase
