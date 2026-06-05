Product Requirements

Project

Comedor Industrial Bot

Objective

Automate meal ordering through WhatsApp Business.

---

Module 1 - Employee Management

The system must allow:

- Register employee
- Activate employee
- Deactivate employee
- Search employee
- Validate employee phone number

---

Module 2 - Menu Management

The system must allow:

- Create menu for a specific date
- Edit menu
- View menu
- Store 3 fixed options
- Store 3 variable options

Menu IDs:

- fija_a
- fija_b
- fija_c
- var_1
- var_2
- var_3

---

Module 3 - WhatsApp Interaction

The system must:

- Receive messages
- Validate employee
- Send menu list
- Receive menu selection
- Confirm order

---

Module 4 - Order Processing

The system must:

- Save order
- Allow modification before cutoff
- Prevent duplicate records
- Maintain order history

Cutoff Time:

23:00 America/Monterrey

---

Module 5 - Administration Panel

The panel must allow:

- Manage employees
- Manage menus
- View orders
- Export reports
- Send broadcast menu

Technology:

HTML
JavaScript
GitHub Pages

---

Module 6 - Reporting

Kitchen Report

- Total servings per dish
- Daily production summary

Administrative Report

- Service totals
- Employee detail
- Date range filters

Format:

XLSX

Library:

SheetJS

---

Module 7 - Security

The system must:

- Validate webhook requests
- Protect environment variables
- Restrict unauthorized access
- Validate all inputs

---

Module 8 - Infrastructure

Hosting:

Railway

Database:

Supabase

Messaging:

WhatsApp Cloud API

Timezone:

America/Monterrey