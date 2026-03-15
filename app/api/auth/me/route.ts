import { NextRequest, NextResponse } from 'next/server';
import getDb from '@/lib/db';
import { getAuthUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const authUser = getAuthUser(request);
  if (!authUser) {
    return NextResponse.json({ error: 'Access denied. No token provided.' }, { status: 401 });
  }

  try {
    const db = getDb();
    const user = db.prepare('SELECT id, username, email, role, created_at FROM users WHERE id = ?').get(authUser.id);

    if (!user) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error('Get me error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
