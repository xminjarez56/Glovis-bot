Development Rules

General

- Use JavaScript ES Modules.
- Use Express.js.
- Use Supabase SDK.
- Use Luxon for all date operations.
- Respect timezone America/Monterrey.

Architecture

- routes contain HTTP endpoints.
- services contain business logic.
- database access must go through services/supabase.js.
- WhatsApp integration must go through services/whatsapp.js.

Database

- Never use hardcoded SQL in routes.
- Use Supabase queries.

Security

- Never commit secrets.
- Use environment variables.
- Validate all external input.

Code Quality

- Keep functions small.
- Use descriptive names.
- Add comments for business logic.

Deployment

- Railway is the production environment.
- GitHub is source of truth.