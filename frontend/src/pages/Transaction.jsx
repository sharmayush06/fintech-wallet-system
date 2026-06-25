import React, { useEffect, useState } from 'react'
import { getTransactions } from '../services/walletService'
import { useAuth } from '../store/AuthStore'

function Transaction() {
    const user = useAuth((state) => state.user)
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        const loadTransactions = async () => {
            if (!user?.id) return
            try {
                const data = await getTransactions(user.id)
                setTransactions(data)
            } catch (error) {
                console.error(error)
            }
        }

        loadTransactions()
    }, [user?.id])

    return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                
                <div className="bg-linear-to-r from-indigo-600 to-blue-600 px-6 py-5">
                    <h1 className="text-2xl font-bold text-white">
                        Transaction History
                    </h1>
                    <p className="text-indigo-100 text-sm mt-1">
                        View all wallet activities
                    </p>
                </div>

                <div className="p-6">
                    {transactions.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">💳</div>
                            <h2 className="text-lg font-semibold text-slate-700">
                                No Transactions Found
                            </h2>
                            <p className="text-slate-500 mt-2">
                                Your transaction history will appear here.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {transactions.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-5 border border-slate-200 rounded-2xl hover:shadow-md transition-all duration-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl">
                                            💸
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-slate-800">
                                                Transaction #{item.id}
                                            </h3>

                                            <p className="text-sm text-slate-500">
                                                {new Date(
                                                    item.createdAt
                                                ).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="font-bold text-lg text-slate-900">
                                            ₹{item.amount}
                                        </p>

                                        <span
                                            className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${
                                                item.status === "SUCCESS"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                            }`}
                                        >
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
)
}

export default Transaction;
