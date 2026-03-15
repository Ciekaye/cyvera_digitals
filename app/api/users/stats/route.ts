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
    const totalUsers = db.prepare('SELECT COUNT(*) as count FROM users').get() as any;
    const todayUsers = db.prepare(
      "SELECT COUNT(*) as count FROM users WHERE date(created_at) = date('now')"
    ).get() as any;
    const adminCount = db.prepare(
      "SELECT COUNT(*) as count FROM users WHERE role = 'admin'"
    ).get() as any;

    return NextResponse.json({
      totalUsers: totalUsers.count,
      todayUsers: todayUsers.count,
      adminCount: adminCount.count,
    });
  } catch (err) {
    console.error('Get stats error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
