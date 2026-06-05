Database Schema

Database

Supabase PostgreSQL

---

Table: empleados

Column| Type| Description
telefono| VARCHAR| Primary Key
nombre| TEXT| Employee Name
numero_empleado| VARCHAR| Unique Employee Number
activo| BOOLEAN| Active Status
creado_en| TIMESTAMP| Creation Date

Primary Key:

telefono

---

Table: menus

Column| Type
fecha| DATE
fija_a| TEXT
fija_b| TEXT
fija_c| TEXT
var_1| TEXT
var_2| TEXT
var_3| TEXT
creado_en| TIMESTAMP

Primary Key:

fecha

---

Table: pedidos

Column| Type
id| BIGSERIAL
fecha_menu| DATE
empleado_telefono| VARCHAR
opcion_id| VARCHAR
opcion_texto| TEXT
creado_en| TIMESTAMP

Primary Key:

id

Foreign Keys:

fecha_menu → menus.fecha

empleado_telefono → empleados.telefono

Constraint:

UNIQUE(fecha_menu, empleado_telefono)

---

Allowed Menu IDs

fija_a

fija_b

fija_c

var_1

var_2

var_3

These values must remain identical across:

- Database
- WhatsApp payloads
- Backend logic
- Reports