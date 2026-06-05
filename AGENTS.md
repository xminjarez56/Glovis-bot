AGENTS

Project Name:
Glovis-

Version:
2.0

Goal:
Automate meal ordering through WhatsApp Business.

Architecture:

WhatsApp Cloud API
→ Railway
→ Supabase PostgreSQL
→ GitHub Pages Admin Panel

Backend:
Node.js

Database:
Supabase PostgreSQL

Frontend:
HTML + JavaScript

Deployment:
Railway

Timezone:
America/Monterrey

Rules:

- Use JavaScript.
- Use Express.js.
- Use Supabase SDK.
- Use Luxon for date and time handling.
- Respect cutoff time of 23:00 local time.
- Never store secrets in repository.
- Environment variables must be used.
- All database access must go through services/supabase.js.
- All WhatsApp messaging must go through services/whatsapp.js.
- Maintain modular architecture.
- Generate production-ready code.
- Document all major features.

Database Tables:

empleados
menus
pedidos

Core Features:

- Employee validation
- Menu management
- WhatsApp interactive menu
- Order registration
- Order modification before cutoff
- Excel reporting
- Admin panel
- Broadcast messaging

Technology Stack:

Node.js
Express
Supabase
Railway
GitHub Pages
WhatsApp Cloud API
SheetJS