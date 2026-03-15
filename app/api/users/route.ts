import { NextRequest, NextResponse } from 'next/server';
import getDb from '@/lib/db';
import { getAuthUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const authUser = getAuthUser(request);
  if (!authUser) {
    return NextResponse.json({ error: 'Access denied.' }, { status: 401 });
  }

  try {
    const db = getDb();
    const users = db.prepare('SELECT id, username, email, role, created_at FROM users ORDER BY created_at DESC').all();
    return NextResponse.json({ users });
  } catch (err) {
    console.error('Get users error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
