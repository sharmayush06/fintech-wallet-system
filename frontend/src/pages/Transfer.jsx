import React, { useState } from 'react'
import { ArrowRightLeft, Send, Wallet } from 'lucide-react'
import { transferMoney } from '../services/walletService'
import { useAuth } from '../store/AuthStore'

function Transfer() {
const user = useAuth((state) => state.user)


const [form, setForm] = useState({
    destinationUserId: '',
    amount: ''
})

const [message, setMessage] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setMessage('')
    setError('')

    try {
        await transferMoney({
            sourceUserId: user?.id,
            destinationUserId: Number(form.destinationUserId),
            amount: Number(form.amount)
        })

        setMessage('Money transferred successfully 🎉')

        setForm({
            destinationUserId: '',
            amount: ''
        })
    } catch (err) {
        setError(
            err.response?.data?.message ||
            err.message ||
            'Transfer failed'
        )
    } finally {
        setLoading(false)
    }
}

return (
    <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-2xl mx-auto">

            <div className="bg-linear-to-r from-sky-600 to-indigo-600 rounded-3xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3">
                    <Wallet size={28} />
                    <div>
                        <h1 className="text-2xl font-bold">
                            Transfer Funds
                        </h1>
                        <p className="text-sky-100 text-sm mt-1">
                            Send money securely to another wallet
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-6 border border-slate-200">

                {message && (
                    <div className="mb-5 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="mb-5 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Recipient User ID
                        </label>

                        <input
                            type="number"
                            value={form.destinationUserId}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    destinationUserId: e.target.value
                                })
                            }
                            placeholder="Enter recipient user id"
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Amount (₹)
                        </label>

                        <input
                            type="number"
                            min="1"
                            value={form.amount}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    amount: e.target.value
                                })
                            }
                            placeholder="Enter amount"
                            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                            required
                        />
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                        <div className="flex items-center gap-2 text-slate-600">
                            <ArrowRightLeft size={18} />
                            <span className="text-sm">
                                Sender ID: {user?.id}
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold transition duration-200 disabled:opacity-50"
                    >
                        {loading ? (
                            'Processing...'
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                <Send size={18} />
                                Send Money
                            </span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    </div>
)

}

export default Transfer
