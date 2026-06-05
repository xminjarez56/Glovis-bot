# GLOVIS-BOT — PROJECT CONTEXT PACK

## Project Identity

Official Project Name:
glovis-bot

Repository:
https://github.com/xminjarez56/Glovis-bot

Purpose:
Automatización de pedidos para comedor industrial vía WhatsApp Business.

## Current Architecture

WhatsApp Cloud API
↓
Railway (Node.js + Express)
↓
Supabase (PostgreSQL)
↑
GitHub Pages (Admin Panel)

## Technology Stack

- Node.js
- Express
- Supabase
- PostgreSQL
- Railway
- GitHub
- GitHub Actions
- GitHub Pages
- WhatsApp Cloud API
- Luxon
- dotenv

Timezone:
America/Monterrey

## Supabase Schema

Tables:

empleados
menus
pedidos

### empleados

telefono (PK)
nombre
numero_empleado
activo
creado_en

### menus

fecha (PK)
fija_a
fija_b
fija_c
var_1
var_2
var_3
creado_en

### pedidos

id
fecha_menu
empleado_telefono
opcion_id
opcion_texto
creado_en

Constraint:
unico_pedido_por_dia

## GitHub Status

Repository Structure:

.github/
docs/
middleware/
routes/
services/
utils/

.env.example
.gitignore
AGENTS.md
CONTRIBUTING.md
DEVELOPMENT_RULES.md
README.md
index.js
package.json

## Issues

25 initial issues created.

Current issue:

Issue #26
Bootstrap Backend

Next planned issues:

#27 Connect Supabase Client
#28 Create Health Endpoint
#29 Implement Webhook Verification
#30 Connect Railway Deployment

## Naming Rules

Use only:

glovis-bot

Do not use:

Glovis-
comedor-bot
glovis-comedor-bot

## Current Progress

Documentation:
95%

Supabase:
Configured

GitHub:
Configured

Backend:
Bootstrap phase

Railway:
Pending

WhatsApp:
Pending

## Development Rules

1. Maintain architecture consistency.
2. Use Express.
3. Use Supabase as primary datastore.
4. No Firebase.
5. No Redis unless justified.
6. Use Luxon for timezone handling.
7. Timezone = America/Monterrey.
8. One order per employee per day.
9. Menu closes at 23:00 local time.
10. Use GitHub Issues as source of truth.

## Immediate Next Task

Complete Issue #26 audit.

Verify existence and contents of:

package.json
index.js
routes/webhook.js
services/supabase.js
services/whatsapp.js
services/menu.js
middleware/auth.js
middleware/validation.js
utils/timezone.js
utils/logger.js
reports/excel.js

Then implement:

Issue #27 Connect Supabase Client