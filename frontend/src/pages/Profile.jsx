import React, { useState } from 'react'
import { updateUserProfile } from '../services/walletService'
import { useAuth } from '../store/AuthStore'

function Profile() {
    const user = useAuth((state) => state.user)
    const setUser = useAuth((state) => state.setUser)
    const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' })
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const updated = await updateUserProfile(user.id, form)
            setUser(updated)
            setForm({ name: updated.name || '', email: updated.email || '' })
            setMessage('Profile updated successfully.')
        } catch (error) {
            setMessage(error.response?.data?.message || 'Update failed')
        }
    }

    return (
        <div className="p-6 md:p-8">
            <div className="max-w-xl bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h1 className="text-2xl font-semibold text-slate-900">Your profile</h1>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border border-slate-200 rounded-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full border border-slate-200 rounded-lg px-4 py-2"
                        />
                    </div>
                    <button className="w-full bg-sky-600 text-white rounded-lg py-2.5 font-semibold">Save changes</button>
                    {message && <p className="text-sm text-slate-600">{message}</p>}
                </form>
            </div>
        </div>
    )
}

export default Profile
