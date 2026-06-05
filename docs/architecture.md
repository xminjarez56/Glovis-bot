Architecture

Overview

Glovis-

WhatsApp Cloud API
↓
Railway (Node.js)
↓
Supabase PostgreSQL
↑
GitHub Pages Admin Panel

Components

WhatsApp Cloud API

Receives and sends WhatsApp messages.

Railway

Hosts Node.js application.

Responsibilities:

- Webhook processing
- Employee validation
- Order processing
- Menu delivery
- Report generation

Supabase

Stores:

- empleados
- menus
- pedidos

GitHub Pages

Administration panel.

Functions:

- Menu management
- Employee management
- Real-time order monitoring
- Excel report download
- Broadcast menu sending

Timezone

America/Monterrey

Daily Cutoff

23:00 local time

Core Flow

Employee sends message

→ Validate employee

→ Load tomorrow menu

→ Send interactive list

→ Receive selection

→ Save order

→ Confirm registration