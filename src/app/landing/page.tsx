"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{background: 'var(--background)', color: 'var(--foreground)', fontFamily: 'var(--font-inter)'}}>
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b" style={{borderColor: 'var(--border)', background: 'var(--card-bg)'}}>
        <div className="flex items-center gap-3">
          <div style={{background: 'var(--logo-bg, #fff)', borderRadius: 8, padding: 8, border: '1px solid var(--border)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
            <img src="/vigilant-logo.png" alt="Vigilant Labs Logo" style={{height: 40, width: 40, objectFit: 'contain', display: 'block', background: '#fff'}} />
          </div>
          <span className="text-2xl font-bold tracking-tight" style={{color: 'var(--foreground)'}}>VigilantLabs</span>
        </div>
        <nav className="flex gap-6">
          <Link href="#features" className="font-medium hover:underline" style={{color: 'var(--foreground)'}}>Features</Link>
          <Link href="#pricing" className="font-medium hover:underline" style={{color: 'var(--foreground)'}}>Pricing</Link>
          <Link href="#contact" className="font-medium hover:underline" style={{color: 'var(--foreground)'}}>Contact</Link>
          <Link href="/" className="px-4 py-2 rounded-full font-semibold" style={{background: 'var(--accent-cyan)', color: 'var(--background)'}}>Go to Dashboard</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24" style={{background: 'var(--background)'}}>
        <h1 className="text-5xl font-extrabold mb-6" style={{color: 'var(--foreground)'}}>AI-Powered Vigilance for Modern Enterprises</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: 'var(--muted-foreground)'}}>VigilantLabs delivers real-time monitoring, actionable insights, and automated compliance for your organization. Secure, scalable, and beautifully simple.</p>
        <Link href="#contact" className="px-8 py-4 rounded-full font-bold text-lg shadow-lg" style={{background: 'var(--accent-cyan)', color: 'var(--background)'}}>Request a Demo</Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[var(--card-bg)] border-t" style={{borderColor: 'var(--border)'}}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-lg p-6 shadow" style={{background: 'var(--background)'}}>
            <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Real-Time Alerts</h3>
            <p className="text-base" style={{color: 'var(--muted-foreground)'}}>Instant notifications for critical events and anomalies, powered by advanced AI detection.</p>
          </div>
          <div className="rounded-lg p-6 shadow" style={{background: 'var(--background)'}}>
            <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Automated Compliance</h3>
            <p className="text-base" style={{color: 'var(--muted-foreground)'}}>Stay audit-ready with automated reporting and policy enforcement tailored to your industry.</p>
          </div>
          <div className="rounded-lg p-6 shadow" style={{background: 'var(--background)'}}>
            <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Insightful Analytics</h3>
            <p className="text-base" style={{color: 'var(--muted-foreground)'}}>Visual dashboards and deep analytics help you make data-driven decisions with confidence.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4" style={{background: 'var(--background)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="rounded-lg p-6 border shadow" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Starter</h3>
              <p className="text-2xl font-extrabold mb-4" style={{color: 'var(--accent-cyan)'}}>₹9,999/mo</p>
              <ul className="text-base mb-4" style={{color: 'var(--muted-foreground)'}}>
                <li>Basic AI Monitoring</li>
                <li>Email Alerts</li>
                <li>Standard Support</li>
              </ul>
              <Link href="#contact" className="px-4 py-2 rounded-full font-semibold" style={{background: 'var(--accent-cyan)', color: 'var(--background)'}}>Get Started</Link>
            </div>
            <div className="rounded-lg p-6 border-2 shadow-lg scale-105" style={{background: 'var(--card-bg)', borderColor: 'var(--accent-cyan)'}}>
              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Professional</h3>
              <p className="text-2xl font-extrabold mb-4" style={{color: 'var(--accent-cyan)'}}>₹24,999/mo</p>
              <ul className="text-base mb-4" style={{color: 'var(--muted-foreground)'}}>
                <li>Advanced AI Monitoring</li>
                <li>SMS & Email Alerts</li>
                <li>Custom Dashboards</li>
                <li>Priority Support</li>
              </ul>
              <Link href="#contact" className="px-4 py-2 rounded-full font-semibold" style={{background: 'var(--accent-cyan)', color: 'var(--background)'}}>Get Started</Link>
            </div>
            <div className="rounded-lg p-6 border shadow" style={{background: 'var(--card-bg)', borderColor: 'var(--border)'}}>
              <h3 className="text-xl font-bold mb-2" style={{color: 'var(--foreground)'}}>Enterprise</h3>
              <p className="text-2xl font-extrabold mb-4" style={{color: 'var(--accent-cyan)'}}>Custom</p>
              <ul className="text-base mb-4" style={{color: 'var(--muted-foreground)'}}>
                <li>All Professional Features</li>
                <li>Dedicated Account Manager</li>
                <li>Custom Integrations</li>
                <li>24/7 Support</li>
              </ul>
              <Link href="#contact" className="px-4 py-2 rounded-full font-semibold" style={{background: 'var(--accent-cyan)', color: 'var(--background)'}}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[var(--card-bg)] border-t" style={{borderColor: 'var(--border)'}}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Contact Us</h2>
          <p className="mb-8 text-base" style={{color: 'var(--muted-foreground)'}}>Ready to transform your security operations? Fill out the form below and our team will get in touch.</p>
          <form className="grid gap-4">
            <input type="text" placeholder="Name" className="rounded px-4 py-3 border" style={{background: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)'}} required />
            <input type="email" placeholder="Email" className="rounded px-4 py-3 border" style={{background: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)'}} required />
            <textarea placeholder="Message" className="rounded px-4 py-3 border" style={{background: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)'}} rows={4} required />
            <button type="submit" className="px-6 py-3 rounded-full font-bold mt-2" style={{background: 'var(--accent-cyan)', color: 'var(--background)'}}>Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm" style={{color: 'var(--muted-foreground)', background: 'var(--card-bg)', borderTop: '1px solid var(--border)'}}>
        &copy; {new Date().getFullYear()} VigilantLabs. All rights reserved.
      </footer>
    </div>
  );
}
