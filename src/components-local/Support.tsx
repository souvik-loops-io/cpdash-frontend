import { useState } from 'react'
import { INNER } from '../assets/utils/NewUtils'

const API_ENDPOINT = '/api/support'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Support() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`Server error ${res.status}`)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <main
      className="min-h-screen py-20"
      style={{ background: 'linear-gradient(135deg, #dce8fb 0%, #eef2ff 45%, #dce8fb 100%)' }}
    >
      <div className={INNER}>

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#6c63ff] mb-2.5">
            Support
          </p>
          <h1 className="text-[clamp(32px,5vw,56px)] font-black text-[#0d0d1a] tracking-tight leading-none mb-3">
            How can we help?
          </h1>
          <p className="text-[#6b7280] text-[15px] max-w-md mx-auto">
            Fill in the form and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Card */}
        <div
          className="bg-white border border-[#e4e6f0] rounded-2xl p-8 max-w-xl mx-auto"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <h2 className="text-lg font-bold text-[#0d0d1a]">Message sent!</h2>
              <p className="text-[#6b7280] text-sm">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 text-sm font-semibold text-[#6c63ff] hover:underline cursor-pointer border-none bg-transparent"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" id="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                <Field label="Email" id="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>

              <Field label="Subject" id="subject" type="text" placeholder="What is this about?" value={form.subject} onChange={handleChange} required />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[13px] font-semibold text-[#0d0d1a]">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your issue or question..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="bg-[#f7f8ff] border border-[#e4e6f0] rounded-lg text-[#0d0d1a] text-sm px-3.5 py-2.5 outline-none focus:border-[#6c63ff] transition-colors w-full resize-y font-[inherit]"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-3.5 py-2.5">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="cursor-pointer w-full text-sm font-semibold bg-[#6c63ff] text-white py-3 rounded-xl hover:bg-[#5a52e0] transition-colors border-none flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </main>
  )
}

function Field({
  label, id, type, placeholder, value, onChange, required,
}: {
  label: string
  id: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-semibold text-[#0d0d1a]">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-[#f7f8ff] border border-[#e4e6f0] rounded-lg text-[#0d0d1a] text-sm px-3.5 py-2.5 outline-none focus:border-[#6c63ff] transition-colors w-full"
      />
    </div>
  )
}
