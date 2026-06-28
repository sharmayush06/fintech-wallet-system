function AboutUs() {
    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <section className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/70">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <div className=''>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                                About PayWallet
                            </p>
                            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                                Building a smarter wallet experience for every user.
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                                SwiftPay combines secure digital wallets, instant transfers, and transparent money management in one modern fintech platform. Our mission is to make everyday finances faster, clearer, and more empowering for individuals and businesses alike.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="/register"
                                    className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="/features"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                                >
                                    Explore features
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6 rounded-3xl bg-slate-50 p-6 sm:p-8">
                            <div className="rounded-3xl bg-sky-600 p-6 text-white shadow-xl shadow-sky-500/20">
                                <p className="text-sm uppercase tracking-[0.2em] text-sky-100/80">
                                    Our promise
                                </p>
                                <p className="mt-4 text-2xl font-semibold leading-tight">
                                    Secure. Fast. Friendly.
                                </p>
                                <p className="mt-3 text-sm leading-6 text-sky-100/90">
                                    Every transfer is protected by strong encryption, every flow is optimized for speed, and every interaction is designed with clarity.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                                    <p className="text-sm font-semibold text-slate-900">Trusted security</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        Built with industry-standard safeguards so your money and data stay safe.
                                    </p>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                                    <p className="text-sm font-semibold text-slate-900">Everyday convenience</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        Manage transfers, balances, and payments from one intuitive dashboard.
                                    </p>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                                    <p className="text-sm font-semibold text-slate-900">Transparent pricing</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        No surprises, no hidden fees — just clear value for everyone.
                                    </p>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                                    <p className="text-sm font-semibold text-slate-900">Mobile-ready</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        Access your wallet on any device with a responsive, polished interface.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-3">
                    <div className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Mission</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">Empower users with better money tools.</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            We create fast, clear and secure wallet experiences so people can feel confident managing their finances every day.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Vision</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">A world where finance feels effortless.</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            We aim to make digital payments and transfers intuitive for everyone, from first-time users to experienced customers.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200/50">
                        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Values</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">Trust, simplicity, speed.</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            We build products that are honest, easy to use, and fast enough to keep pace with modern lives.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AboutUs
