'use client'

import { useState } from 'react'

interface OrderFormProps {
  variantName: string
  onClose: () => void
}

export default function OrderForm({ variantName, onClose }: OrderFormProps) {
  const [form, setForm] = useState({
    name: '',
    city: '',
    qty: '1',
    checkoutMethod: 'WhatsApp (More Benefit)',
    note: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const price = 75000
    const total = parseInt(form.qty) * price

    const msg = `Halo Ourdays! Gue mau order:

*VARIAN:* ${variantName}
*NAMA:* ${form.name}
*KOTA:* ${form.city}
*CHECKOUT VIA:* ${form.checkoutMethod}
*JUMLAH:* ${form.qty} pcs
*TOTAL:* Rp${total.toLocaleString('id-ID')}
${form.note ? `*CATATAN:* ${form.note}` : ''}

Siap konfirmasi pesanan. 🙏`

    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/6281931656410?text=${encoded}`, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full max-w-sm bg-[#0a0a0a] border border-[#1a1a1a] p-6 max-h-[95vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[#b89053] text-[0.6rem] tracking-[0.4em] uppercase mb-1">Order Form</p>
            <h3 className="font-serif text-white text-lg tracking-wide">{variantName}</h3>
            <p className="text-gray-600 text-[0.6rem] tracking-wider mt-1">Rp75.000 / pcs</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.55rem] tracking-[0.3em] uppercase text-gray-500">Nama</label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Nama lengkap lo"
              className="bg-[#050505] border border-[#1a1a1a] text-white text-sm px-4 py-2.5 focus:outline-none focus:border-[#b89053]/40 placeholder-gray-700 transition-colors"
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.55rem] tracking-[0.3em] uppercase text-gray-500">Kota</label>
            <input
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              placeholder="Kota pengiriman"
              className="bg-[#050505] border border-[#1a1a1a] text-white text-sm px-4 py-2.5 focus:outline-none focus:border-[#b89053]/40 placeholder-gray-700 transition-colors"
            />
          </div>

          {/* Checkout Method + Qty */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1.5 col-span-2">
              <label className="text-[0.55rem] tracking-[0.3em] uppercase text-gray-500">Checkout Via</label>
              <select
                name="checkoutMethod"
                value={form.checkoutMethod}
                onChange={handleChange}
                className="bg-[#050505] border border-[#1a1a1a] text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[#b89053]/40 transition-colors"
              >
                <option value="WhatsApp (More Benefit)">WhatsApp (More Benefit)</option>
                <option value="Shopee">Shopee</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 col-span-1">
              <label className="text-[0.55rem] tracking-[0.3em] uppercase text-gray-500">Jumlah</label>
              <select
                name="qty"
                value={form.qty}
                onChange={handleChange}
                className="bg-[#050505] border border-[#1a1a1a] text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[#b89053]/40 transition-colors"
              >
                {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Note */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.55rem] tracking-[0.3em] uppercase text-gray-500">Catatan (opsional)</label>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Catatan tambahan..."
              rows={2}
              className="bg-[#050505] border border-[#1a1a1a] text-white text-sm px-4 py-2.5 focus:outline-none focus:border-[#b89053]/40 placeholder-gray-700 resize-none transition-colors"
            />
          </div>

          {/* Total */}
          <div className="flex justify-between items-center py-2.5 mt-1 border-t border-[#1a1a1a]">
            <span className="text-gray-600 text-[0.6rem] tracking-widest uppercase">Total</span>
            <span className="font-serif text-white text-base">
              Rp{(parseInt(form.qty) * 75000).toLocaleString('id-ID')}
            </span>
          </div>

          {/* Submit */}
          <div className="mt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-white text-black text-[0.6rem] tracking-[0.3em] uppercase font-bold hover:bg-[#b89053] hover:text-white transition-all duration-300"
            >
              Lanjut ke WhatsApp →
            </button>
            <p className="text-gray-700 text-[0.5rem] tracking-wider text-center mt-3">
              Data lo akan dikirim ke WA untuk konfirmasi pesanan.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}