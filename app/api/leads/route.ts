import { NextResponse } from 'next/server';
import { saveLead } from '@/lib/leads';
import { Lead } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate basic requirements
    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      service_interest: data.service_interest || 'General Inquiry',
      source: data.source || 'chatbot',
      timestamp: new Date().toISOString(),
      conversation_snippet: data.conversation_snippet
    };

    const success = await saveLead(lead);

    if (success) {
      return NextResponse.json({ success: true, leadId: lead.id });
    } else {
      throw new Error('Failed to save to storage');
    }
  } catch (error) {
    console.error('Lead API Error:', error);
    return NextResponse.json({ error: 'Internal server error while saving lead' }, { status: 500 });
  }
}

export async function GET() {
  // In a real app we'd add auth here
  const { getLeads } = await import('@/lib/leads');
  const leads = await getLeads();
  return NextResponse.json(leads);
}
