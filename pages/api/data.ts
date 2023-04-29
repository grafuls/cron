import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  
  let tomatoPrices: any[] = [];
  
  const { data, error } = await supabase.from('tomato_prices').select('*').order('timestamp', { ascending: false })
  if (error) {
    console.error(error)
  } else {
    tomatoPrices = data;
  }

  return new NextResponse(
    JSON.stringify(tomatoPrices[0]),
    {
      status: 200,
    }
  )
}
