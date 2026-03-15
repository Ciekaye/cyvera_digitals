'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Users, UserPlus, Shield, Trash2, LogOut, Home, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { usersApi } from '../lib/api';

interface UserData {
  id: number;
  username: string;
  email: string;
  role: string;
  created_at: string;
}

interface Stats {
  totalUsers: number;
  todayUsers: number;
  adminCount: number;
}

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<UserData[]>([]);
  const [stats, setStats] = useState<Stats>({ totalUsers: 0, todayUsers: 0, adminCount: 0 });
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [usersData, statsData] = await Promise.all([
        usersApi.getAll(),
        usersApi.getStats(),
      ]);
      setUsers(usersData.users);
      setStats(statsData);
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setIsLoadingData(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await usersApi.delete(id);
      setDeleteConfirm(null);
      loadData();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const statCards = [
    {
      label: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      gradient: 'var(--gradient-primary)',
    },
    {
      label: 'New Today',
      value: stats.todayUsers,
      icon: UserPlus,
      gradient: 'var(--gradient-secondary)',
    },
    {
      label: 'Admins',
      value: stats.adminCount,
      icon: Shield,
      gradient: 'linear-gradient(135deg, #7b19e7 0%, #4f46e5 100%)',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f7f9ff 0%, #f5f0ff 45%, #ffe9ff 100%)' }}>
      {/* Sidebar / Top Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/">
              <img src='/logo.png' alt="Cyvera Digitals" className="h-12 w-auto" />
            </Link>
            <ChevronRight size={16} className="text-gray-300" />
            <span className="text-sm font-semibold text-gray-800">Dashboard</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors no-underline"
            >
              <Home size={16} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <div className="h-5 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: 'var(--gradient-primary)' }}
              >
                {user?.username?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">{user?.username}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-8 py-8 max-w-6xl">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Welcome back,{' '}
            <span className="text-gradient-purple">{user?.username}</span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm">Here's what's happening with your platform.</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: stat.gradient }}
                >
                  <stat.icon size={20} />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900">{isLoadingData ? '—' : stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">All Users</h2>
            <p className="text-sm text-gray-500 mt-0.5">Manage registered accounts</p>
          </div>

          {isLoadingData ? (
            <div className="flex items-center justify-center py-16">
              <div
                className="w-8 h-8 rounded-full border-4 border-t-transparent animate-spin"
                style={{ borderColor: 'var(--primary-purple)', borderTopColor: 'transparent' }}
              />
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <Users size={40} className="mx-auto mb-3 opacity-50" />
              <p>No users found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <th className="px-6 py-3">User</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Role</th>
                    <th className="px-6 py-3">Joined</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {users.map((u, i) => (
                    <motion.tr
                      key={u.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05 * i }}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{ background: 'var(--gradient-primary)' }}
                          >
                            {u.username.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{u.username}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{u.email}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            u.role === 'admin'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(u.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {u.id !== user?.id && (
                          <>
                            {deleteConfirm === u.id ? (
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleDelete(u.id)}
                                  className="text-xs px-3 py-1.5 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                                >
                                  Confirm
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm(null)}
                                  className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setDeleteConfirm(u.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
