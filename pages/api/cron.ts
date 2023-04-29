import { supabase } from '@/lib/supabase';
import axios from 'axios';
import cheerio from 'cheerio';
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const response = await update()
  return new NextResponse(JSON.stringify(response), {
    status: 200,
  })
}

async function update() {
  const data = await fetch('https://www.cotodigital3.com.ar/sitios/cdigi/producto/-tomate-red-x-kg/_/A-00000684-00000684-200');
  const $ = cheerio.load(await data.text());
  const element = $('.atg_store_newPrice').first()
  const tomatoPrice = element.text().trim().replace(/[^0-9\.\,-]+/g,"")
  const timestamp = new Date().toISOString();

  await supabase.from('tomato_prices').insert([{ timestamp, price: parseFloat(tomatoPrice)}])

  return tomatoPrice
}
