import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackUrl: "http://localhost:3000/profile/ChooseWay",
    })
  ]
  // pages: {
  //   signIn: '../../signIn.js',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/profile/ProfileGiftList' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
})