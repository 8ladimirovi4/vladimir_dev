import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import type { User } from '@/app/lib/definitions';
import postgres from 'postgres';

const connectionString = process.env.POSTGRES_URL!;
const useSsl =
  !connectionString.includes('localhost') &&
  !connectionString.includes('127.0.0.1');
const sql = postgres(connectionString, { ssl: useSsl ? 'require' : false });
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  //login and password authentification
  // can be OAuth or email
  //https://authjs.dev/getting-started/authentication/oauth
  //https://authjs.dev/getting-started/authentication/email
  providers: [],
});