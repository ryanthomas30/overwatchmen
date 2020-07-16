import { initializeApp, credential } from 'firebase-admin'
import { isDevelopment, isProduction } from '@/util'

export const initializeFirebaseAdmin = () => {
	if (isDevelopment()) {
		initializeApp({
			credential: credential.applicationDefault(),
		})
	} else if (isProduction()) {
		initializeApp({
			serviceAccountId: 'firebase-adminsdk-ydf5f@overwatchmen-8e34c.iam.gserviceaccount.com',
		})
	}
}
