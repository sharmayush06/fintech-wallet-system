function Features() {
    const items = [
        {
            title: 'Instant transfers',
            description: 'Move money securely between accounts with real-time processing and clear confirmation every step of the way.',
        },
        {
            title: 'Smart wallet insights',
            description: 'Track spending, balances, and activity in one easy dashboard designed for modern finance.',
        },
        {
            title: 'Secure access',
            description: 'Protect your account with strong encryption, secure authentication, and privacy-first design.',
        },
        {
            title: 'Flexible payments',
            description: 'Send, receive, and request funds through a single intuitive interface from any device.',
        },
        {
            title: 'Transparent fees',
            description: 'No surprise charges — just clear pricing so you always know what you’re paying for.',
        },
        {
            title: 'Responsive design',
            description: 'A beautiful experience on desktop and mobile, built to work wherever your money moves.',
        },
    ]

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <section className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60">
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                                Features
                            </p>
                            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                                Everything you need to manage money with confidence.
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                                SwiftPay brings together fast transfers, secure wallet management, and smart insights so you can control your finances with simplicity and transparency.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="/register"
                                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                                >
                                    Create account
                                </a>
                                <a
                                    href="/about"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                                >
                                    Learn about us
                                </a>
                            </div>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
                            <div className="rounded-3xl bg-linear-to-br from-sky-600 to-cyan-500 p-6 text-white shadow-xl shadow-sky-500/20">
                                <p className="text-sm uppercase tracking-[0.2em] text-sky-100/90">
                                    Why SwiftPay?
                                </p>
                                <p className="mt-4 text-2xl font-semibold leading-tight">
                                    Powerful tools for modern financial freedom.
                                </p>
                                <p className="mt-3 text-sm leading-6 text-sky-100/90">
                                    Every feature is built around speed, security, and ease of use so you always stay in control.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                        <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-slate-300/40">
                            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                        </article>
                    ))}
                </section>

                <section className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-3">
                    <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/20">
                        <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Speed</p>
                        <h2 className="mt-4 text-2xl font-semibold">Fast transfers</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-200">
                            Move money instantly with no delays, so your payments arrive when they need to.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200/50">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Control</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">Clear insights</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            See your wallet activity, balances, and trends in a clean, easy dashboard.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200/50">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Safety</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">Built-in security</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            Designed with strong encryption and secure authentication to protect your account.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Features
