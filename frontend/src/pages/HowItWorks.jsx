function HowItWorks() {
    const steps = [
        {
            title: 'Create your wallet',
            description: 'Sign up and set up your SwiftPay wallet in minutes with an easy onboarding flow.',
        },
        {
            title: 'Add funds securely',
            description: 'Link your bank account or card to add money instantly and safely.',
        },
        {
            title: 'Send or receive payments',
            description: 'Transfer money to friends, family, or vendors with just a few taps.',
        },
        {
            title: 'Track activity',
            description: 'Monitor balances, transaction history, and spending insights from one dashboard.',
        },
    ]

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <section className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                                How it works
                            </p>
                            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                                Easy money movement, made crystal clear.
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                                From setup to spending, SwiftPay guides you through every step with secure transfers, intuitive controls, and real-time updates.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="/register"
                                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                                >
                                    Start now
                                </a>
                                <a
                                    href="/features"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                                >
                                    View features
                                </a>
                            </div>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
                            <div className="rounded-3xl bg-linear-to-br from-sky-600 to-cyan-500 p-6 text-white shadow-xl shadow-sky-500/20">
                                <p className="text-sm uppercase tracking-[0.2em] text-sky-100/90">
                                    Simple process
                                </p>
                                <p className="mt-4 text-2xl font-semibold leading-tight">
                                    Setup, fund, transfer, and track — all in one place.
                                </p>
                                <p className="mt-3 text-sm leading-6 text-sky-100/90">
                                    SwiftPay removes complexity so you can manage money with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-2">
                    {steps.map((step, index) => (
                        <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                                <span>Step {index + 1}</span>
                                <span>Fast</span>
                            </div>
                            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{step.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                        </article>
                    ))}
                </section>

                <section className="mt-12 rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/20">
                    <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Secure flow</p>
                            <h2 className="mt-4 text-2xl font-semibold">Protected every step</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-200">
                                Encryption and access controls keep your wallet safe while you move funds.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Instant updates</p>
                            <h2 className="mt-4 text-2xl font-semibold">Real-time visibility</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-200">
                                See balances and transaction status immediately, with clear activity history.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Easy control</p>
                            <h2 className="mt-4 text-2xl font-semibold">All-in-one dashboard</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-200">
                                Use one secure app for payments, transfers, and wallet management.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default HowItWorks
