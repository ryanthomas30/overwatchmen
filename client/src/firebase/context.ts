import { createContext, useContext, useEffect, useState } from 'react'
import { storeAuthUser, getAuthUser, removeAuthUser } from '../localStorage'
import Firebase from '.'

/* Firebase */
export const FirebaseContext = createContext<Firebase | null>(null)
export const FirebaseProvider = FirebaseContext.Provider
export const FirebaseConsumer = FirebaseContext.Consumer
export const useFirebase = () => useContext(FirebaseContext) as unknown as Firebase

export const useFirebaseAuthListener = () => {
	const [firebaseUser, setFirebaseUser] = useState<firebase.User | null>(getAuthUser())
	const firebase = useFirebase()
	useEffect(() => {
		const unsubscribe = firebase.auth.onAuthStateChanged(
			(authUser) => {
				setFirebaseUser(authUser)
				if (authUser) storeAuthUser(authUser)
				else removeAuthUser()
			},
		)
		return () => {
			unsubscribe()
		}
	})
	return firebaseUser
}
/* Session Management */
export const AuthContext = createContext<firebase.User | null>(null)
export const AuthProvider = AuthContext.Provider
export const AuthConsumer = AuthContext.Consumer
export const useAuth = () => useContext(AuthContext)
