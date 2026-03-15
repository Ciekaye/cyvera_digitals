import { Router } from 'express';
import db from '../db.js';

const router = Router();

// Get all users (for dashboard)
router.get('/', (req, res) => {
  try {
    const users = db.prepare('SELECT id, username, email, role, created_at FROM users ORDER BY created_at DESC').all();
    res.json({ users });
  } catch (err) {
    console.error('Get users error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Get user stats (for dashboard)
router.get('/stats', (req, res) => {
  try {
    const totalUsers = db.prepare('SELECT COUNT(*) as count FROM users').get();
    const todayUsers = db.prepare(
      "SELECT COUNT(*) as count FROM users WHERE date(created_at) = date('now')"
    ).get();
    const adminCount = db.prepare(
      "SELECT COUNT(*) as count FROM users WHERE role = 'admin'"
    ).get();

    res.json({
      totalUsers: totalUsers.count,
      todayUsers: todayUsers.count,
      adminCount: adminCount.count,
    });
  } catch (err) {
    console.error('Get stats error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Delete user
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    if (Number(id) === req.user.id) {
      return res.status(400).json({ error: 'Cannot delete your own account.' });
    }

    const result = db.prepare('DELETE FROM users WHERE id = ?').run(id);
    
    if (result.changes === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ message: 'User deleted successfully.' });
  } catch (err) {
    console.error('Delete user error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;
