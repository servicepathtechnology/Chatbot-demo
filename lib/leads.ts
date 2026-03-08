import fs from 'fs';
import path from 'path';
import { Lead } from './types';

// Vercel only allows writing to /tmp in production
const IS_VERCEL = process.env.VERCEL === '1';
const DATA_DIR = IS_VERCEL ? '/tmp' : path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

export async function saveLead(lead: Lead) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let leads: Lead[] = [];
    if (fs.existsSync(LEADS_FILE)) {
      const fileData = fs.readFileSync(LEADS_FILE, 'utf8');
      if (fileData) {
        leads = JSON.parse(fileData);
      }
    }

    leads.push(lead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    return true;
  } catch (error) {
    console.error("Failed to save lead:", error);
    return false;
  }
}

export async function getLeads(): Promise<Lead[]> {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const fileData = fs.readFileSync(LEADS_FILE, 'utf8');
      if (fileData) {
        return JSON.parse(fileData);
      }
    }
  } catch (error) {
    console.error("Failed to read leads:", error);
  }
  return [];
}
